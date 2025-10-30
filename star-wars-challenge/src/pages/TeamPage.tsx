import TeamList from "../components/TeamList";

export default function TeamPage() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">My Team</h1>
      <TeamList />
    </div>
  );
}
