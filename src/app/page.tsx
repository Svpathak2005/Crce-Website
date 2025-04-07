import Industry from '@/components/industry'
import HeroSection from '@/components/hero-section'
import NoticesSection from '@/components/notices'
import EventsCards from '@/components/upcomingEvents'
import getNews from '@/app/api/news'
import getEvents from '@/app/api/events'
import HomeAbout from '@/components/homeAbout'

export default async function Home() {
  const newsRes = await getNews()
  const eventRes = await getEvents()

  const news = newsRes?.data ?? []
  const events = eventRes?.data ?? []

  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
      <EventsCards events={events} />
      <NoticesSection />
      <HomeAbout/>
      {/* <Industry /> */}
    </main>
  )
}
