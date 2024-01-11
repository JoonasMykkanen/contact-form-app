/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Welcome.jsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/07 09:13:12 by jmykkane          #+#    #+#             */
/*   Updated: 2024/01/11 09:23:29 by jmykkane         ###   ########.fr       */
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
        <div className='absolute top-[5%] bottom-[20%] right-[20%] left-[20%] bg-oldSite bg-cover'/>
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
    <div className='h-[90dvh] w-full'>
      <div className='lg:h-1/2 lg:w-full lg:flex lg:flex-col lg:items-center pt-5'>
        <h2 className='text-secondary-80'>
          Eihän sivusi ole
          <div className="mask">
            <span data-show>hitaat?</span>
            <span>vanhat?</span>
            <span>raihnaiset?</span>
            <span>blaaah?</span>
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