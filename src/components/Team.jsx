import React from 'react'
import Carousel from './Carousel'
import Location from './Location'

const Team = () => {
  return (
    <div>
        <Carousel />
        <section class="dark:bg-gray-900 text-white">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Our team</h2>
          <p class="font-light text-white sm:text-xl dark:text-gray-400">Meet a team of elegant professionals who are dedicated to deliver quality innovative and top-notch Services</p>
      </div> 
      <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://res.cloudinary.com/dws2bgxg4/image/upload/v1721896230/1_fftjam.jpg" alt="Bonnie Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                  <a href="#">Dick Ndiewo</a>
              </h3>
              <p>Managing Director</p>
              <ul>
        <li>B.Sc. (Eng) Mechanical (UON)</li>
        <li>Dip (Eng) Electrical (Penn Foster Global) USA</li> 
        <li>Registered Consulting Engineer (EBK)</li>   
    </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://res.cloudinary.com/dws2bgxg4/image/upload/v1721896230/2_jfziys.jpg" alt="Helene Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                  <a href="#">Evans Mganda</a>
              </h3>
              <p>Engineer</p>
              <ul>
        <li>Dip Electrical Engineering (Kenya Polytechnic) Electrician</li> 
        <li>15 years professional experience</li>
        <li></li>
    </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://res.cloudinary.com/dws2bgxg4/image/upload/v1721896231/3_nabeia.jpg" alt="Jese Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                  <a href="#">Wycliff Muriuki</a>
              </h3>
              <p>Engineer </p>
              <ul>
        <li>Bachelor’s Degree in Electrical and Electronic Engineering-Dedan Kimathi University of Technology.</li>
        <li>Electrical Engineer</li>
    </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://res.cloudinary.com/dws2bgxg4/image/upload/v1721896230/4_rgwgyn.jpg" alt="Joseph Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                  <a href="#">Harrison Irungu</a>
              </h3>
              <p>Engineer</p>
              <ul>
        <li>National Diploma– Kenya Polytechnic. </li>
        <li>Air Conditioning and Refrigeration</li>
        <li>20 Years Professional Experience</li>
    </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://res.cloudinary.com/dws2bgxg4/image/upload/v1721898048/profile_f4plfs.jpg" alt="Sofia Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                  <a href="#">Beneah Samson</a>
              </h3>
              <p>Mechanical Engineer</p>
              <ul>
        <li>Bachelor’s Degree in Mechanical Engineering – University of Nairobi.</li>
        <li>Mechanical Engineer</li>
        <li>Corporate Member (IEK)</li>
    </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://res.cloudinary.com/dws2bgxg4/image/upload/v1721898048/profile_f4plfs.jpg" alt="Leslie Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                  <a href="#">Philemon Maritim</a>
              </h3>
              <p>Assistant Mech. Engineer</p>
              <ul>
        <li>Higher National Diploma– Technical University of Kenya.</li> 
        <li>Assistant Mechanical Engineer.</li>
        <li>9 Years Professional Experience</li>
    </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://res.cloudinary.com/dws2bgxg4/image/upload/v1721898048/profile_f4plfs.jpg" alt="Michael Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight  text-white dark:text-white">
                  <a href="#">Dismas Okoth</a>
              </h3>
              <p>Mech. Engineer</p>
              <ul>
        <li>Bachelor’s Degree in Mechanical Engineering – University of Nairobi.</li>
        <li>Mechanical Engineer</li>
        <li>Graduate Engineer (EBK)</li>
        
    </ul>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://res.cloudinary.com/dws2bgxg4/image/upload/v1721898048/profile_f4plfs.jpg" alt="Neil Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight  text-white  dark:text-white">
                  <a href="#">Tito Omondi</a>
              </h3>
              <p>Electrical Engineer</p>
              <ul>
        <li>Diploma Electrical Engineering (Kenya Polytechnic)</li>
        <li>20 years Professional Experience</li>
        <li>Fire Fighting Systems Head</li>
    </ul>
          </div>
      </div>  
  </div>
</section>
<Location />
    </div>
  )
}

export default Team