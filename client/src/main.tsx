import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { Web3Provider } from './components'
import SearchProvider from './context/SearchContext'
import router from './routes'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Web3Provider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </Web3Provider>
    </ChakraProvider>
  </React.StrictMode>
)
