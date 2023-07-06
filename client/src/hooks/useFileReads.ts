import { useContractReads } from 'wagmi'

import { contract } from '../constants'
import { IFileInfo } from '../interfaces'

export default function useFileReads() {
  const { data, error, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...contract,
        functionName: 'getNFTs'
      },
      {
        ...contract,
        functionName: 'getPhotos'
      },
      {
        ...contract,
        functionName: 'getVideos'
      },
      {
        ...contract,
        functionName: 'getAudios'
      },
      {
        ...contract,
        functionName: 'getDocuments'
      }
    ]
  })

  const results = data?.reduce(
    (acc: IFileInfo[], curr) => acc.concat(curr?.result as IFileInfo[]),
    []
  )

  return {
    data: results,
    error,
    isError,
    isLoading
  }
}
