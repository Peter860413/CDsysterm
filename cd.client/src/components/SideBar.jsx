import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Product",
        path: "/product",
        icons: <IoIcons.IoIosPaper />,
        cName: "nav-text",
    },
    {
        title: "Company",
        path: "/company",
        icons: <IoIcons.IoMdPeople />,
        cName: "nav-text",
    },
];