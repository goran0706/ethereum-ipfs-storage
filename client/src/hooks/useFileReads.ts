import { IFileInfo } from '../interfaces'
import useFileRead from './useFileRead'

export default function useFileReads() {
  const {
    data: nfts,
    error: errorNFTs,
    isError: isErrorNFTs,
    isLoading: isLoadingNFTs
  } = useFileRead<IFileInfo[]>('getNFTs')
  const {
    data: photos,
    error: errorPhotos,
    isError: isErrorPhotos,
    isLoading: isLoadingPhotos
  } = useFileRead<IFileInfo[]>('getPhotos')
  const {
    data: videos,
    error: errorVideos,
    isError: isErrorVideos,
    isLoading: isLoadingVideos
  } = useFileRead<IFileInfo[]>('getVideos')
  const {
    data: audios,
    error: errorAudios,
    isError: isErrorAudios,
    isLoading: isLoadingAudios
  } = useFileRead<IFileInfo[]>('getAudios')
  const {
    data: documents,
    error: errorDocuments,
    isError: isErrorDocuments,
    isLoading: isLoadingDocuments
  } = useFileRead<IFileInfo[]>('getDocuments')

  const list = [nfts, photos, videos, audios, documents]

  const data = list.reduce((acc, curr) => curr && acc.concat(curr), [])

  const error = errorNFTs || errorPhotos || errorVideos || errorAudios || errorDocuments

  const isError: boolean =
    isErrorNFTs || isErrorPhotos || isErrorVideos || isErrorAudios || isErrorDocuments

  const isLoading: boolean =
    isLoadingNFTs || isLoadingPhotos || isLoadingVideos || isLoadingAudios || isLoadingDocuments

  return { data, error, isError, isLoading }
}
