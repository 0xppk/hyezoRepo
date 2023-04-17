import { useSearchParams } from "next/navigation";

/** 
 * 상대방 chatParticipantId가 아니라 userId
 */
export default function useLoadAuthorId() {
  const searchParams = useSearchParams();
  const authorId = searchParams?.get("authorId");

  return { authorId };
}
