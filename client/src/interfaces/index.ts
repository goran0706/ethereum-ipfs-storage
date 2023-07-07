import { Category } from '../constants'

export interface IFileInfo {
  id: string
  fileName: string
  fileType: string
  filePath: string
  externalUrl: string
  description: string
  category: Category
}
