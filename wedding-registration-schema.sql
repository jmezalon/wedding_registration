CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    password    TEXT NOT NULL,
    email       TEXT NOT NULL UNIQUE CHECK(POSITION('@' IN EMAIL) > 1),
    rsvp_status BOOLEAN NOT NULL,
    num_guests  INTEGER NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);