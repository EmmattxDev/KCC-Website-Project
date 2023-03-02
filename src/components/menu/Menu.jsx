import { AiFillBook, AiFillBulb, AiFillCustomerService, AiFillHome, AiFillPicture, AiFillTrophy } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";


export const menuItems = [
    {
        title: 'Home',
        url: '/',
        icon: <AiFillHome/>,
    },

    {
        title: 'About',
        url: '/about',
        icon: <AiFillBulb/>,
    },

    {
        title: 'Services',
        url: '/services',
        icon: <AiFillCustomerService/>,
    },

    {
        title: 'Gallery',
        url: '/gallery',
        icon: <AiFillPicture/>,
    },

    {
        title: 'Training',
        url: '/training',
        icon: <AiFillTrophy/>,
    },

    {
        title: 'Blog',
        url: '/Blog',
        icon: <AiFillBook/>,
    },

    {
        title: 'Contact',
        url: '/contact',
        icon: <FaPhoneAlt />,
        
    },
];

