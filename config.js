// Deliberately insecure test file for ShipGuard verification

const API_KEY = "fake_test_key_4kZFmPqR7vT3wY6zA1bC4dE8fG0hJ2kL5nM7pQ9rS3tU6vW1xY";
const DATABASE_PASSWORD = "SuperSecret123!";

export const dbRules = {
  read: true,
  write: true,
  auth: false
};

export default function handler(req, res) {
  const data = fetchUserData(req.query.id);
  res.status(200).json(data);
}
