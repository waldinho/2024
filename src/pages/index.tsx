import type { ReactElement } from 'react';
 
const Page = () => {
  return <p>Home Page</p>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
       {page}
    </>
  )
}
 
export default Page