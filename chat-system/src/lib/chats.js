// Create a new chat
import api from "./index.js";

const createChat = async (participants) => {
    try {
        const response = await api.post('http://localhost:3000/chats', {
            participants
        });

        const newChat = response.data;
        console.log('New chat created:', newChat);
    } catch (error) {
        console.error('Error creating chat:', error);
    }
};

const getChatsByUserId = async (user_id) => {
    try {
        const response = await api.get('http://localhost:3000/chats', {
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

export {createChat,getChatsByUserId}