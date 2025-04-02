// src/utils/s3-file-management.ts
import * as Minio from 'minio'
import type internal from 'stream'

// Create a new Minio client with the S3 endpoint, access key, and secret key
export const s3Client = new Minio.Client({
  endPoint: process.env.S3_ENDPOINT || 'minio-server',
  port: process.env.S3_PORT ? Number(process.env.S3_PORT) : 9000,
  accessKey: process.env.S3_ACCESS_KEY || process.env.STORAGE_S3_KEY || '',
  secretKey: process.env.S3_SECRET_KEY || process.env.STORAGE_S3_SECRET || '',
  useSSL: process.env.S3_USE_SSL === 'true',
})

export async function createBucketIfNotExists(bucketName: string) {
  const bucketExists = await s3Client.bucketExists(bucketName)
  if (!bucketExists) {
    await s3Client.makeBucket(bucketName)
  }
}

export async function listFiles(prefix: string): Promise<Minio.BucketItem[]> {
  const bucketName = process.env.STORAGE_S3_BUCKET || 'b11'
  const objectsStream = s3Client.listObjectsV2(bucketName, prefix, true)

  return new Promise((resolve, reject) => {
    const files: Minio.BucketItem[] = []

    objectsStream.on('data', (obj) => {
      files.push(obj)
    })

    objectsStream.on('error', (err) => {
      reject(err)
    })

    objectsStream.on('end', () => {
      resolve(files)
    })
  })
}

export async function getFileStream(path: string): Promise<internal.Readable> {
  const bucketName = process.env.STORAGE_S3_BUCKET || 'b11'
  return s3Client.getObject(bucketName, path)
}
