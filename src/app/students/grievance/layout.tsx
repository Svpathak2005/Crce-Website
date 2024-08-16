import { Inter } from 'next/font/google'
import '../../globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ReCaptchaProvider } from 'next-recaptcha-v3'
const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={`${inter.className}`}>
      <ReCaptchaProvider reCaptchaKey="6LfuCCIqAAAAAP6VpQckSxRAp1W7MmDhhHZzrX3t">
        {children}
      </ReCaptchaProvider>
    </section>
  )
}
