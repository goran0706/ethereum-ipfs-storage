import { useContractRead } from 'wagmi'

import { contract } from '../constants'
import { IFileInfo } from '../interfaces'

const useFileRead = (getter: string, id?: number) => {
  const config = {
    ...contract,
    functionName: getter,
    ...(id !== null && id !== undefined && { args: [id] })
  }

  const { data, error, isError, isLoading } = useContractRead(config)

  return {
    data: data as IFileInfo,
    error,
    isError,
    isLoading
  }
}

export default useFileRead
