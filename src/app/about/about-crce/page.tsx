'use server'

import React from 'react'

interface Adi {
  id: number
  disappointments: string
}

async function getData() {
  const res = await fetch('http://localhost:8055/items/aditya')
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Page() {
  const { data } = await getData()
  const x: Adi = data[0]

  return (
    <main className="flex flex-col items-center justify-center">
      <h1>Aditya's Disappointments</h1>
      <p>{x.disappointments}</p>
    </main>
  )
}
