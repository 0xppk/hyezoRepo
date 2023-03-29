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
          <p>홈입니다</p>
        </div>
      )}
    </>
  );
}
