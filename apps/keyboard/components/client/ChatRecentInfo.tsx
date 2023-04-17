import { useLoadAuthorId, useLoadAuthorPostsInfo } from "~/hooks";
import { Text } from "@hyezo/ui";
import Image from "next/image";

export default function ChatRecentInfo() {
  const { authorId } = useLoadAuthorId();
  const { authorPost } = useLoadAuthorPostsInfo(authorId);

  return (
    <div className="flex h-full gap-20 px-24 py-10">
      <div className="grid place-items-end gap-5">
        <Image
          src={authorPost?.image || "/images/pingu.webp"}
          alt="profile"
          width={200}
          height={200}
          className="rounded-full"
        />
        <Text variant="lg/semibold" className="place-self-center self-start">
          {authorPost?.nickname}
        </Text>
      </div>

      <div className="flex w-full flex-col gap-5">
        <Text variant="lg/bold">최근 거래글</Text>
        <div className="flex flex-col gap-3 overflow-auto">
          {authorPost?.posts[0] ? (
            authorPost.posts.map(post => (
              <div key={post.id} className="flex items-center gap-3">
                <Text variant="sm/normal">{post.title}</Text>
                <Text
                  variant="sm/normal"
                  className="rounded-md bg-red-300 px-1 py-px italic"
                >
                  {post.category}
                </Text>
              </div>
            ))
          ) : (
            <Text variant="md/normal">작성한 글이 없습니다.</Text>
          )}
        </div>
      </div>
    </div>
  );
}
