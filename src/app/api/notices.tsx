'use server'

export interface Notice {
  id: number
  status: string
  date_created: string
  date_updated: string | null
  title: string
  info: string //desce
  about: string //type
}

export interface NoticesResponse {
  data: Notice[]
}

export default async function getNotices(): Promise<NoticesResponse> {
  const response = await fetch('http://localhost:8055/items/notices')
  const data: NoticesResponse = await response.json()
  return data
}
