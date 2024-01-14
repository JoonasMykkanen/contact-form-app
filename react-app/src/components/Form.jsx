/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Form.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/06 10:38:54 by jmykkane          #+#    #+#             */
/*   Updated: 2024/01/11 18:27:37 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import gsap from 'gsap'

const Form = () => {
  const [showUrl, setShowUrl] = useState(false)
  const urlFieldRef = useRef(null)
  
  // Toggles and animates input field based on user choice of radio form
  const radioFormToggle = (event) => {
    if (event.target.value === 'yes' && showUrl === false) {
      gsap.set(urlFieldRef.current, { pointerEvents: 'auto' })
      gsap.to(urlFieldRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: 'power4.inOut'
      })
      setShowUrl(true)
    } else {
      gsap.to(urlFieldRef.current, { x: 300, opacity: 0, duration: 0.3 })
      gsap.set(urlFieldRef.current, { pointerEvents: 'none' })
      setShowUrl(false)
    }
  }

  useEffect(() => {
    if (urlFieldRef.current) {
        gsap.set(urlFieldRef.current, {
          pointerEvents: 'none',
          opacity: 0,
          x: 300,
        });
    }
  }, []);

  return (
    <div className="w-full px-10 py-5 pt-10 ">
      
      <header className="text-center mb-8">
        <h1 className="font-bold text-4xl text-gray-900">Jätäthän yhteystietosi</h1>
        <p className='text-xl'>Palailen asiaan yleensä saman päivän aikana</p>
      </header>
      <form action="#">

        {/* FIRST NAME */}
        <div className="flex -mx-3 mb-3">
          <div className="w-1/2 px-3">
            <div className="relative">
              <input id="first" name="first" type="text" className="peer h-10 w-full pl-2 rounded-lg border-2 border-gray-300 text-primary-80 placeholder-transparent outline-none focus:border-accent" placeholder="Matti" />
            <label htmlFor="first" className="absolute pl-2 left-0 -top-5 text-primary-60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm">Nimi</label>
            </div>
          </div>

          {/* COMPANY */}
          <div className="w-1/2 pr-3">
            <div className="relative">
              <input id="last" name="last" type="text" className="peer h-10 w-full pl-2 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-transparent outline-none focus:border-accent" placeholder="Meikäläinen" />
              <label htmlFor="last" className="absolute pl-2 left-0 -top-5 text-primary-60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm">Yritys</label>
            </div>
          </div>
        </div>

        {/* EMAIL */}
        <div className="flex">
          <div className="w-full my-3">
            <div className="relative">
              <input id="email" name="email" type="email" className="peer h-10 w-full pl-2 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-transparent outline-none focus:border-accent" placeholder="john@doe.com" />
              <label htmlFor="email" className="absolute pl-2 left-0 -top-5 text-primary-60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm">Sähköposti</label>
            </div>
          </div>
        </div>

        {/* PHONE */}
        <div className="flex">
          <div className="w-full my-3">
            <div className="relative">
              <input id="phone" name="phone" type="tel" className="peer h-10 w-full pl-2 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-transparent outline-none focus:border-accent" placeholder="+358 40 123 123" />
              <label htmlFor="phone" className="absolute pl-2 left-0 -top-5 text-primary-60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm">Puhelin numero</label>
            </div>
          </div>
        </div>
        
        {/* MESSAGE */}
        <div className="flex">
          <div className="w-full my-3">
            <div className="relative">
              <textarea id="msg" name="msg" className="peer h-40 w-full pl-2 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-transparent outline-none focus:border-accent resize-none" rows="4" placeholder="asd">
              </textarea>
              <label htmlFor="msg" className="absolute pl-2 left-0 -top-5 text-primary-60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm">Lisätiedot</label>
            </div>
          </div>
        </div>

        {/* SEND BUTTON */}
        <div className="flex">
          <div className="w-full">
            <button className="block w-full mx-auto bg-accent hover:bg-action focus:bg-action text-primary-100 rounded-lg px-3 py-3 font-semibold">Lähetä</button>
          </div>
        </div>
        
      </form>
    </div>       
  )
}

export default Form