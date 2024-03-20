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
    justify-center xl:justify-around">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl max-w-xl">
        <p className={styles.sectionSubText}>Connect with me</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} required
            onChange={handleChange} placeholder="Let's Start With Your Name"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none border-none font-medium"/>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="text" name="email" value={form.email} required
            onChange={handleChange} placeholder="And Now Your Email"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none border-none font-medium"/>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows='6' name="message" value={form.message} required
            onChange={handleChange} placeholder="Finally, Your Epic Message To Be Delivered?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none border-none font-medium"/>
          </label>
          
          <div className="flex justify-center">
            <p className={`${colour == 'r' ? "text-red-700" : 'text-green-700'} absolute top-[650px] text-[14px]`}>{feedback}</p>
            <button type='submit' className={`p-4 pl-6 pr-6 bg-secondary text-tertiary
            font-bold w-fit rounded-xl ${isSubmitted ? '' : 'hover:bg-tertiary hover:text-secondary'} shadow-md
            shadow-primary`} disabled={isSubmitted}>
              {loading ? 'Working On It!' : 'Send It To Me!'}
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