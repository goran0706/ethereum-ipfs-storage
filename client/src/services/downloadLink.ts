import axios from 'axios'

export const downloadLink = async (path: string, name: string) => {
  const response = await axios.get(path, { responseType: 'blob' })
  const objectURL = URL.createObjectURL(response.data)
  const link = document.createElement('a')
  link.href = objectURL
  link.download = name
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export default downloadLink
