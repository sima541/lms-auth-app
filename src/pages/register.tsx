import { useState } from 'react';
import { z } from 'zod';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const schema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    try {
    
      setTimeout(() => {
        localStorage.setItem('token', 'mock-token-456');
        toast.success('Registration successful (Mock)!');
      }, 1000);
    } catch (err: any) {
      toast.error('Registration failed!');
      console.error(err.message);
    }
  };

  return (
    <div
      style={{
        maxWidth: 300,
        margin: 'auto',
        padding: '2rem',
        background: '#e0f7fa',
        color: '#000',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}


const inputStyle = {
  width: '100%',
  marginBottom: '1rem',
  padding: '0.5rem',
  background: 'lightyellow',
  border: '1px solid #ccc',
  borderRadius: '4px',
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
