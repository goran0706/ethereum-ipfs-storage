import { IFileInfo } from '../interfaces'
import useFileRead from './useFileRead'

export default function useFileReads() {
  const {
    data: nfts,
    error: errorNFTs,
    isError: isErrorNFTs,
    isLoading: isLoadingNFTs
  } = useFileRead('getNFTs')
  const {
    data: photos,
    error: errorPhotos,
    isError: isErrorPhotos,
    isLoading: isLoadingPhotos
  } = useFileRead('getPhotos')
  const {
    data: videos,
    error: errorVideos,
    isError: isErrorVideos,
    isLoading: isLoadingVideos
  } = useFileRead('getVideos')
  const {
    data: audios,
    error: errorAudios,
    isError: isErrorAudios,
    isLoading: isLoadingAudios
  } = useFileRead('getAudios')
  const {
    data: documents,
    error: errorDocuments,
    isError: isErrorDocuments,
    isLoading: isLoadingDocuments
  } = useFileRead('getDocuments')

  const list = [nfts, photos, videos, audios, documents]

  const data: IFileInfo[] = list.reduce(
    (acc: IFileInfo[], curr) => acc.concat(curr as IFileInfo[]),
    []
  )

  const error = errorNFTs || errorPhotos || errorVideos || errorAudios || errorDocuments

  const isError: boolean =
    isErrorNFTs || isErrorPhotos || isErrorVideos || isErrorAudios || isErrorDocuments

  const isLoading: boolean =
    isLoadingNFTs || isLoadingPhotos || isLoadingVideos || isLoadingAudios || isLoadingDocuments

  return { data, error, isError, isLoading }
}
