/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/03 11:40:30 by jmykkane          #+#    #+#             */
/*   Updated: 2024/01/10 06:30:20 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import Welcome from './components/Welcome'
import Form from './components/Form'
import './css/App.css';

function App() {

  return (
    <div className='min-w-screen min-h-screen flex items-center justify-center gradient-animated'>
      <div className="h-full flex flex-col lg:flex-row bg-secondary text-gray-500 rounded-3xl shadow-xl justify-center lg:w-[90vw] lg:h-[90vh] overflow-auto lg:overflow-hidden">

        {/* LEFT SIDE OF THE APP HAS THE INFO AND SELLING POINTS */}
        <div className="h-[100vh] bg-primary lg:w-1/2 lg:h-full">
          <Welcome />
        </div>

        {/* RIGHT SIDE OF APP THAT HAS THE FORM */}
        <div className="h-[100vh] lg:w-1/2 lg:h-full">
          <Form />
        </div>
          
      </div>
    </div>
  );
}

export default App;
