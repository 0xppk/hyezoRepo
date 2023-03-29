import { SignInBtn } from "~/components";

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

/**
 * 하드코딩을 피할 경우 getProviders
 */
// type OAuthProvidersProps = {
//   providers: Awaited<ReturnType<typeof getProviders>>;
// };
