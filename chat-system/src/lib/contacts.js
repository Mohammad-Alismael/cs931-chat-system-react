import api from "./index.js";

const getContacts = async (uid) => {
    try {
        const response = await api.get(`/contacts/${uid}`)
        // console.log(response.data)
        return response.data
    }catch (error) {
        console.error('Error retrieving chats:', error);
        throw error;
    }


}

export {getContacts}