import { z } from 'zod';

declare const InputPropsSchema: z.ZodObject<{
    submitAction: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodVoid>>;
    debounceTime: z.ZodOptional<z.ZodNumber>;
    placeholder: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    placeholder?: string | undefined;
    submitAction?: ((args_0: string, ...args_1: unknown[]) => void) | undefined;
    debounceTime?: number | undefined;
}, {
    placeholder?: string | undefined;
    submitAction?: ((args_0: string, ...args_1: unknown[]) => void) | undefined;
    debounceTime?: number | undefined;
}>;
type Props = z.infer<typeof InputPropsSchema>;
/**
 * A input component that is used to input text. It operates without any `form` tag.
 */
declare function InputSimple({ submitAction, debounceTime, placeholder, }: Props): JSX.Element;

export { InputSimple as default };
