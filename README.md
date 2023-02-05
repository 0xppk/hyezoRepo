# hyezoRepo

`Turborepo`에 기반하여 두 개의 파트로 구성되어 있습니다.

- [Storybook](https://63d347ebd5c9899045f00f1a-fwosjznqoj.chromatic.com/) 클릭 🧤
- Packages

## 핵심 구성들

- 🏎 [Turborepo](https://turbo.build/) — 모노레포를 쉽고 빠르게 구축하게 해주는 `vercel`의 빌드 시스템
- 🚀 [Next.js](https://nextjs.org/) — `React`의 강력한 프레임워크
- 🛠 [Tsup](https://tsup.egoist.dev/) — `esbuild`를 기반으로 한 타입스크립트 번들러
- 📖 [Storybook](https://storybook.js.org/) — UI 구현의 시각적 길라잡이
- 🎨 [Tailwind](https://tailwindcss.com/) — 거대한 생태계를 가진 `class`형 CSS 프레임워크

### 그 외에

- [TypeScript](https://www.typescriptlang.org/) 자바스크립트의 타입 체크 컴파일러
- [Zod](https://zod.dev/) 파이프 라인으로 이어지는 타입스크립트의 검증 도우미
- [Changesets](https://github.com/changesets/changesets) 버전 관리 매니저
- [Chromatic](https://www.chromatic.com/) 스토리북 발행
- [ESLint](https://eslint.org/) 코드 린트
- [Prettier](https://prettier.io) 코드 정렬

## 스토리북 그리고 패키지들

apps

- `docs`: [Next.js](https://nextjs.org/)에서의 사용을 전제로 작성된 스토리북 문서

---

packages

- `utils`: 리액트 커스텀 훅과 UI 컴퍼넌트 모음
- `tailwind-config-hyezo`: 모노레포 전반에 사용되는 `tailwind` 셋팅
- `eslint-config-hyezo`: 모노레포 전반에 사용되는 `eslint` 셋팅 (`eslint-config-next`, `eslint-config-prettier` 그리고 `eslint-config-tailwind` 플러그인 포함)
- `@hyezo/tsconfig`: 모노레포 전반에 사용되는 `tsconfig.json`

### NPM Package 발행

`utils`의 커스텀훅과 디자인 컴퍼넌트는 어디서든 이용할 수 있게 `NPM Package`로 발행했습니다.

- 📦 [hyezo](https://www.npmjs.com/package/hyezo?activeTab=explore)
- format: `esm, cjs` 형식 모두 지원
- treeshake: `import`시 사용되지 않는 변수(죽은 코드) 비활성화

#### 설치 및 사용방법

```bash
pnpm i hyezo
```

---

```ts
import { useInput } from "hyezo/hooks";
import { Button } from "hyezo/ui";
// or
import { Button } from "hyezo/ui/Button";
```

각각의 설명은 `JS-DOC`을 통해 확인할 수 있습니다.
