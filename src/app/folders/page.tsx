// app/s3-browser/page.tsx
'use client'

import S3FileBrowser from '@/components/S3FileBrowser'

export default function S3BrowserPage() {
  return (
    <div className="sm: container mx-auto min-h-4/5 p-4 pt-32 lg:pt-56">
      <h1 className="mb-6 text-3xl font-bold">Public File Browser</h1>
      <S3FileBrowser initialPath="" />
    </div>
  )
}
