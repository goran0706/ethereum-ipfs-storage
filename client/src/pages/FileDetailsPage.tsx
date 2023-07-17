import {
  Badge,
  Box,
  Button,
  Center,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  Heading,
  Image,
  ImageProps,
  Input,
  Select,
  SimpleGrid,
  Stack,
  StackDivider,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import AudioPlaceholder from '../assets/audio-placeholder.png'
import DocumentPlaceholder from '../assets/document-placeholder.png'
import PicturePlaceholder from '../assets/picture-placeholder.png'
import VideoPlaceholder from '../assets/video-placeholder.png'
import { AudioPlayer, Spinner, VideoPlayer } from '../components'
import EditableControls from '../components/EditableControls'
import requireConnect from '../components/hoc/requireConnection'
import { categoryFunctionMapping, categoryNameMapping, categoryUrlMapping } from '../constants'
import useFileRead from '../hooks/useFileRead'
import useFileWrite from '../hooks/useFileWrite'
import { IFileInfo } from '../interfaces'
import { copyTextToClipboard, downloadLink } from '../services'

const FileDetailsPage = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const urlRef = useRef<HTMLInputElement>(null)
  const descRef = useRef<HTMLInputElement>(null)
  const categoryRef = useRef<HTMLSelectElement>(null)

  const navigate = useNavigate()
  const params = useParams()
  const parts: string[] = params['*']?.split('/') as string[]
  const primaryFontColor = useColorModeValue('gray.700', 'gray.200')
  const secondaryFontColor = useColorModeValue('gray.300', 'gray.600')

  const { data, error, isError, isLoading } = useFileRead<IFileInfo>(
    categoryFunctionMapping[parts[0]],
    parseInt(parts[1])
  )

  const {
    updateFile: { write: update, isSuccess: isSuccessUpdate },
    removeFile: { write: remove, isSuccess: isSuccessRemove }
  } = useFileWrite()

  useEffect(() => {
    if (isSuccessUpdate) navigate(`/${categoryUrlMapping[data?.category]}`)
  }, [data?.category, isSuccessUpdate, navigate])

  useEffect(() => {
    if (isSuccessRemove) navigate(`/${categoryUrlMapping[data?.category]}`)
  }, [data?.category, isSuccessRemove, navigate])

  const handleReload = () => location.reload()
  const handleDownload = () => downloadLink(data?.filePath, data?.fileName)
  const handleShare = () => copyTextToClipboard(data?.filePath)
  const handleDelete = () => remove({ args: [data?.id, data?.category] })
  const handleUpdate = () => {
    const name = nameRef.current?.value
    const url = urlRef.current?.value
    const desc = descRef.current?.value
    const newCategory = categoryRef.current?.value
    update({ args: [data?.id, name, url, desc, data.category, newCategory] })
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

  const isImage = data.fileType.includes('image')
  const isVideo = data.fileType.includes('video')
  const isAudio = data.fileType.includes('audio')
  const showPlaceholder = !isImage && !isVideo && !isAudio

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={6} padding='1rem 2rem' mt={20}>
      {showPlaceholder && (
        <Center borderRadius='md' overflow='hidden'>
          <Image {...imageMapping[5]} objectFit='cover' borderRadius='md' maxH={600} />
        </Center>
      )}
      {isImage && (
        <Center borderRadius='md' overflow='hidden'>
          <Image src={data.filePath} objectFit='cover' borderRadius='md' maxH={600} />
        </Center>
      )}
      {isVideo && <VideoPlayer src={data.filePath} />}
      {isAudio && (
        <VStack spacing={4}>
          <Image {...imageMapping[data?.category]} objectFit='cover' borderRadius='md' maxH={600} />
          <AudioPlayer src={data.filePath} />
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
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            Category / File Type
          </Heading>
          <HStack spacing={2} pt='2' justifyContent='space-between' w='100%'>
            <Wrap>
              <WrapItem>
                <Badge variant='subtle' colorScheme='green' borderRadius='md'>
                  {categoryNameMapping[data.category]}
                </Badge>
              </WrapItem>
              <WrapItem>
                <Badge variant='subtle' colorScheme='green' borderRadius='md'>
                  {data.fileType}
                </Badge>
              </WrapItem>
            </Wrap>
            <Select
              defaultValue={data.category}
              placeholder='Select category'
              variant='filled'
              maxW='150px'
              size='sm'
              borderRadius='md'
              ref={categoryRef}
            >
              <option value='0'>NFT</option>
              <option value='1'>Photo</option>
              <option value='2'>Video</option>
              <option value='3'>Audio</option>
              <option value='4'>Document</option>
            </Select>
          </HStack>
        </Box>
        <Stack direction={['column', 'row']} spacing={2} wrap='wrap' w='full' pt={6}>
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
          <Button size='md' colorScheme='gray' onClick={handleShare}>
            Share Link
          </Button>
        </Stack>
      </Stack>
    </SimpleGrid>
  )
}

const EnhancedComponent = requireConnect(FileDetailsPage)

export default EnhancedComponent
