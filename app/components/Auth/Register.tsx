import Image from "next/image"
import backIcon from '../../static/img/backIcon.svg'
import logo from '../../static/img/4swapp-logo.svg'
import authBG from '../../static/img/auth-bg.png'
import google from '../../static/img/google.svg'
import facebook from '../../static/img/facebook.svg'
import en from '../../static/img/en-us.svg'
import ar from '../../static/img/ar-eg.svg'
import Link from "next/link"
import { useState } from "react"
import cam from '../../static/img/camera-icon.svg'

const Register = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextClick = () => {
        setCurrentStep(currentStep + 1);
    };
    // const handlePrevisClick = () => {
    //     setCurrentStep(currentStep - 1);
    // };
    return (
        <>
            <div className="ready loaded">
                <div className="toggle_lang">
                    <button id="toggle_lang_btn">
                        <Image className="img" width={100} height={100} src={en} alt="en" /><span>en</span>
                    </button>
                </div>
                <div>
                    <div className="auth_page login_page">
                        <div className="row mx-0">
                            <div className="col-lg-6 bg_img d-none d-lg-block">
                                <div className="auth_img_side">
                                    <button className="p-ripple p-element app_logo p-button p-component" tabIndex={0}>
                                        <Image src={logo} alt="App Logo" />
                                        <span className="p-ink"></span>
                                        <span className="p-button-label">&nbsp;</span>
                                    </button>
                                    <div className="txt_holder">
                                        <h1>بدل بيع اشتري</h1>
                                        <h2>بمنتهى السهولة!</h2>
                                    </div>
                                    <Image src={authBG} alt="Auth Background" className="auth_bg" />
                                </div>
                            </div>

                            {currentStep === 1 && (

                                <div className="col-12 col-lg-6">

                                    <div className="auth_form ">
                                        <div className="auth_form">
                                            <div className="back_logo d-flex d-lg-none">
                                                <button className="p-element p-ripple back_icon p-button p-component" tabIndex={0}>
                                                    <Image src={backIcon} alt="Back Icon" />
                                                    <span className="p-button-label">&nbsp;</span>
                                                    <span className="p-ink"></span>
                                                </button>
                                                <button className="p-element p-ripple app_logo p-button p-component" tabIndex={0}>
                                                    <Image src={logo} alt="App Logo" />
                                                    <span className="p-button-label">&nbsp;</span>
                                                    <span className="p-ink"></span>
                                                </button>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-8 col-lg-10 col-xl-7 mx-auto">
                                                    <h3>إنشاء حساب جديد</h3>
                                                    <form id="loginForm" action="" method="post">
                                                        <input
                                                            type="hidden"
                                                            id="ReturnUrl"
                                                            name="ReturnUrl"
                                                            value="/"
                                                        />
                                                        <div className="inputs_holder mb-4">
                                                            <div className="row keep_input">
                                                                <div className="col-md-12 mb-4">
                                                                    <div className="phone_number">
                                                                        <input
                                                                            type="hidden"
                                                                            id="country"
                                                                            name="CountryCode"
                                                                            value="+20"
                                                                        />
                                                                        <div className="p-dropdown">
                                                                            <div className="p-dropdown-label">
                                                                                <Image
                                                                                    className="selected_flag img"
                                                                                    alt="Egypt Flag"
                                                                                    src={ar}
                                                                                    width={20}
                                                                                    height={12}
                                                                                />
                                                                                <span className="selected_name">+20</span>
                                                                            </div>
                                                                        </div>
                                                                        <input
                                                                            className="w-100 phone_input"
                                                                            type="text"
                                                                            min="0"
                                                                            inputMode="numeric"
                                                                            data-translate="Phonenumber"
                                                                            placeholder="رقم الهاتف"
                                                                            name="Username"
                                                                            autoFocus
                                                                            data-val="true"
                                                                            data-val-required="The Username field is required."
                                                                            id="Username"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="pass_input col-md-12">
                                                                    <div className="password_input">
                                                                        <input
                                                                            type="password"
                                                                            data-translate="Password"
                                                                            className="w-100 p-inputtext"
                                                                            name="password"
                                                                            data-val="true"
                                                                            data-val-required="The Password field is required."
                                                                            id="Password"
                                                                            placeholder="كلمة المرور"
                                                                        />
                                                                        <span className="password_toggle">
                                                                            <svg>
                                                                                <use href="#eye_icon"></use>
                                                                            </svg>
                                                                            <svg className="display:none">
                                                                                <use href="#eye_close_icon"></use>
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="remember_forget">
                                                            <div className="remember_me">
                                                                <input
                                                                    type="checkbox"
                                                                    className="p-checkbox-box"
                                                                    id="remember"
                                                                    name="remember"
                                                                    value="rememberMe"
                                                                    data-val="true"
                                                                    data-val-required="The RememberLogin field is required."
                                                                />
                                                                <label
                                                                    id="RemeberMe"
                                                                    data-translate="Login.Remember"
                                                                >
                                                                    أنا أوافق على {' '}
                                                                    <Link className="p-element p-ripple p-button p-component" href="/terms">
                                                                        <span className="p-button-label">الشروط و الأحكام</span>
                                                                        <span className="p-ink"></span>
                                                                    </Link>
                                                                </label>
                                                            </div>

                                                        </div>

                                                        <button onClick={handleNextClick} className="p-ripple p-element secondary_btn big_btn p-button p-component" type="submit" >
                                                            <span className="p-ink"></span>
                                                            <span className="p-button-label">التالي</span>
                                                        </button>

                                                        <div className="using" id="OrUser" data-translate="OrUser">
                                                            أو استخدم
                                                        </div>
                                                        <div className="auth_social">
                                                            <Link className="social_btn" href="/auth/facebook">
                                                                <Image
                                                                    src={facebook}
                                                                    alt="Facebook"
                                                                    width={24}
                                                                    height={24}
                                                                />
                                                            </Link>
                                                            <Link className="social_btn" href="/auth/google">
                                                                <Image
                                                                    src={google}
                                                                    alt="Google"
                                                                    width={24}
                                                                    height={24}
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="agreeing"> من خلال التسجيل، أنت توافق على <Link className="p-element p-ripple p-button p-component" href="/privacy"><span className="p-button-label">سياسة الخصوصية</span><span className="p-ink"></span></Link></div>
                                                        <div className="have_account">
                                                            <h5>
                                                                هل أنت مستخدم بالفعل؟
                                                            </h5>
                                                            <button className="loading_btn  p-ripple p-element primary_btn big_btn p-button p-component">
                                                                <a className="remove-link" href="/login" >
                                                                    <span className="p-ink"></span><span className="p-button-label">تسجيل الدخول</span>
                                                                </a>
                                                            </button>
                                                        </div>
                                                        <input
                                                            name="__RequestVerificationToken"
                                                            type="hidden"
                                                            value="CfDJ8JwITcm0eMJGjboh5ECoURP5d0BvGgY6KTc_hikG3qNqagOdbS2Sspx5VypjGPUNuUJjlZrI_s_QQNsoHtsZLs-fRn8D0ajNT0S0HRK_XWwp1fXpfec3_XhP8TRuBzl8GKN_F3yYiRrXTQiHBLDx04o"
                                                        />
                                                        <input
                                                            name="RememberLogin"
                                                            type="hidden"
                                                            value="false"
                                                        />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            )}
                            {/* SECOND STEP */}
                            {
                                currentStep === 2 && (
                                    <div className="col-12 col-lg-6">
                                        <div className="auth_form_wrapper personal_info">
                                            <div className="progress_head">
                                                <button className="back_icon p-button p-component" tabIndex={0}>
                                                    <Image src={backIcon} alt="Back" />
                                                </button>
                                                <div className="progress_bar">
                                                    <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={25} className="p-progressbar-value" style={{ width: '25%' }}></div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-8 col-lg-10 col-xl-8 mx-auto mw-form">
                                                    <h3>أستكمل بياناتك</h3>
                                                    <form noValidate autoComplete="off">
                                                        <label className="upload_photo">
                                                            <input type="file" accept="image/*, .heic, .heif" />
                                                            <Image src={cam} alt="Camera Icon" className="camera_icon" />
                                                        </label>

                                                        <div className="inputs_holder mb-4">
                                                            <div className="row keep_input">
                                                                <div className="col-md-12 mb-4">
                                                                    <div className="phone_number">
                                                                        <input
                                                                            className="w-100 phone_input"
                                                                            type="text"
                                                                            min="0"
                                                                            data-translate="FirstName"
                                                                            placeholder="الاسم الاول"
                                                                            name="FirstName"
                                                                            autoFocus
                                                                            data-val="true"
                                                                            data-val-required="The FirstName field is required."
                                                                            id="FirstName"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="pass_input col-md-12">
                                                                    <div className="password_input">
                                                                        <input
                                                                            type="text"
                                                                            data-translate="LastName"
                                                                            className="w-100 p-inputtext"
                                                                            name="LastName"
                                                                            data-val="true"
                                                                            data-val-required="The LastName field is required."
                                                                            id="LastName"
                                                                            placeholder="كلمة المرور"
                                                                        />                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <button className="secondary_btn big_btn p-button p-component" type="submit" disabled>
                                                            <span className="p-button-label">التالي</span>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register