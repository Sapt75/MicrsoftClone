import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [active, setactive] = useState(false)
    let [width, setWidth] = useState(window.innerWidth)

    function getwidth() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', getwidth)

        return () => {
            window.removeEventListener('resize', getwidth)
        }
    }, [width])

    return (
        <>
            {width >= 860 ? <div className='md:pl-5 lg:pl-10'>
                <ul className='flex float-left'>
                    <li className='my-3 mr-4'><a href='/'><img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" className='md:w-20 lg:w-24' /></a></li>
                    <a href='https://www.microsoft.com/en-in/microsoft-365?rtc=1'><li className='mr-5 my-3 md:text-xs lg:text-sm hover:underline cursor-pointer'>Microsoft365</li></a>
                    <a href='https://www.microsoft.com/en-in/microsoft-teams/group-chat-software?rtc=1'><li className='mr-5  my-3 md:text-xs lg:text-sm hover:underline cursor-pointer'>Teams</li></a>
                    <a href='https://www.microsoft.com/en-in/windows/'><li className='mr-5 my-3 md:text-xs lg:text-sm hover:underline cursor-pointer'>Windows</li></a>
                    <a href='https://www.microsoft.com/en-in/surface'><li className='mr-5 my-3 md:text-xs lg:text-sm hover:underline cursor-pointer'>Surface</li></a>
                    <a href='https://www.xbox.com/en-US/'><li className='mr-5 my-3 md:text-xs lg:text-sm hover:underline cursor-pointer'>Xbox</li></a>
                    <a href='https://support.microsoft.com/en-us'><li className='my-3 md:text-xs lg:text-sm hover:underline cursor-pointer'>Support</li></a>
                </ul>
                <div className='flex float-right md:pr-5 lg:pr-10'>
                    <p onClick={() => {
                        if (active === true) {
                            setactive(false)
                        } else {
                            setactive(true)
                        }
                    }} className='my-5 md:text-xs lg:text-sm md:mr-1 lg:mr-5 hover:underline cursor-pointer'>All Microsoft<KeyboardArrowDownOutlinedIcon fontSize='small' className='mx-1' />
                    </p>
                    {active ? <div className='drop absolute right-14 top-12 bg-gray-100'>
                        <ul className='flex space-x-28 p-4 pb-20'>
                            <ul className='space-y-2'>
                                <li className='font-semibold text-xs text-black'>Software</li>
                                <li>Windows App</li>
                                <li>OneDrive</li>
                                <li>Outlook</li>
                                <li>Skype</li>
                                <li>OneNote</li>
                                <li>Microsoft Teams</li>
                            </ul>
                            <ul className='space-y-2'>
                                <li className='font-semibold text-xs text-black'>Pcs & Devices</li>
                                <li>Shop Xbox</li>
                                <li>Accessories</li>
                            </ul>
                            <ul className='space-y-2'>
                                <li className='font-semibold text-xs text-black'>Entertainment</li>
                                <li>Xbox Game Pass Ultimate</li>
                                <li>Xbox Live Gold</li>
                                <li>Xbox games</li>
                                <li>PC games</li>
                                <li>Windows digital games</li>
                            </ul>
                            <ul className='space-y-2'>
                                <li className='font-semibold text-xs text-black'>Business</li>
                                <li>Microsoft Cloud</li>
                                <li>Microsoft Security</li>
                                <li>Azure</li>
                                <li>Dynamics 365</li>
                                <li>Microsoft 365 for business</li>
                                <li>Microssoft industry</li>
                                <li>Microsoft Power Platform</li>
                                <li>Windows 365</li>
                            </ul>
                            <ul className='space-y-2'>
                                <li className='font-semibold text-xs text-black'>Developer & IT</li>
                                <li>Developer Center</li>
                                <li>Documentation</li>
                                <li>Microsoft Learn</li>
                                <li>Microsoft Tech Community</li>
                                <li>Azure Marketplace</li>
                                <li>AppSource</li>
                                <li>Visual Studio</li>
                            </ul>
                            <ul className='space-y-2'>
                                <li className='font-semibold text-xs text-black'>Other</li>
                                <li>Free downloads & security</li>
                                <li>Eductaion</li>
                                <li>Gift Cards</li>
                                <li>Licensing</li>
                            </ul>
                        </ul>
                        <div className='py-2 text-center text-xs' style={{ backgroundColor: "#e6e6e6", color: '#616161' }}>
                            <p>VIEW SITEMAP</p>
                        </div>
                    </div> : null}

                    <p className='my-5 md:text-xs lg:text-sm md:mr-1 lg:mr-5 hover:underline cursor-pointer'>Search<SearchIcon fontSize='small' className='mx-1' /></p>
                    <p className='my-5 md:text-xs lg:text-sm md:mr-1 lg:mr-5 hover:underline cursor-pointer'>Cart<ShoppingCartOutlinedIcon fontSize='small' className='mx-1' /></p>
                    <p className='my-5 md:text-xs lg:text-sm md:mr-1 lg:mr-5 hover:underline cursor-pointer'>Sign in<AccountCircleOutlinedIcon fontSize='small' className='mx-1' /></p>
                </div>
            </div> : <div className='flex float-right xs:space-x-15 px:space-x-17 ms:space-x-20 mm:space-x-36 md:space-x-64 ma:space-x-66 px-2'>
                <ul className='py-4 space-x-5'>
                    <MenuIcon fontSize='small' />
                    <SearchIcon fontSize='small' />
                </ul>
                <ul className='py-2'>
                    <li><a href='/'><img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" className='xs:w-28 sm:w-28' /></a></li>
                </ul>
                <ul className='flex float-right py-4 space-x-5'>
                    <ShoppingCartOutlinedIcon fontSize='small' />
                    <AccountCircleOutlinedIcon fontSize='small' />
                </ul>
            </div>}



        </>
    )
}

export default Navbar