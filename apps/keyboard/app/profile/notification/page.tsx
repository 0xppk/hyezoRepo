import { Text } from "@hyezo/ui";
import { NotificationToggle } from "~/components/client";

export default function Notification() {
  return (
    <>
      <Text variant="lg/semibold" className="mb-5">
        Notification
      </Text>
      <Text variant="xs/normal" className="mb-10">
        부재중 수신한 채팅 메시지를 알림으로 받습니다.
      </Text>
      <NotificationToggle />
    </>
  );
}
