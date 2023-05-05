import Image from 'next/image'
import { BiUserCircle } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { TbMessages, TbArmchair } from 'react-icons/tb';
import { RxDashboard } from 'react-icons/rx';
import Link from 'next/link';


function SideMenu() {
    return (
        <>
            <div className="flex flex-no-wrap">
                <div
                    className="w-64 absolute sm:relative bg-indigo-900 shadow md:h-full flex-col justify-between hidden sm:flex">
                    <div>
                        <div className="h-16 w-full flex items-center px-8">
                            <BiUserCircle className="mt-2 h-full w-full " />
                        </div>
                        <ul className="mt-12">
                            <li className="flex w-full justify-between text-white bg-indigo-800  cursor-pointer items-center py-3 px-8">
                                <Link href="/home" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <RxDashboard/>
                                    <span className="text-sm ml-2">Dashboard</span>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                                <Link href="./home/leave" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <TbArmchair/>
                                    <span className="text-sm ml-2">Leave</span>
                                </Link>
                            </li>
                            <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                                <a href="javascript:void(0)" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                        <circle cx="12" cy="12" r="9"></circle>
                                    </svg>
                                    <span className="text-sm ml-2">Performance</span>
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                                <a href="javascript:void(0)" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="7 8 3 12 7 16"></polyline>
                                        <polyline points="17 8 21 12 17 16"></polyline>
                                        <line x1="14" y1="4" x2="10" y2="20"></line>
                                    </svg>
                                    <span className="text-sm ml-2">Deliverables</span>
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                                <a href="javascript:void(0)" className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                                    </svg>
                                    <span className="text-sm ml-2">Invoices</span>
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                                <a href="javascript:void(0)" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                        <polyline points="4 12 12 16 20 12" />
                                        <polyline points="4 16 12 20 20 16" />
                                    </svg>
                                    <span className="text-sm ml-2">Inventory</span>
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                                <a href="javascript:void(0)" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    <span className="text-sm ml-2">Settings</span>
                                </a>
                            </li>
                        </ul>
                        <div className="flex items-center mt-48 mb-4 px-8">
                            <div className="w-10 h-10 bg-cover rounded-md mr-3">
                                <BiUserCircle width={25}
                                    height={25} role="Image  width={25}
                    height={25}" className="rounded-full h-full w-full overflow-hidden shadow" />
                            </div>
                            <div>
                                <p className="text-gray-200 text-sm font-medium">Steve Doe</p>
                                <p className="text-gray-200 text-xs">View Profile</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 bg-indigo-800">
                        <ul className="w-full flex items-center justify-between">
                            <li className="cursor-pointer text-white pt-5 pb-3">
                                <a aria-label="open notifications" href="javascript:void(0)">
                                    <IoIosNotificationsOutline width={30}
                                        height={30} />
                                </a>
                            </li>
                            <li className="cursor-pointer text-white pt-5 pb-3">
                                <a aria-label="open messages" href="javascript:void(0)" >
                                    <TbMessages width={25}
                                        height={25} />
                                </a>
                            </li>
                            <li className="cursor-pointer text-white pt-5 pb-3">
                                <a aria-label="open settings" href="javascript:void(0)">
                                    <Image width={25}
                                        height={25} src="/can-uploader/light_with_icons_at_bottom_alternate_style-svg5.svg" alt="settings" />
                                </a>
                            </li>
                            <li className="cursor-pointer text-white pt-5 pb-3 ">
                                <a aria-label="open archive" href="javascript:void(0)">
                                    <Image width={25}
                                        height={25} src="/can-uploader/light_with_icons_at_bottom_alternate_style-svg6.svg" alt="drawer" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-64 z-40 absolute sm:relative bg-indigo-900 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out" id="mobile-nav">
                    <button aria-label="open sidebar" id="openSideBar" className="h-10 w-10 bg-indigo-900 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900"
                    // onClick={sidebarHandler(true)}
                    >
                        <Image width={25}
                            height={25} src="/can-uploader/light_with_icons_at_bottom_alternate_style-svg7.svg" alt="toggler" />
                    </button>
                    <div id="closeSideBar" className="hidden h-10 w-10 bg-indigo-900 absolute right-0 mt-16 -mr-10 items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white"
                    // onClick={sidebarHandler(false)}
                    >
                        <Image width={25}
                            height={25} src="/can-uploader/light_with_icons_at_bottom_alternate_style-svg8.svg" alt="cross" />
                    </div>
                    <div>
                        <div className="h-16 w-full flex items-center px-8">
                            <Image width={25}
                                height={25} src="/can-uploader/light_with_icons_at_bottom_alternate_style-svg1.svg" alt="Logo" />
                        </div>
                        <ul className="mt-12">
                            <li className="flex w-full justify-between text-white bg-indigo-800 cursor-pointer items-center py-3 px-8">
                                <a href="javascript:void(0)" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                        <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                                    </svg>
                                    <span className="text-sm ml-2">Dashboard</span>
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                                <a href="javascript:void(0)" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                                    </svg>
                                    <span className="text-sm ml-2">Products</span>
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                                <a href="javascript:void(0)" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                        <circle cx="12" cy="12" r="9"></circle>
                                    </svg>
                                    <span className="text-sm ml-2">Performance</span>
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                                <a href="javascript:void(0)" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="7 8 3 12 7 16"></polyline>
                                        <polyline points="17 8 21 12 17 16"></polyline>
                                        <line x1="14" y1="4" x2="10" y2="20"></line>
                                    </svg>
                                    <span className="text-sm ml-2">Deliverables</span>
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                                <a href="javascript:void(0)" className="flex items-center rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                                    </svg>
                                    <span className="text-sm ml-2">Invoices</span>
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                                <a href="javascript:void(0)" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                        <polyline points="4 12 12 16 20 12" />
                                        <polyline points="4 16 12 20 20 16" />
                                    </svg>
                                    <span className="text-sm ml-2">Inventory</span>
                                </a>
                            </li>
                            <li className="flex w-full justify-between text-gray-200 hover:text-white hover:bg-indigo-800 cursor-pointer items-center px-8 py-3">
                                <a href="javascript:void(0)" className="flex items-center  rounded focus:outline-none focus:ring-2 focus:ring-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    <span className="text-sm ml-2">Settings</span>
                                </a>
                            </li>
                        </ul>
                        <div className="flex items-center mt-48 mb-4 px-8">
                            <div className="w-10 h-10 bg-cover rounded-md mr-3">
                                <BiUserCircle />
                            </div>
                            <div>
                                <p className="text-gray-200 text-sm font-medium">Dipesh</p>
                                <p className="text-gray-200 text-xs">View Profile</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 bg-indigo-800">
                        <ul className="w-full flex items-center justify-between">
                            <li className="cursor-pointer text-white pt-5 pb-3">
                                <a aria-label="open notifications" href="javascript:void(0)">
                                    <Image width={25}
                                        height={25} src="/can-uploader/light_with_icons_at_bottom_alternate_style-svg3.svg" alt="notifications" />
                                </a>
                            </li>
                            <li className="cursor-pointer text-white pt-5 pb-3">
                                <a aria-label="open messages" href="javascript:void(0)">
                                    <Image width={25}
                                        height={25} src="/can-uploader/light_with_icons_at_bottom_alternate_style-svg4.svg" alt="chat" />
                                </a>
                            </li>
                            <li className="cursor-pointer text-white pt-5 pb-3">
                                <a aria-label="open settings" href="javascript:void(0)">
                                    <Image width={25}
                                        height={25} src="/can-uploader/light_with_icons_at_bottom_alternate_style-svg5.svg" alt="settings" />
                                </a>
                            </li>
                            <li className="cursor-pointer text-white pt-5 pb-3 ">
                                <a aria-label="open archive" href="javascript:void(0)">
                                    <Image width={25}
                                        height={25} src="/can-uploader/light_with_icons_at_bottom_alternate_style-svg6.svg" alt="drawer" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SideMenu

