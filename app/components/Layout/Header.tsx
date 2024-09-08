'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import usa from '../../static/img/en-us.svg';
import logo from '../../static/logo.svg';
import create from '../../static/img/icons/add-lisitng-icon.svg'
import { IoMenu } from "react-icons/io5";
import search from '../../static/img/search-white.svg';
import cars from '../../static/img/cars.png'
import '../../styles/header.css'; // Import your CSS
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(1);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    // const [isRealEstateOpen, setIsRealEstateOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // const closeSidebar = () => {
    //     setIsOpen(false);
    // };

    const toggleCategory = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    // const toggleRealEstate = () => {
    //     setIsRealEstateOpen(!isRealEstateOpen);
    // };

    const handleCars = () => {
        setActive(2);
    }

    const handleBack = () => {
        setActive(1);
    }

    return (
        <>
            <header>
                <div className="flex-space">
                    <IoMenu className="menu-icon" onClick={toggleSidebar} size={30} />

                    <Link href="/login" className="login-btn">
                        تسجيل دخول
                    </Link>

                    <div className="lang-icon">
                        <Image width={30} height={30} src={usa} alt="Egypt Flag" />
                        <span className="px-1">En</span>
                    </div>

                    <div className="create-listing-btn">
                        <span>اضف اعلانك</span>
                        <Image src={create} alt="img" />
                    </div>

                </div>

                <div className="search-bar">
                    <Image src={search} alt="img" className="search-img" width={25} height={25} />
                    <input type="text" placeholder="ابحث..." />
                    <AiOutlineSearch className="search-icon" size={24} />
                </div>


                <Link href={"/"}>
                    <Image src={logo} alt="Logo" width={80} height={80} />
                </Link>

                {/* Search bar on large screens */}


            </header>

            {/* Search bar on small screens */}
            <div className="small-screen-search">
                <div className="relative">
                    <Image src={search} alt="img" className="search-img" width={25} height={25} />
                    <input type="text" placeholder="ابحث..." />
                    <AiOutlineSearch className="icon" size={24} />
                </div>
            </div>

            {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

            <div className={`sidebar ${isOpen ? "open" : ""}`}>

                {
                    active === 1 && (
                        <div>
                            <div className="sidebar-item"
                                onClick={toggleCategory}>
                                <Image className="category-image" width={25} height={25} src={cars} alt="background" />
                                <span onClick={handleCars} className="category-title">عربيات و مركبات</span>
                                <MdKeyboardArrowLeft className="left-arrow" size={20} />
                            </div>

                            <div className="btn">
                                <div className="create-listing-sidebar-btn">
                                    <FaPlus className="icon" />
                                    <span>اضف اعلانك</span>
                                </div>
                            </div>

                            <div className="contact">
                                <div className="phone">
                                    <FaPhone size={30}/>
                                    +20123456789
                                </div>
                                <div className="email">
                                    <MdEmail size={30}/>
                                        souqmix@gmail.com
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    active === 2 && (
                        <div>
                            <div className="listing-container">
                                <div className="title-container">
                                    <h1 className="listing-title">عربيات و مركبات</h1>
                                    <MdKeyboardArrowLeft onClick={handleBack} className="arrow" size={30} />
                                </div>
                                <div className="listing-items">
                                    <span>سيارات للبيع</span>
                                    <br />
                                    <span>سيارات للايجار</span>
                                    <br />
                                    <span> موتيسيكلات للبيع</span>
                                    <br />
                                    <span> موتيسيكلات للايجار</span>
                                    <br />
                                    <span>مراكب و قوارب للبيع</span>
                                    <br />
                                    <span>مراكب و قوارب للايجار</span>
                                    <br />
                                    <span>شاحنات ثقيلة و حافلات للبيع</span>
                                    <br />
                                    <span>شاحنات ثقيلة و حافلات للايجار</span>
                                    <br />
                                    <span>دراجات</span>
                                    <br />
                                    <span>اكسسوارات المراكب</span>
                                    <br />
                                    <span>قطع غيار المراكب</span>
                                    <br />
                                    <span>كل المركبات</span>
                                </div>
                                <div className="button-container">
                                    <div className="listing-button">
                                        <FaPlus className="icon" />
                                        <span>اضف اعلانك</span>
                                    </div>
                                </div>
                                <div className="contact">
                                <div className="phone">
                                    <FaPhone size={30}/>
                                    +20123456789
                                </div>
                                <div className="email">
                                    <MdEmail size={30}/>
                                        souqmix@gmail.com
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    );
};

export default Header;
