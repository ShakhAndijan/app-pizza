import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
}from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
            <SidebarContainer isOpen = {isOpen} onClick={toggle}>
                <Icon isOpen={isOpen}>
                    <CloseIcon />
                </Icon>
                <SidebarMenu>
                    <SidebarLink to="/" >Pizza</SidebarLink>
                    <SidebarLink to="/" >Deserts</SidebarLink>
                    <SidebarLink to="/" >Full Menu</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/">Order Now</SidebarRoute>
                </SideBtnWrap>
            </SidebarContainer>
    )
}

export default Sidebar
