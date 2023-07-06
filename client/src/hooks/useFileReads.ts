import { IFileInfo } from '../interfaces'
import useFileRead from './useFileRead'

export default function useFileReads() {
  const { data: nfts, isError: isErrorNFTs, isLoading: isLoadingNFTs } = useFileRead('getNFTs')
  const {
    data: photos,
    isError: isErrorPhotos,
    isLoading: isLoadingPhotos
  } = useFileRead('getPhotos')
  const {
    data: videos,
    isError: isErrorVideos,
    isLoading: isLoadingVideos
  } = useFileRead('getVideos')
  const {
    data: audios,
    isError: isErrorAudios,
    isLoading: isLoadingAudios
  } = useFileRead('getAudios')
  const {
    data: documents,
    isError: isErrorDocuments,
    isLoading: isLoadingDocuments
  } = useFileRead('getDocuments')

  const list = [nfts, photos, videos, audios, documents]
  const results = list.reduce((acc: IFileInfo[], curr) => acc.concat(curr as IFileInfo[]), [])
  const isError = isErrorNFTs || isErrorPhotos || isErrorVideos || isErrorAudios || isErrorDocuments
  const isLoading =
    isLoadingNFTs || isLoadingPhotos || isLoadingVideos || isLoadingAudios || isLoadingDocuments

  return { data: results, isError, isLoading }
}
