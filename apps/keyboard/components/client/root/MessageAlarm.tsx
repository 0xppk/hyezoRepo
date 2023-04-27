"use client";

import { Text } from "@hyezo/ui";
import { FirebaseApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type MessageAlarmProps = {
  app: FirebaseApp;
};

type TMessagePayload = {
  title: string;
  options: {
    body: string;
    icon: string;
    data: {
      link: string;
    };
  };
};

export default function MessageAlarm({ app }: MessageAlarmProps) {
  const messaging = getMessaging(app);
  const [message, setMessage] = useState<TMessagePayload>();

  /** 메시지 수신 7초후 꺼지기 */
  useEffect(() => {
    if (message)
      setTimeout(() => {
        setMessage(undefined);
      }, 7000);
  }, [message]);

  onMessage(messaging, payload => {
    const { data } = payload;
    if (!data) return;

    const notification = {
      title: data.title,
      options: {
        body: data.body,
        icon: data.icon,
        data: {
          link: data.link,
        },
      },
    };

    setMessage(notification);
  });

  return (
    <Link href={message?.options.data.link || "/chat"}>
      <div
        className={`bg-smoke-600 fixed right-3 top-[13vh] flex h-16 w-64 items-center gap-6 rounded-3xl text-black shadow-lg drop-shadow-xl backdrop-blur-lg duration-500 ${
          message
            ? "trasnlate-y-0 pointer-events-auto z-20 skew-x-0 skew-y-0 opacity-100"
            : "pointer-events-none -z-10 -translate-y-3 -skew-x-6 skew-y-12 opacity-0"
        }`}
      >
        {message && (
          <>
            <Image
              src={message.options.icon}
              alt="프로필"
              width={30}
              height={30}
              priority
              className="aspect-1 grow-0 rounded-full"
            />
            <div className="flex grow flex-col gap-3">
              <Text variant="xs/bold">{message.title}</Text>
              <Text variant="xs/light" className="line-clamp-2 truncate">
                {message.options.body}
              </Text>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
