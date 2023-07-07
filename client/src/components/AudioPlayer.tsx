import { Center } from '@chakra-ui/react'

const AudioPlayer = ({ src }: { src: string }) => {
  return (
    <Center borderRadius='md' overflow='hidden'>
      <audio src={src} controls>
        Your browser does not support the audio tag or unsupported audio file.
      </audio>
    </Center>
  )
}

export default AudioPlayer
