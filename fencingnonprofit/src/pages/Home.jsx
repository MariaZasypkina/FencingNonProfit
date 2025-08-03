import { athletes } from '../data/athletes';
import AthleteCard from '../components/AthleteCard';

export default function Home() {
  return (
    <section>
      <h1>Support Colorado Youth Fencers</h1>
      <div className="athlete-grid">
        {athletes.map((athlete) => (
          <AthleteCard key={athlete.id} athlete={athlete} />
        ))}
      </div>
    </section>
  );
}
