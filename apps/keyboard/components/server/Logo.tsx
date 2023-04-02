import Image, { type ImageProps } from "next/image";
import Link from "next/link";

type LogoProps = {
  href: string;
} & ImageProps;
export default function Logo({ href, ...props }: LogoProps) {
  return (
    <Link href={href}>
      <Image {...props} />
    </Link>
  );
}
