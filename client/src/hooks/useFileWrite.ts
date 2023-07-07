import { useToast } from '@chakra-ui/react'
import { useContractWrite } from 'wagmi'

import { contract } from '../constants'

const useFileWrite = () => {
  const toast = useToast()

  const addFile = useContractWrite({
    ...contract,
    functionName: 'addFile',
    onSuccess(data) {
      toast({
        title: 'Transaction Success',
        description: data.hash,
        variant: 'solid',
        position: 'bottom',
        status: 'success',
        duration: 9000,
        isClosable: true
      })
    },
    onError(error) {
      toast({
        title: 'Transaction Error',
        description: error.message,
        variant: 'solid',
        position: 'bottom',
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  })

  const updateFile = useContractWrite({
    ...contract,
    functionName: 'updateFile',
    onSuccess(data) {
      toast({
        title: 'Transaction Success',
        description: data.hash,
        variant: 'solid',
        position: 'bottom',
        status: 'success',
        duration: 9000,
        isClosable: true
      })
    },
    onError(error) {
      toast({
        title: 'Transaction Error',
        description: error.message,
        variant: 'solid',
        position: 'bottom',
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  })

  const removeFile = useContractWrite({
    ...contract,
    functionName: 'removeFile',
    onSuccess(data) {
      toast({
        title: 'Transaction Success',
        description: data.hash,
        variant: 'solid',
        position: 'bottom',
        status: 'success',
        duration: 9000,
        isClosable: true
      })
    },
    onError(error) {
      toast({
        title: 'Transaction Error',
        description: error.message,
        variant: 'solid',
        position: 'bottom',
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  })

  return {
    addFile,
    updateFile,
    removeFile
  }
}

export default useFileWrite
