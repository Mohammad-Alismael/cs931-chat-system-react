import jsonServer from "json-server";
const { create, bodyParser, defaults } = jsonServer;

const server = create();
const router = jsonServer.router("db.json");
const middlewares = defaults();

server.use(bodyParser);
server.use(middlewares);

// Custom route for login
server.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });
  const user = router.db.get("users").find({ email, password }).value();

  if (user) {
    res.json({ message: "Login successful", uid: user.id });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// Custom route for sign up
server.post("/signup", (req, res) => {
  const { displayName, email, password, description } = req.body;
  const existingUser = router.db.get("users").find({ email }).value();

  if (existingUser) {
    return res.status(400).json({ error: "Username already exists" });
  } else {
    const newUser = {
      id: Date.now(),
      displayName,
      email,
      password,
      description,
    };
    router.db.get("users").push(newUser).write();
    return res
      .status(200)
      .json({ message: "Sign up successful", uid: newUser.id });
  }
});

server.post("/friends/request", (req, res) => {
  const { sender_id, recipient_id } = req.body;
  console.log({ sender_id, recipient_id });

  const newFriendRequest = {
    id: Date.now(),
    sender_id: parseInt(sender_id),
    recipient_id,
    status: "pending",
    created_at: new Date().toISOString(), // Add the current date and time as the value for created_at
  };

  router.db.get("friendRequests").push(newFriendRequest).write();
  const recipient = router.db.get("users").find({ id: recipient_id }).value();
  res.json({
    message: "Friend request created",
    friendRequest: {
      id: newFriendRequest.id,
      recipient,
      status: newFriendRequest.status,
    },
  });
});

server.delete("/friends/request/:id", (req, res) => {
  const requestId = parseInt(req.params.id);

  const friendRequest = router.db
    .get("friendRequests")
    .find({ id: requestId })
    .value();

  if (friendRequest) {
    router.db.get("friendRequests").remove({ id: requestId }).write();

    res.json({ message: "Friend request deleted", id: requestId });
  } else {
    res.status(404).json({ error: "Friend request not found" });
  }
});

server.get("/friends/request", (req, res) => {
  const { user_id, status } = req.query;
  console.log({ user_id, status });

  const sentRequests = router.db
    .get("friendRequests")
    .value()
    .filter((request) => {
      const sender = router.db
        .get("users")
        .find({ id: request.sender_id })
        .value();

      return (
        sender && sender.id === parseInt(user_id) && request.status === status
      );
    })
    .map((request) => ({
      id: request.id,
      sender: router.db.get("users").find({ id: request.sender_id }).value(),
      recipient: router.db
        .get("users")
        .find({ id: request.recipient_id })
        .value(),
      status: request.status,
    }));

  const receivedRequests = router.db
    .get("friendRequests")
    .value()
    .filter((request) => {
      const recipient = router.db
        .get("users")
        .find({ id: request.recipient_id })
        .value();
      return (
        recipient &&
        recipient.id === parseInt(user_id) &&
        request.status === status
      );
    })
    .map((request) => ({
      id: request.id,
      sender: router.db.get("users").find({ id: request.sender_id }).value(),
      recipient: router.db
        .get("users")
        .find({ id: request.recipient_id })
        .value(),
      status: request.status,
    }));

  console.log("Sent Requests:", sentRequests);
  console.log("Received Requests:", receivedRequests);

  res.json({ sentRequests, receivedRequests });
});

server.get("/friends/request/accepted", (req, res) => {
  const { user_id } = req.query;
  console.log({ user_id });

  const requests = router.db
    .get("friendRequests")
    .value()
    .filter((request) => {
      return (
        (request.sender_id === parseInt(user_id) ||
          request.recipient_id === parseInt(user_id)) &&
        request.status === "accepted"
      );
    })
    .map((request) => {
      const otherUserId =
        request.sender_id === parseInt(user_id)
          ? request.recipient_id
          : request.sender_id;
      const user = router.db.get("users").find({ id: otherUserId }).value();

      return {
        id: request.id,
        // sender_id: request.sender_id,
        // recipient_id: request.recipient_id,
        // status: request.status,
        user,
      };
    });

  console.log("Requests:", requests);

  res.json({ requests });
});

server.put("/friends/request/accept", (req, res) => {
  const { id } = req.body;

  const friendRequest = router.db
    .get("friendRequests")
    .find({ id: parseInt(id) })
    .value();

  if (friendRequest) {
    friendRequest.status = "accepted";
    router.db.get("friendRequests").write();
    const newChatId = Math.random().toString(36).substring(2, 15);

    const newChat = {
      id: newChatId,
      participants: [friendRequest.sender_id, friendRequest.recipient_id],
      created_at: new Date().toISOString(), // Add the current date and time as the value for created_at
    };

    // Add the new chat to the "chats" array
    router.db.get("chats").push(newChat).write();
    res.json({ message: "Friend request accepted", id: friendRequest.id });
  } else {
    res.status(404).json({ error: "Friend request not found" });
  }
});
server.put("/friends/request/reject", (req, res) => {
  const { id } = req.body;

  const friendRequest = router.db
    .get("friendRequests")
    .find({ id: parseInt(id) })
    .value();

  if (friendRequest) {
    friendRequest.status = "rejected";
    router.db.get("friendRequests").write();

    res.json({ message: "Friend request rejected", id: friendRequest.id });
  } else {
    res.status(404).json({ error: "Friend request not found" });
  }
});

server.post("/chats", (req, res) => {
  const { participants } = req.body;

  // Generate a unique ID for the new chat
  const newChatId = Math.random().toString(36).substring(2, 15);

  const newChat = {
    id: newChatId,
    participants: participants || [],
    created_at: new Date().toISOString(), // Add the current date and time as the value for created_at
  };

  // Add the new chat to the "chats" array
  router.db.get("chats").push(newChat).write();

  res.json(newChat);
});

server.get("/chats", (req, res) => {
  const { user_id } = req.query;
  console.log({ user_id });

  const chats = router.db
    .get("chats")
    .filter((chat) => chat.participants.includes(parseInt(user_id)))
    .map((chat) => {
      const otherParticipants = chat.participants
        .filter((participantId) => participantId !== parseInt(user_id))
        .map((participantId) =>
          router.db.get("users").find({ id: participantId }).value()
        );

      return {
        id: chat.id,
        participants: otherParticipants,
      };
    })
    .value();

  res.json(chats);
});

server.get("/chats/:chat_id/:user_id", (req, res) => {
  const { chat_id, user_id } = req.params;
  console.log({ chat_id });

  const chats = router.db
    .get("chats")
    .filter((chat) => chat.id === chat_id)
    .map((chat) => {
      const otherParticipants = chat.participants
        .filter((participantId) => participantId !== parseInt(user_id))
        .map((participantId) =>
          router.db.get("users").find({ id: participantId }).value()
        );

      return {
        id: chat.id,
        participants: otherParticipants,
      };
    })
    .value();

  res.json(chats);
});

// Create a new message
server.post("/messages", (req, res) => {
  const { conversation_id, sender_id, text, created_at } = req.body;

  const newMessage = {
    id: Date.now(),
    conversation_id,
    sender_id,
    text,
    created_at: created_at || new Date().toISOString(), // Use the provided created_at value or the current date and time
  };

  // Add the new message to the "messages" array
  router.db.get("messages").push(newMessage).write();

  res.json(newMessage);
});

// Get all messages in a conversation
server.get("/messages", (req, res) => {
  const { conversation_id } = req.query;
  console.log(conversation_id);

  // Retrieve all messages with matching conversation_id
  const messages = router.db
    .get("messages")
    .filter({ conversation_id: conversation_id })
    .value();

  res.json(messages);
});

// server.get("/contacts/:user_id", (req, res) => {
//   const { user_id } = req.params;
//   // Retrieve friend requests where the user is the sender and the status is "accepted"
//   const acceptedFriendRequests = router.db
//     .get("friendRequests")
//     .filter(
//       (friendRequest) =>
//         friendRequest.status === "accepted" &&
//         (friendRequest.sender_id === parseInt(user_id) ||
//           friendRequest.recipient_id === parseInt(user_id))
//     )
//     .value();
//
//
//   // Retrieve the IDs of the users who have accepted friend requests
//   const acceptedUserIds = acceptedFriendRequests.map(
//     (request) => request.recipient_id
//   );
//
//   // Retrieve chats where the user is one of the participants
//   const userChats = router.db
//     .get("chats")
//     .filter((chat) =>
//       chat.participants.some(
//         (participant) => participant === parseInt(user_id)
//       )
//     )
//     .value();
//
//   // Retrieve the IDs of the users who the user has chats with
//   const userChatUserIds = userChats.reduce((userIds, chat) => {
//     chat.participants.forEach((participant) => {
//       console.log(participant)
//       if (
//         participant !== parseInt(user_id) &&
//         !userIds.includes(participant)
//       ) {
//         userIds.push(participant);
//       }
//     });
//     return userIds;
//   }, []);
//   console.log('userChatUserIds',userChatUserIds)
//   console.log('acceptedUserIds', acceptedUserIds)
//   // Retrieve the IDs of contacts who have accepted friend requests but with whom the user has not yet created a chat
//   const contactUserIds = acceptedUserIds.filter(
//     (userId) => userChatUserIds.includes(userId)
//   );
//   console.log('contactUserIds', contactUserIds)
//
//   // Retrieve the contact user objects based on the contact user IDs
//   const contacts = router.db
//     .get("users")
//     .filter((user) => contactUserIds.includes(user.id))
//     .value()
//
//   res.json(contacts);
// });

server.use(router);
server.listen(3800, () => {
  console.log("JSON Server is running on port 3800");
});
