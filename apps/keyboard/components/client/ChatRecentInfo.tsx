import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "~/lib/utils";

export default function ChatRecentInfo() {
  const searchParams = useSearchParams();
  const authorId = searchParams?.get("authorId");

  const { data: authorPost } = useSWR(
    `/api/getAuthorsPosts?authorId=${authorId}`,
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
