import { IFileInfo } from '../interfaces'

const filterData = (data: IFileInfo[] = [], query: string) => {
  return data.filter(file => file.fileName.toLowerCase().includes(query.toLowerCase()))
}

export default filterData
