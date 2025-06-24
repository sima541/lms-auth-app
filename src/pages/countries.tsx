// src/pages/countries.tsx
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '@/graphql/mutations/countries';

export default function Countries() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error.message}</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Countries List</h1>
      <ul>
        {data.countries.map((country: any) => (
          <li key={country.code}>
            {country.name} {country.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}
