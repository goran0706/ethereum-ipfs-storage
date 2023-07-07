import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Heading,
  Image,
  ImageProps,
  Stack,
  StackDivider,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'

import AudioPlaceholder from '../assets/audio-placeholder.png'
import DocumentPlaceholder from '../assets/document-placeholder.png'
import PicturePlaceholder from '../assets/picture-placeholder.png'
import VideoPlaceholder from '../assets/video-placeholder.png'
import { fileTypeUrlMapping } from '../constants'
import { IFileInfo } from '../interfaces'
import { copyTextToClipboard, downloadLink } from '../services'

const FileCard = ({ id, fileType, fileName, filePath, externalUrl, description }: IFileInfo) => {
  const imageMapping: { [key: number]: ImageProps } = {
    0: { src: filePath || PicturePlaceholder, alt: 'nft' },
    1: { src: filePath || PicturePlaceholder, alt: 'photo' },
    2: { src: VideoPlaceholder, alt: 'video' },
    3: { src: AudioPlaceholder, alt: 'audio' },
    4: { src: DocumentPlaceholder, alt: 'document' },
    5: { src: PicturePlaceholder, alt: 'no image' }
  }

  let { pathname } = useLocation()
  pathname = pathname === '/' ? fileTypeUrlMapping[fileType] : pathname

  const handleDownload = () => downloadLink(filePath, fileName)
  const handleShare = () => copyTextToClipboard(filePath)

  return (
    <Card
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in-out'
      }}
      overflow='hidden'
      boxShadow='md'
      borderRadius='md'
      width='300px'
    >
      <Center overflow='hidden'>
        <Image {...imageMapping[fileType]} objectFit='cover' h={200} w='full' />
      </Center>
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Name
            </Heading>
            <Text pt='2' fontSize='sm'>
              {fileName}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Description
            </Heading>
            <Text pt='2' fontSize='sm'>
              {description}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              External URL
            </Heading>
            <Text pt='2' fontSize='sm'>
              {externalUrl}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Wrap>
          <WrapItem>
            <Button size='sm' colorScheme='gray' as={Link} to={`${pathname}/${id}`}>
              Details
            </Button>
          </WrapItem>
          <WrapItem>
            <Button size='sm' colorScheme='gray' onClick={handleDownload}>
              Download
            </Button>
          </WrapItem>
          <WrapItem>
            <Button size='sm' colorScheme='gray' onClick={handleShare}>
              Share
            </Button>
          </WrapItem>
        </Wrap>
      </CardFooter>
    </Card>
  )
}

export default FileCard
