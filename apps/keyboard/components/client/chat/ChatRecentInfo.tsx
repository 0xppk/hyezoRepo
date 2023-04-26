import { Text } from "@hyezo/ui";
import Image from "next/image";
import { useLoadAuthorId, useLoadAuthorPostsInfo } from "~/hooks";

export default function ChatRecentInfo() {
  const { authorId } = useLoadAuthorId();
  const { authorPost } = useLoadAuthorPostsInfo(authorId);

  return (
    <div className="flex h-full flex-col items-center gap-10 overflow-y-auto p-10 lg:flex-row lg:items-stretch lg:gap-20 lg:px-24 lg:py-10">
      <div className="grid place-items-end gap-5">
        <Image
          src={authorPost?.image || "/images/pingu.webp"}
          alt="profile"
          width={200}
          height={200}
          className="aspect-1 rounded-full"
        />
        <Text variant="md/normal" className="place-self-center self-start">
          {authorPost?.nickname || "탈퇴한 회원입니다"}
        </Text>
      </div>

      <div className="flex w-full flex-col gap-5">
        <Text variant="lg/semibold">Recent posts</Text>
        <div className="flex flex-col gap-3 overflow-y-auto">
          {authorPost?.posts[0] ? (
            authorPost.posts.map(post => (
              <div key={post.id} className="flex items-center gap-3">
                <Text variant="sm/normal">
                  {post.brandName.toUpperCase()} · {post.title}
                </Text>
                <Text
                  variant="xs/light"
                  className={`${
                    post.category === "SELL" ? "text-orange-500" : "text-twitter-500"
                  }`}
                >
                  {post.category === "SELL" ? "판매" : "구매"}
                </Text>
              </div>
            ))
          ) : (
            <Text variant="sm/normal">작성된 게시글이 없습니다.</Text>
          )}
        </div>
      </div>
    </div>
  );
}
