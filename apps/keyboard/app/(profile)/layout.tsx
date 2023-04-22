import { Text } from "@hyezo/ui";
import { Metadata } from "next";
import { ProfileNavBar } from "~/components/server";
import { requireSignIn } from "~/lib/session";

export const metadata: Metadata = {
  title: "프로필",
  description: "a page for editing user configs",
};

export default async function ProfileLayout({ children }: LayoutProps) {
  await requireSignIn();

  return (
    <>
      <div className="col-span-1 flex h-[90vh] flex-col items-center gap-4 border-r border-gray-900 pt-10">
        <Text variant="xl/bold" className="mb-5">
          User Profile
        </Text>
        <ProfileNavBar />
      </div>
      <div className="col-span-2 p-20">{children}</div>
    </>
  );
}
