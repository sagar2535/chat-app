import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

interface IParams {
  conversationId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const { conversationId } = params;
    const currentUser = await getCurrentUser();
    if (!currentUser?.id) {
      return new NextResponse('UNAUTHORIZED', { status: 401 });
    }
    const existingConversations = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        users: true,
      },
    });

    if (!existingConversations) {
      return new NextResponse('Inavalid ID', { status: 400 });
    }
    const deletedConversations = await prisma.conversation.deleteMany({
      where: {
        id: conversationId,
        userIds: {
          hasSome: [currentUser.id],
        },
      },
    });
    return NextResponse.json(deletedConversations);
  } catch (error: any) {
    console.log(error, 'ERROR_CONVERSATION_DELETE');
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
