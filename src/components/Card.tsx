import styled from 'styled-components';
import { CardProps } from '../types';

const Card = ({ title, company, blurb, logoUrl, imgUrl }: CardProps) => (
    <CardWrapper>
        <Logo src={logoUrl || imgUrl} />
        <p>{company || title}</p>
        <p>{blurb}</p>
    </CardWrapper>
)

const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem 0.5rem;
    padding: 1rem;
    border: 1px solid black;
`;

const Logo = styled.img`
    height: 5rem;
    width: auto;
    border-radius: 0.5rem;
`;

export default Card;