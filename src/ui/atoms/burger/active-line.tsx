import { AnimatePresence } from 'framer-motion'
import { Line } from '../../../styled/burger-menu/line'

export const ActiveLine = () => {
  const variants = {
    'hidden': {
      width: 0,
    },
    'visible': {
      width: '100%',
      transition: { duration: 0.7, delay: 0.4 }
    }
  }
  return (
    <AnimatePresence>
      <Line layoutId='Underline' initial={'hidden'} animate={'visible'} exit={'hidden'} variants={variants} />
    </AnimatePresence>
  )
}