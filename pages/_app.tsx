import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'
import { Provider } from 'react-redux'

import { store } from '../store/configureStore'

import 'antd/dist/reset.css'
import '../styles/globals.scss'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Provider>
  )
}
