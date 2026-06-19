#!/usr/bin/env node
/**
 * scripts/deploy-gh-pages.mjs
 *
 * Build the Vite app and push the contents of `dist/` to the `gh-pages` branch.
 * Strategy: copy dist/ into a fresh sibling directory, init a git repo there
 * bound to the same origin, force-push the contents as the gh-pages branch.
 *
 * Usage:
 *   VITE_BASE="/iFactorLadi/" node scripts/deploy-gh-pages.mjs
 */

import { execSync } from 'node:child_process';
import { existsSync, rmSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve, dirname, relative } from 'node:path';
import { tmpdir } from 'node:os';
import { promises as fs } from 'node:fs';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(process.cwd());
const distDir = join(repoRoot, 'dist');
const base = process.env.VITE_BASE || '/iFactorLadi/';
const branch = 'gh-pages';
const publishDir = join(tmpdir(), `gh-publish-${Date.now()}`);

function run(cmd, opts = {}) {
  console.log(`\n$ ${cmd}`);
  return execSync(cmd, { stdio: 'inherit', ...opts });
}

function runOut(cmd, opts = {}) {
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...opts });
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  for (const entry of await fs.readdir(src, { withFileTypes: true })) {
    const s = join(src, entry.name);
    const d = join(dest, entry.name);
    if (entry.isDirectory()) await copyDir(s, d);
    else await fs.copyFile(s, d);
  }
}

(async () => {
  if (!existsSync(distDir)) {
    console.log('No dist/ folder found — running build first.');
    run(`npm run build:fast`, { env: { ...process.env, VITE_BASE: base } });
  }

  const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf8');
  if (!indexHtml.includes(base.replace(/\/$/, '') + '/assets/')) {
    console.warn(
      `\n[warn] Built index.html does not reference ${base}assets/. ` +
      'You may have built with the wrong VITE_BASE.'
    );
  }

  const remote = runOut('git remote get-url origin').trim();
  if (!remote) {
    console.error('\n[error] No git remote "origin" configured.');
    process.exit(1);
  }

  rmSync(publishDir, { recursive: true, force: true });
  mkdirSync(publishDir, { recursive: true });

  // Initialise a fresh, detached git repo pointing at the same origin.
  run(`git init -q`, { cwd: publishDir });
  run(`git checkout -q --orphan ${branch}`, { cwd: publishDir });
  run(`git remote add origin "${remote}"`, { cwd: publishDir });

  // Copy built assets in.
  await copyDir(distDir, publishDir);

  // .nojekyll prevents GitHub from ignoring files beginning with "_".
  run(`git add -A`, { cwd: publishDir });

  // Use a real author (the bot is fine for CI; locally it just uses the user).
  try {
    const userName = runOut('git config user.name', { cwd: repoRoot }).trim() || 'Deploy Bot';
    const userEmail = runOut('git config user.email', { cwd: repoRoot }).trim() || 'deploy@local';
    run(
      `git -c user.name="${userName}" -c user.email="${userEmail}" commit -q -m "Deploy dist to ${branch}" --allow-empty`,
      { cwd: publishDir }
    );
  } catch {
    run(
      `git -c user.name="Deploy Bot" -c user.email="deploy@local" commit -q -m "Deploy dist to ${branch}" --allow-empty`,
      { cwd: publishDir }
    );
  }

  run(`git push -f origin ${branch}`, { cwd: publishDir });
  console.log(`\n✅ Pushed to ${remote} (branch: ${branch})`);
  console.log(`   Site URL: https://${remote.replace(/^https?:\/\//, '').replace(/\.git$/, '').split('/')[0]}.github.io/${remote.split('/').pop().replace(/\.git$/, '')}/`);

  // Cleanup
  rmSync(publishDir, { recursive: true, force: true });
  console.log('\nDone.');
})().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
