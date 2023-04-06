"use client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "~/lib/utils";
import { AuthorsPost } from "~/types/prisma";

export default function ChatRecentInfo() {
  const searchParams = useSearchParams();
  const authorName = searchParams?.get("authorName");

  const { data: authorPost } = useSWR(
    `/api/getAuthorsPosts?authorName=${authorName}`,
    fetcher<AuthorsPost>,
  );

  return (
    <div>
      <div>{authorPost?.nickname}</div>
      <div>
        <p>최근 작성글</p>
        {authorPost?.posts.map(post => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>
  );
}
