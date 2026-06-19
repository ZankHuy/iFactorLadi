#!/usr/bin/env node
/**
 * scripts/deploy-gh-pages.mjs
 *
 * Build the Vite app and push the contents of `dist/` to the `gh-pages` branch.
 * This is the "branch-based" GitHub Pages flow — it doesn't require GitHub
 * Actions, but it does require the GitHub CLI or plain git push credentials.
 *
 * Usage:
 *   VITE_BASE="/iFactorLadi/" node scripts/deploy-gh-pages.mjs
 *
 * After it runs, set GitHub Pages → Source → Branch: gh-pages, / (root).
 */

import { execSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';

const repoRoot = resolve(process.cwd());
const distDir = join(repoRoot, 'dist');
const base = process.env.VITE_BASE || '/iFactorLadi/';
const branch = 'gh-pages';

function run(cmd, opts = {}) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: 'inherit', ...opts });
}

if (!existsSync(distDir)) {
  console.log('No dist/ folder found — running build first.');
  run(`VITE_BASE="${base}" npm run build:fast`);
}

// Sanity check: dist must contain index.html with the right base path.
const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf8');
if (!indexHtml.includes(base.replace(/\/$/, '') + '/assets/')) {
  console.warn(
    `\n[warn] Built index.html does not reference ${base}assets/. ` +
    'You may have built with the wrong VITE_BASE.'
  );
}

// Create a temporary worktree to publish only the dist/ contents.
const worktree = join(tmpdir(), `gh-pages-${Date.now()}`);
const remote = (() => {
  try {
    return execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
})();

try {
  run(`git worktree add --detach ${worktree} HEAD`);
  run(`git branch -D ${branch} 2>/dev/null || true`, { stdio: 'ignore' });

  // Empty out the worktree index, then copy dist/* in.
  process.chdir(worktree);
  run('git rm -rf . || true', { stdio: 'ignore' });

  // Copy dist contents into the worktree using Node (cross-platform).
  await import('node:fs/promises').then(async (fs) => {
    async function copyDir(src, dest) {
      await fs.mkdir(dest, { recursive: true });
      for (const entry of await fs.readdir(src, { withFileTypes: true })) {
        const s = join(src, entry.name);
        const d = join(dest, entry.name);
        if (entry.isDirectory()) await copyDir(s, d);
        else await fs.copyFile(s, d);
      }
    }
    await copyDir(distDir, worktree);
  });

  // Add a tiny .nojekyll so GitHub Pages won't ignore files starting with "_".
  run('touch .nojekyll');

  run('git add -A');
  run(`git -c user.name="github-actions[bot]" -c user.email="github-actions[bot]@users.noreply.github.com" commit -m "Deploy dist to ${branch}" --allow-empty`);

  // Force push the gh-pages branch.
  if (remote) {
    run(`git push origin HEAD:${branch} --force`);
    console.log(`\n✅ Pushed to ${remote} (branch: ${branch})`);
  } else {
    console.log('\n[info] No git remote "origin" — skipping push. Add one and rerun.');
  }
} finally {
  process.chdir(repoRoot);
  run(`git worktree remove --force ${worktree} 2>/dev/null || true`, { stdio: 'ignore' });
  run(`git branch -D ${branch} 2>/dev/null || true`, { stdio: 'ignore' });
  console.log('\nDone.');
}
