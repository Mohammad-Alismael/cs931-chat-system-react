// Create a new chat
import api from "./index.js";

const createChat = async (participants) => {
    try {
        const response = await api.post('/chats', {
            participants
        });

        const newChat = response.data;
        console.log('New chat created:', newChat);
        return newChat
    } catch (error) {
        console.error('Error creating chat:', error);
    }
};

const getChatsByUserId = async (user_id) => {
    try {
        const response = await api.get('/chats', {
            params: {
                user_id
            }
        });

        const chats = response.data;
        console.log('Chats:', chats);
    } catch (error) {
        console.error('Error retrieving chats:', error);
    }
};

const fetchChatsByUserId = async (userId) => {
    try {
        const response = await api.get('/chats', {
            params: {
                user_id: userId
            }
        });
        // console.log('Chats:', chats);
        return response.data;
    } catch (error) {
        console.error('Error retrieving chats:', error);
        throw error;
    }
};
async function fetchChatsByChatIdAndUserId(chat_id, user_id) {
    try {
        const response = await api.get(`/chats/${chat_id}/${user_id}`);
        const chats = response.data;
        console.log(chats);
        // Process the retrieved chat data
        return chats;
    } catch (error) {
        console.error("Error retrieving chats:", error);
        throw error;
    }
}




export {createChat,getChatsByUserId,fetchChatsByUserId,fetchChatsByChatIdAndUserId}