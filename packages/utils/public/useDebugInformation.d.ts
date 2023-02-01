declare function useDebugInformation(componentName: string, props: {
    [key: string]: any;
}): {
    count: number;
    changedProps: {};
    timeSinceLastRender: string;
};

export { useDebugInformation as default };
