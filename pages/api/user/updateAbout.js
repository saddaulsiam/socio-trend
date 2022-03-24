import connectDb from '.././../../db/connectDatabase';
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  connectDb();

  if (method === "PUT") {
    try {
      const filter = { email: req.query.email };
      const updateDoc = { $set: req.body };
      const result = await User.findOneAndUpdate(filter, updateDoc);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
