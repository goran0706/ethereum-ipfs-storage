import { useContractRead } from 'wagmi'

import { contract } from '../constants'

const useFileRead = <T>(getter: string, id?: number) => {
  const config = {
    ...contract,
    functionName: getter,
    ...(id !== null && id !== undefined && { args: [id] })
  }

  const { data, error, isError, isLoading } = useContractRead(config)

  return {
    data: data as T,
    error,
    isError,
    isLoading
  }
}

export default useFileRead
