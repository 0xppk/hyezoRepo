declare function useHistory(defaultValue: any, { capacity }?: {
    capacity?: number | undefined;
}): readonly [any, (v: typeof defaultValue) => void, {
    readonly history: any[];
    readonly cursor: number;
    readonly back: () => void;
    readonly go: (index: number) => void;
    readonly forward: () => void;
}];

export { useHistory as default };
