import { athletes } from '../data/athletes';
import AthleteCard from '../components/AthleteCard';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <>
    <Banner />
    <section>
      <br></br>
      <h2>Support Colorado Youth Fencers</h2>
      <div className="athlete-grid">
        {athletes.map((athlete) => (
          <AthleteCard key={athlete.id} athlete={athlete} />
        ))}
      </div>
    </section>
    </>
  );
}
