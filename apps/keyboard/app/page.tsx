import { OpeningWindow } from "~/components/client";
import { getCurrentUser } from "~/lib/session";
import { Text } from "@hyezo/ui";

export default async function Page() {
  const user = await getCurrentUser();

  return (
    <>
      {!user?.nickname ? (
        <OpeningWindow />
      ) : (
        <div>
          <Text variant="2xl/bold">홈입니다</Text>
        </div>
      )}
    </>
  );
}
