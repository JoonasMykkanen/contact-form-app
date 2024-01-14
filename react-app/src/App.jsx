/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/03 11:40:30 by jmykkane          #+#    #+#             */
/*   Updated: 2024/01/11 21:06:01 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// LIBRARIES
import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

// RESOURCES
import { ReactComponent as ArrowForward } from './resources/arrow_forward.svg'
import { ReactComponent as ArrowBackward } from './resources/arrow_back.svg'

// COMPONENTS
import Welcome from './components/Welcome'
import Details from './components/Details'
import About from './components/About'
import Form from './components/Form'

// CSS
import './css/App.css'
import 'swiper/css'

const FIRST_PAGE = 0
const LAST_PAGE = 3

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const swiperRef = useRef(null)

  const isSelected = (id) => currentPage === id

  const handleBackward = () => {
    if (!swiperRef.current) return
    if (currentPage > FIRST_PAGE) {
      swiperRef.current.swiper.slidePrev()
      const newPage = currentPage - 1
      setCurrentPage(newPage)
    }
  }

  const handleForward = () => {
    if (!swiperRef.current) return
    if (currentPage < LAST_PAGE) {
      swiperRef.current.swiper.slideNext()
      const newPage = currentPage + 1
      setCurrentPage(newPage)
    }
  }

  return (
    <div className='min-w-screen min-h-screen flex items-center justify-center gradient-animated'>
      <div className='h-full flex flex-col lg:flex-row bg-secondary-100 text-gray-500 rounded-3xl shadow-xl justify-center lg:max-w-[70vw] lg:max-h-[85vh] overflow-auto lg:overflow-hidden'>

        {/* LEFT SIDE OF THE APP HAS THE INFO AND SELLING POINTS */}
        <div className='relative w-full h-[100dvh] bg-primary-100 lg:w-1/2 lg:h-[85dvh] z-0'>

          {/* page buttons */}
          <div className='absolute top-0 left-0 w-full h-full z-10 invisible'>
              <div className='h-full w-full flex items-center'>
                <div className='relative w-full h-[48px] flex justify-between'>

                  <button className='h-full w-[48px] ml-3 flex justify-center items-center visible button-hover' onClick={handleBackward}>
                    <ArrowBackward style={{ fill: '#FCFAF9' }} />
                  </button>

                  <button className='h-full w-[48px] mr-3 flex justify-center items-center visible button-hover' onClick={handleForward}>
                    <ArrowForward style={{ fill: '#FCFAF9' }} />
                  </button>
                  
                </div>
              </div>
            </div>

          <Swiper
              ref={swiperRef} 
              spaceBetween={50}
              onSlideChange={(swiper) => setCurrentPage(swiper.realIndex)}>
            <SwiperSlide> <Welcome/> </SwiperSlide>
            <SwiperSlide> <Details/> </SwiperSlide>
            <SwiperSlide> <About/> </SwiperSlide>
          </Swiper>

          {/* page indicator apple style */}
          <div className='absolute bottom-0 mb-3 w-full h-[24px] flex flex-col items-center'>
            <div className='px-3 h-full bg-bar rounded-2xl flex flex-row items-center justify-center'>
              <div className='rounded-xl flex flex-row items-center justify-center'>
                <div className={`w-3 h-3 rounded-xl ${isSelected(0) ? 'selected-dot' : 'bg-dark'}`}/>
                <div className={`w-3 h-3 rounded-xl mx-2 ${isSelected(1) ? 'selected-dot' : 'bg-dark'}`}/>
                <div className={`w-3 h-3 rounded-xl ${isSelected(2) ? 'selected-dot' : 'bg-dark'}`}/>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE OF APP THAT HAS THE FORM */}
        <div className='h-[100dvh] lg:w-1/2 lg:h-[85dvh]'>
          <Form />
        </div>        
      </div>
    </div>
  );
}

export default App
