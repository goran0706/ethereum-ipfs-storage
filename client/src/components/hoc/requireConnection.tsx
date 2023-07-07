import { Text, VStack } from '@chakra-ui/react'
import { Web3Button } from '@web3modal/react'
import { ComponentType, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

const requireConnect = (Component: ComponentType) => () => {
  const { isConnected } = useAccount()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isConnected) navigate('/')
  }, [isConnected, navigate])

  if (!isConnected) {
    return (
      <VStack mt={60} spacing={2}>
        <Text>Wallet connection required.</Text>
        <Web3Button icon='show' label='Connect Wallet' balance='show' />
      </VStack>
    )
  }

  return <Component />
}

export default requireConnect


