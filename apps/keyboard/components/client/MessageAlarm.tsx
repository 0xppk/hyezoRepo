"use client";

import { FirebaseApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
import Image from "next/image";
import { useEffect, useState } from "react";

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
      }, 2000);
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
    <>
      {message && (
        <div className="bg-smoke-500 fixed right-5 top-10 z-20 flex h-10 w-20 rounded-xl">
          <div className="flex flex-col justify-center gap-2">
            <div>{message.title}</div>
            <div>{message.options.body}</div>
          </div>
          <Image
            src={message.options.icon || ""}
            alt="프로필"
            width={7}
            height={7}
            priority
          />
        </div>
      )}
    </>
  );
}
