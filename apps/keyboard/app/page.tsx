import { Text } from "@hyezo/ui";
import { OpeningWindow } from "~/components/";
import { getCurrentUser } from "~/lib/session";

export default async function Page() {
  const user = await getCurrentUser();

  return (
    <>
      {!user?.nickname ? (
        <OpeningWindow />
      ) : (
        <div>
          <Text variant="3xl/bold">홈입니다</Text>
        </div>
      )}
    </>
  );
}
