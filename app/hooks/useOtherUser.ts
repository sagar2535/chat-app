import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

import { FullConversationType } from '@/types';
import { User } from '@prisma/client';

const useOtherUser = (
  conversation: FullConversationType | { users: User[] }
) => {
  const session = useSession();

  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;

    const otherUserEmail = conversation.users.filter(
      (user) => user.email !== currentUserEmail
    );
    return otherUserEmail[0];
  }, [session?.data?.user?.email, conversation.users]);
  return otherUser;
};
export default useOtherUser;
