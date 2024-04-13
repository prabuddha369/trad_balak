import React from 'react'
import Header from '@/components/shared/Header'
import Asthetic from '@/components/shared/Asthetic'
import Vintage from '@/components/shared/Vintage'
import FullSleves from '@/components/shared/FullSleves'
import Couples from '@/components/shared/Couples'
import Footer from '@/components/shared/Footer'

const Home = () => {
  return (
    <main className='bg-white'>
      <Header />
      <Asthetic/>
      <Couples />
      <Vintage />
      {/* <FullSleves /> */}
      <Footer />
    </main>
  )
}

export default Home