import '@/styles/globals.css'
import 'react-quill/dist/quill.snow.css'
import type { AppProps } from 'next/app'

import { AppProvider } from '@/contexts/AppProvider'
import { Modal } from '@/components/organisms/Modal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <Modal />
    </AppProvider>
  )
}
