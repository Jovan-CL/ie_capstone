import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
  currentProfileToEdit: null,
  setCurrentProfileToEdit: (currentProfileToEdit) =>
    set({ currentProfileToEdit }),
}));

export default useConversation;
