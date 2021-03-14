import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ delay }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                delay: delay,
                type: "spring",
                damping: 8,
            }}
        >
            <nav className='space-x-10'>
                <ul className='flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin'>
                    <li>
                        <a href='#projects' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href='#contact' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/rohan-portfolio-be26d.appspot.com/o/rohan-resume.pdf?alt=media&token=92db2157-d956-4879-bc5a-ea8781e0e56d' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </motion.div>
    );
};

export default Header;