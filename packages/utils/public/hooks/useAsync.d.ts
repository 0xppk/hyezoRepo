/**
 * @param {Function} callback - A promise you gonna execute.
 * @param {Array} dependencies - Dependency array.
 */
declare function useAsync(callback: () => Promise<any>, dependencies: any[]): {
    error: undefined;
    loading: boolean;
    data: undefined;
};

export { useAsync as default };
