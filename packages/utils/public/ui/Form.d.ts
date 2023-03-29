import { ComponentProps } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

declare const InputSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    textarea: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodString>;
    select: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">]>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
    combo: z.ZodOptional<z.ZodString>;
    nickname: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    select?: string | number | Record<string, any> | (string | number)[] | undefined;
    textarea?: string | undefined;
    text?: string | undefined;
    url?: string | undefined;
    email?: string | undefined;
    combo?: string | undefined;
    password?: string | undefined;
    nickname?: string | undefined;
}, {
    select?: string | number | Record<string, any> | (string | number)[] | undefined;
    textarea?: string | undefined;
    text?: string | undefined;
    url?: string | undefined;
    email?: string | undefined;
    combo?: string | undefined;
    password?: string | undefined;
    nickname?: string | undefined;
}>;
type InputProps = z.infer<typeof InputSchema>;
type zodSubmitHandler = SubmitHandler<InputProps>;
interface FormProps extends Omit<ComponentProps<"fieldset">, "onSubmit"> {
    onSubmit: zodSubmitHandler;
}
/**
 * The form component is used to render a `form`. Given a `children` like input, select, textarea, etc, it will render a `form` element.
 * And also it requires `onSubmit` event handler that will be called when the form is submitted.
 * Validating a form is done by using `zod` schema & custom hook `useZodForm`.
 */
declare function Form({ onSubmit, className, ...props }: FormProps): JSX.Element;
interface FieldErrorProps {
    name?: string;
}
declare function FieldError({ name }: FieldErrorProps): JSX.Element | null;

export { FieldError, InputProps, Form as default, zodSubmitHandler };
