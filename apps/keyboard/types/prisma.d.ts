type User = {
  id: string;
  name: string | null;
  email: string | null;
  nickname: string | null;
  emailVerified: Date | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
  role: Role;
};

type Post = {
  id: string;
  title: string;
  price: number;
  layout: string | null;
  color: string | null;
  content: string | null;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  category: Category;
  status: Status;
  brandName: string;
};

type Brand = {
  id: string;
  name: string;
  nation: string | null;
  createdAt: Date;
  updatedAt: Date;
  type: KeyboardBrandType;
  status: Status;
};

type ChatRoom = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

type ChatParticipant = {
  id: string;
  userId: string | null;
  chatRoomId: string;
  createdAt: Date;
  updatedAt: Date;
};

type Subscriptions = {
  id: string;
  endpoint: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

enum Status {
  ING = "ING",
  END = "END",
  PENDING = "PENDING",
}

enum Category {
  SELL = "SELL",
  BUY = "BUY",
}

enum Role {
  ADMIN = "ADMIN",
  STAFF = "STAFF",
  USER = "USER",
}

enum KeyboardBrandType {
  HOUSING = "HOUSING",
  KEYCAP = "KEYCAP",
  VENDOR = "VENDOR",
}

type ChatRooms = (ChatRoom & {
  chatParticipant: (ChatParticipant & {
    user: {
      image: string | null;
      nickname: string | null;
      id: string;
    } | null;
  })[];
})[];

type AllSellingData = (Post & {
  author: {
    image: string | null;
    nickname: string;
    id: string;
    posts: Post[] | null;
  };
})[];

type AllUsers = Pick<User, "id" | "nickname" | "image">[];
type AllBrandData = Pick<Brand, "id" | "name" | "type">[];
type AuthorsPost = User & {
  posts: Post[];
};

type ExitChatRoom = ChatParticipant & {
  user:
    | (User & {
        chatRooms: ChatParticipant[];
      })
    | null;
  chatroom: ChatRoom & {
    chatParticipant: ChatParticipant[];
  };
};
