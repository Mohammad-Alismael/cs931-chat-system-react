// Create a friend request
import api from "./index.js";

const createFriendRequest = async (sender_id, recipient_id) => {
  try {
    const response = await api.post("/friends/request", {
      sender_id,
      recipient_id,
    });

    const { message, friendRequest } = response.data;
    console.log("Friend request created:", message);
    return friendRequest
  } catch (error) {
    console.error("Error creating friend request:", error);
  }
};
const deleteFriendRequest = async (requestId) => {
  try {
    const response = await api.delete(`/friends/request/${requestId}`);
    console.log("Friend request deleted:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting friend request:", error);
  }
};


// Accept a friend request
const acceptFriendRequest = async (id) => {
  try {
    const response = await api.put("/friends/request/accept", {
      id,
    });

    const { message, friendRequest } = response.data;
    console.log("Friend request accepted:", message);
    console.log("Friend request ID:", friendRequest.id);
    return friendRequest
  } catch (error) {
    console.error("Error accepting friend request:", error);
  }
};

// Reject a friend request
const rejectFriendRequest = async (id) => {
  try {
    const response = await api.put("/friends/request/reject", {
      id,
    });

    const { message, id: friendRequestId } = response.data;
    console.log("Friend request rejected:", message);
    console.log("Friend request ID:", friendRequestId);
  } catch (error) {
    console.error("Error rejecting friend request:", error);
  }
};

// Get friend requests by user_id
const getFriendRequestsByUserId = async (user_id, status, signal) => {
  try {
    const response = await api.get("/friends/request", {
      // signal,
      params: {
        user_id,
        status,
      },
    });

    const friendRequests = response.data;
    console.log("Friend requests:", friendRequests);
    return friendRequests;
  } catch (error) {
    console.error("Error retrieving friend requests:", error);
  }
};

const fetchAcceptedFriendRequests = async (user_id) => {
  try {
    const response = await api.get("/friends/request/accepted", {
      params: {
        user_id,
      },
    });

    const { requests } = response.data;
    console.log("Accepted friend requests:", requests);
    return requests;
  } catch (error) {
    console.error("Error retrieving accepted friend requests:", error);
  }
};

export {
  getFriendRequestsByUserId,
  fetchAcceptedFriendRequests,
  rejectFriendRequest,
  acceptFriendRequest,
  createFriendRequest,
  deleteFriendRequest
};
