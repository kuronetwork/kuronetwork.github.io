export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-4xl font-bold text-cyber-light mb-8 text-center">
        聯絡<span className="neon-text">我</span>
      </h1>

      <div className="cyber-card rounded-lg p-8">
        <p className="text-center text-cyber-light/60 mb-8">
          歡迎透過以下方式與我聯繫
        </p>

        <div className="space-y-4">
          <ContactLink
            href="mailto:contact@kuronetwork.me"
            icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            title="Email"
            subtitle="contact@kuronetwork.me"
            isStroke
          />
          <ContactLink
            href="https://twitter.com/catkuroH"
            icon="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
            title="Twitter"
            subtitle="@catkuroH"
          />
          <ContactLink
            href="https://www.linkedin.com/in/kurohuang/"
            icon="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 4a2 2 0 100 4 2 2 0 000-4z"
            title="LinkedIn"
            subtitle="Kuro Huang"
          />
          <ContactLink
            href="https://medium.com/blacksecurity/"
            icon="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
            title="Medium"
            subtitle="@blacksecurity"
          />
        </div>

        <div className="mt-8 pt-8 border-t border-accent/20 text-center">
          <p className="text-cyber-light/50 italic">
            "Maybe we can have coffee sometime."
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactLink({ href, icon, title, subtitle, isStroke = false }: {
  href: string;
  icon: string;
  title: string;
  subtitle: string;
  isStroke?: boolean;
}) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 p-4 rounded-lg border border-accent/20 hover:border-accent/50 hover:shadow-neon transition-all duration-300 group"
    >
      <svg 
        className="w-8 h-8 text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all" 
        fill={isStroke ? "none" : "currentColor"} 
        stroke={isStroke ? "currentColor" : undefined}
        strokeWidth={isStroke ? 2 : undefined}
        strokeLinecap={isStroke ? "round" : undefined}
        strokeLinejoin={isStroke ? "round" : undefined}
        viewBox="0 0 24 24"
      >
        <path d={icon} />
      </svg>
      <div>
        <p className="font-semibold text-cyber-light group-hover:text-accent transition-colors">{title}</p>
        <p className="text-sm text-cyber-light/50">{subtitle}</p>
      </div>
    </a>
  );
}
