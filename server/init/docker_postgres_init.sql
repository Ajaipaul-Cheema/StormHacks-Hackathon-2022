create TABLE users(
    id SERIAL,
    email TEXT UNIQUE NOT NULL, 
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);
