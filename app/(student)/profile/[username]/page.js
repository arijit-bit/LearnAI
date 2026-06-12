import { notFound } from 'next/navigation';
import { demoStudentProfile } from '../../../../lib/data/demoStudentProfile';

function StatCard({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{hint}</p>
    </div>
  );
}

function SectionCard({ title, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function StudentProfilePage({ params }) {
  const { username } = params;

  if (username !== demoStudentProfile.student.username) {
    notFound();
  }

  const { student, stats, strengths, improvementAreas, recentActivity, subjects } =
    demoStudentProfile;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef4ff_100%)] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 text-white shadow-xl">
          <div className="grid gap-8 p-6 lg:grid-cols-[1.4fr_0.8fr] lg:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-400 text-3xl font-semibold text-slate-950">
                  {student.initials}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                    Demo Student Profile
                  </p>
                  <h1 className="mt-1 text-3xl font-semibold">{student.name}</h1>
                  <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
                    {student.className} | {student.school} | {student.goal}
                  </p>
                  <p className="mt-2 text-sm text-cyan-200">
                    Username: /profile/{student.username}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <StatCard
                  label="Average Score"
                  value={`${stats.averageScore}%`}
                  hint="Across graded quizzes"
                />
                <StatCard
                  label="Topics Completed"
                  value={stats.topicsCompleted}
                  hint={`${stats.topicsPending} topics still pending`}
                />
                <StatCard
                  label="Study Streak"
                  value={`${stats.studyStreak} days`}
                  hint={`Weekly target: ${stats.weeklyStudyGoal}`}
                />
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-cyan-300">Student Snapshot</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-slate-400">Email</dt>
                  <dd>{student.email}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-slate-400">Username</dt>
                  <dd>{student.username}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-slate-400">Focus Level</dt>
                  <dd>{student.focusLevel}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-slate-400">Preferred Time</dt>
                  <dd>{student.preferredStudyWindow}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-400">Next Milestone</dt>
                  <dd>{student.nextMilestone}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionCard title="Subject Progress">
            <div className="space-y-4">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-slate-900">{subject.name}</h3>
                      <p className="text-sm text-slate-500">
                        {subject.completedTopics}/{subject.totalTopics} topics complete
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-slate-900">
                        {subject.progress}%
                      </p>
                      <p className="text-sm text-slate-500">{subject.lastTopic}</p>
                    </div>
                  </div>
                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#06b6d4_0%,#2563eb_100%)]"
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Strengths And Improvement Areas">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <h3 className="font-medium text-emerald-900">Strengths</h3>
                <ul className="mt-3 space-y-2 text-sm text-emerald-800">
                  {strengths.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-amber-50 p-4">
                <h3 className="font-medium text-amber-900">Needs Improvement</h3>
                <ul className="mt-3 space-y-2 text-sm text-amber-800">
                  {improvementAreas.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionCard title="Performance Summary">
            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Graded Quiz Average</span>
                  <span>{stats.averageScore}%</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: `${stats.averageScore}%` }}
                  />
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Mock Test Readiness</span>
                  <span>{stats.mockReadiness}%</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-cyan-500"
                    style={{ width: `${stats.mockReadiness}%` }}
                  />
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Attendance In Study Sessions</span>
                  <span>{stats.studyAttendance}%</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-violet-500"
                    style={{ width: `${stats.studyAttendance}%` }}
                  />
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Recent Activity">
            <div className="space-y-3">
              {recentActivity.map((item) => (
                <div
                  key={`${item.type}-${item.title}`}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.type}</p>
                  </div>
                  <p className="text-sm text-slate-500">{item.when}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>
      </div>
    </main>
  );
}
