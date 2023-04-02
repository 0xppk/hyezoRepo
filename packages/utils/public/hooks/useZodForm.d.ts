import * as react_hook_form from 'react-hook-form';
import { UseFormProps } from 'react-hook-form';
import { z } from 'zod';

interface UseZodFormProps<T extends z.ZodSchema<any>> extends UseFormProps<z.TypeOf<T>> {
    schema: z.TypeOf<T>;
}
declare function useZodForm<T extends z.ZodSchema<any>>({ schema, ...formConfig }: UseZodFormProps<T>): react_hook_form.UseFormReturn<z.TypeOf<T>, any>;

export { useZodForm as default };
