import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='aboutme' className=' w-full px-[12%] py-10 scroll-mt-20'  >
            <motion.h4
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}

                className='text-center mb-2 text-lg font-Outfit'>
                Introduction
            </motion.h4>

            <motion.h2
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className='text-center text-5xl font-Outfit'>
                About me
            </motion.h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                    className='w-94 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user'
                        className='w-full rounded-3xl' />
                </motion.div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Outfit'>
                        I am a Front-End Developer with a passion for creating beautiful and functional websites.
                        I have a strong background in HTML, CSS, and JavaScript, and I am proficient in frameworks such as React and Next.js.
                        I am experienced in working with APIs and databases, and I am always looking to learn new technologies and techniques.
                        I am a team player and I am always looking for ways to improve my skills and grow as a developer.
                    </p>
                    <motion.ul
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>


                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li key={index} className='border-[0.5px] border-yellow-400 
                            rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                             hover:shadow-black dark:border-white dark:shadow-white dark:hover:bg-darkHover/50'>
                                <Image src={isDarkMode ? iconDark : icon} alt='title' className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-60 text-sm dark:text-white/80'>{description}</p>
                            </li>
                        ))}
                    </motion.ul>
                    <motion.h4
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                        className='my-6 text-gray-700 text-md font-Outfit font-semibold dark:text-white/80'>Tools I Use</motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                        className='flex items-center gap-3 sm:gap-5'>
                        {
                            toolsData.map((tool, index) => (
                                <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border
                                 border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 '>
                                    <Image src={tool} alt='Tool' className='w-5 sm:w-7' />

                                </li>
                            ))
                        }
                    </motion.ul>
                </div>
            </div>
        </motion.div >
    )
}

export default About