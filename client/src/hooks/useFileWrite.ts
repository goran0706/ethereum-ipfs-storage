import { useContractWrite } from 'wagmi'

import { contract } from '../constants'

const useFileWrite = () => {
  const addFile = useContractWrite({
    ...contract,
    functionName: 'addFile'
  })

  const updateFile = useContractWrite({
    ...contract,
    functionName: 'updateFile'
  })

  const removeFile = useContractWrite({
    ...contract,
    functionName: 'removeFile'
  })

  return {
    addFile,
    updateFile,
    removeFile
  }
}

export default useFileWrite
