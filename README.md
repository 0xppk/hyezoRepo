# hyezoRepo

`Turborepo`를 기반으로 한 모노레포. 현재는 두 개의 파트로 구성되어 있습니다.

#### 미리보기

- [Storybook](https://63d347ebd5c9899045f00f1a-fwosjznqoj.chromatic.com/) 🧤
- [Packages](https://www.npmjs.com/package/hyezo?activeTab=explore) 📦

### 핵심구성

- 🏎 [Turborepo](https://turbo.build/) — 모노레포를 쉽고 빠르게 구축하게 해주는 `vercel`의 빌드 시스템
- 🚀 [Next.js](https://nextjs.org/) — `React` 프레임워크
- 🛠 [Tsup](https://tsup.egoist.dev/) — `esbuild`를 기반으로 한 타입스크립트 번들러
- 📖 [Storybook](https://storybook.js.org/) — UI 컴퍼넌트 시각적 길라잡이
- 🎨 [Tailwind](https://tailwindcss.com/) — 거대한 생태계의 `class`형 CSS 프레임워크

### 그 외..

- [TypeScript](https://www.typescriptlang.org/) 자바스크립트 타입 컴파일러
- [Zod](https://zod.dev/) 파이프 라인으로 이어지는, 타입스크립트 검증(Validation) 도우미
- [Changesets](https://github.com/changesets/changesets) 버전 관리 매니저
- [Chromatic](https://www.chromatic.com/) 스토리북 발행
- [ESLint](https://eslint.org/) 코드 린트
- [Prettier](https://prettier.io) 코드 정렬

## 들어있는 것

apps/

- `docs`: [Next.js](https://nextjs.org/) 사용을 전제로 한 스토리북 문서집

packages/

- `utils`: 리액트 커스텀 훅과 UI 컴퍼넌트 모음
- `tailwind-config-hyezo`: 모노레포를 위한 `tailwind` 셋팅
- `eslint-config-hyezo`: 모노레포를 위한 `eslint` 셋팅
- `@hyezo/tsconfig`: 모노레포를 위한 `tsconfig.json` 셋팅

## NPM Package Config...

`utils`의 커스텀 훅과 디자인 컴퍼넌트가 포함

- path: 각각 하위폴더 `hooks`와 `ui`에 위치
- format: `esm, cjs` 형식 모두 지원 (+`d.ts`)
- treeshake: `import, export`시 사용되지 않는 변수(죽은 코드) 비활성화

### 설치 및 사용방법

```bash
pnpm i hyezo
```

```ts
import { useInput } from "hyezo/hooks";
import { Button } from "hyezo/ui";
// or
import { Button } from "hyezo/ui/Button";
```

자세한 설명은 `JS-DOC`을 통해 보완
