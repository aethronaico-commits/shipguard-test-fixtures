// Deliberately insecure test file for ShipGuard verification

const API_KEY = "Kx9ZFmPqR7vT3wY6zA1bC4dE8fG0hJ2kL5nM7pQ9r";
const DATABASE_PASSWORD = "SuperSecretPass9284XyzQ";

export const dbRules = {
  read: true,
  write: true,
  auth: false
};

export default function handler(req, res) {
  const data = fetchUserData(req.query.id);
  res.status(200).json(data);
}
