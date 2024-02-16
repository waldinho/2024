import styled from 'styled-components';

interface CardProps {
    company?: string;
    blurb?: string;
    logoUrl?: string;
}

const Card = ({ company, blurb, logoUrl }: CardProps) => (
    <CardWrapper>
        <Logo src={logoUrl} />
        <p>{company}</p>
        <p>{blurb}</p>
    </CardWrapper>
)

const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid black;
`;

const Logo = styled.img`
    height: 5rem;
    width: auto;
`;

export default Card;