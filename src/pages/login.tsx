import { useState } from 'react';
import { z } from 'zod';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

 
    const result = schema.safeParse({ email, password });
    if (!result.success) {
      toast.error('Invalid input! Email or password incorrect.');
      return;
    }

    try {
    
      setTimeout(() => {
        const token = 'mock-token-123';
        localStorage.setItem('token', token);
        toast.success('Login successful (Mock)!');
      }, 1000);

    
    } catch (err: any) {
      toast.error('Login failed!');
      console.error('Error:', err.message);
    }
  };

  return (
    <div
      style={{
        maxWidth: 240,
        margin: 'auto',
        padding: '2rem',
        background: 'lightblue',
        color: 'black',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            width: '100%',
            background: 'lightyellow',
            padding: '0.5rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={{
            width: '100%',
            background: 'lightyellow',
            padding: '0.5rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={false}
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
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
