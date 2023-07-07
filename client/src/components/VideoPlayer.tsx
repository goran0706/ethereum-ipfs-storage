import { Center } from '@chakra-ui/react'

const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <Center borderRadius='md' overflow='hidden'>
      <video src={src} controls width='100%' height='100%'>
        Your browser does not support the video tag or unsupported video file.
      </video>
    </Center>
  )
}

export default VideoPlayer
