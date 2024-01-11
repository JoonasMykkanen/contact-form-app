/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   About.jsx                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/10 20:31:20 by jmykkane          #+#    #+#             */
/*   Updated: 2024/01/11 10:34:36 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import linkedInIcon from '../resources/linkedin.png'
import discordIcon from '../resources/discord.png'
import githubIcon from '../resources/github.png'
import headshot from '../resources/headshot.png'

const About = () => {

  return(
    <div className="w-full h-[90dvh]">
      {/* <div className="flex justify-center items-center pb-5">
        <img src={linkedInIcon} alt="linkedIn icon" className="w-10 h-10 mx-3"/>
        <img src={discordIcon} alt="discord icon" className="w-10 h-10 mx-3"/>
        <img src={githubIcon} alt="github icon" className="w-10 h-10 mx-3"/>
      </div> */}

      <div className='relative w-full h-full'>
        <div className='absolute bottom-0 right-0 ml-10'>
          <img src={headshot} alt='headshot image'/>
        </div>
      </div>
    </div>
  )
}

export default About