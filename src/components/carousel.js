import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect } from 'react';

const Carousel = () => {

    let state = false

    let [width, setWidth] = useState(window.innerWidth)

    function getwidth() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', getwidth)
        if (document.getElementById('ban1')) {
            console.log(document.getElementById('ban1').clientHeight)
        }

        return () => {
            window.removeEventListener('resize', getwidth)
        }
    }, [width])


    function handelClick(pos) {
        let ban1 = document.getElementById('ban1').classList
        let ban2 = document.getElementById('ban2').classList

        if (pos === "left") {
            if (state === true) {
                ban1.add('ban1left')
                ban2.add('ban2left')
                ban2.add('relative')
                ban1.add('absolute')
                ban2.add('right-full')
                ban1.remove('right-full')
                setTimeout(() => {
                    ban1.remove('ban1left')
                    ban2.remove('ban2left')
                }, 1450);
            } else {
                ban2.add('ban1left')
                ban1.add('ban2left')
                ban1.remove('absolute')
                ban1.add('relative')
                ban2.remove('relative')
                ban2.add('absolute')
                ban2.remove('right-full')
                ban1.add('right-full')
                setTimeout(() => {
                    ban2.remove('ban1left')
                    ban1.remove('ban2left')
                }, 1450);
            }
        } else {
            if (state === true) {
                ban1.add('ban1right')
                ban2.add('ban2right')
                ban1.remove('right-full')
                ban2.add('right-full')
                setTimeout(() => {
                    ban1.remove('ban1right')
                    ban2.remove('ban2right')
                }, 1450);
            } else {
                ban2.add('ban1right')
                ban1.add('ban2right')
                ban2.remove('right-full')
                ban1.add('right-full')
                setTimeout(() => {
                    ban2.remove('ban1right')
                    ban1.remove('ban2right')
                }, 1450);
            }
        }
    }







    return (
        <>
            {width >= 1083 ? <div>
                <div id='ban1' className="banner1">
                    <img className='pic' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Hero-M365-Screenplates-Update-Excel:VP5-1920x600"
                        alt="" />
                    <div className="text1">
                        <h1 className="text-4xl font-semibold">Microsoft 365</h1>
                        <p className="w-80 my-6">Premium Office apps, extra cloud storage, advanced security, and more – all in one
                            convenient subscription</p>
                        <button className="bg-sky-700 text-white px-3 py-2 font-semibold rounded-sm ">For 1 person</button>
                        <p className="inline m-6 font-semibold text-sky-700">For upto 6 people
                            <ChevronRightIcon />
                        </p>
                    </div>
                </div>
                <div id='ban2' className="banner2">
                    <img className='pic' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Studio-Laptop-Hand-Right:VP5-1920x600"
                        alt="" />
                    <div className="text2">
                        <h1 className="text-4xl font-semibold w-64">Surface Laptop Studio</h1>
                        <p className="w-96 my-6">Flex your creative muscle on the most powerful Surface Laptop. Now available with
                            Windows 11.</p>
                        <button className="bg-sky-700 text-white px-3 py-2 font-semibold rounded-sm ">Shop now</button>
                    </div>
                </div>

                <div className='relative md:right-8 xl:left-20 md:top-97 lg:top-98'>
                    <button onClick={() => {
                        if (state === true) {
                            state = false
                            handelClick('left')
                        } else {
                            state = true
                            handelClick('left')
                        }
                    }}>
                        <ArrowBackIosNewIcon className='mx-2' fontSize='large' />
                    </button>
                    <input type="radio" name="" id="" className='mr-2' />
                    <input type="radio" name="" id="" />
                    <button onClick={() => {
                        if (state === true) {
                            state = false
                            handelClick("right")
                        } else {
                            state = true
                            handelClick('right')
                        }
                    }}>
                        <ArrowForwardIosIcon className='mx-2' fontSize='large' />
                    </button>
                </div>
                <div className="contain">
                </div>
                <div className='items flex space-x-12 justify-center'>
                    <div>
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40" className='mx-auto mb-2' alt="" />
                        <a href='https://www.microsoft.com/en-in/microsoft-365/buy/compare-all-microsoft-365-products?icid=MSCOM_QL_M365'><p className='text-sky-700 underline font-semibold'>Choose your Microsoft 365</p></a>
                    </div>
                    <div>
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-surface-kickstand-120x120?wid=40&hei=40" className='mx-auto mb-2' alt="" />
                        <a href='https://www.microsoft.com/en-in/surface?icid=MSCOM_QL_Surface'><p className='text-sky-700 underline font-semibold'>Explore Surface devices</p></a>
                    </div>
                    <div>
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-ICON-LL-xbox-logo-120x120?wid=40&hei=40" alt="" className='mx-auto mb-2' />
                        <a href='https://www.microsoft.com/en-in/store/b/xbox?icid=MSCOM_QL_Xbox'><p className='text-sky-700 underline font-semibold'>Buy Xbox games</p></a>
                    </div>
                    <div>
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40" className='mx-auto mb-2' alt="" />
                        <a href='https://account.live.com/tou/accrue?mkt=EN-US&uiflavor=web&id=74335&ru=https://login.live.com/login.srf%3fid%3d74335%26opid%3d24DE162275473CE1%26opidt%3d1662646191'><p className='text-sky-700 underline font-semibold'>Get Windows 11</p></a>
                    </div>
                </div>
            </div> : <div>
                <div id='ban1'>
                    {width >= 1000 ? <img className='w-full' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-All-Colors-FY23HOL:VP3-1083x600' alt='' /> : width >= 736 ? <img className='w-full' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-All-Colors-FY23HOL:VP2-859x540' alt='' /> : <img className='w-full' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-All-Colors-FY23HOL:VP1-539x440' alt='' />}

                    <div class="xl:w-1/4 md:w-full p-2 md:p-4 md:m-2 shadow-md">
                        <div class="p-2 rounded-lg">
                            <h3 class="tracking-widest text-red-700 text-base font-medium title-font">New</h3>
                            <h2 class="xs:text-2xl text-gray-900 font-medium title-font mb-4">Surface Pro 9</h2>
                            <p class="leading-relaxed text-base"> Keep spirits bright with a game-changing combo of laptop power and tablet flexibility—all in one ultra-portable device</p>
                            <button className='font-semibold bg-black p-2 rounded-sm text-white my-4'>Learn More</button>
                        </div>
                    </div>
                </div>

                {/* Icon  */}

                <div className='text-center my-3'>
                    <button onClick={() => {
                        if (state === true) {
                            state = false
                            handelClick('left')
                        } else {
                            state = true
                            handelClick('left')
                        }
                    }}>
                        <ArrowBackIosNewIcon className='mx-5' fontSize='large' />
                    </button>
                    <input type="radio" name="" id="" className='mr-4' />
                    <input type="radio" name="" id="" />
                    <button onClick={() => {
                        if (state === true) {
                            state = false
                            handelClick("right")
                        } else {
                            state = true
                            handelClick('right')
                        }
                    }}>
                        <ArrowForwardIosIcon className='mx-5' fontSize='large' />
                    </button>
                </div>

                <div className='grid xs:grid-cols-1 ms:grid-cols-2 mm:grid-cols-3 md:grid-cols-4'>
                    <div className='text-center m-4'>
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40" className='mx-auto mb-2' alt="" />
                        <a href='https://www.microsoft.com/en-in/microsoft-365/buy/compare-all-microsoft-365-products?icid=MSCOM_QL_M365'><p className='text-sky-700 underline font-semibold'>Choose your Microsoft 365</p></a>
                    </div>
                    <div className='text-center m-4'>
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-surface-kickstand-120x120?wid=40&hei=40" className='mx-auto mb-2' alt="" />
                        <a href='https://www.microsoft.com/en-in/surface?icid=MSCOM_QL_Surface'><p className='text-sky-700 underline font-semibold'>Explore Surface devices</p></a>
                    </div>
                    <div className='text-center m-4'>
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-ICON-LL-xbox-logo-120x120?wid=40&hei=40" alt="" className='mx-auto mb-2' />
                        <a href='https://www.microsoft.com/en-in/store/b/xbox?icid=MSCOM_QL_Xbox'><p className='text-sky-700 underline font-semibold'>Buy Xbox games</p></a>
                    </div>
                    <div className='text-center m-4'>
                        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Quick-Link-Icon-80x80-Microsoft-365?wid=40&hei=40" className='mx-auto mb-2' alt="" />
                        <a href='https://account.live.com/tou/accrue?mkt=EN-US&uiflavor=web&id=74335&ru=https://login.live.com/login.srf%3fid%3d74335%26opid%3d24DE162275473CE1%26opidt%3d1662646191'><p className='text-sky-700 underline font-semibold'>Get Windows 11</p></a>
                    </div>
                </div>
            </div>}



        </>
    )
}

export default Carousel
