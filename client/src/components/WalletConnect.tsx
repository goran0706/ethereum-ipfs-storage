import { Stack } from '@chakra-ui/react'
import { Web3Button, Web3NetworkSwitch } from '@web3modal/react'

const WalletConnect = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
      <Web3Button label='Connect Wallet' balance='show' icon='show' />
      <Web3NetworkSwitch />
    </Stack>
  )
}

export default WalletConnect
