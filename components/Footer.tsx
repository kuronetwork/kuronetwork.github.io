export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-primary border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">Maybe we can have coffee sometime.</p>
          <p className="text-sm">© {new Date().getFullYear()} Kuro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
