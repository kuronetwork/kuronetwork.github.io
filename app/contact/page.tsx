export default function ContactPage() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-display text-5xl text-ink mb-3">聯絡</h1>
      <hr className="red-rule mb-10 w-24" />

      <div>
        <ContactRow
          href="mailto:contact@kuronetwork.me"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          title="Email"
          subtitle="contact@kuronetwork.me"
        />
        <ContactRow
          href="https://twitter.com/catkuroH"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          }
          title="Twitter"
          subtitle="@catkuroH"
        />
        <ContactRow
          href="https://www.linkedin.com/in/kurohuang/"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 4a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
          }
          title="LinkedIn"
          subtitle="Kuro Huang"
        />
        <ContactRow
          href="https://medium.com/blacksecurity/"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          }
          title="Medium"
          subtitle="@blacksecurity"
        />
      </div>

      <p className="mt-14 font-display italic text-warm-gray text-lg">
        &ldquo;Maybe we can have coffee sometime.&rdquo;
      </p>
    </div>
  )
}

function ContactRow({
  href,
  icon,
  title,
  subtitle,
}: {
  href: string
  icon: React.ReactNode
  title: string
  subtitle: string
}) {
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="contact-row"
    >
      <span className="text-warm-gray flex-shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="font-ui font-semibold text-ink text-base">{title}</p>
        <p className="font-mono text-sm text-warm-gray">{subtitle}</p>
      </div>
      <svg className="w-4 h-4 text-warm-gray flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  )
}
