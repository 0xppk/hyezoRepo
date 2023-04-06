import { Prisma, Post, Brand, User } from "@prisma/client";
import { chatRoomPopulated } from "~/pages/api/createChatRoom";

type ChatRooms = ChatRoomPopulated[];

type ChatRoomPopulated = Prisma.ChatRoomGetPayload<{
  include: typeof chatRoomPopulated;
}>;

type AllSellingData = (Post & {
  author: {
    image: string | null;
    nickname: string;
    id: string;
    posts: Post[] | null;
  };
})[];

type AllBrandData = Pick<Brand, "id" | "name" | "type">[];
type AuthorsPost = User & {
  posts: Post[];
};
