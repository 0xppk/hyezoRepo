import * as react from 'react';

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

export { useArray as default };
