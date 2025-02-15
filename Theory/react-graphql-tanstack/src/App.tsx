import { useCountries } from "./useCountries";

const App = () => {
  const { data, error, isLoading } = useCountries();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>🌍 Danh sách Quốc gia</h1>
      <ul>
        {data?.countries.map((country) => (
          <li key={country.code}>
            {country.emoji} {country.name} ({country.code})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
