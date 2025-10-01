import Header from './components/Header.jsx';
import StatCard from './components/StatCard.jsx';
import AnimalsTable from './components/AnimalsTable.jsx';
import AdoptionRequests from './components/AdoptionRequests.jsx';
import TaskList from './components/TaskList.jsx';
import ContentEditor from './components/ContentEditor.jsx';
import Timeline from './components/Timeline.jsx';
import QuickActions from './components/QuickActions.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import { stats, animals, adoptionRequests, tasks, timeline, contentBlocks } from './data/mockData.js';

export default function App() {
  return (
    <DashboardLayout>
      <Header />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <AnimalsTable animals={animals} />
        <div className="space-y-6">
          <AdoptionRequests requests={adoptionRequests} />
          <QuickActions />
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <ContentEditor blocks={contentBlocks} />
        <div className="space-y-6">
          <TaskList tasks={tasks} />
          <Timeline entries={timeline} />
        </div>
      </section>
    </DashboardLayout>
  );
}
