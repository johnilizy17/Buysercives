import '@/styles/globals.css'
import '@/styles/css/webflow.css'
import '@/styles/css/sn-holder-login.css'
import '@/styles/css/normalize.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { goerli } from 'wagmi/chains'
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "../app/store";

const chains = [ goerli ]

const projectId = '84046b9c12fb8bd873757d93983f34fb'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})

const ethereumClient = new EthereumClient(wagmiClient, chains)


Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {

  return (
      <Provider store={store}>

        <ChakraProvider >
          <WagmiConfig client={wagmiClient}>
            <Component {...pageProps} />
          </WagmiConfig>
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </ChakraProvider>
      </Provider>
  )
}
