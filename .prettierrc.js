module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  semi: true,
  tabWidth: 2,
  printWidth: 85,
  trailingComma: "all",
  bracketSameLine: false, // false: jsx에서  /> 를 줄바꿈으로 내림
  arrowParens: "avoid", // avoid: 화살표 함수 괄호 생략될 시 생략
};
