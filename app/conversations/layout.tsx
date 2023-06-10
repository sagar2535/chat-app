import getConversation from '../actions/getConversations';
import Sidebar from '../components/sidebar/Sidebar';
import ConversationList from './components/ConversationList';

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversation = await getConversation();

  return (
    <Sidebar>
      <div className='h-full'>
        <ConversationList initialItems={conversation} />
        {children}
      </div>
    </Sidebar>
  );
}
