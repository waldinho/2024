import type { ReactElement } from 'react';
import styled from 'styled-components';
 
const Page = () => {
  return (
    <Wrapper>
        <Text>
            <Title>James Waller</Title>
            <SubTitle>Software Engineer</SubTitle>
            <SubTitle>Sydney, Australia</SubTitle>
        </Text>
    </Wrapper>
  )
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
       {page}
    </>
  )
}

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background: url('https://i.etsystatic.com/12444060/r/il/9f214c/2576742551/il_fullxfull.2576742551_dvr6.jpg') #000 no-repeat;
    background-size: cover;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -1;
`;

const Text = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    color: #fff;
    margin: 0;
    font-size: 1rem;
    @media (min-width: 426px) {
        padding: 5rem;
        font-size: 2rem;
    }
`;

const Title = styled.h1`    
    background: #000;
    padding: 0.25rem 0.75rem;
    font-size: 2rem;
    margin: 0;
    @media (min-width: 426px) {
        padding: 0 0.75rem;
        font-size: 5rem;
    }
`;

const SubTitle = styled(Title)`    
    font-size: unset;
    &:last-of-type {
        padding: 0.5rem 0.75rem 0.75rem;
    }
`;


export default Page