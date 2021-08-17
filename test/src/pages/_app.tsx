import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import './fonts.css'
import './global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
