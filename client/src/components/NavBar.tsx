import { Container, SimpleGrid } from '@chakra-ui/react'
import {
  BsFiletypeTxt,
  BsFillCollectionFill,
  BsFillFileEarmarkMusicFill,
  BsFillImageFill,
  BsPersonVideo,
  BsUpload
} from 'react-icons/bs'

import { ColorModeSwitch, Logo, Menu, MenuItem, WalletConnect } from '.'

const NavBar = () => {
  return (
    <Container padding='1rem 2rem' minW='full'>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={2} alignItems='center'>
        <Logo />
        <Menu>
          <MenuItem path='nfts' icon={<BsFillCollectionFill />} />
          <MenuItem path='photos' icon={<BsFillImageFill />} />
          <MenuItem path='videos' icon={<BsPersonVideo />} />
          <MenuItem path='audios' icon={<BsFillFileEarmarkMusicFill />} />
          <MenuItem path='documents' icon={<BsFiletypeTxt />} />
          <MenuItem path='upload' icon={<BsUpload />} />
          <ColorModeSwitch />
        </Menu>
        <WalletConnect />
      </SimpleGrid>
    </Container>
  )
}

export default NavBar
