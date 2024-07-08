import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {/* <Conversation />
      <Conversation />
      <Conversation />
      <Conversation /> */}

      {conversations.map((conversation, idx) => {
        // console.log(conversation.photopic);
        // console.log(conversation);
        return (
          <Conversation
            conversation={conversation}
            key={conversation._id}
            lastIdx={idx === conversation.length - 1}
          />
        );
      })}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
