import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "../../../../entities/User";
import { NavbarItemType } from "../types/navbar";
import { getRouteAbout, getRouteMain } from "../../../../shared/consts/router";
import MainIcon from '../../../../shared/assets/icons/main-20-20.svg?react';
import AboutIcon from '../../../../shared/assets/icons/about-20-20.svg?react';

export const getNavbarItems = createSelector(getUserAuthData, (userData) => {
    const navbarItemsList: Array<NavbarItemType> = [
        {
            path: getRouteMain(), 
            text: 'Overwiev',
            Icon: MainIcon
        },
        {
            path: getRouteAbout(), 
            text: 'Fantasy',
            Icon: AboutIcon
        },
    ]

    if (userData) {
        navbarItemsList.push(
            {
                path: getRouteAbout(), 
                text: 'Video',
                Icon: MainIcon,
                authOnly: true
            },
            {
                path: getRouteAbout(), 
                text: 'Communities',
                Icon: MainIcon,
                authOnly: true
            },
            {
                path: getRouteAbout(), 
                text: 'Stats',
                Icon: MainIcon,
                authOnly: true
            },
            {
                path: getRouteAbout(), 
                text: 'Setting',
                Icon: MainIcon,
                authOnly: true
            },
        )
    }

    return navbarItemsList;
})