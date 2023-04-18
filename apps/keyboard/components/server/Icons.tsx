import {
  BsStar,
  BsPeople,
  BsChatDots,
  BsFillHeartFill,
  BsBookmark,
  BsSend,
} from "react-icons/bs";
import { RiNotificationLine, RiNotificationOffLine } from "react-icons/ri";
import { MdOutlineKeyboardAlt } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { GoArchive } from "react-icons/go";
import {
  FiFeather,
  FiInfo,
  FiGithub,
  FiLogIn,
  FiLogOut,
  FiSearch,
  FiUsers,
} from "react-icons/fi";
import { GiPrayer } from "react-icons/gi";
import { HiTrash } from "react-icons/hi";
import { IoChatbubblesOutline, IoHomeOutline, IoExitOutline } from "react-icons/io5";
import { RiKakaoTalkFill, RiUserSettingsLine } from "react-icons/ri";

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
};

export default Icons;
