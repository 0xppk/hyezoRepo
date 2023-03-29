import { ChatRoom, ChatInput } from "~/components";
import { env } from "~/env.mjs";
import { fetcher } from "~/lib/utils";

export const revalidate = 0;

export default async function ChatList() {
  const messages = await fetcher<Message[]>(`${env.VERCEL_URL}/api/getMessages`);

  return (
    <div className="grid w-screen grid-cols-4 gap-5 overflow-hidden px-10">
      <div className="col-span-1 rounded-2xl bg-white"></div>
      <div className="col-span-3 rounded-2xl bg-white p-5">
        <ChatRoom initialMessages={messages} />
        <ChatInput />
      </div>
    </div>
  );
}
