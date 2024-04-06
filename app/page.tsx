import React from 'react'
import Header from '@/components/shared/Header'
import TradBalakSpecial from '@/components/shared/TradBalakSpecial'
import SolidColor from '@/components/shared/SolidColor'
import FullSleves from '@/components/shared/FullSleves'
import PrintedShirts from '@/components/shared/PrintedShirts'
import Footer from '@/components/shared/Footer'

const Home = () => {
  return (
    <main className='bg-white'>
      <Header />
      <TradBalakSpecial />
      <PrintedShirts />
      <SolidColor />
      <FullSleves />
      <Footer />
    </main>
  )
}

export default Home