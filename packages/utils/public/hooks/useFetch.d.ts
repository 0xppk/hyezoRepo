declare function useFetch(url: string, dependencies?: any[], options?: {}): {
    error: undefined;
    loading: boolean;
    data: undefined;
};

export { useFetch as default };
