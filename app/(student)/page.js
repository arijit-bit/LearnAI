import React from 'react';
import Link from 'next/link';
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function LearnSphereDashboard() {
  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans">
      
      {/* Sidebar - Fixed 256px width (64 * 4 = 256) */}
      <nav className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 border-r border-border bg-card shadow-soft z-50">
        
        {/* Brand Area */}
        <div className="p-6 flex items-center gap-4">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            L
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground m-0 leading-tight">
              LearnSphere
            </h1>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex-1 px-4 space-y-2">
          <li>
            <Link
              href="#"
              className="flex items-center gap-4 bg-primary/10 text-primary text-sm font-semibold px-4 py-3 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium px-4 py-3 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">menu_book</span>
              Subjects
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium px-4 py-3 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">query_stats</span>
              Progress
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium px-4 py-3 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">quiz</span>
              Quizzes
            </Link>
          </li>
        </ul>

        {/* Bottom Profile Area */}
        <div className="p-4 border-t border-border space-y-4">
          <Link
            href="/profile"
            className="flex items-center gap-4 text-muted-foreground hover:text-foreground text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">account_circle</span>
            Profile
          </Link>
          <button className="w-full bg-primary text-primary-foreground text-sm font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-soft">
            Study Session
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 min-w-0">
        
        {/* Top Navigation Bar - Fixed 64px height */}
        <header className="h-16 border-b border-border bg-card/80 backdrop-blur-md fixed top-0 right-0 left-0 md:left-64 z-40 flex justify-between items-center px-8">
          
          <div className="flex items-center flex-1 max-w-md">
            <div className="relative w-full text-muted-foreground focus-within:text-foreground transition-colors">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px]">
                search
              </span>
              <input
                type="text"
                className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-border text-foreground rounded-lg py-2 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
                placeholder="Search courses, topics..."
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <button className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 text-orange-600 rounded-lg border border-orange-500/20">
              <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
              <span className="text-sm font-bold">12</span>
            </div>
            <div className="w-8 h-8 rounded-full border border-border overflow-hidden bg-muted ml-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHfsHy6M1q6iouzZWVG6cnrh559xsCSKt7afBbkVOgah3NcFQCUPSHaJOOAN4KBH1AVX0GuuHeXjrEnTBZGBLgB54M_-_-TPbwtbdUky_XwxSYDYaFjPRi0Lmw5xp_8CC_8sC6KlbmnPeg6nbdjy77rZ3on5fZ74uGQllvDfNcib-y5opnuAlDs8iJ0uPz5NW8jBXBMqzLFPuFXT1l627R46zRAplmh0px1Mj_XzMphlcNszQke3MLt1OMOpSFccgfzRnRoNkLvak"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Canvas */}
        <main className="flex-1 p-8 mt-16 max-w-7xl mx-auto w-full">
          
          {/* Welcome Header */}
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, Alex
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                You're on a 12-day streak. Keep up the great work!
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-soft flex items-center gap-8">
               <div className="flex flex-col">
                 <span className="text-2xl font-bold text-foreground">2,450</span>
                 <span className="text-sm font-medium text-muted-foreground">Total XP</span>
               </div>
               <div className="w-px h-12 bg-border"></div>
               <div className="flex flex-col">
                 <span className="text-2xl font-bold text-foreground">14</span>
                 <span className="text-sm font-medium text-muted-foreground">Topics Done</span>
               </div>
            </div>
          </div>

          {/* 12-Column Grid Layout */}
          <div className="grid grid-cols-12 gap-6">
            
            {/* Left Column (Spans 8) */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-foreground">Active Subjects</h3>
                  <button className="text-primary text-sm font-medium hover:underline">View All</button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Subject Card 1 */}
                  <div className="bg-card rounded-xl border border-border shadow-soft p-6 flex flex-col group hover:border-primary/50 transition-colors">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[24px]">science</span>
                      </div>
                      <span className="px-3 py-1 bg-black/5 dark:bg-white/5 text-foreground text-xs font-semibold rounded-lg">
                        Advanced
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Quantum Physics</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-8 flex-1">
                      Explore wave-particle duality, Schrödinger's equation, and quantum entanglement.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm font-semibold">
                        <span className="text-foreground">68% Complete</span>
                        <span className="text-primary">14/24</span>
                      </div>
                      <div className="h-2 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Subject Card 2 */}
                  <div className="bg-card rounded-xl border border-border shadow-soft p-6 flex flex-col group hover:border-primary/50 transition-colors">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[24px]">biotech</span>
                      </div>
                      <span className="px-3 py-1 bg-black/5 dark:bg-white/5 text-foreground text-xs font-semibold rounded-lg">
                        Intermediate
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Organic Chemistry</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-8 flex-1">
                      Carbon compounds, molecular structures, and chemical reactions.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm font-semibold">
                        <span className="text-foreground">32% Complete</span>
                        <span className="text-primary">8/25</span>
                      </div>
                      <div className="h-2 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '32%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-6">Recently Viewed</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {['Calculus II', 'World History', 'Psychology 101'].map((topic, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-4 shadow-soft hover:shadow-md transition-shadow cursor-pointer flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-foreground">
                        <span className="material-symbols-outlined text-[20px]">
                          {i === 0 ? 'functions' : i === 1 ? 'public' : 'psychology'}
                        </span>
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-foreground leading-tight">{topic}</h5>
                        <p className="text-xs text-muted-foreground mt-1">Viewed recently</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Column (Spans 4) */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              
              {/* AI Insight Widget */}
              <div className="bg-foreground text-background rounded-xl p-6 shadow-soft relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <span className="material-symbols-outlined text-primary text-[20px]">auto_awesome</span>
                  <h3 className="text-base font-bold">AI Study Insight</h3>
                </div>
                <p className="text-sm leading-relaxed mb-6 opacity-90 relative z-10">
                  You learn faster in the mornings. Scheduling difficult Quantum Physics topics before 11 AM could improve retention by up to 20%.
                </p>
                <button className="w-full bg-background/10 hover:bg-background/20 text-background text-sm font-semibold py-2 rounded-lg transition-colors relative z-10">
                  Apply to Schedule
                </button>
              </div>

              {/* Upcoming Tasks */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
                <h3 className="text-lg font-bold text-foreground mb-6">Upcoming Tasks</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Physics Quiz 3', time: 'Today, 11:59 PM', color: 'bg-red-500' },
                    { title: 'Chem Lab Report', time: 'Tomorrow, 5:00 PM', color: 'bg-orange-500' },
                    { title: 'Math Assignment', time: 'Friday, 10:00 AM', color: 'bg-blue-500' }
                  ].map((task, i) => (
                    <div key={i} className="flex items-start gap-4 p-3 -mx-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer">
                      <div className={`w-2 h-2 mt-1.5 rounded-full ${task.color}`}></div>
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-tight">{task.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{task.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 text-primary text-sm font-semibold py-2 bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors">
                  View Calendar
                </button>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}