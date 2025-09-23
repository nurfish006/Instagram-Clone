interface SuggestionItemProps {
  username: string;
  subtitle?: string;
  avatar?: string;
}

export default function SuggestionItem({
  username,
  subtitle,
  avatar = "https://i.pravatar.cc/40",
}: SuggestionItemProps) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium">{username}</p>
          {subtitle && (
            <p className="text-xs text-gray-500 truncate max-w-[140px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <button className="text-blue-500 text-xs font-semibold">Follow</button>
    </li>
  );
}
