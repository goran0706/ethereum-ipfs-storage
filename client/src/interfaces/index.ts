import { FileType } from '../constants'

export interface IFileInfo {
  id: string
  fileType: FileType
  fileName: string
  filePath: string
  externalUrl: string
  description: string
}
