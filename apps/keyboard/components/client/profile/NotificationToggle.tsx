import { useLocalStorage } from "@hyezo/hooks";
import { Text } from "@hyezo/ui";
import dynamic from "next/dynamic";
import { useServiceWorker } from "~/hooks";

const Toggle = dynamic(() => import("@hyezo/ui/Toggle"), { ssr: false });

export default function NotificationToggle() {
  const [pushAgree, setPushAgree] = useLocalStorage("subs", false);
  useServiceWorker(pushAgree);

  return (
    <div className="flex items-center gap-10">
      <Text variant="sm/normal">알림 활성화</Text>
      <Toggle enabled={pushAgree} setEnabled={setPushAgree} />
    </div>
  );
}
