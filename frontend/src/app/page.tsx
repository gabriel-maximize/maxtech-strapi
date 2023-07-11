import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { Servicos } from '@/components/sections/Servicos'

export default function Home() {
  return (
    <>
      <Header />
      <main className="home preload">
        <Banner />
        <Servicos />
      </main>
    </>
  )
}
