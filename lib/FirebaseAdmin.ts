import admin from 'firebase-admin'

if(!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
        projectId : process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        privateKey : process.env.FIREBASE_PRIVATE_KEY ?  JSON.parse(process.env.FIREBASE_PRIVATE_KEY)["privateKey"] : undefined,
        clientEmail : process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL : process.env.FIREBASE_DATABASE_URL,
  })
  console.log('Initialized.')
}


export default admin