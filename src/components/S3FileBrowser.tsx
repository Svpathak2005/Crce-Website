// components/S3FileBrowser.tsx
import { useState, useEffect } from 'react'

interface FileItem {
  name: string
  path: string
  size: number
  lastModified: string | null
  isDirectory: boolean
  downloadUrl: string
}

interface FileBrowserProps {
  initialPath?: string
}

export default function S3FileBrowser({ initialPath = '' }: FileBrowserProps) {
  const [currentPath, setCurrentPath] = useState(initialPath)
  const [files, setFiles] = useState<FileItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchFiles() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `/api/s3?path=${encodeURIComponent(currentPath)}`
        )
        const data = await response.json()

        if (data.success) {
          setFiles(data.files)
        } else {
          setError(data.error || 'Failed to load files')
        }
      } catch (err) {
        setError('Error loading files')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchFiles()
  }, [currentPath])

  function navigateToDirectory(path: string) {
    setCurrentPath(path)
  }

  function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes'

    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  function getParentDirectory(path: string): string {
    // Remove trailing slash if present
    let cleanPath = path
    if (cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1)
    }

    const lastSlashIndex = cleanPath.lastIndexOf('/')
    if (lastSlashIndex <= 0) {
      return ''
    }

    return cleanPath.substring(0, lastSlashIndex)
  }

  return (
    <div className="container mx-auto p-4 pb-32">
      <h1 className="mb-4 text-2xl font-bold"> File Browser</h1>

      {/* Breadcrumb navigation */}
      <div className="mb-4 rounded bg-gray-100 p-2">
        <span className="font-bold">Path: </span>
        <button
          onClick={() => navigateToDirectory('')}
          className="text-blue-500 hover:underline"
        >
          Root
        </button>

        {currentPath
          .split('/')
          .filter(Boolean)
          .map((segment, index, segments) => {
            const path = '/' + segments.slice(0, index + 1).join('/')
            return (
              <span key={path}>
                <span className="mx-1">/</span>
                <button
                  onClick={() => navigateToDirectory(path)}
                  className="text-blue-500 hover:underline"
                >
                  {segment}
                </button>
              </span>
            )
          })}
      </div>

      {/* Parent directory link */}
      {currentPath && (
        <button
          onClick={() => navigateToDirectory(getParentDirectory(currentPath))}
          className="mb-4 flex items-center text-blue-500 hover:underline"
        >
          <span className="mr-1">↑</span> Up to parent directory
        </button>
      )}

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <>
          {files.length === 0 ? (
            <p>No files found in this directory.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Size</th>
                    <th className="px-4 py-2 text-left">Last Modified</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file) => (
                    <tr key={file.path} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-2">
                        {file.isDirectory ? (
                          <button
                            onClick={() => navigateToDirectory(file.path)}
                            className="flex items-center text-blue-500 hover:underline"
                          >
                            <span className="mr-2">📁</span> {file.name}
                          </button>
                        ) : (
                          <span className="flex items-center">
                            <span className="mr-2">📄</span> {file.name}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        {file.isDirectory ? '--' : formatFileSize(file.size)}
                      </td>
                      <td className="px-4 py-2">
                        {file.lastModified
                          ? new Date(file.lastModified).toLocaleString()
                          : '--'}
                      </td>
                      <td className="px-4 py-2">
                        {!file.isDirectory && (
                          <a
                            href={file.downloadUrl}
                            className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                            download
                          >
                            Download
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  )
}
