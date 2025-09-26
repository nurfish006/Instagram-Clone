// src/components/RightSidebar/RightSidebar.tsx
import SuggestionItem from "./SuggestionItem";

export default function RightSidebar() {
  const suggestions = [
    { username: "nura", subtitle: "Follows you" },
    { username: "Momi", subtitle: "Followed by ema" },
    { username: "Mikey", subtitle: "Followed by sing_song" },
    { username: "Dani", subtitle: "Follows you" },
    { username: "Hiba", subtitle: "Follows you" },
  ];

  return (
    <aside className="hidden lg:block w-80 p-6 bg-white text-gray-900">
      {/* Profile header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/50"
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">Nure</p>
            <p className="text-xs text-gray-500">Nure</p>
          </div>
        </div>
        <button className="text-xs font-semibold text-blue-500">Switch</button>
      </div>

      {/* Suggestions */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-gray-500">
            Suggestions for you
          </p>
          <button className="text-xs font-semibold">See All</button>
        </div>
        <ul className="space-y-4">
          {suggestions.map((s, idx) => (
            <SuggestionItem key={idx} {...s} />
          ))}
        </ul>
      </div>

      {/* Footer */}
      <footer className="text-[11px] text-gray-400 leading-5 mt-8 space-y-2">
        <p>About · Help · Press · API · Jobs · Privacy · Terms · Locations</p>
        <p>Language · Meta Verified</p>
        <p>© 2023 INSTAGRAM FROM NURA</p>
      </footer>
    </aside>
  );
}
