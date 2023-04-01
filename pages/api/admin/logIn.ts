import { NextApiRequest, NextApiResponse } from 'next';

const AdminLogIn = (req: NextApiRequest, res: NextApiResponse) => {
  const { user_name, admin_password } = req.body;

  if (
    user_name === process.env.USER_NAME &&
    admin_password === process.env.ADMIN_PASSWORD
  ) {
    res.json({ success: 'Admin LogIn Successful' });
    console.log('Admin LogIn Successful');
  } else {
    res.json({ error: 'Admin LogIn Failed' });
    console.log('Admin LogIn Failed');
  }
};

export default AdminLogIn;
