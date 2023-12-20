const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");

class User {
  static async login(credentials) {
    throw new UnauthorizedError("Invalid email/password");
  }

  static async register(credentials) {
    const requiredFields = ["email", "password", "rsvpStatus", "numGuests"];
    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });

    if (credentials.email.indexOf("@") <= 0) {
      throw new BadRequestError("Invalid email");
    }

    const existingUser = await User.fetchUserByEmail(credentials.email);
    if (existingUser) {
      throw new BadRequestError(`Duplicate email: ${credentials.email}`);
    }

    const lowercaseEmail = credentials.email.toLowerCase();

    const result = await db.query(
      `
    INSERT INTO users(
        email,
        password,
        rsvp_status,
        num_guests
    )
    VALUES ($1,$2,$3,$4)
    RETURNING id, email, rsvp_staus, num_guests, created_at;
    `,
      [
        lowercaseEmail,
        credentials.password,
        credentials.rsvpStatus,
        credentials.numGuests,
      ]
    );

    const user = result.rows[0];

    return user;
  }

  static async fetchUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("No email provided");
    }
    const query = `SELECT * FROM users WHERE email = $1`;

    const result = await db.query(query, [email.toLowerCase()]);

    const user = result.rows[0];

    return user;
  }
}

module.exports = User;
