'use client';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import logo from '../../static/img/4swapp-logo.svg';
import ar from '../../static/img/ar-eg.png';
import authBG from '../../static/img/auth-bg.png';
import backIcon from '../../static/img/backIcon.svg';

const Verify = () => {
    return (
        <>

            {/* Google Tag Manager */}
            <Script
                id="google-tag-manager"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-PCZ9LRFC');`,
                }}
            />

            <body className="ready">

                <div style={{ display: "none" }} className="hidden">
                    <svg>
                        <defs>
                            <symbol id="eye_icon" viewBox="0 0 25 19" fill="none">
                                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0C18.514 0 23.5673 4.03678 25 9.5C23.5673 14.9632 18.514 19 12.5 19C6.48605 19 1.43277 14.9632 0 9.5C1.43277 4.03678 6.48605 0 12.5 0Z" fill="#2D3142" />
                                <circle cx="12.5" cy="9.5" r="3.5" fill="#ECECF1" />
                            </symbol>
                            <symbol id="eye_close_icon" viewBox="0 0 20 20" fill="#2D3142" opacity="0.3">
                                <path fill-rule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clip-rule="evenodd" />
                                <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                            </symbol>


                            <symbol id="check_icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </symbol>
                            <symbol id="close_icon" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </symbol>
                            <symbol id="exclamation_icon" viewBox="0 0 3 12" fill="none">
                                <path d="M2.37571 0.818182L2.18182 7.94744H0.362216L0.163352 0.818182H2.37571ZM1.27202 11.1293C0.943892 11.1293 0.662169 11.0133 0.426847 10.7812C0.191525 10.5459 0.0755209 10.2642 0.0788353 9.93608C0.0755209 9.61127 0.191525 9.33286 0.426847 9.10085C0.662169 8.86884 0.943892 8.75284 1.27202 8.75284C1.58688 8.75284 1.86364 8.86884 2.10227 9.10085C2.34091 9.33286 2.46188 9.61127 2.4652 9.93608C2.46188 10.1548 2.40388 10.3554 2.29119 10.5376C2.18182 10.7166 2.03764 10.8608 1.85866 10.9702C1.67969 11.0762 1.48414 11.1293 1.27202 11.1293Z" fill="currentColor" />
                            </symbol>
                            <symbol id="error_icon" viewBox="0 0 174 174" fill="none">
                                <path d="M72.75 8.80459C81.5679 3.71356 92.4321 3.71356 101.25 8.80459L147.594 35.5614C156.412 40.6525 161.844 50.0611 161.844 60.2432V113.757C161.844 123.939 156.412 133.348 147.594 138.439L101.25 165.195C92.4321 170.286 81.5679 170.286 72.75 165.195L26.4058 138.439C17.5879 133.348 12.1558 123.939 12.1558 113.757V60.2432C12.1558 50.0611 17.5879 40.6525 26.4058 35.5614L72.75 8.80459Z" stroke="#EA4335" stroke-opacity="0.21" />
                                <path opacity="0.15" d="M78.0002 16.2235C83.5694 13.0081 90.4309 13.0081 96.0002 16.2235L143.794 43.8171C149.363 47.0325 152.794 52.9748 152.794 59.4056V114.593C152.794 121.024 149.363 126.966 143.794 130.181L96.0001 157.775C90.4309 160.99 83.5694 160.99 78.0002 157.775L30.2066 130.181C24.6374 126.966 21.2066 121.024 21.2066 114.593V59.4055C21.2066 52.9748 24.6374 47.0325 30.2066 43.8171L78.0002 16.2235Z" fill="#DC2D2D" />
                                <rect x="103.443" y="66.6816" width="4.95111" height="51.9867" rx="2.47555" transform="rotate(45 103.443 66.6816)" fill="#DC2D2D" stroke="#DC2D2D" stroke-width="2" />
                                <rect x="106.943" y="103.443" width="4.95111" height="51.9867" rx="2.47555" transform="rotate(135 106.943 103.443)" fill="#DC2D2D" stroke="#DC2D2D" stroke-width="2" />
                            </symbol>
                            <symbol id="edit_icon" viewBox="0 0 18 18" fill="none">
                                <path opacity="0.4" d="M16.8653 1.13829C16.5044 0.777415 16.076 0.491146 15.6046 0.295836C15.1331 0.100526 14.6277 0 14.1174 0C13.607 0 13.1017 0.100526 12.6302 0.295836C12.1587 0.491146 11.7303 0.777415 11.3695 1.13829L0.379457 12.1265C0.259136 12.2467 0.163692 12.3895 0.0985813 12.5466C0.0334711 12.7037 -2.77112e-05 12.8721 1.84413e-07 13.0422V16.7049C-9.06118e-05 16.875 0.0333473 17.0435 0.0984024 17.2006C0.163458 17.3578 0.258854 17.5006 0.379138 17.6209C0.499421 17.7412 0.642233 17.8366 0.799409 17.9016C0.956584 17.9667 1.12504 18.0001 1.29515 18H4.9594C5.12949 18 5.29791 17.9665 5.45503 17.9014C5.61216 17.8363 5.75492 17.7409 5.87514 17.6206L16.8666 6.63236C17.5928 5.90241 18.0003 4.91462 18 3.88504C17.9997 2.85547 17.5918 1.86788 16.8653 1.13829ZM15.0326 2.96968C15.2749 3.21277 15.411 3.5419 15.4113 3.8851C15.4115 4.22829 15.2758 4.55761 15.0339 4.80104L14.118 5.71687L12.2856 3.88518L13.2011 2.96968C13.3214 2.8494 13.4641 2.75399 13.6212 2.6889C13.7784 2.6238 13.9468 2.5903 14.1168 2.5903C14.2869 2.5903 14.4553 2.6238 14.6124 2.6889C14.7695 2.75399 14.9124 2.8494 15.0326 2.96968ZM4.42321 15.4098H2.59058V13.5785L10.4538 5.71639L12.2862 7.54808L4.42321 15.4098Z" fill="currentColor" />
                            </symbol>

                        </defs>
                    </svg>
                </div>

                <div className="toggle_lang">
                    <button id="toggle_lang_btn">
                        <Image data-base="/assets/img/" src={ar} alt="ar" />
                        <span>AR</span>
                    </button>
                </div>

                <div className="auth_page resetpasswordotp_page">
                    <div className="row mx-0">
                        <div className="col-lg-6 bg_img d-none d-lg-block">
                            <div className="auth_img_side">
                                <Link href="/" className="app_logo">
                                    <Image src={logo} alt="logo" />
                                </Link>
                                <div className="txt_holder" data-translate="AuthBannerMainTitle"></div>
                                <Image src={authBG} alt="auth" className="auth_bg" />
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="auth_form">
                                <div className="back_logo d-flex">
                                    <button className="back_icon">
                                        <Image src={backIcon} alt="backIcon" />
                                    </button>
                                    <div className="p-progressbar">
                                        <div className="p-progressbar-value"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 col-lg-10 col-xl-7 mx-auto">


                                        <h4 id="sub_message" data-translate="Forgotpassword.OTP"></h4>
                                        <h3 id="EnterCode" data-translate="enter verification number"></h3>

                                        <form action="" method="post">
                                            <div className="inputs_holder">
                                                <div className="row">
                                                    <input name="OTP" id="OTP" type="hidden" data-val="true"
                                                        data-val-maxlength="The field OTP must be a string or array type with a maximum length of &#x27;6&#x27;."
                                                        data-val-maxlength-max="6"
                                                        data-val-required="The OTP field is required." value="" />

                                                    <div className="text-danger validation-summary-valid"
                                                        data-valmsg-summary="true">
                                                        <ul>
                                                            <li style={{ display: "none" }}></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className="otp_numbers">
                                                            <input type="number" id="otp1" name="otp1" className="otp-number"
                                                                maxLength={1} pattern="[0-9]*" />
                                                            <input type="number" id="otp2" name="otp2" className="otp-number"
                                                                maxLength={1} pattern="[0-9]*" />
                                                            <input type="number" id="otp3" name="otp3" className="otp-number"
                                                                maxLength={1} pattern="[0-9]*" />
                                                            <input type="number" id="otp4" name="otp4" className="otp-number"
                                                                maxLength={1} pattern="[0-9]*" />
                                                        </div>
                                                    </div>

                                                    <div className="loader_place">
                                                        <div className="loaderIcon"></div>
                                                    </div>

                                                </div>
                                            </div>


                                            <input name="__RequestVerificationToken" type="hidden"
                                                value="CfDJ8JwITcm0eMJGjboh5ECoURP50q5uNrMQJag3yTsg6b9eS1MO8h5lZ2WgrJDrbavnKUNuUCb0XbzeOFUCbt_CZKKlmPdokLrEb1ZHW9hF4fHFCFIy27CTXFi7QCHn4oCMMPdSAzJAn7gLBe2CFxdzLsM" />
                                        </form>

                                        <div className="row">
                                            <div className="col-md-8 col-lg-10 col-xl-8 mx-auto">
                                                <div className="resend_code">
                                                    <Link id="ResendCode" className="btn txt" data-translate="resend code"
                                                        href="/Account/ResendOTP?phone=01066473240"></Link>
                                                    <div className="counter">00:00</div>
                                                </div>
                                                <div>
                                                    <div className="phone_number_value">
                                                        <div>
                                                            <div className="current_phone_number"></div> <button
                                                                id="edit_phone_btn"><svg>
                                                                    <use href="#edit_icon"></use>
                                                                </svg></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button id="verift_btn" value="Submit" name="button"
                                                        className="loading_btn p-ripple p-element secondary_btn big_btn p-button p-component"
                                                        disabled><span data-translate="Verify"></span></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </body>
        </>
    );
};

export default Verify;
