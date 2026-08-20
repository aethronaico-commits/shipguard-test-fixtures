export const dbRules = {
  read: true,
  write: true,
  auth: false
};

export default function handler(req, res) {
  const data = fetchUserData(req.query.id);
  res.status(200).json(data);
}
