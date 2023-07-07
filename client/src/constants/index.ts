import { Abi } from 'viem'

import FileStorage from '../assets/abi/FileStorage'

const env = import.meta.env
export const PINATA_DOMAIN = env.VITE_PINATA_DOMAIN as string
export const PINATA_API_URL = env.VITE_PINATA_API_URL as string
export const PINATA_JWT = env.VITE_PINATA_JWT as string
export const PROJECT_ID = env.VITE_WALLET_CONNECT_PROJECT_ID as string
export const STORAGE_ADDRESS = env.VITE_CONTRACT_ADDRESS
export const STORAGE_ABI = FileStorage

export const contract = { address: STORAGE_ADDRESS, abi: STORAGE_ABI as Abi }

export enum Category {
  NFT = 0,
  PHOTO = 1,
  VIDEO = 2,
  AUDIO = 3,
  DOCUMENT = 4
}

export const categoryNameMapping: { [key: number]: string } = {
  [Category.NFT]: 'NFT',
  [Category.PHOTO]: 'Photo',
  [Category.VIDEO]: 'Video',
  [Category.AUDIO]: 'Audio',
  [Category.DOCUMENT]: 'Document'
}

export const categoryUrlMapping: { [key: number]: string } = {
  [Category.NFT]: 'nfts',
  [Category.PHOTO]: 'photos',
  [Category.VIDEO]: 'videos',
  [Category.AUDIO]: 'audios',
  [Category.DOCUMENT]: 'documents'
}

export const categoryFunctionMapping: { [key: string]: string } = {
  nfts: 'getNFT',
  photos: 'getPhoto',
  videos: 'getVideo',
  audios: 'getAudio',
  documents: 'getDocument'
}
