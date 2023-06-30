import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="home preload">
        <Banner />
      </main>
    </>
  )
}
