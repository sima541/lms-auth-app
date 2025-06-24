import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

 
    setTimeout(() => {
      toast.success('Password reset successful (Mock)!');
    }, 1000);
  };

  return (
    <div
      style={{
        maxWidth: 300,
        margin: 'auto',
        padding: '2rem',
        background: '#e6f7ff',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Reset Password
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}


const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  marginBottom: '1rem',
  background: 'white',
  border: '1px solid #ccc',
  borderRadius: '4px',
  color:'black',
};

const buttonStyle = {
  width: '100%',
  padding: '0.5rem',
  background: 'black',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
