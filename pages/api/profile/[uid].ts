import admin from "../../../lib/FirebaseAdmin";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { uid } = req.query;
  const firebase = admin.firestore();
  await firebase
    .collection("users")
    .doc(uid as string)
    .get()
    .then((doc) => {
      res.status(200).json(doc.data());
      res.end();
    })
    .catch((e) => {
      res.status(405).json(e);
      res.end();
    });
}