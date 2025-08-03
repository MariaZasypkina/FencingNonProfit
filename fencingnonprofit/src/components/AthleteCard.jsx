import { Link } from 'react-router-dom';

export default function AthleteCard({ athlete }) {
  return (
    <div className="athlete-card">
      <img src={athlete.photo} alt={athlete.name} />
      <h3>{athlete.name}</h3>
      <p>{athlete.weapon}</p>
      <Link to={`/athletes/${athlete.id}`}>View Profile</Link>
    </div>
  );
}
