import { Prisma } from "@prisma/client";
import { chatRoomPopulated } from "~/pages/api/createChatRoom";

/**
 * Redis Type
 */
type Message = {
  id: string;
  userId: string;
  message: string;
  created_at: number;
  username: string;
  profilePic: string;
};

/**
 * Prisma Type
 */
type ChatRooms = ChatRoomPopulated[];

type ChatRoomPopulated = Prisma.ChatRoomGetPayload<{
  include: typeof chatRoomPopulated;
}>;
