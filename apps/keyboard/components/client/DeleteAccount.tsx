import { fetchPost } from "~/lib/utils";
import { Text } from "@hyezo/ui";

export default function DeleteAccount() {
  return (
    <form onSubmit={async () => await fetchPost("/api/deleteAccount")}>
      <button>
        <Text variant="xs/normal">탈퇴</Text>
      </button>
    </form>
  );
}
