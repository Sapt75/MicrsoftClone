import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Navbar = () => {
  return (
   <>
    <div className='pl-10'>
        <ul className='flex float-left'>
        <li className='m-5'><a href='/'><img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" width={110}/></a></li>
            <a href='https://www.microsoft.com/en-in/microsoft-365?rtc=1'><li className='mr-5 my-5 text-sm hover:underline cursor-pointer'>Microsoft365</li></a>
            <a href='https://www.microsoft.com/en-in/microsoft-teams/group-chat-software?rtc=1'><li className='mr-5 my-5 text-sm hover:underline cursor-pointer'>Teams</li></a>
            <a href='https://www.microsoft.com/en-in/windows/'><li className='mr-5 my-5 text-sm hover:underline cursor-pointer'>Windows</li></a>
            <a href='https://www.microsoft.com/en-in/surface'><li className='mr-5 my-5 text-sm hover:underline cursor-pointer'>Surface</li></a>
            <a href='https://www.xbox.com/en-US/'><li className='mr-5 my-5 text-sm hover:underline cursor-pointer'>Xbox</li></a>
            <a href='https://support.microsoft.com/en-us'><li className='my-5 text-sm hover:underline cursor-pointer'>Support</li></a>
        </ul>
        <div className='flex float-right pr-10'>
            <p className='my-5 text-sm mr-5 hover:underline cursor-pointer'>All Microsoft<KeyboardArrowDownOutlinedIcon fontSize='small' className='mx-1' /></p>
            <p className='my-5 text-sm mr-5 hover:underline cursor-pointer'>Search<SearchIcon fontSize='small' className='mx-1'/></p>
            <p className='my-5 text-sm mr-5 hover:underline cursor-pointer'>Cart<ShoppingCartOutlinedIcon fontSize='small' className='mx-1' /></p>
            <p className='my-5 text-sm mr-5 hover:underline cursor-pointer'>Sign in<AccountCircleOutlinedIcon fontSize='small' className='mx-1' /></p>
        </div>
    </div>
   </>
  )
}

export default Navbar