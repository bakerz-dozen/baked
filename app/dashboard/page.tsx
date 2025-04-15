import { MainLayout } from '../../components/layouts';

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-card text-card-foreground rounded-lg shadow">
            <h2 className="mb-4 text-lg font-medium">Recent Activity</h2>
            <p className="text-muted-foreground">No recent activity to display.</p>
          </div>
          <div className="p-6 bg-card text-card-foreground rounded-lg shadow">
            <h2 className="mb-4 text-lg font-medium">Tasks</h2>
            <p className="text-muted-foreground">No pending tasks.</p>
          </div>
          <div className="p-6 bg-card text-card-foreground rounded-lg shadow">
            <h2 className="mb-4 text-lg font-medium">Statistics</h2>
            <p className="text-muted-foreground">Loading statistics...</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 