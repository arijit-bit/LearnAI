import React from 'react';
import Link from 'next/link';

export default function LearnSphereDashboard() {
  return (
    <div className="flex min-h-screen font-sans bg-background text-on-background">
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col bg-surface dark:bg-on-background w-[260px] h-screen fixed left-0 top-0 border-r border-outline-variant dark:border-outline shadow-sm py-lg z-50">
        <div className="px-md mb-xl flex items-center gap-sm">
          <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-display-lg font-bold text-headline-md">
            L
          </div>
          <div>
            <h1 className="font-display-lg text-headline-md font-bold text-primary dark:text-primary-fixed m-0">
              LearnSphere AI
            </h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant m-0">
              Intelligent Learning
            </p>
          </div>
        </div>
        <ul className="flex-1 px-sm space-y-unit">
          <li>
            <a
              href="#"
              className="flex items-center gap-md bg-secondary-fixed text-on-secondary-fixed-variant font-label-md text-label-md font-bold border-l-4 border-primary px-md py-sm rounded-r-lg hover:bg-surface-container-high transition-colors duration-200"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                home
              </span>
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-md text-on-surface-variant font-label-md text-label-md px-md py-sm rounded-lg hover:bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">menu_book</span>
              Subjects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-md text-on-surface-variant font-label-md text-label-md px-md py-sm rounded-lg hover:bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">query_stats</span>
              Progress
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-md text-on-surface-variant font-label-md text-label-md px-md py-sm rounded-lg hover:bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">quiz</span>
              Quiz
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-md text-on-surface-variant font-label-md text-label-md px-md py-sm rounded-lg hover:bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">description</span>
              Mock Test
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-md text-on-surface-variant font-label-md text-label-md px-md py-sm rounded-lg hover:bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">smart_toy</span>
              AI Assistant
            </a>
          </li>
        </ul>
        <div className="px-sm mt-auto space-y-sm">
          <Link
            href="/profile/aarav-sharma"
            className="flex items-center gap-md text-on-surface-variant font-label-md text-label-md px-md py-sm rounded-lg hover:bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200 scale-95 active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">account_circle</span>
            Profile
          </Link>
          <div className="px-sm">
            <button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-sm rounded-lg font-bold hover:bg-primary transition-colors shadow-sm">
              Start Study Session
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-[260px] min-w-0">
        {/* TopAppBar */}
        <header className="bg-surface/70 backdrop-blur-xl dark:bg-on-background/70 border-b border-outline-variant dark:border-outline flat fixed top-0 right-0 left-0 md:left-[260px] h-16 z-40 flex justify-between items-center px-lg w-full md:w-auto">
          {/* Mobile Menu Button */}
          <button className="md:hidden text-on-surface-variant p-sm rounded-lg hover:bg-surface-container-low">
            <span className="material-symbols-outlined">menu</span>
          </button>

          {/* Product Name (Mobile Only) */}
          <div className="md:hidden font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
            LearnSphere AI
          </div>

          {/* Search Bar (Left) */}
          <div className="hidden md:flex items-center flex-1 max-w-md">
            <div className="relative w-full group">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                search
              </span>
              <input
                type="text"
                className="w-full bg-surface-container-low border border-outline-variant text-on-surface rounded-full py-2 pl-10 pr-4 font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="Search subjects, topics, or notes..."
              />
            </div>
          </div>

          {/* Actions (Right) */}
          <div className="flex items-center gap-sm md:gap-md">
            <button className="text-on-surface-variant hover:text-primary transition-all p-sm rounded-full hover:bg-surface-container-low hover:opacity-80 active:scale-98">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-all p-sm rounded-full hover:bg-surface-container-low hover:opacity-80 active:scale-98 relative group">
              <span className="material-symbols-outlined text-orange-500">
                local_fire_department
              </span>
              <span className="absolute -top-1 -right-1 bg-error text-on-error text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                12
              </span>
              {/* Streak Tooltip */}
              <div className="absolute top-full mt-2 right-0 bg-surface-container-highest border border-outline-variant rounded-lg p-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-48 z-50">
                <p className="font-label-md text-label-md text-on-surface font-bold">
                  12 Day Streak!
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Keep studying to maintain your streak.
                </p>
              </div>
            </button>
            <button className="hidden md:flex items-center gap-xs bg-tertiary-container text-on-tertiary-container font-label-md text-label-md px-md py-sm rounded-full hover:bg-tertiary hover:text-on-tertiary transition-colors hover:opacity-80 active:scale-98">
              <span className="material-symbols-outlined text-sm">
                smart_toy
              </span>
              AI Tutor
            </button>
            <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden ml-sm cursor-pointer hover:opacity-80 transition-opacity">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHfsHy6M1q6iouzZWVG6cnrh559xsCSKt7afBbkVOgah3NcFQCUPSHaJOOAN4KBH1AVX0GuuHeXjrEnTBZGBLgB54M_-_-TPbwtbdUky_XwxSYDYaFjPRi0Lmw5xp_8CC_8sC6KlbmnPeg6nbdjy77rZ3on5fZ74uGQllvDfNcib-y5opnuAlDs8iJ0uPz5NW8jBXBMqzLFPuFXT1l627R46zRAplmh0px1Mj_XzMphlcNszQke3MLt1OMOpSFccgfzRnRoNkLvak"
                alt="User profile picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Main Canvas */}
        <main className="flex-1 p-md md:p-lg lg:p-xl mt-16 max-w-[1440px] mx-auto w-full">
          {/* Dashboard Header */}
          <div className="mb-lg md:mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
            <div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">
                Welcome back, Alex
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ready to master something new today?
              </p>
            </div>
            <div className="glass-panel px-md py-sm rounded-xl flex items-center gap-md bg-white/70 backdrop-blur-md border border-outline-variant shadow-sm">
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-orange-500">
                    local_fire_department
                  </span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-bold">
                    12 Days
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
                    Current Streak
                  </p>
                </div>
              </div>
              <div className="w-px h-8 bg-outline-variant"></div>
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    emoji_events
                  </span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-bold">
                    2,450 XP
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
                    Total Points
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-md md:gap-gutter">
            {/* Main Subject Cards (Left Column - 8 cols on LG) */}
            <div className="md:col-span-8 space-y-md md:space-y-gutter">
              <div className="flex items-center justify-between mb-sm">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Your Subjects
                </h3>
                <button className="text-primary font-label-md text-label-md hover:underline">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md md:gap-lg">
                {/* Subject Card 1 */}
                <div className="elevated-card p-md md:p-lg flex flex-col h-full group relative overflow-hidden bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-lg hover:border-t-2 hover:border-t-primary hover:-translate-y-0.5 transition-all duration-300">
                  {/* Decorative blur */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
                  <div className="flex justify-between items-start mb-md relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
                      <span
                        className="material-symbols-outlined text-white text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        science
                      </span>
                    </div>
                    <span className="bg-surface-container-high text-on-surface-variant font-label-md text-label-md px-2 py-1 rounded text-xs font-bold">
                      Advanced
                    </span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-xs relative z-10">
                    Quantum Physics
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-md relative z-10">
                    Exploring wave-particle duality and quantum mechanics.
                  </p>
                  <div className="mt-auto space-y-sm relative z-10">
                    <div className="flex justify-between font-label-md text-label-md text-on-surface-variant text-xs">
                      <span>Progress</span>
                      <span className="font-bold text-primary">68%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full w-[68%]"
                        style={{ transition: "width 1s ease-in-out" }}
                      ></div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mb-md">
                      14/24 Topics Completed
                    </p>
                    <div className="pt-sm border-t border-outline-variant flex flex-col gap-sm">
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          history
                        </span>
                        Last opened:{" "}
                        <span className="font-medium text-on-surface truncate">
                          Schrödinger Equation
                        </span>
                      </p>
                      <button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-2 rounded-lg hover:bg-surface-tint transition-colors shadow-sm flex justify-center items-center gap-xs">
                        Continue Learning
                        <span className="material-symbols-outlined text-sm">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Subject Card 2 */}
                <div className="elevated-card p-md md:p-lg flex flex-col h-full group relative overflow-hidden bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-lg hover:border-t-2 hover:border-t-primary hover:-translate-y-0.5 transition-all duration-300">
                  {/* Decorative blur */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors"></div>
                  <div className="flex justify-between items-start mb-md relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-md">
                      <span
                        className="material-symbols-outlined text-white text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        biotech
                      </span>
                    </div>
                    <span className="bg-surface-container-high text-on-surface-variant font-label-md text-label-md px-2 py-1 rounded text-xs font-bold">
                      Intermediate
                    </span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-xs relative z-10">
                    Organic Chemistry
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-md relative z-10">
                    Carbon compounds, structures, and reactions.
                  </p>
                  <div className="mt-auto space-y-sm relative z-10">
                    <div className="flex justify-between font-label-md text-label-md text-on-surface-variant text-xs">
                      <span>Progress</span>
                      <span className="font-bold text-emerald-600">32%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-[32%]"
                        style={{ transition: "width 1s ease-in-out" }}
                      ></div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mb-md">
                      8/25 Topics Completed
                    </p>
                    <div className="pt-sm border-t border-outline-variant flex flex-col gap-sm">
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          history
                        </span>
                        Last opened:{" "}
                        <span className="font-medium text-on-surface truncate">
                          Alkanes and Alkenes
                        </span>
                      </p>
                      <button className="w-full bg-transparent border border-outline text-on-surface font-label-md text-label-md py-2 rounded-lg hover:bg-surface-container-low hover:border-on-surface transition-colors flex justify-center items-center gap-xs">
                        Continue Learning
                        <span className="material-symbols-outlined text-sm">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recently Viewed Horizontal Scroll */}
              <div className="mt-xl">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">
                  Recently Viewed Topics
                </h3>
                <div className="flex overflow-x-auto pb-4 gap-md snap-x">
                  {/* Mini Topic Card 1 */}
                  <div className="min-w-[240px] bg-surface border border-outline-variant rounded-xl p-md snap-start hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex items-center gap-sm mb-xs">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[18px]">
                          functions
                        </span>
                      </div>
                      <span className="font-label-md text-label-md text-on-surface-variant text-xs">
                        Calculus II
                      </span>
                    </div>
                    <h5 className="font-headline-md text-headline-md text-sm text-on-surface mb-1">
                      Integration by Parts
                    </h5>
                    <p className="font-body-sm text-body-sm text-xs text-on-surface-variant">
                      Viewed 2 hours ago
                    </p>
                  </div>

                  {/* Mini Topic Card 2 */}
                  <div className="min-w-[240px] bg-surface border border-outline-variant rounded-xl p-md snap-start hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex items-center gap-sm mb-xs">
                      <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[18px]">
                          public
                        </span>
                      </div>
                      <span className="font-label-md text-label-md text-on-surface-variant text-xs">
                        World History
                      </span>
                    </div>
                    <h5 className="font-headline-md text-headline-md text-sm text-on-surface mb-1">
                      The Industrial Revolution
                    </h5>
                    <p className="font-body-sm text-body-sm text-xs text-on-surface-variant">
                      Viewed yesterday
                    </p>
                  </div>

                  {/* Mini Topic Card 3 */}
                  <div className="min-w-[240px] bg-surface border border-outline-variant rounded-xl p-md snap-start hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex items-center gap-sm mb-xs">
                      <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[18px]">
                          psychology
                        </span>
                      </div>
                      <span className="font-label-md text-label-md text-on-surface-variant text-xs">
                        Psychology 101
                      </span>
                    </div>
                    <h5 className="font-headline-md text-headline-md text-sm text-on-surface mb-1">
                      Cognitive Biases
                    </h5>
                    <p className="font-body-sm text-body-sm text-xs text-on-surface-variant">
                      Viewed 3 days ago
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar (Widgets - 4 cols on LG) */}
            <div className="md:col-span-8 lg:col-span-4 space-y-md md:space-y-lg">
              {/* AI Insight Widget */}
              <div className="bg-gradient-to-br from-inverse-surface to-on-surface text-inverse-on-surface rounded-xl p-md md:p-lg relative overflow-hidden shadow-lg">
                {/* Decorative bg */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-sm mb-md">
                    <span
                      className="material-symbols-outlined text-tertiary-fixed-dim"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      auto_awesome
                    </span>
                    <h3 className="font-headline-md text-headline-md text-sm font-bold text-white">
                      AI Study Insight
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm mb-md text-slate-300">
                    You learn faster in the mornings. Scheduling your difficult
                    Quantum Physics topics before 11 AM could improve retention
                    by up to 20%.
                  </p>
                  <button className="bg-white/10 hover:bg-white/20 text-white font-label-md text-label-md text-xs py-1.5 px-3 rounded backdrop-blur-sm transition-colors border border-white/20">
                    Apply to Schedule
                  </button>
                </div>
              </div>

              {/* Upcoming Deadlines */}
              <div className="elevated-card p-md bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-md">
                  <h3 className="font-headline-md text-headline-md text-base text-on-surface">
                    Upcoming Tasks
                  </h3>
                  <button className="text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      more_horiz
                    </span>
                  </button>
                </div>
                <div className="space-y-sm">
                  <div className="flex items-start gap-sm p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-outline-variant">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-error"></div>
                    <div className="flex-1">
                      <p className="font-label-md text-label-md text-on-surface text-sm">
                        Physics Quiz 3
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                        Today, 11:59 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-sm p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-outline-variant">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-orange-400"></div>
                    <div className="flex-1">
                      <p className="font-label-md text-label-md text-on-surface text-sm">
                        Chem Lab Report
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                        Tomorrow, 5:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-sm p-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-outline-variant">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-400"></div>
                    <div className="flex-1">
                      <p className="font-label-md text-label-md text-on-surface text-sm">
                        Math Assignment
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                        Friday, 10:00 AM
                      </p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-sm text-primary font-label-md text-label-md text-xs py-2 hover:bg-surface-container-low rounded transition-colors">
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
