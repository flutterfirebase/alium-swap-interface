import { ModalProvider } from '@alium-official/uikit'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { NetworkContextName } from 'config/settings'
import React from 'react'
import { Provider } from 'react-redux'
import { IntercomProvider } from 'react-use-intercom'
import store from './state'
import { ThemeContextProvider } from './ThemeContext'
import getLibrary from './utils/getLibrary'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

const Providers: React.FC = ({ children }) => {
  return (
    <IntercomProvider
      appId={process.env.REACT_APP_INTERCOM_APP_ID as string}
      autoBoot
      shouldInitialize={!!process.env.REACT_APP_INTERCOM_APP_ID}
    >
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <Provider store={store}>
            <ThemeContextProvider>
              <ModalProvider>{children}</ModalProvider>
            </ThemeContextProvider>
          </Provider>
        </Web3ProviderNetwork>
      </Web3ReactProvider>
    </IntercomProvider>
  )
}

export default Providers
