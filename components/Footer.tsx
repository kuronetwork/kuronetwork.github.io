export default function Footer() {
  return (
    <footer className="mt-24 border-t border-surface">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p className="font-mono text-sm text-warm-gray">
            © {new Date().getFullYear()} Kuro. All rights reserved.
          </p>
        </div>
        <p className="font-display italic text-warm-gray text-sm md:text-base md:max-w-xs md:text-right">
          &ldquo;Maybe we can have coffee sometime.&rdquo;
        </p>
      </div>
    </footer>
  )
}
