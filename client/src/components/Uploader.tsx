import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Text,
  Textarea,
  VStack
} from '@chakra-ui/react'
import { Web3Button } from '@web3modal/react'
import { ChangeEvent, FormEvent, useEffect, useReducer, useRef } from 'react'
import { useAccount } from 'wagmi'

import useFileWrite from '../hooks/useFileWrite'
import { ipfsUpload } from '../services'

enum ActionTypes {
  ON_CHANGE = 'ON_CHANGE',
  ON_LOAD = 'ON_LOAD',
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  RESET = 'RESET'
}

interface IPayload {
  [key: string]: unknown
}

type Action =
  | { type: ActionTypes.ON_CHANGE; payload: IPayload }
  | { type: ActionTypes.ON_LOAD; payload: IPayload }
  | { type: ActionTypes.REQUEST }
  | { type: ActionTypes.SUCCESS; payload?: IPayload }
  | { type: ActionTypes.FAILURE; payload: string }
  | { type: ActionTypes.RESET; payload: State }

interface State {
  file: File | null
  preview: string | ArrayBuffer | null
  fileName: string
  fileType: string
  externalUrl: string
  description: string
  transactionHash: string
  errorMessage: string
  loading: boolean
}

const uploadReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.ON_CHANGE:
      return { ...state, ...action.payload }
    case ActionTypes.ON_LOAD:
      return { ...state, ...action.payload }
    case ActionTypes.REQUEST:
      return { ...state, loading: true }
    case ActionTypes.SUCCESS:
      return { ...state, loading: false, ...action.payload }
    case ActionTypes.FAILURE:
      return { ...state, loading: false, errorMessage: action.payload }
    case ActionTypes.RESET:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const initialState = {
  file: null,
  preview: null,
  fileName: '',
  fileType: '0',
  externalUrl: '',
  description: '',
  transactionHash: '',
  errorMessage: '',
  loading: false
}

const Uploader = () => {
  const [
    {
      file,
      preview,
      fileName,
      fileType,
      externalUrl,
      description,
      transactionHash,
      errorMessage,
      loading
    },
    dispatch
  ] = useReducer(uploadReducer, initialState)

  const fileRef = useRef<HTMLInputElement>(null)

  const { isConnected } = useAccount()

  const {
    addFile: { isLoading, isSuccess, isError, data, error, write }
  } = useFileWrite()

  useEffect(() => {
    const reader = new FileReader()
    reader.onload = () =>
      dispatch({ type: ActionTypes.ON_LOAD, payload: { preview: reader.result } })
    if (file && file.type.includes('image')) reader.readAsDataURL(file)
  }, [file])

  useEffect(() => {
    dispatch({ type: ActionTypes.SUCCESS, payload: { transactionHash: data?.hash } })
    dispatch({ type: ActionTypes.FAILURE, payload: error?.message || '' })
  }, [isSuccess, data?.hash, isError, error?.message])

  const handleSelect = () => fileRef.current && fileRef.current.click()

  const handleChange = (event: ChangeEvent | string) => {
    if (typeof event === 'string') {
      dispatch({ type: ActionTypes.ON_CHANGE, payload: { fileType: event } })
    } else {
      const { name, value, files } = event.target as HTMLInputElement
      const temp = { [name]: name === 'file' && files ? files[0] : value }
      dispatch({ type: ActionTypes.ON_CHANGE, payload: temp })
    }
  }

  const handleReset = () => {
    if (fileRef.current && fileRef.current.files) fileRef.current.files = null
    dispatch({ type: ActionTypes.RESET, payload: initialState })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (file) {
      dispatch({ type: ActionTypes.REQUEST })
      ipfsUpload(file, fileName, fileType, externalUrl, description)
        .then(path => {
          write({ args: [fileType, fileName, path, externalUrl, description] })
          dispatch({ type: ActionTypes.SUCCESS })
        })
        .catch(error => {
          if (error instanceof Error) {
            dispatch({ type: ActionTypes.FAILURE, payload: error.message })
          }
        })
    }
  }

  return (
    <Box borderRadius='md' overflow='hidden' w={{ sm: 'sm', md: 'md', lg: 'lg', xl: '2xl' }}>
      <form>
        <VStack spacing={2}>
          <FormControl>
            <HStack borderWidth='1px' borderRadius='md' overflow='hidden'>
              <Button colorScheme='gray' onClick={handleSelect}>
                Select file
              </Button>
              <Text>{file ? file.name : 'No file selected'}</Text>
              <Input type='file' hidden name='file' ref={fileRef} onChange={handleChange} />
            </HStack>
          </FormControl>
          {preview && <Image src={preview?.toString()} />}
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type='text'
              name='fileName'
              autoComplete='off'
              value={fileName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>External URL</FormLabel>
            <Input
              type='text'
              name='externalUrl'
              autoComplete='off'
              value={externalUrl}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              name='description'
              autoComplete='off'
              value={description}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl as='fieldset'>
            <FormLabel as='legend'>File Type</FormLabel>
            <RadioGroup name='type' value={fileType} defaultValue='0' onChange={handleChange}>
              <HStack spacing='24px' wrap='wrap'>
                <Radio value='0'>NFT</Radio>
                <Radio value='1'>Photo</Radio>
                <Radio value='2'>Video</Radio>
                <Radio value='3'>Audio</Radio>
                <Radio value='4'>Document</Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText>Please select a file type.</FormHelperText>
          </FormControl>
          <FormControl>
            {loading ||
              (isLoading && (
                <Alert status='info' borderRadius='md'>
                  <AlertIcon />
                  <Box>
                    <AlertTitle>Pending!</AlertTitle>
                    <AlertDescription wordBreak='break-all'>Check wallet.</AlertDescription>
                  </Box>
                </Alert>
              ))}
            {isSuccess && (
              <Alert status='success' borderRadius='md'>
                <AlertIcon />
                <Box>
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription wordBreak='break-all'>
                    Transaction: {transactionHash}
                  </AlertDescription>
                </Box>
              </Alert>
            )}
            {isError && (
              <Alert status='error' borderRadius='md'>
                <AlertIcon />
                <Box>
                  <AlertTitle>Error!</AlertTitle>
                  <AlertDescription wordBreak='break-all'>Error: {errorMessage}</AlertDescription>
                </Box>
              </Alert>
            )}
          </FormControl>
          {isConnected ? (
            <HStack justify='flex-end' w='full'>
              <Button
                type='reset'
                colorScheme='gray'
                variant='ghost'
                isDisabled={loading || isLoading}
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                type='submit'
                colorScheme='gray'
                isDisabled={loading || isLoading}
                onClick={handleSubmit}
              >
                Upload
              </Button>
            </HStack>
          ) : (
            <Web3Button icon='show' label='Connect Wallet' balance='show' />
          )}
        </VStack>
      </form>
    </Box>
  )
}

export default Uploader
