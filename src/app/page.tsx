import Industry from '@/components/industry'
import HeroSection from '@/components/hero-section'
import NoticesSection from '@/components/notices'
import Newsandupcoming from '@/components/newsandupcoming'
import getNews from '@/app/api/news'
import getEvents from '@/app/api/events'

export default async function Home() {
  const newsRes = await getNews()
  const eventRes = await getEvents()

  const news = newsRes?.data ?? []
  const events = eventRes?.data ?? []

  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
      <Newsandupcoming news={news} events={events} />
      <NoticesSection />
      {/* <Industry /> */}
    </main>
  )
}
