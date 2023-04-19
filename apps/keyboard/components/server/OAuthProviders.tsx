import { SignInBtn } from "~/components/server";

const oAuthProviders = ["github", "discord", "kakao"] as const;

export default function OAuthProviders() {
  return (
    <div className="flex justify-between gap-3">
      {oAuthProviders.map(p => {
        return <SignInBtn key={p} provider={p} />;
      })}
    </div>
  );
}
