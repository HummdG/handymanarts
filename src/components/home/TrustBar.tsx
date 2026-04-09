const trustPoints = [
  {
    title: 'Free Call-Out',
    desc: 'No charge to visit and assess',
  },
  {
    title: 'Free Estimate',
    desc: 'Written quote before any work starts',
  },
  {
    title: 'Fully Insured',
    desc: 'Public liability cover on every job',
  },
  {
    title: 'Same-Day Available',
    desc: 'Urgent jobs handled promptly',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-surface-border-light" aria-label="Service guarantees">
      <div className="container-site">
        <ul className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-surface-border-light">
          {trustPoints.map((point, i) => (
            <li
              key={point.title}
              className="flex-1 flex flex-col gap-1.5 px-6 sm:px-8 py-7 sm:py-8"
            >
              <span
                className="font-display italic text-brand-copper/55 leading-none select-none block"
                style={{ fontSize: '2rem', lineHeight: 1, fontStyle: 'italic' }}
                aria-hidden="true"
              >
                {String(i + 1)}
              </span>
              <p className="font-display font-semibold text-surface-dark text-lg leading-tight mt-1">
                {point.title}
              </p>
              <p className="text-xs text-surface-stone leading-snug">{point.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
