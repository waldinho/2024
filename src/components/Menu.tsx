'use client'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import styled from 'styled-components';
import { menu } from '../constants/menu';

const Menu = () => {
    const pathname = usePathname();
    return (
        <>
            <LinkWrapper>
                {menu?.map(menuItem => <MenuItem href={menuItem?.linkUrl} key={menuItem?.linkUrl} className={pathname === `${menuItem?.linkUrl}` ? "active" : ""}>{menuItem?.item}</MenuItem>)}
            </LinkWrapper>
        </>
    )
}

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0.5rem 0;
    background: #000;
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
`;

const MenuItem = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin: 0.75rem 1rem;
    padding: 0.25rem 0;
    border-bottom: 0.2rem solid #000;
    &:hover {
        color: #f9a652;
    }
    &.active {
        color: #65adf9;
        border-bottom: 0.2rem solid;
        transition: all 0.4s ease-in;
    }
`;

export default Menu;