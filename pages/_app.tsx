import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import styled from 'styled-components';

import Menu from '../components/Menu'
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: Arial, Helvetica, sans-serif;
        }
      `}</style>
      <Menu />
      <MainContent>
        <Component {...pageProps} />
      </MainContent>
    </>
  )
}

const MainContent = styled.div`
  margin-top: 5.4rem;
`;
