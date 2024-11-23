import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const MobilePopUp = () => {

  const [show, setShow] = useState(true)

  return (
      show ? <div className='xs:hidden fixed top-0 h-screen w-screen bg-slate-400 z-50 py-24 px-4 bg-opacity-30'>
        <div className='w-full h-full green-pink-gradient p-1 rounded-2xl'>
          <div className='w-full h-full bg-primary rounded-[14px] p-6 flex flex-col justify-between'>
            <div className="w-full flex flex-col gap-2">
              <h1 className='text-white text-4xl text-center font-bold'>Hey There!</h1>
              <h2 className='text-center text-secondary text-xl'>Seems like you're on a phone</h2>
            </div>
            

            <div className='w-full flex flex-col items-center gap-4'>
              <h3 className='font-semibold text-secondary text-sm'>Are you primarily here for my contact?</h3>

              <div className='flex flex-col gap-4 items-center w-full bg-tertiary bg-opacity-50 p-4 rounded-xl shadow-lg shadow-purple-600 border-purple-800 border-2'>
                <div className='flex gap-4'>
                  <a href='https://github.com/Alex-Zeng-UofT' target='_blank'
                  className='text-secondary hover:text-white font-bold text-xl'>
                    GitHub <FontAwesomeIcon icon={faSquareGithub} />
                  </a>
                  <a href='https://www.linkedin.com/in/alexxzeng/' target='_blank'
                  className='text-secondary hover:text-white font-bold text-xl'>
                    LinkedIn <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
                
                <div className='flex flex-col gap-2 items-center'>
                  <p className='text-secondary font-bold text-lg'>a.zeng@mail.utoronto.ca</p>
                  <p className='text-secondary font-bold text-l'>+1 &#40;604&#41; 368-9308</p>
                </div>
                
              </div>
            </div>

            <button className='bg-tertiary py-4 px-4 rounded-xl text-secondary text-sm font-semibold hover:text-white 
            hover:scale-105 hover:bg-opacity-50'
            onClick={() => setShow(false)}>
              Nope, I'm here for the full website!
            </button>
          </div>
        </div>
    </div> : <></>
  )
}

export default MobilePopUp