import { OpeningWindow } from "~/components/client";
import { getCurrentUser } from "~/lib/session";
import MainPageGrid from "./MainPage";

export default async function Page() {
  const user = await getCurrentUser();

  return <>{!user?.nickname ? <OpeningWindow /> : <MainPageGrid />}</>;
}
