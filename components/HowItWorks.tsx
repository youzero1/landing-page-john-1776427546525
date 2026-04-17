const steps = [
  {
    number: '01',
    title: 'Create your workspace',
    description: 'Sign up and set up your team workspace in under 2 minutes. Invite your teammates and import your existing projects.',
    color: 'from-brand-400 to-brand-600',
  },
  {
    number: '02',
    title: 'Connect your tools',
    description: 'Link your existing tools like GitHub, Slack, and Figma. Lumina syncs everything so context is never lost.',
    color: 'from-purple-400 to-purple-600',
  },
  {
    number: '03',
    title: 'Ship with confidence',
    description: 'Use AI-powered planning, automated workflows, and real-time analytics to ship great products faster than ever.',
    color: 'from-pink-400 to-pink-600',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-widest">How it works</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            No long onboarding. No complex setup. Just three simple steps to transform how your team works.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-brand-200 via-purple-200 to-pink-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Number circle */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${step.color} text-white text-xl font-bold mb-6 shadow-lg`}>
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>

                {/* Arrow for non-last items on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 -right-6 text-gray-300">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
