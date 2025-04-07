'use server'

export interface Events {
  id: number
  status: string
  date_created: string
  date_updated: string | null
  title: string
  description: string
  date: string
  imageUrl : string
}

export interface EventsResponse {
  data: Events[]
}

export default async function getEvents(): Promise<EventsResponse> {
  const response = await fetch('http://localhost:8055/items/events')
  const data: EventsResponse = await response.json()
  return data
}
