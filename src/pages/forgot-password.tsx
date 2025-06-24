import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes('@')) {
      toast.error('Please enter a valid email!');
      return;
    }

    setTimeout(() => {
      toast.success('Reset link sent to your email (Mock)!');
    }, 1000);
  };

  return (
    <div
      style={{
        maxWidth: 300,
        margin: 'auto',
        padding: '2rem',
        background: '#f0f8ff',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            marginBottom: '1rem',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            color:'black',
          }}
          required
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.5rem',
            background: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Send Reset Link
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
