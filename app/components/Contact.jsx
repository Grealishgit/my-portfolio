import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"


const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "8926a414-00fe-4111-b2cd-000c7bd2ec57");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }


    return (
        <div

            className='w-full px-[12%] py-10 scroll-mt-10 bg-[url("/footer-bg-color.png")] 
        bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
            id='contactme'>


            <motion.h4
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className='text-center mb-2 text-lg font-Outfit'>
                Connect With Me
            </motion.h4>
            <motion.h2
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className='text-center text-5xl font-Outfit'>
                Get In Touch
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I'd love to hear from you! If you have any questions, comments or feedback,
                please feel free to contact me by filling out the form below.
            </motion.p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.1, delay: 0.6 }}
                        className='flex-1 p-3 outline-none border-[0.5px]
                     border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
                        type="text" placeholder='Enter your Name' required name='name' />

                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        className='flex-1 p-3 outline-none border-[0.5px]
                     border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
                        type="email" placeholder='Enter your Email' required name='email' />

                </div>
                <motion.textarea
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.1, delay: 0.6 }}
                    className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md
                 bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'
                    rows={'6'} placeholder='Enter your Message' required name='message' ></motion.textarea>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className='py-2 px-10 w-max flex items-center justify-center gap-2
                 bg-black/80 text-white rounded-md mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
                    type='submit'>
                    Submit now <Image src={assets.right_arrow_white} alt='right-arrow' className='w-5' />
                </motion.button>
                <p className='mt-2'>{result}</p>
            </form>


        </div>
    )
}

export default Contact
