import { LinkVariants } from '../../../motion/link-variants';
import { burgerMenu } from '../../../motion/burger-variants';
import { LinkContainer } from '../../../styled/common/link-container';
import { FlexBox } from '../../../styled/common/flex-box'
import { NavLink } from '../../../styled/common/nav-link'
import { RiCloseLine, RiMenu5Line } from 'react-icons/ri';
import { BurgerContainer } from '../../../styled/burger-menu/container'
import { IconContainer } from '../../../styled/burger-menu/icon-container'
import { navMenu } from '../../../utils/arrays-for-mapping/nav-menu'
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export const Burger = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(prev => !prev);
  return (
    <>
      <IconContainer animate={open ? { display: 'none' } : { display: 'block' }} transition={!open ? { delay: 0.45 } : {}} onClick={handleOpen}>
        <RiMenu5Line size={30} />
      </IconContainer>
      <AnimatePresence>
        {
          open && (
            <BurgerContainer key="burger" initial={'hidden'} animate={'visible'} exit={'hidden'} transition={{ duration: 0.4 }} variants={burgerMenu}>
              <IconContainer onClick={handleOpen}>
                <RiCloseLine size={40} />
              </IconContainer>
              <FlexBox direction='column'
                justifyContent='center'
                alignItems='center'
                gap='50px'
              >

                {
                  navMenu.map((item, index) => (
                    <LinkContainer key={`${item.title}_${index}`}
                      variants={LinkVariants}
                      initial='hidden'
                      animate={'visible'}
                      exit={'hidden'}
                      custom={index}
                    >
                      <NavLink size='30px' to={'/'}
                      >
                        {item.title}
                      </NavLink>

                    </LinkContainer>
                  ))
                }
              </FlexBox >
            </BurgerContainer >
          )
        }

      </AnimatePresence>
    </>

  )
}