/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Welcome.jsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/07 09:13:12 by jmykkane          #+#    #+#             */
/*   Updated: 2024/01/14 07:13:45 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import computerImage from '../resources/mac.png'
import oldImage from '../resources/old.png'
import { useEffect } from 'react';
import '../css/Welcome.css'

const Welcome = () => {
  
  // pair for span 'hitaat'
  const LoadPage = () => {
    return (
      <div className='h-full pb-10 flex flex-col justify-center items-center bg-secondary clip-computer-screen'>
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }

  // pair for span 'vanhat'
  const OldPage = () => {
    return (
      <div className='relative h-full pb-10 flex flex-col justify-center items-center'>
        <div className='absolute lg:top-[5%]  lg:bottom-[20%]  lg:right-[21%]  lg:left-[21%] left-[22%] top-[5%] bottom-[26%] right-[22%] bg-oldSite bg-cover'/>
      </div>
    )
  }

  useEffect(() => {
    // Logic to switch span to next one
    const switchSpan = () => {
      const show = document.querySelector('span[data-show]')
      const next = show.nextElementSibling || document.querySelector('span:first-child')
      const up = document.querySelector('span[data-up]')

      if (up) {
        up.removeAttribute('data-up')
      }

      show.removeAttribute('data-show')
      show.setAttribute('data-up', '')
      next.setAttribute('data-show', '')
    }

    // Logic to switch mac image to next
    

    const interval = setInterval(switchSpan, 4000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='h-[100dvh] lg:h-[85dvh] w-full flex flex-col justify-center'>
      <div className='lg:h-1/2 h-full lg:w-full flex flex-col items-center pt-10'>
        <h2 className='text-secondary-100'>
          Onko teilläkin
          <div className="mask">
            <span data-show>hitaat</span>
            <span>vanhat</span>
            <span>tylsät</span>
            <span>blaaah</span>
          </div>
          <div>
            <h2 className='text-secondary-100'>nettisivut?</h2>
          </div>
        </h2>
      
      </div>

      <div className='h-1/2 flex flex-col items-center justify-center lg:justify-end pb-3'>
        <div className='relative'>
          <img src={computerImage} alt='Computer image' className='relative px-10 pb-10 z-10'/>
            <div className='absolute w-full h-full top-0 left-0 z-0'>
              {/* <LoadPage /> */}
              <OldPage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome