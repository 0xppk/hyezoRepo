import { Metadata } from "next";
import { ProfileTabBarOnMobile } from "~/components/client";
import { ProfileNavBar } from "~/components/server";
import { requireSignIn } from "~/lib/session";

export const metadata: Metadata = {
  title: "Profile",
  description: "a page for editing user configs",
};

export default async function ProfileLayout({ children }: LayoutProps) {
  await requireSignIn();

  return (
    <>
      <ProfileTabBarOnMobile />
      <div className="min-w-full p-14 lg:col-span-2 lg:border-r lg:border-gray-900 lg:p-20">
        {children}
      </div>
      <ProfileNavBar />
    </>
  );
}
