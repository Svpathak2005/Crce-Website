// app/api/s3/download/route.ts
import { NextRequest } from 'next/server'
import { s3Client } from '@/utils/s3-file-management'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const path = searchParams.get('path')

    if (!path) {
      return new Response('Path parameter is required', { status: 400 })
    }

    // Get bucket name from environment variables
    const bucketName = process.env.STORAGE_S3_BUCKET || 'b11'

    // Get file metadata to determine content type
    const stat = await s3Client.statObject(bucketName, path)

    // Get the stream for the file
    const stream = await s3Client.getObject(bucketName, path)

    // Get the filename from the path
    const filename = path.split('/').pop() || 'download'

    // Return the file stream as the response
    return new Response(stream, {
      headers: {
        'Content-Type':
          stat.metaData['content-type'] || 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': stat.size.toString(),
      },
    })
  } catch (error) {
    console.error('Error downloading S3 file:', error)
    return new Response('Failed to download file', { status: 500 })
  }
}
