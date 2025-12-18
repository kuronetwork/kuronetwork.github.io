export default function Footer() {
  return (
    <footer className="bg-primary/80 backdrop-blur-sm border-t border-accent/20 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-cyber-light/60 mb-2">
            Maybe we can have coffee sometime.
          </p>
          <p className="text-sm text-accent/40">
            © {new Date().getFullYear()} Kuro. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-1">
            <span className="w-2 h-2 bg-accent/60 rounded-full animate-pulse" />
            <span className="w-2 h-2 bg-accent-pink/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <span className="w-2 h-2 bg-accent-purple/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
