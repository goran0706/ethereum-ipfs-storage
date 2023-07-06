import {
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Heading,
  Image,
  ImageProps,
  Input,
  SimpleGrid,
  Spinner,
  Stack,
  StackDivider,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import AudioPlaceholder from '../assets/audio-placeholder.png'
import DocumentPlaceholder from '../assets/document-placeholder.png'
import PicturePlaceholder from '../assets/picture-placeholder.png'
import VideoPlaceholder from '../assets/video-placeholder.png'
import EditableControls from '../components/EditableControls'
import requireConnect from '../components/hoc/requireConnection'
import { FileType, fileTypeToStringMapping, fnMapping } from '../constants'
import useFileRead from '../hooks/useFileRead'
import useFileWrite from '../hooks/useFileWrite'
import { downloadLink } from '../services'

const FileDetailsPage = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const urlRef = useRef<HTMLInputElement>(null)
  const descRef = useRef<HTMLInputElement>(null)

  const primaryFontColor = useColorModeValue('gray.700', 'gray.200')
  const secondaryFontColor = useColorModeValue('gray.300', 'gray.600')

  const navigate = useNavigate()
  const params = useParams()
  const parts: string[] = params['*']?.split('/') as string[]

  const { data, error, isError, isLoading } = useFileRead(fnMapping[parts[0]], parseInt(parts[1]))

  const {
    updateFile: { write: update, isSuccess: isSuccessUpdate },
    removeFile: { write: remove, isSuccess: isSuccessRemove }
  } = useFileWrite()

  useEffect(() => {
    if (isSuccessUpdate) location.reload()
  }, [isSuccessUpdate])

  useEffect(() => {
    if (isSuccessRemove) navigate(`/${fileTypeToStringMapping[data?.fileType]}`)
  }, [data?.fileType, isSuccessRemove, navigate])

  const handleReload = () => location.reload()

  const handleDownload = () => downloadLink(data?.filePath, data?.fileName)

  const handleDelete = () => remove({ args: [data?.fileType, data?.id] })

  const handleUpdate = () => {
    const name = nameRef.current?.value
    const url = urlRef.current?.value
    const desc = descRef.current?.value
    update({ args: [data?.fileType, data?.id, name, url, desc] })
  }

  const imageMapping: { [key: number]: ImageProps } = {
    0: { src: data?.filePath || PicturePlaceholder, alt: 'nft' },
    1: { src: data?.filePath || PicturePlaceholder, alt: 'photo' },
    2: { src: VideoPlaceholder, alt: 'video' },
    3: { src: AudioPlaceholder, alt: 'audio' },
    4: { src: DocumentPlaceholder, alt: 'document' },
    5: { src: PicturePlaceholder, alt: 'no image' }
  }

  if (isLoading) return <Spinner />

  if (isError) throw error

  const shouldLoadImage =
    data.fileType == FileType.NFT ||
    data.fileType == FileType.PHOTO ||
    data.fileType == FileType.DOCUMENT

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={6} padding='1rem 2rem' mt={8}>
      {shouldLoadImage && (
        <Image {...imageMapping[data?.fileType]} objectFit='cover' borderRadius='md' maxH={600} />
      )}
      {data.fileType === FileType.VIDEO && (
        <video src={data.filePath} controls width='100%' height='100%'>
          Your browser does not support the video tag or unsupported video file.
        </video>
      )}
      {data.fileType === FileType.AUDIO && (
        <VStack spacing={2}>
          <Image {...imageMapping[data?.fileType]} objectFit='cover' borderRadius='md' maxH={600} />
          <audio src={data?.filePath} controls>
            Your browser does not support the audio tag or unsupported audio file.
          </audio>
        </VStack>
      )}
      <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Id
          </Heading>
          <Editable
            pt='2'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            isPreviewFocusable={false}
            isDisabled={true}
            defaultValue={data?.id.toString()}
            color={
              data?.id !== null && data?.id !== undefined ? primaryFontColor : secondaryFontColor
            }
          >
            <EditablePreview />
            <Input as={EditableInput} />
          </Editable>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Name
          </Heading>
          <Editable
            pt='2'
            gap={2}
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            isPreviewFocusable={false}
            defaultValue={data?.fileName}
            color={data?.fileName ? primaryFontColor : secondaryFontColor}
          >
            <EditablePreview />
            <Input as={EditableInput} ref={nameRef} />
            <EditableControls />
          </Editable>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Description
          </Heading>
          <Editable
            pt='2'
            gap={2}
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            isPreviewFocusable={false}
            defaultValue={data?.description}
            color={data?.description ? primaryFontColor : secondaryFontColor}
          >
            <EditablePreview />
            <Input as={EditableInput} ref={descRef} />
            <EditableControls />
          </Editable>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            External URL
          </Heading>
          <Editable
            pt='2'
            gap={2}
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            isPreviewFocusable={false}
            defaultValue={data?.externalUrl}
            color={data?.externalUrl ? primaryFontColor : secondaryFontColor}
          >
            <EditablePreview />
            <Input as={EditableInput} ref={urlRef} />
            <EditableControls />
          </Editable>
        </Box>
        <Stack direction={['column', 'row']} spacing={2} wrap='wrap' alignItems='center'>
          <Button size='md' colorScheme='gray' onClick={handleReload}>
            Reload
          </Button>
          <Button size='md' colorScheme='gray' onClick={handleUpdate}>
            Update
          </Button>
          <Button size='md' colorScheme='gray' onClick={handleDelete}>
            Delete
          </Button>
          <Button size='md' colorScheme='gray' onClick={handleDownload}>
            Download
          </Button>
        </Stack>
      </Stack>
    </SimpleGrid>
  )
}

const EnhancedComponent = requireConnect(FileDetailsPage)

export default EnhancedComponent
