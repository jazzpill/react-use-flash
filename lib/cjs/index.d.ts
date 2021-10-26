declare type Options = {
    duration?: number;
};
export declare const useFlash: <T>(initialValue: T, options?: Options | undefined) => [T, (props: T) => void];
export {};
