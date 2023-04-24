import { SignInBtn } from ".";

const oAuthProviders = ["github", "discord", "kakao"] as const;

export default function OAuthProviders() {
  return (
    <div className="flex justify-between gap-3">
      {oAuthProviders.map(provider => (
        <SignInBtn key={provider} provider={provider} />
      ))}
    </div>
  );
}
