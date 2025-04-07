'use server'

import { getOneCouncil } from '@/app/api/singleCouncil'
import { FileDown, Globe } from 'lucide-react'
import { Markdown } from '@/components/markdown' // Custom markdown component (see below)

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const council = await getOneCouncil(id)

  const imageUrl = `${process.env.NEXT_PUBLIC_ASSET_URL}${council.image}`
  const reportUrl = `${process.env.NEXT_PUBLIC_ASSET_URL}${council.report}`

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6 pt-64">
      <div className="text-3xl font-bold">{council.name}</div>

      {council.website && (
        <a
          href={
            council.website.startsWith('http')
              ? council.website
              : `https://${council.website}`
          }
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:underline"
        >
          <Globe className="h-4 w-4" />
          Visit Website
        </a>
      )}

      {council.image && (
        <img
          src={imageUrl}
          alt={council.name}
          className="max-h-[400px] w-full rounded-2xl object-cover shadow-md"
        />
      )}

      <div className="prose dark:prose-invert max-w-none">
        <Markdown>{council.data}</Markdown>
      </div>

      {council.report && (
        <a
          href={reportUrl}
          download
          className="bg-muted hover:bg-muted/80 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition"
        >
          <FileDown className="h-4 w-4" />
          Download Report
        </a>
      )}
    </div>
  )
}
