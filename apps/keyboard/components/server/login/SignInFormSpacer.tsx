import { Spacer, Text } from "@hyezo/ui";

export default function SignInFormSpacer() {
  return (
    <Spacer
      wrapperClassName="py-5"
      textClassName="bg-gray-900 text-white"
      borderClassName="border-white"
    >
      <Text variant="xs/normal">OR LOGIN WITH</Text>
    </Spacer>
  );
}
