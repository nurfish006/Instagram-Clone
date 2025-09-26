type Suggestion = {
  id: number;
  name: string;
  info: string;
  avatar: string;
};

const mockSuggestions: Suggestion[] = [
  {
    id: 1,
    name: "Kirti Chadha",
    info: "Follows you",
    avatar: "/avatars/user1.jpg",
  },
  {
    id: 2,
    name: "Durgesh Nandini",
    info: "Followed by Haile",
    avatar: "/avatars/user2.jpg",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    info: "New to Instagram",
    avatar: "/avatars/user3.jpg",
  },
  {
    id: 4,
    name: "Priya Sharma",
    info: "Follows you",
    avatar: "/avatars/user4.jpg",
  },
];

export default function Suggestions() {
  return (
    <section className="bg-white rounded-2xl shadow-sm mb-6 border p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-sm text-gray-700">
          Suggestions for you
        </h2>
        <button className="text-xs font-semibold text-blue-500 hover:underline">
          See all
        </button>
      </div>

      {/* Scrollable Row */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {mockSuggestions.map((user) => (
          <div
            key={user.id}
            className="min-w-[150px] flex flex-col items-center border rounded-xl p-3"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <p className="mt-2 text-sm font-semibold">{user.name}</p>
            <p className="text-xs text-gray-500">{user.info}</p>
            <button className="mt-2 text-sm text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600">
              Follow
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
