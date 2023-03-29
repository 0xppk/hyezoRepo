import { Form, Input, SubmitButton, Text, zodSubmitHandler } from "@hyezo/ui";
import { useRouter } from "next/navigation";
import { fetchPost } from "~/lib/utils";

export default function CreateNicknameForm() {
  const router = useRouter();

  const onSubmit: zodSubmitHandler = async ({ nickname }) => {
    await fetchPost("/api/updateNickname", { body: JSON.stringify(nickname) });
    router.push("/");
  };

  return (
    <Form onSubmit={onSubmit} className="items-center">
      <Text variant="3xl/bold" color="white">
        Create Nickname
      </Text>
      <Text variant="xs/normal" className="mb-5 mt-2">
        사용하실 닉네임을 지어주세요
      </Text>
      <Input type="nickname" label="nickname" fullWidth />
      <SubmitButton color="twitter" outline fullWidth>
        Save
      </SubmitButton>
    </Form>
  );
}
