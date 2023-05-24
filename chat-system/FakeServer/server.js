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
    res.status(400).json({ error: "Username already exists" });
  } else {
    const newUser = {
      id: Date.now(),
      displayName,
      email,
      password,
      description,
    };
    router.db.get("users").push(newUser).write();
    res.json({ message: "Sign up successful", uid: newUser.id });
  }
});

// const updatedData = {
//   id: 1684262181070,
//   displayName: "hi",
//   email: "hi@gmail.com",
//   password: "123",
//   description: "hello, updated description"
// };
//
// fetch('http://localhost:3000/users/1684262181070', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(updatedData),
// })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Updated user:', data);
//     })
//     .catch(error => {
//       console.error('Error updating user:', error);
//     });

server.post("/friends/request", (req, res) => {
  const { sender_id, recipient_id } = req.body;

  const newFriendRequest = {
    id: Date.now(),
    sender_id,
    recipient_id,
    status: "pending",
  };
  router.db.get("friendRequests").push(newFriendRequest).write();
  res.json({ message: "Sign up successful", uid: newFriendRequest.id });
});
server.get("/friends/request", (req, res) => {
  const { user_id } = req.body;

  const friendRequests = router.db
    .get("friendRequests")
    .value()
    .filter(
      (request) =>
        (request.sender_id === user_id || request.recipient_id === user_id) &&
        request.status === "pending"
    );

  if (friendRequests === undefined) res.json([]);

  res.json(friendRequests);
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

server.use(router);
server.listen(3800, () => {
  console.log("JSON Server is running on port 3800");
});
