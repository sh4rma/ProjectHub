import AdminSidebar from "../components/AdminSidebar";

export default function AdminProjects() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="ml-64 p-8 w-full">

        <h1 className="text-4xl font-black mb-8">
          Projects
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold">
            Project Management
          </h2>

          <p className="text-gray-500 mt-3">
            No projects available.
          </p>

        </div>

      </div>

    </div>
  );
}