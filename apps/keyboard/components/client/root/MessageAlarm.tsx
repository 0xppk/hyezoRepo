"use client";

import { FirebaseApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icons } from "~/components/server";

type MessageAlarmProps = {
  app: FirebaseApp;
};

type TMessagePayload = {
  title?: string;
  options: {
    body?: string;
    icon?: string;
    data: {
      link?: string;
    };
  };
};

export default function MessageAlarm({ app }: MessageAlarmProps) {
  const messaging = getMessaging(app);
  const [message, setMessage] = useState<TMessagePayload>();

  /** 메시지 수신 2초후 꺼지기 */
  useEffect(() => {
    if (message)
      setTimeout(() => {
        setMessage(undefined);
      }, 5000);
  }, [message]);

  onMessage(messaging, payload => {
    const { data } = payload;

    const notification = {
      title: data?.title,
      options: {
        body: data?.body,
        icon: data?.icon,
        data: {
          link: data?.link,
        },
      },
    };

    console.log("메시지 도착:", notification);
    setMessage(notification);
  });

  return (
    <Link href={"/chat"}>
      <div
        className={`fixed right-3 top-[13vh] flex h-12 w-20 items-center justify-center gap-7 rounded-lg bg-gray-900 text-white duration-500 ${
          message
            ? "trasnlate-y-0 z-20 skew-x-0 skew-y-0 opacity-100"
            : "-z-10 -translate-y-3 -skew-x-6 skew-y-12 opacity-0"
        }`}
      >
        <Icons.chat className="h-5 w-5" />
        <Image
          src={message?.options.icon || ""}
          alt="프로필"
          width={7}
          height={7}
          priority
        />
      </div>
    </Link>
  );
}
