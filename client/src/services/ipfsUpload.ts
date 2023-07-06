import { pinataClient } from '.'
import { PINATA_API_URL, PINATA_DOMAIN, PINATA_JWT } from '../constants'

const ipfsUpload = (
  file: File,
  fileName: string,
  fileType: string,
  externalUrl: string,
  description: string
) => {
  const metadata = JSON.stringify({
    name: 'file',
    keyvalues: { fileName, fileType, externalUrl, description }
  })
  const options = JSON.stringify({ cidVersion: 0 })

  const formData = new FormData()
  formData.append('file', file)
  formData.append('pinataMetadata', metadata)
  formData.append('pinataOptions', options)

  return pinataClient
    .post(PINATA_API_URL, formData, {
      maxBodyLength: Infinity,
      headers: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        Authorization: `Bearer ${PINATA_JWT}`
      }
    })
    .then(res => {
      return `${PINATA_DOMAIN + res.data.IpfsHash}`
    })
    .catch(error => {
      throw error
    })
}

export default ipfsUpload
