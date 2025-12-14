export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">聯絡我</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          歡迎透過以下方式與我聯繫
        </p>

        <div className="space-y-6">
          <a
            href="https://twitter.com/catkuroH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accent hover:shadow-lg transition-all"
          >
            <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Twitter</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">@catkuroH</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/kurohuang/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accent hover:shadow-lg transition-all"
          >
            <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">LinkedIn</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Kuro Huang</p>
            </div>
          </a>

          <a
            href="https://medium.com/blacksecurity/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accent hover:shadow-lg transition-all"
          >
            <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path>
            </svg>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Medium</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">@blacksecurity</p>
            </div>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 italic">
            "Maybe we can have coffee sometime."
          </p>
        </div>
      </div>
    </div>
  );
}
