import { Stack } from '@chakra-ui/react'
import { Web3Button, Web3NetworkSwitch } from '@web3modal/react'

const WalletConnect = () => {
  return (
    <Stack direction={['column', 'row']} justify='flex-end' spacing={2}>
      <Web3Button icon='show' label='Connect Wallet' balance='show' />
      <Web3NetworkSwitch />
    </Stack>
  )
}

export default WalletConnect
