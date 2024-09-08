'use client';
import Image from "next/image";
import backIcon from '../../static/img/backIcon.svg';
import authBg from '../../static/img/auth-bg.png';
import logo from '../../static/img/4swapp-logo.svg';
import ar from '../../static/img/ar-eg.svg';
import en from '../../static/img/en-us.svg';
import otp from '../../static/img/phone-login.svg';
import facebook from '../../static/img/facebook.svg';
import google from '../../static/img/google.svg';
import Link from "next/link";
// import { useEffect, useState } from "react";

const Login = () => {
  // const [isRtl, setIsRtl] = useState(false);

  // useEffect(()=>{
  //   const dir = document.documentElement.getAttribute('dir');
  //   setIsRtl(dir === 'rtl');
  // },[]);

  return (
    <div className="ready loaded">
      <div className="toggle_lang">
        <button id="toggle_lang_btn">
          <Image className="img" width={100} height={100} src={en} alt="en"/><span>en</span>
        </button>
      </div>
      <div>
        <div className=" auth_page login_page">
          <div className="row mx-0">
            <div className="col-lg-6 bg_img d-none d-lg-block">
              <div className="auth_img_side">
                <Link href="/login" className="app_logo">
                  <Image
                  className="img"
                    src={logo}
                    alt="App Logo"
                    width={100}
                    height={100}
                  />
                </Link>
                <div className="txt_holder" data-translate="AuthBannerMainTitle">
                  <h1>بدل بيع اشتري</h1>
                  <h2>بمنتهى السهولة !</h2>
                </div>
                <Image
                  src={authBg}
                  alt="Auth Background"
                  className="auth_bg img"
                  width={500}
                  height={300}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="auth_form">
                <div className="back_logo d-flex d-lg-none">
                  <button className="back_icon">
                    <Image
                      className="img"
                      src={backIcon}
                      alt="Back Icon"
                      width={24}
                      height={24}
                    />
                  </button>

                  <Link href="#" className="app_logo">
                    <Image
                      className="img"
                      src={logo}
                      alt="App Logo"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="row">
                  <div className="col-md-8 col-lg-10 col-xl-7 mx-auto">
                    <h3 data-translate="Login.Login">تسجيل الدخول</h3>
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
                            تذكرني
                          </label>
                        </div>
                        <Link
                          className="forget_password"
                          href="/forgot-password"
                          id="ForgotPassword"
                          data-translate="Login.ForgotPassword"
                        >
                          نسيت كلمة المرور
                        </Link>
                      </div>
                      <button
                        id="login_btn"
                        value="login"
                        name="button"
                        className="loading_btn p-ripple p-element primary_btn big_btn p-button p-component"
                      >
                        <span id="Login" data-translate="Login.Login">
                          تسجيل الدخول
                        </span>
                      </button>
                      <div className="using" id="OrUser" data-translate="OrUser">
                        أو استخدم
                      </div>
                      <div className="auth_social">
                        <Link className="social_btn" id="PhoneLogin" href="/auth/phone">
                          <Image
                            src={otp}
                            alt="OTP"
                            width={24}
                            height={24}
                          />
                        </Link>
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
                      <div className="have_account">
                        <h5
                          id="dontHaveAccount"
                          data-translate="dontHaveAccount"
                        >
                          ليس لديك حساب ؟
                        </h5>
                        <Link
                          href="/register"
                          className="loading_btn big_btn w-100 secondary_btn"
                        >
                          <span id="CreateAccount" data-translate="CreateAccount">
                            إنشاء حساب
                          </span>
                        </Link>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
