import { useParams } from 'react-router-dom';
import { athletes } from '../data/athletes';

export default function AthletePage() {
  const { id } = useParams();
  const athlete = athletes.find((a) => a.id === id);

  if (!athlete) return <p>Athlete not found.</p>;

  return (
    <section>
      <h1>{athlete.name}</h1>
      <img src={athlete.photo} alt={athlete.name} />
      <p>Weapon: {athlete.weapon}</p>
      <ul>
        {athlete.achievements.map((a, index) => (
          <li key={index}>{a}</li>
        ))}
      </ul>
      <a href={athlete.gofundme} target="_blank" rel="noopener noreferrer">
        Support {athlete.name}
      </a>
    </section>
  );
}
