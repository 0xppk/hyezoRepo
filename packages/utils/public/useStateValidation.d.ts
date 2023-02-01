/**
 * @param {Function} inspectFunc 검증식
 * @param {*} initialValue 검증대상
 */
declare function useStateValidation(inspectFunc: (state: any) => boolean, initialValue: any): readonly [any, (nextState: any) => void, boolean];

export { useStateValidation as default };
