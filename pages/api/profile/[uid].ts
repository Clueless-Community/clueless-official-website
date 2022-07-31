import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../firebase/clientApp";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const{ uid } = req.query;
  const userRef = doc(db, "users", uid as string);
  const userDocSnap = await getDoc(userRef);
  if (userDocSnap.exists()) {
    const userData = userDocSnap.data();
    res.status(200).json(userData)
  }
};
