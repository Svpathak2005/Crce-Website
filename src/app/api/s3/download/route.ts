import { NextRequest } from 'next/server'
import { s3Client } from '@/utils/s3-file-management'
import { Readable } from 'stream'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const path = searchParams.get('path')

    if (!path) {
      return new Response('Path parameter is required', { status: 400 })
    }

    const bucketName = process.env.STORAGE_S3_BUCKET || 'b11'

    const stat = await s3Client.statObject(bucketName, path)
    const nodeStream = await s3Client.getObject(bucketName, path)
    const filename = path.split('/').pop() || 'download'

    // Convert Node.js stream to Web ReadableStream
    const webStream = new ReadableStream({
      start(controller) {
        nodeStream.on('data', (chunk) => controller.enqueue(chunk))
        nodeStream.on('end', () => controller.close())
        nodeStream.on('error', (err) => controller.error(err))
      },
    })

    return new Response(webStream, {
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
