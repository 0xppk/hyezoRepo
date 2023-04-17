import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { RiNotificationLine, RiNotificationOffLine } from "react-icons/ri";
import { MdOutlineKeyboardAlt } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { GoArchive } from "react-icons/go";
import {
  FiFeather,
  FiGithub,
  FiLogIn,
  FiLogOut,
  FiSearch,
  FiSend,
  FiUsers,
} from "react-icons/fi";
import { GiPrayer } from "react-icons/gi";
import { HiTrash } from "react-icons/hi";
import { IoChatbubblesOutline, IoHomeOutline } from "react-icons/io5";
import { RiKakaoTalkFill, RiUserSettingsLine } from "react-icons/ri";

const Icons = {
  home: IoHomeOutline,
  login: FiLogIn,
  logout: FiLogOut,
  github: FiGithub,
  discord: FaDiscord,
  kakao: RiKakaoTalkFill,
  like: AiOutlineHeart,
  watch: BsStar,
  notificationOn: RiNotificationLine,
  notificationOff: RiNotificationOffLine,
  user: FiUsers,
  setting: RiUserSettingsLine,
  send: FiSend,
  search: FiSearch,
  post: FiFeather,
  remove: HiTrash,
  sell: MdOutlineKeyboardAlt,
  buy: GiPrayer,
  chat: IoChatbubblesOutline,
  note: GoArchive,
};

export default Icons;
