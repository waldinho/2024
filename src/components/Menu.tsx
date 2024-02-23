'use client'
import Link from 'next/link'
import styled from 'styled-components';
import { menu } from '../constants/menu';

const Menu = () => (
    <LinkWrapper>
        {menu?.map(menuItem => <MenuItem href={menuItem?.linkUrl} key={menuItem?.linkUrl}>{menuItem?.item}</MenuItem>)}
    </LinkWrapper>
)

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 1rem;
    padding: 1rem;
`;

const MenuItem = styled(Link)`
    padding: 1rem;
`;

export default Menu;