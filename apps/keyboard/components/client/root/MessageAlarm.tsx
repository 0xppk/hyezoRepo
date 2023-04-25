"use client";

import { FirebaseApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
import Image from "next/image";
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
    <div
      className={`fixed right-5 top-[12vh] z-20 flex h-14 w-24 items-center justify-center rounded-lg bg-gray-900 text-white duration-500 ${
        message ? "trasnlate-y-0 skew-x-0 skew-y-0" : "-translate-y-3 skew-x-6 skew-y-6"
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
  );
}
