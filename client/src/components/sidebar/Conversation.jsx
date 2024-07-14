/* eslint-disable react/prop-types */
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/zustand.store";
import { PIIELOGOCROPPED } from "../../assets";
const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-green-600 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-green-800" : ""
        }
        
      `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.photopic ? conversation.photopic : PIIELOGOCROPPED} alt={conversation.name} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div>
            <p
              className={`font-bold  ${isSelected ? "text-white" : "text-black"}
              }`}
            >
              {conversation.name}
            </p>
          </div>
        </div>
      </div>
     <div>
      {!lastIdx && <div className="divider divider-neutral my-0 py-0 h-1" />}
      </div> 
    </>
  );
};

export default Conversation;
