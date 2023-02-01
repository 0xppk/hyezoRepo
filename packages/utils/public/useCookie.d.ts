declare function useCookie(name: string, defaultValue: string): readonly [string | null, (newValue: string, options: {}) => void, () => void];

export { useCookie as default };
