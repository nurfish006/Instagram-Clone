import Feed from "./features/feed";
import Sidebar from "./components/Sidebar/Sidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

export default function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen text-gray-900">
      <Sidebar />

      <main className="w-full bg-white flex-1 flex justify-center">
        <div className="w-full max-w-xl p-6">
          <Feed />
        </div>
      </main>

      <RightSidebar />
    </div>
  );
}
