import { VStack } from '@chakra-ui/react'

import { FileHeading, Uploader } from '../components'
import requireConnect from '../components/hoc/requireConnection'

const UploadPage = () => {
  return (
    <VStack padding='1rem 2rem'>
      <FileHeading heading='Upload' />
      <Uploader />
    </VStack>
  )
}

const EnhancedComponent = requireConnect(UploadPage)

export default EnhancedComponent
