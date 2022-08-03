import admin from "../../lib/FirebaseAdmin";

export default async function handler(req: any, res: any) {
  const firebase = admin.firestore();

  // Return promise to handle serverless function timeouts

  firebase
    .collection("users")
    .doc("115371510557299132347")
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
