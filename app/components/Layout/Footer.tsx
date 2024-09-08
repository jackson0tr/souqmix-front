'use client'
import Image from "next/image";
import Link from "next/link";
import facebook from '../../static/img/icons/facebook.svg'
import instagram from '../../static/img/icons/Instagram.svg'
import twitter from '../../static/img/icons/twitter.svg'
import linkedin from '../../static/img/icons/linkedin.svg'
import tiktok from '../../static/img/icons/tiktok.svg'
import youtube from '../../static/img/icons/youtube.svg'
import '../../styles/footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-class">
                <div className="container-class">
                    <div className="row-class">
                        <div className="sec1">
                            <h2>تابعنا</h2>
                            <div>
                                <div className="social">
                                    <Link href="https://www.facebook.com/inzopay" target="_blank"><Image src={facebook} alt="facebook"/></Link>
                                    <Link href="https://instagram.com/inzopay" target="_blank"><Image src={instagram} alt="Instagram"/></Link>
                                    <Link href="https://twitter.com/inzopay" target="_blank"><Image src={twitter} alt="twitter"/></Link>
                                    <Link href="https://twitter.com/inzopay" target="_blank"><Image src={linkedin} alt="linkedin"/></Link>
                                    <Link href="https://twitter.com/inzopay" target="_blank"><Image src={tiktok} alt="tiktok"/></Link>
                                    <Link href="https://twitter.com/inzopay" target="_blank"><Image src={youtube} alt="youtube"/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="sec2">
                            <div>
                                <h2>اتصل بنا</h2>
                                <div className="contacts_box">
                                    <a target="_blank" href="https://wa.me/201098684444" className="footer_info">
                                        <i><svg><use href="#whatsapp_icon"></use></svg></i><span className="ltr_text">01098684444</span></a>
                                    <a href="mailto:inzoopay@gmail.com" target="_blank">
                                        <div className="footer_info"><i><svg><use href="#email_icon"></use></svg></i><span>inzoopay@gmail.com</span></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                            <div className="links">
                                <Link className="link" href="/privacy">الشروط وسياسة الخصوصية</Link>
                                <Link className="link" href="/terms">الشروط و الأحكام</Link>
                                <Link className="link" href="/faq">الاسئله الشائعه</Link>
                            </div>
                    </div>
                        <div className="copyright">  حقوق النشر SouqMix </div>
                </div>
            </div>
        </>
    )
}

export default Footer;