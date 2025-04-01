import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-gray-100 py-12 pt-48">
      <div className="rounded-lg bg-white p-10 text-center shadow-lg">
        <h2 className="mb-4 text-4xl font-bold text-gray-800">
          404 - Not Found
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Could not find the requested resource.
        </p>
        <div className="flex space-x-4">
          <Link href="/">
            <div className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow-sm transition-colors hover:bg-blue-700">
              Return Home
            </div>
          </Link>
          <Link href="/debug">
            <div className="rounded-lg bg-green-600 px-6 py-3 text-white shadow-sm transition-colors hover:bg-green-700">
              Go to Debug Page
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
