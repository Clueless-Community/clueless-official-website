import { TextField } from '@mui/material';
import React from 'react';
import { useAdminLogIn } from '../../../context/AdminLogInContext';

const AdminLogInScreen = () => {
  const { setIsAdmin } = useAdminLogIn();

  const [adminUserName, setAdminUserName] = React.useState<string>('');
  const [adminPassword, setAdminPassword] = React.useState<string>('');
  const [error, setError] = React.useState<boolean>(false);

  const handleAdminCheck = async () => {
    const res = await fetch('/api/admin/logIn', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_name: adminUserName,
        admin_password: adminPassword,
      }),
    });
    const data = await res.json();
    if (data.success) {
      setError(false);
      setIsAdmin(true);
    } else {
      setError(true);
      setIsAdmin(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className=" flex flex-col bg-white p-10 rounded-lg">
        <h1 className=" text-center  mb-10 text-2xl ">Admin LogIn 🔒</h1>
        <TextField
          sx={{ mb: 2, width: 300 }}
          label="User Name"
          value={adminUserName}
          onChange={(e) => {
            setAdminUserName(e.target.value);
          }}
        />
        <TextField
          type="password"
          label="Password"
          value={adminPassword}
          onChange={(e) => {
            setAdminPassword(e.target.value);
          }}
        />
        <button className="btn-blue mt-5" onClick={handleAdminCheck}>
          Log In
        </button>
        {error && (
          <p className=" text-red-500 mt-3 text-center">
            Authentication Failed
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminLogInScreen;
