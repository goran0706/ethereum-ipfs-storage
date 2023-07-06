import { Box } from '@chakra-ui/react'
import { ComponentType } from 'react'

import { IFileInfo } from '../../interfaces'

const withHoverEffect =
  <P extends IFileInfo>(Component: ComponentType<P>) =>
  (props: P) => {
    return (
      <Box
        _hover={{
          transform: 'scale(1.03)',
          transition: 'transform .15s ease-in-out'
        }}
        overflow='hidden'
        boxShadow='md'
        borderRadius='md'
      >
        <Component {...props} />
      </Box>
    )
  }

export default withHoverEffect
