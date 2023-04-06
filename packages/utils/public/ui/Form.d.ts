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
    title: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    layout: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    color: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    message: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    select2: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">]>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
    select3: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">]>, z.ZodRecord<z.ZodString, z.ZodAny>]>>;
}, "strip", z.ZodTypeAny, {
    email?: string | undefined;
    password?: string | undefined;
    url?: string | undefined;
    textarea?: string | undefined;
    text?: string | undefined;
    select?: string | number | (string | number)[] | Record<string, any> | undefined;
    combo?: string | undefined;
    nickname?: string | undefined;
    title?: string | undefined;
    price?: number | undefined;
    layout?: string | null | undefined;
    color?: string | null | undefined;
    message?: string | null | undefined;
    select2?: string | number | (string | number)[] | Record<string, any> | undefined;
    select3?: string | number | (string | number)[] | Record<string, any> | undefined;
}, {
    email?: string | undefined;
    password?: string | undefined;
    url?: string | undefined;
    textarea?: string | undefined;
    text?: string | undefined;
    select?: string | number | (string | number)[] | Record<string, any> | undefined;
    combo?: string | undefined;
    nickname?: string | undefined;
    title?: string | undefined;
    price?: number | undefined;
    layout?: string | null | undefined;
    color?: string | null | undefined;
    message?: string | null | undefined;
    select2?: string | number | (string | number)[] | Record<string, any> | undefined;
    select3?: string | number | (string | number)[] | Record<string, any> | undefined;
}>;
type InputNameProps = z.infer<typeof InputSchema>;
type zodSubmitHandler = SubmitHandler<InputNameProps>;
interface FormProps extends Omit<ComponentProps<"fieldset">, "onSubmit"> {
    onSubmit: zodSubmitHandler;
}
/**
 * `zod`를 결합한 `react-hook-form`.
 */
declare function Form({ onSubmit, className, ...props }: FormProps): JSX.Element;
interface FieldErrorProps {
    name?: string;
}
declare function FieldError({ name }: FieldErrorProps): JSX.Element | null;

export { FieldError, InputNameProps, Form as default, zodSubmitHandler };
