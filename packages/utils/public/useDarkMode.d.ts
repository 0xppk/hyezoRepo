import * as react from 'react';

/**
 * @example 컴퍼넌트 안에서 예시
 * const [darkMode, setDarkMode] = useDarkMode()
 *
 * return (
 *   <button onClick={()=> setDarkMode(prevDarkMode => !prevDarkMode)}>
 * 다크모드
 * </button>
 * )
 */
declare function useDarkMode(): readonly [boolean, react.Dispatch<react.SetStateAction<boolean | void | undefined>>];

export { useDarkMode as default };
