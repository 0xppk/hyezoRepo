import { signIn } from "next-auth/react";
import { Form, Input, Text, SubmitButton } from "@hyezo/ui";

export default function SignInForm() {
  return (
    <Form
      onSubmit={({ email }) => {
        signIn("email", {
          email,
          redirect: true,
          callbackUrl: "/new-user",
        });
      }}
      className="items-center"
    >
      <Text variant="3xl/bold" color="white">
        Sign In
      </Text>
      <Text variant="xs/normal" className="mb-5 mt-2">
        Please login to use platform
      </Text>
      <Input name="email" label="email" fullWidth />
      <SubmitButton color="twitter" outline fullWidth>
        Sign In
      </SubmitButton>
    </Form>
  );
}
