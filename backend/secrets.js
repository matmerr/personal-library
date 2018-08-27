
// secrets.js
const secrets = {
  dbUri: process.env.DB_URI,
  secret: process.env.JWT_SECRET,
};

export const getSecrets = key => secrets[key];