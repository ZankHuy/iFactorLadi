# ONE SALE COMPANY — iFactor Academy

Landing page React + TypeScript + Vite + Tailwind v4 cho chương trình đào tạo **ONE SALE COMPANY** của iFactor Academy & IFTV.

## Tech Stack

- **React 19** + **TypeScript** (strict)
- **Vite 6** (build & dev server)
- **Tailwind CSS v4** (qua `@tailwindcss/vite`)
- **Lucide React** (icons)
- **Motion** (animation cho carousel `HowItWorks`)

## Cấu trúc thư mục

```
src/
├── App.tsx                  # Root component
├── main.tsx                 # Entry + SPA redirect handler
├── index.css                # Tailwind v4 + theme tokens
├── vite-env.d.ts            # Type declarations cho assets
├── types.ts                 # Domain types + dữ liệu tĩnh
├── assets/images/           # Ảnh coaches / testimonials / logo
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── StrategySection.tsx
    ├── HowItWorks.tsx
    ├── WhatYouLearn.tsx
    ├── Coaches.tsx
    ├── PivotIncludes.tsx
    ├── AgentTrust.tsx
    ├── PricingSection.tsx
    ├── FAQ.tsx
    ├── Footer.tsx
    └── FloatingContact.tsx
```

## Chạy local

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build production

```bash
# Build cho GitHub Pages (repo path = /iFactorLadi/)
VITE_BASE="/iFactorLadi/" npm run build

# Build thường (root path /)
npm run build
```

Kết quả build nằm trong thư mục `dist/`.

## Deploy lên GitHub Pages

Repo hiện tại đã cấu hình GitHub Actions workflow tại `.github/workflows/deploy.yml`:

1. Push code lên branch `main`.
2. Workflow tự động build với `VITE_BASE="/iFactorLadi/"` rồi upload artifact lên GitHub Pages.
3. Vào **Settings → Pages** đảm bảo Source = **GitHub Actions**.

### Nếu repo đổi tên

Sửa cả 2 chỗ:

- `VITE_BASE` trong `.github/workflows/deploy.yml`
- Hằng `repoBase` trong `vite.config.ts`

### Nếu muốn deploy thủ công

Vào **Settings → Pages → Source** chọn **"GitHub Actions"** (khuyến nghị) thay vì "Deploy from a branch". Workflow đã có sẵn — chỉ cần đẩy code.

## Lint / Type-check

```bash
npm run lint         # tsc --noEmit
```

## Tại sao web trắng trước đây?

Triệu chứng "toàn bộ web trắng phớ" sau khi deploy từ branch là do:

1. Khi chọn **Deploy from a branch → main / root**, GitHub Pages phục vụ nguyên source code (HTML + `.tsx` + ảnh) chứ không phải bundle đã build.
2. File `index.html` ở root trỏ tới `/src/main.tsx`, nhưng GitHub Pages không biên dịch TSX, không có Vite runtime, nên không có JS nào mount vào `#root`.

**Cách fix đã áp dụng:**

- Cấu hình `base` trong `vite.config.ts` (kèm biến `VITE_BASE`) để asset paths khớp với repo path trên GitHub Pages.
- Thêm `.github/workflows/deploy.yml` để build & deploy tự động qua GitHub Actions.
- Bổ sung `public/404.html` + SPA redirect trong `main.tsx` để xử lý route sâu.
- Nâng cấp `index.html` (meta description, Open Graph, theme-color).
