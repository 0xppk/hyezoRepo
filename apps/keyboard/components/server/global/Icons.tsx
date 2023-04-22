import {
  BsBookmark,
  BsChatDots,
  BsFillHeartFill,
  BsPeople,
  BsSend,
  BsStar,
} from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import {
  FiFeather,
  FiGithub,
  FiInfo,
  FiLogIn,
  FiLogOut,
  FiSearch,
  FiUsers,
} from "react-icons/fi";
import { GiPrayer } from "react-icons/gi";
import { GoArchive } from "react-icons/go";
import { HiTrash } from "react-icons/hi";
import { IoChatbubblesOutline, IoExitOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineKeyboardAlt } from "react-icons/md";
import {
  RiKakaoTalkFill,
  RiNotificationLine,
  RiNotificationOffLine,
  RiUserSettingsLine,
} from "react-icons/ri";
import { TfiBackLeft } from "react-icons/tfi";

const Icons = {
  home: IoHomeOutline,
  login: FiLogIn,
  logout: FiLogOut,
  github: FiGithub,
  discord: FaDiscord,
  kakao: RiKakaoTalkFill,
  like: BsFillHeartFill,
  watch: BsStar,
  notificationOn: RiNotificationLine,
  notificationOff: RiNotificationOffLine,
  user: FiUsers,
  setting: RiUserSettingsLine,
  search: FiSearch,
  post: FiFeather,
  remove: HiTrash,
  sell: MdOutlineKeyboardAlt,
  buy: GiPrayer,
  chat: IoChatbubblesOutline,
  chatroom: BsChatDots,
  note: GoArchive,
  userInfo: FiInfo,
  userList: BsPeople,
  bookmark: BsBookmark,
  exit: IoExitOutline,
  send: BsSend,
  back: TfiBackLeft,
};

export default Icons;
