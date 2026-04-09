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
    <section className="bg-brand-warm-white border-b border-surface-border-light" aria-label="Service guarantees">
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-surface-border-light">
          {trustPoints.map((point, i) => (
            <div
              key={point.title}
              className="flex flex-col gap-1 px-5 sm:px-7 py-5 sm:py-6"
            >
              <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-brand-copper">
                {point.title}
              </p>
              <p className="text-sm text-surface-stone leading-snug">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
