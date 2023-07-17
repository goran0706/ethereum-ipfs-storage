import { Stack } from '@chakra-ui/react'
import { Children, ReactElement, cloneElement } from 'react'

// Compound Components (Menu & MenuItem)

interface IMenu {
  children: ReactElement[]
}

const Menu = ({ children }: IMenu) => {
  const elements = Children.map(children, (child, index) => cloneElement(child, { key: index }))

  return (
    <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
      {elements}
    </Stack>
  )
}

export default Menu
