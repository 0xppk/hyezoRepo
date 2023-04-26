import { Post, Brand, User, ChatRoom, ChatParticipant } from "@prisma/client";

type TItems = Post & {
  author: {
    posts: Post[];
    id: string;
    nickname: string | null;
    image: string | null;
  };
};

type TBrand = Pick<Brand, "id" | "name" | "type">;
type TUser = Pick<User, "id" | "nickname" | "image">;
type TAuthor = User & {
  posts: Post[];
};
type TChatRoom = ChatRoom & {
  chatParticipant: (ChatParticipant & {
    user: {
      image: string | null;
      nickname: string | null;
      id: string;
    } | null;
  })[];
};
type TPostStatus = "ING" | "HOLD" | "DONE";
