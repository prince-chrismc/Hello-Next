// Fake users data
const users = [
    { id: 123, name: "John Doe", email: "john@example.com" },
    { id: 256, name: "Jane Doe", email: "jane@example.com" }
  ]

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(users)
}
