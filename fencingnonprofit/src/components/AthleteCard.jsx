export default function AthleteCard({ athlete }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center text-center p-4">
      <img
        src={athlete.photo}
        alt={athlete.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold text-[#003366]">{athlete.name}</h2>
      <p className="text-sm text-gray-600">{athlete.weapon}</p>
      <ul className="text-sm text-gray-700 list-disc list-inside my-2">
        {athlete.achievements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <a
        href={athlete.gofundme}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-700 hover:underline"
      >
        View Profile
      </a>
    </div>
  );
}
