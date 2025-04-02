// app/api/s3/route.ts
import { NextRequest, NextResponse } from 'next/server'
import * as Minio from 'minio'
import { s3Client } from '@/utils/s3-file-management'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    let path = searchParams.get('path') || ''

    // Ensure the path starts with /data
    if (!path.startsWith('/')) path = '/' + path
    const fullPath = 'data' + path

    // Remove leading slash for S3 listing
    const s3Path = fullPath.startsWith('/') ? fullPath.substring(1) : fullPath

    // Get bucket name from environment variables
    const bucketName = process.env.STORAGE_S3_BUCKET || 'b11'

    // List all objects with the specified prefix
    const stream = s3Client.listObjectsV2(bucketName, s3Path, true)

    const fileList: {
      name: string
      path: string
      size: number
      lastModified: Date | null
      isDirectory: boolean
      downloadUrl: string
    }[] = []

    // Add directories (common prefixes)
    const dirSet = new Set<string>()

    await new Promise<void>((resolve, reject) => {
      stream.on('data', (obj) => {
        if (!obj.name || obj.name === s3Path) return // Fix undefined issue

        let relativePath = obj.name.substring(s3Path.length)
        if (!relativePath.startsWith('/')) relativePath = '/' + relativePath

        const slashIndex = relativePath.indexOf('/', 1)

        if (slashIndex !== -1) {
          const dirName = relativePath.substring(1, slashIndex)
          const dirPath = path + '/' + dirName

          if (!dirSet.has(dirName)) {
            dirSet.add(dirName)
            fileList.push({
              name: dirName,
              path: dirPath.replace(/\/+/g, '/'),
              size: 0,
              lastModified: null,
              isDirectory: true,
              downloadUrl: '',
            })
          }
        } else {
          const fileName = relativePath.substring(1)
          fileList.push({
            name: fileName,
            path: (path + '/' + fileName).replace(/\/+/g, '/'),
            size: obj.size,
            lastModified: obj.lastModified || null,
            isDirectory: false,
            downloadUrl: obj.name
              ? `/api/s3/download?path=${encodeURIComponent(obj.name)}`
              : '',
          })
        }
      })

      stream.on('error', (err) => {
        reject(err)
      })

      stream.on('end', () => {
        resolve()
      })
    })

    return NextResponse.json({
      success: true,
      currentPath: path,
      files: fileList,
    })
  } catch (error) {
    console.error('Error listing S3 files:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to list files' },
      { status: 500 }
    )
  }
}
