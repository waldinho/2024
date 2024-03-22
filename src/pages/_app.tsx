import { useEffect, useState } from "react";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import styled from 'styled-components';

import { AboutContext, WorkContext } from "../contexts";
import Menu from '../components/Menu'
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [aboutContent, setAboutContent] = useState([]);
  const [workList, setWorkList] = useState([]);

  useEffect(() => {
      async function getRecords() {
        const workResponse = await fetch(`http://localhost:5000/work/`);
        const aboutResponse = await fetch(`http://localhost:5000/about/`);
        if (!aboutResponse.ok || !workResponse.ok) {
          const message = `An error occurred: ${aboutResponse.statusText || workResponse.statusText}`;
          window.alert(message);
          return;
        }
        const aboutData = await aboutResponse.json();
        const workData = await workResponse.json();
        setAboutContent(aboutData);
        setWorkList(workData);
      }
      getRecords();
      return;
  }, [workList.length]);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: Arial, Helvetica, sans-serif;
        }
      `}</style>
      <AboutContext.Provider value={aboutContent[0]}>
        <WorkContext.Provider value={workList}>
          <Menu />
          <MainContent>
            <Component {...pageProps} />
          </MainContent>
        </WorkContext.Provider>
      </AboutContext.Provider>
    </>
  )
}

const MainContent = styled.div`
  margin-top: 5.4rem;
`;
