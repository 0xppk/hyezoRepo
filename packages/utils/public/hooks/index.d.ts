import * as react from 'react';
import { MutableRefObject, RefObject, ChangeEventHandler, SetStateAction } from 'react';

/**
 * @param {Function} callback - A promise you gonna execute.
 * @param {Array} dependencies - Dependency array.
 */
declare function useAsync(callback: () => Promise<any>, dependencies: any[]): {
    error: undefined;
    loading: boolean;
    data: undefined;
};

/**
 * Making a value be deferred.
 * @param {function} callback - Hand over callback you want to execute.
 * @param {number} delay - Set a time when does callback to start.
 * @param {Array} dependencies - Tracker. A delay would be refreshed whenever this elements in Array is updated.
 * @example
 *
 */
declare function useDebounce(callback: (...args: any[]) => any, delay: number, dependencies: any[]): void;

declare function useOnMount(callback: () => void): void;

declare function useFetch(url: string, dependencies?: any[], options?: {}): {
    error: undefined;
    loading: boolean;
    data: undefined;
};

/**
 * @param {MutableRefObject} ref - React.useRef()
 * @param {string} rootMargin - `px` you want to put.
 * @example
 * const headerTwoRef = useRef()
 * const visible = useVisible(headerTwoRerf, "-50px")
 * @returns {boolean} `boolean`
 */
declare function useVisible(ref: MutableRefObject<Element>, rootMargin?: string): boolean;

/**
 * Check Rendering Count
 * @returns {number} Rendering Count
 */
declare function useRenderCount(): number;

/**
 * @param {function} callback - A function you gonna execute to.
 * @param {number} delay - A timer that trigger callback be executed.
 */
declare function useTimeout(callback: (...args: any[]) => any, delay: number): {
    reset: () => void;
    clear: () => void;
};

/**
 * Executed only when dependency be updated, not on mount.
 * @param {function} callback - Hand over callback that you want to execute.
 * @param {Array} dependencies - Tracker. A delay would be refreshed whenever this elements in Array is updated.
 */
declare function useUpdateEffect(callback: () => void, dependencies: any[]): void;

declare function useToggle(defaultValue?: boolean): [boolean, (value?: boolean) => void];

/**
 *
 */
declare function useArray(defaultValue: any[]): {
    array: any[];
    set: react.Dispatch<react.SetStateAction<any[]>>;
    push: (element: any) => void;
    filter: (callback: () => void) => void;
    update: (index: number, newElement: any) => void;
    remove: (index: number) => void;
    clear: () => void;
};

declare function usePrev(state: any): undefined;

declare function useHistory(defaultValue: any, { capacity }?: {
    capacity?: number | undefined;
}): readonly [any, (v: typeof defaultValue) => void, {
    readonly history: any[];
    readonly cursor: number;
    readonly back: () => void;
    readonly go: (index: number) => void;
    readonly forward: () => void;
}];

declare function useScript(url: string): {
    error: undefined;
    loading: boolean;
    data: undefined;
};

/**
 * @param {string} eventType An event action.
 * @param {Function} callback that you want to execute.
 * @param {typeof globalThis} [element=globalThis] An element where the event takes place.
 * @example
 * useEventListener("scroll", useMemo(
    () =>
      throttle(() => {
        const currentScrollY = globalThis.scrollY;
        if (currentScrollY > beforeScrollY.current && currentScrollY > 60) setNavShow(true);
        else setNavShow(false);
        beforeScrollY.current = currentScrollY;
      }, 300),
    [beforeScrollY],
  )
 */
declare function useEventListener(eventType: string, callback: (e: any) => void, element?: any): void;

declare function useGeolocation(options?: PositionOptions): {
    loading: boolean;
    error: null;
    data: {};
};

declare function useMediaQuery(mediaQuery: string): boolean;

/**
 * Checking a current size of window.
 * @example
 * const { width, height } = useWindowSize()
 * @returns {Object} {width, height}
 */
declare function useWindowSize(): {
    width: number;
    height: number;
};

/**
 * @param {Function} inspectFunc 검증식
 * @param {*} initialValue 검증대상
 */
declare function useStateValidation(inspectFunc: (state: any) => boolean, initialValue: any): readonly [any, (nextState: any) => void, boolean];

declare function useSize(ref: RefObject<any>): {};

declare function useEffectOnce(callback: () => void): void;

/**
 * Taking an input words into react state.
 * @param {Function} [callback] - (optional) A callback that is injected into the submitHandler.
 * @param {number} [debounceTime] - (default) The input state is updated after this input time has passed.
 * @example
 * const [value, changeHandler, submitHandler] = useInput()
 *
 * return (
 *   <>
 *     <input onChange={changeHandler} value={value} />
 *     <button type="submit" onClick={submitHandler}
 *   </>
 * )
 */
declare function useInput(submitAction?: (inputValue: string, ...args: unknown[]) => void, debounceTime?: number): readonly [string, ChangeEventHandler<HTMLInputElement>, () => void];

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

declare function useCookie(name: string, defaultValue: string): readonly [string | null, (newValue: string, options: {}) => void, () => void];

/**
 * @example (컴퍼넌트 안에서 사용 예시)
 * const [open, setOpen] = useState(false);
 * const modalRef = useRef<HtmlDivElement>(null)
 *
 * useClickOutside(modalRef, ()=>{
 *   if (open) setOpen(false)
 * })
 *
 * return (
 *   <div ref={modalRef}>
 *     <button onClick={() => { setOpen(false) }}>닫기</button>
 *   </div>
 * )
 */
declare function useClickOutside(ref: RefObject<HTMLDivElement>, callback: (e: MouseEvent) => void): void;

/**
 * @example
 * const ref = useRef()
 * const hovered = useHover(ref)
 * return (
 * <div ref={ref} style={{backgroundColor: hovered ? "blue" : "red"}} />
 * )
 */
declare function useHover(ref: RefObject<HTMLElement>): boolean;

/**
 * @example
 * const ref = useRef(null)
 * useLongPress(ref, () => alert("Long Press"))
 *
 * return <div ref={ref} style={{...style}}/>
 */
declare function useLongPress(ref: RefObject<HTMLElement>, callback: () => void, { delay }: {
    delay: number;
}): void;

declare function useDebugInformation(componentName: string, props: Record<string, any>): {
    count: number;
    changedProps: {};
    timeSinceLastRender: string;
};

/**
 * @param {string} key - The name.
 * @param defaultValue - The value.
 * @returns {Array} [value, setValue, remove]
 */
declare function useLocalStorage<T>(key: string, defaultValue: T): readonly [void | T | undefined, react.Dispatch<SetStateAction<void | T | undefined>>, () => void];
/**
 * @param {string} key - The name
 * @param defaultValue - The value
 * @returns {Array} [value, setValue, remove]
 */
declare function useSessionStorage<T>(key: string, defaultValue: T): readonly [void | T | undefined, react.Dispatch<SetStateAction<void | T | undefined>>, () => void];

export { useArray, useAsync, useCookie, useDarkMode, useDebounce, useDebugInformation, useEffectOnce, useEventListener, useFetch, useGeolocation, useHistory, useHover, useInput, useLocalStorage, useLongPress, useMediaQuery, useOnMount, useClickOutside as useOnlineStatus, usePrev, useRenderCount, useScript, useSessionStorage, useSize, useStateValidation, useTimeout, useToggle, useUpdateEffect, useVisible, useWindowSize };
