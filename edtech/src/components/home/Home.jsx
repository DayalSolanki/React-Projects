import React from 'react'
import { Navbar } from '../../common/navbar/Navbar'
import Banner from '../banner/Banner'
import Section from '../section/Section'
import ThreeDComponent from '../3DComponent/3DComponent'
import Footer from '../../common/footer/Footer'

export const Home = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-400 text-gray-600 text-lg">
       <Navbar />
      <Banner/>
      <Section title="Demanding Courses" />
      <Section title="Short Term Training" />
      <Section title="Internship Opportunities" />
      <Section title="Self Assessment" />
      <Section title="Testimonials" />
      <ThreeDComponent/>
      <Footer />
    </div> 
  )
  
}
