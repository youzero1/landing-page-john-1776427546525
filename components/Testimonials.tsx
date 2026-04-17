const testimonials = [
  {
    quote: "Lumina completely transformed how our engineering team ships. We went from 2-week sprints to shipping daily. It's not just a tool — it's a competitive advantage.",
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'Stackify',
    avatar: 'SC',
    avatarColor: 'bg-brand-500',
  },
  {
    quote: "I've tried every project management tool out there. Lumina is the first one that actually adapts to how we work instead of forcing us to change our process.",
    name: 'Marcus Rivera',
    role: 'Product Lead',
    company: 'Vantara',
    avatar: 'MR',
    avatarColor: 'bg-purple-500',
  },
  {
    quote: "The analytics alone are worth it. We discovered we were wasting 30% of our sprint capacity on rework. Lumina helped us fix that in one month.",
    name: 'Priya Patel',
    role: 'Engineering Manager',
    company: 'Nexora',
    avatar: 'PP',
    avatarColor: 'bg-pink-500',
  },
  {
    quote: "Onboarding new engineers used to take weeks. With Lumina's unified workspace, they're contributing to production within their first day.",
    name: 'James Wright',
    role: 'CTO',
    company: 'Cloudify',
    avatar: 'JW',
    avatarColor: 'bg-green-500',
  },
  {
    quote: "Our cross-functional teams were always out of sync. Lumina became the single source of truth and reduced our standup time by 60%.",
    name: 'Aisha Johnson',
    role: 'Head of Product',
    company: 'Mosaic Labs',
    avatar: 'AJ',
    avatarColor: 'bg-orange-500',
  },
  {
    quote: "The GitHub and Figma integrations are seamless. For the first time, designers and developers are actually speaking the same language.",
    name: 'Tom Nguyen',
    role: 'Design Engineer',
    company: 'Craft Studio',
    avatar: 'TN',
    avatarColor: 'bg-teal-500',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Loved by 10,000+ teams
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Don't take our word for it. Here's what real teams say about Lumina.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" fill="#f59e0b" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">"{t.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.avatarColor} flex items-center justify-center text-white text-xs font-semibold`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
