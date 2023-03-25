import { cn } from "@hyezo/utils";
import { FiHome, FiLogIn, FiLogOut, FiUsers, FiGithub } from "react-icons/fi";
import { type IconBaseProps } from "react-icons/lib";
import { MdOutlineHowToVote } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/Ri";
import { FcLike } from "react-icons/fc";

interface IconProps extends IconBaseProps {
  as:
    | "home"
    | "like"
    | "following"
    | "view"
    | "login"
    | "logout"
    | "github"
    | "discord"
    | "kakao";
}

export default function Icons({ className, as, ...props }: IconProps) {
  switch (as) {
    case "home":
      return <FiHome className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />;
    case "following":
      return <FiUsers className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />;
    case "login":
      return <FiLogIn className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />;
    case "logout":
      return <FiLogOut className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />;
    case "like":
      return <FcLike className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />;
    case "view":
      return (
        <MdOutlineHowToVote
          className={cn(`mr-2 inline h-4 w-4 ${className}`)}
          {...props}
        />
      );
    case "github":
      return <FiGithub className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />;
    case "discord":
      return <FaDiscord className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />;
    case "kakao":
      return (
        <RiKakaoTalkFill className={cn(`mr-2 inline h-4 w-4 ${className}`)} {...props} />
      );
    default:
      return <></>;
  }
}
