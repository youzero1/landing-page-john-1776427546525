const features = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="3" width="8" height="8" rx="2" fill="#0ea5e9" />
        <rect x="13" y="3" width="8" height="8" rx="2" fill="#bae6fd" />
        <rect x="3" y="13" width="8" height="8" rx="2" fill="#bae6fd" />
        <rect x="13" y="13" width="8" height="8" rx="2" fill="#0ea5e9" />
      </svg>
    ),
    title: 'Unified Workspace',
    description: 'Bring your entire team into one space. Tasks, docs, chats, and projects — all connected seamlessly.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Engineered for speed. Sub-second load times, real-time sync, and zero lag — even with thousands of tasks.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Team Collaboration',
    description: 'Real-time collaboration with live cursors, comments, and instant notifications so everyone stays in sync.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Advanced Analytics',
    description: 'Gain deep insights with real-time dashboards, custom reports, and AI-powered recommendations.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified. End-to-end encryption, SSO, RBAC, and audit logs built right in.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: '200+ Integrations',
    description: 'Connect to the tools you already love — Slack, GitHub, Figma, Jira, Notion, and many more.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-widest">Features</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Everything your team needs
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Powerful tools designed to help modern teams move faster without sacrificing quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:border-brand-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
