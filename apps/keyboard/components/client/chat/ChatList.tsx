import { useRef } from "react";
import {
  useFocusToLatestMessage,
  useLoadMessages,
  useUpdateNowSeeing,
  useUserSession,
} from "~/hooks";

type ChatRoomProps = {
  chatRoomId: string;
};

export default function ChatList({ chatRoomId }: ChatRoomProps) {
  const user = useUserSession();
  const { messages } = useLoadMessages(chatRoomId);
  const messageBoxRef = useRef<HTMLDivElement>(null);

  useFocusToLatestMessage(messageBoxRef, [messages]);
  useUpdateNowSeeing(chatRoomId);

  return (
    <div className="flex h-full flex-col gap-3 overflow-y-scroll" ref={messageBoxRef}>
      {messages?.map((m, i) => {
        const messageByMe = user?.id === m.userId;
        const currentDate = new Date(m.created_at),
          prevDate = new Date(messages[i - 1]?.created_at),
          showDate = !prevDate || currentDate.getDate() !== prevDate.getDate();

        return (
          <div key={m.id}>
            {showDate && (
              <time className="grid w-full place-items-center pb-3 pt-7">
                {dateIndicator.format(currentDate)}
              </time>
            )}
            <div
              className={`flex items-center gap-3 ${
                messageByMe ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                key={m.id}
                className={`flex max-w-xs items-center rounded-2xl p-2 py-1 sm:max-w-sm md:max-w-md lg:max-w-lg ${
                  messageByMe
                    ? "bg-twitter-500 flex-row-reverse"
                    : "bg-smoke-500 flex-row text-black"
                }`}
              >
                {/* {!messageByMe && (
                  <Image
                    className="mx-2 rounded-full"
                    width={40}
                    height={40}
                    src={m.profilePic}
                    alt={m.username}
                  />
                )}
                {!messageByMe && <p className="min-w-[2rem]">{m.username}</p>} */}
                <p className="overflow-hidden text-ellipsis p-2">{m.message}</p>
              </div>
              <time className="text-[12px] text-gray-400">
                {timeIndicator.format(new Date(m.created_at))}
              </time>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const dateIndicator = new Intl.DateTimeFormat("ko-KR", {
  dateStyle: "full",
});
const timeIndicator = new Intl.DateTimeFormat("ko-KR", {
  timeStyle: "short",
});
