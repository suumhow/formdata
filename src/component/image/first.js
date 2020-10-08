import React, { Component } from 'react'
import './first.css'
import pic1 from '../../media/1.jpg'
import { motion } from 'framer-motion'



export default class first extends Component {

    render() {
        const imgVariants = {
            hidden: {
                x: -5000,
                opacity: 0,
                
            },
            show: {
                opacity:1,
                x: 0,
                transition: {
                    opacity: {
                        
                        duration: 1,
                        delay: 0.7,

                    },
                    default: {
                        type: 'spring',
                        stiffness: 150,
                    }
                    
                },
            hover: {
                scale: 1.2,
                transition: {
                    type: 'Spring'
                }
            }
            }
        }
        const newLocal = <motion.div className='loader'
            whileHover={{ scale: 2, color: "blue" }}
            initial={{ opacity: -50, y: '-50vw' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', stiffness: 300, velocity: 25, bounce: 0, ease: 'linear' }}>
            {true
                ? <motion.p
                    whileHover={{ scale: 2, color: "blue" }}
                    initial={{ opacity: 0, x: '+100vw' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1 }}>
                                                              Hi</motion.p>
                : null}
            <hr></hr>


        </motion.div>
        return (
            <>
                {newLocal}
                <motion.img className='image'
                    variants= {imgVariants}
                    initial="hidden"
                    animate="show"
                    whileHover='hover'
                    
                    src={pic1}></motion.img>
            </>
        )
    }
}

    function tom({}) {
      return (<motion.div className='loader' whileHover={{
  scale: 2,
  color: "blue"
}} initial={{
  opacity: -50,
  y: '-50vw'
}} animate={{
  opacity: 1,
  y: 0
}} transition={{
  type: 'tween',
  stiffness: 300,
  velocity: 25,
  bounce: 0,
  ease: 'linear'
}}>
            {true ? <motion.p whileHover={{
    scale: 2,
    color: "blue"
  }} initial={{
    opacity: 0,
    x: '+100vw'
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.1
  }}>
                                                              Hi</motion.p> : null}
            <hr></hr>


        </motion.div>);
    }
  