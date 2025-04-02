// app/s3-browser/page.tsx
'use client'

import S3FileBrowser from '@/components/S3FileBrowser'

export default function S3BrowserPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">S3 File Browser</h1>
      <p className="mb-6">Browse and download files from your S3 bucket</p>

      <S3FileBrowser initialPath="" />
    </div>
  )
}
