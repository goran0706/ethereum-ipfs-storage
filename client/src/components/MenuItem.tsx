import { IconButton, Tooltip } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

// Compound Components (Menu & MenuItem)

interface IMenuItem {
  path: string
  icon: ReactElement
}

const MenuItem = ({ path, icon }: IMenuItem) => {
  const toTitleCase = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)

  return (
    <Tooltip hasArrow color='white' backgroundColor='blue.600' label={toTitleCase(path)}>
      <IconButton as={NavLink} to={path} icon={icon} aria-label={path} colorScheme='gray' />
    </Tooltip>
  )
}

export default MenuItem
