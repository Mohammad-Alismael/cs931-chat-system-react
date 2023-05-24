import api from "./index.js";

const createMessage = async (conversation_id, sender_id, text, created_at) => {
  try {
    const response = await api.post("/messages", {
      conversation_id,
      sender_id,
      text,
      created_at,
    });

    console.log("New message created:", response.data);
  } catch (error) {
    console.error("Error creating new message:", error);
  }
};

const getMessagesByConversationId = async (conversation_id) => {
  try {
    const response = await api.get("/messages", {
      params: {
        conversation_id,
      },
    });

    const messages = response.data;
    console.log("Messages:", messages);
  } catch (error) {
    console.error("Error retrieving messages:", error);
  }
};

export { createMessage, getMessagesByConversationId };
