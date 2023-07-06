import { useContractRead, useWalletClient } from 'wagmi'

import { contract } from '../constants'

const useFileRead = <T>(getter: string, id?: number) => {
  const { data: walletClient } = useWalletClient()

  const config = {
    ...contract,
    functionName: getter,
    ...(id !== null && id !== undefined && { args: [id] }),
    account: walletClient?.account
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
