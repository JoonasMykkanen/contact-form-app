/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Form.jsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/06 10:38:54 by jmykkane          #+#    #+#             */
/*   Updated: 2024/01/08 07:21:35 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import '../css/Form.css'

const Form = () => {

  return (
    <div class="w-full px-10 py-5">
      
      <header class="text-center mb-10">
        <h1 class="font-bold text-3xl text-gray-900">Jätäthän tietosi</h1>
        <p>Palailen asiaan yleensä saman päivän aikana</p>
      </header>
      <form action="#">

        {/* FIRST NAME */}
        <div class="flex -mx-3 my-3">
          <div class="w-1/2 px-3">
            <div class="relative">
              <input id="first" name="first" type="text" class="peer h-10 w-full pl-2 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-transparent outline-none focus:border-indigo-500" placeholder="Matti" />
            <label for="first" class="absolute pl-2 left-0 -top-5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm">Nimi</label>
            </div>
          </div>

          {/* LAST NAME */}
          <div class="w-1/2 px-3">
          <div class="relative">
              <input id="last" name="last" type="text" class="peer h-10 w-full pl-2 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-transparent outline-none focus:border-indigo-500" placeholder="Meikäläinen" />
              <label for="last" class="absolute pl-2 left-0 -top-5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm">Yritys</label>
            </div>
          </div>
        </div>

        {/* EMAIL */}
        <div class="flex">
          <div class="w-full my-3">
            <div class="relative">
              <input id="email" name="email" type="email" class="peer h-10 w-full pl-2 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-transparent outline-none focus:border-indigo-500" placeholder="john@doe.com" />
              <label for="email" class="absolute pl-2 left-0 -top-5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm">Sähköposti</label>
            </div>
          </div>
        </div>

        {/* PHONE */}
        <div class="flex">
          <div class="w-full my-3">
            <div class="relative">
              <input id="phone" name="phone" type="tel" class="peer h-10 w-full pl-2 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-transparent outline-none focus:border-indigo-500" placeholder="+358 40 123 123" />
              <label for="phone" class="absolute pl-2 left-0 -top-5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm">Puhelin numero</label>
            </div>
          </div>
        </div>

        {/* ALREADY HAVE SITE? */}
        <div class="flex">
          <div class="w-full my-3">
            <h1>Onko sivut jo olemassa?</h1>
            <div class="relative">

              <label class="inline-flex">
                <span>Kyllä: </span>
                <input type="radio" name="options" value="option1" />
              </label>

              <label class="inline-flex">
                <span>Ei: </span>
                <input type="radio" name="options" value="option2" />
              </label>

            </div>
          </div>
        </div>
        

        {/* MESSAGE */}
        <div class="flex">
          <div class="w-full my-3">
            <div class="relative">
              <textarea id="msg" name="msg" class="peer h-40 w-full pl-2 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-transparent outline-none focus:border-indigo-500 resize-none" rows="4" placeholder="asd">
              </textarea>
              <label for="msg" class="absolute pl-2 left-0 -top-5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-400 peer-focus:text-sm">Lisätiedot</label>
            </div>
          </div>
        </div>

        {/* SEND BUTTON */}
        <div class="flex">
          <div class="w-full py-3">
            <button class="block w-full mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Lähetä</button>
          </div>
        </div>
        
      </form>
    </div>       
  )
}

export default Form