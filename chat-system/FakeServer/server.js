import jsonServer from 'json-server';
const { create, bodyParser, defaults } = jsonServer;

const server = create();
const router = jsonServer.router('db.json');
const middlewares = defaults();

server.use(bodyParser);
server.use(middlewares);

// Custom route for login
server.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log({ email, password })
    const user = router.db
        .get('users')
        .find({ email, password })
        .value();

    if (user) {
        res.json({ message: 'Login successful', uid: user.id });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Custom route for sign up
server.post('/signup', (req, res) => {
    const { displayName, email, password,description } = req.body;
    const existingUser = router.db
        .get('users')
        .find({ email })
        .value();

    if (existingUser) {
        res.status(400).json({ error: 'Username already exists' });
    } else {
        const newUser = {
            id: Date.now(),
            displayName,
            email,
            password,
            description
        };
        router.db.get('users').push(newUser).write();
        res.json({ message: 'Sign up successful', uid: newUser.id });
    }
});

server.use(router);
server.listen(3800, () => {
    console.log('JSON Server is running on port 3800');
});
