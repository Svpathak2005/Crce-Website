'use server'

export interface News {
  id: number
  status: string
  date_created: string
  date_updated: string | null
  title: string
  image : string
}

export interface NewsResponse {
  data: News[]
}

export default async function getNews(): Promise<NewsResponse> {
  const response = await fetch('http://localhost:8055/items/news')
  const data: NewsResponse = await response.json()
  return data
}
