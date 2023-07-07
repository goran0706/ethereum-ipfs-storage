import { pinataClient } from '.'
import { PINATA_API_URL, PINATA_DOMAIN, PINATA_JWT } from '../constants'

const ipfsUpload = async (
  file: File,
  fileName: string,
  fileType: string,
  externalUrl: string,
  description: string,
  category: string
) => {
  const metadata = JSON.stringify({
    name: 'file',
    keyvalues: { fileName, fileType, externalUrl, description, category }
  })
  const options = JSON.stringify({ cidVersion: 0 })

  const formData = new FormData()
  formData.append('file', file)
  formData.append('pinataMetadata', metadata)
  formData.append('pinataOptions', options)

  const res = await pinataClient.post(PINATA_API_URL, formData, {
    maxBodyLength: Infinity,
    headers: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      Authorization: `Bearer ${PINATA_JWT}`
    }
  })

  return `${PINATA_DOMAIN + res.data.IpfsHash}`
}

export default ipfsUpload
