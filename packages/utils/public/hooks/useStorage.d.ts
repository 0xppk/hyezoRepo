import * as react from 'react';

declare function useLocalStorage<T>(key: string, defaultValue: T): readonly [T, react.Dispatch<react.SetStateAction<T>>];
declare function useSessionStorage<T>(key: string, defaultValue: T): readonly [T, react.Dispatch<react.SetStateAction<T>>];
declare function useStorage<T>(key: string, initialValue: T, storageObject: Storage): readonly [T, react.Dispatch<react.SetStateAction<T>>];

export { useLocalStorage, useSessionStorage, useStorage };
