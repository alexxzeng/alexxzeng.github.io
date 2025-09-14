import { useState, useRef } from "react"
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { EarthCanvas } from './canvas'
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [colour, setColour] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({ ...form, [name]: value})
    setFeedback('')
    setIsSubmitted(false);
  }
 


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_brr0xqw',
                  'template_iqqazu4',
                  {
                    from_name: `${form.name}, ${form.email}`,
                    to_name: "Alex",
                    from_email: form.email,
                    to_email: 'alex.zenggg@gmail.com',
                    message: form.message
                  },
                  'kbeb8JB7ubEAK0sTu').then(() => {
                    setLoading(false)
                    setColour('g')
                    setFeedback('Message Succesfully Delivered')
                    setForm({
                      name: '',
                      email: '',
                      message: ''
                    })
                    setIsSubmitted(true);
                  }, (error) => {
                    setLoading(false)
                    setColour('r')
                    setFeedback('Something Went Wrong, Please Try Again')
                    setIsSubmitted(false);
                  })
  }

  return (
    <div className="flex xl:mt-12 xl:flex-row flex-col-reverse overflow-hidden xl:ml-[4vw] 
    justify-center xl:justify-around pb-32">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] bg-tertiary p-8 rounded-2xl max-w-xl shadow-[0_10px_8px_-3px] shadow-purple-900">
        <p className={styles.sectionSubText}>Connect with me</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} required
            onChange={handleChange} placeholder="Let's start with your name"
            className="bg-[#2d2742] py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none border-none font-medium"/>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="text" name="email" value={form.email} required
            onChange={handleChange} placeholder="And now your email"
            className="bg-[#2d2742] py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none border-none font-medium"/>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows='6' name="message" value={form.message} required
            onChange={handleChange} placeholder="Finally, your epic message to be delivered"
            className="bg-[#2d2742] py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none border-none font-medium"/>
          </label>

          <p className={`${colour == 'r' ? "text-red-700" : 'text-green-700'} text-[14px] h-[14px] mt-[-16px] mb-[-16px] flex justify-center`}>{feedback}</p>
          
          <div className="flex justify-center">
            <button type='submit' className={`p-4 pl-6 pr-6 bg-secondary text-tertiary
            font-bold w-fit rounded-xl ${isSubmitted ? '' : 'hover:bg-tertiary hover:text-secondary'} shadow-md
            shadow-primary`} disabled={isSubmitted}>
              {loading ? 'Working on it!' : 'Send it to me!'}
            </button>
          </div>
          
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")