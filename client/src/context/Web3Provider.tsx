import { useColorMode } from '@chakra-ui/react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { ReactNode } from 'react'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { arbitrum, localhost, mainnet, polygon } from 'wagmi/chains'

import { PROJECT_ID } from '../constants'

const chains = [arbitrum, mainnet, polygon, localhost]
const projectId = PROJECT_ID
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})

const ethereumClient = new EthereumClient(wagmiConfig, chains)

const Web3Provider = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeMode={colorMode} />
    </>
  )
}

export default Web3Provider
