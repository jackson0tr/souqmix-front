'use client'
import Image from "next/image";
import en from '../../static/img/en-us.svg'
import logo from '../../static/img/4swapp-logo.svg'
import authBG from '../../static/img/auth-bg.png'
import backIcon from '../../static/img/backIcon.svg'
import egy from '../../static/img/eg.png'

const ForgotPassword = () => {
  return (
    <>
      
      <div className="ready loaded">
        
        <div style={{ display: "none" }} className="hidden">
          <svg>
            <defs>
              {/* Add your symbol definitions here */}
              <symbol id="eye_icon" viewBox="0 0 25 19" fill="none">
                <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M12.5 0C18.514 0 23.5673 4.03678 25 9.5C23.5673 14.9632 18.514 19 12.5 19C6.48605 19 1.43277 14.9632 0 9.5C1.43277 4.03678 6.48605 0 12.5 0Z" fill="#2D3142"></path>
                <circle cx="12.5" cy="9.5" r="3.5" fill="#ECECF1"></circle>
              </symbol>
              {/* Add other symbols */}
            </defs>
          </svg>
        </div>

        <div className="toggle_lang">
          <button id="toggle_lang_btn">
            <Image src={en} alt="EN" width={24} height={24} />
            <span>en</span>
          </button>
        </div>

        <div className="">
          <div className="auth_page forgotpassword_page">
            <div className="row mx-0">
              <div className="col-lg-6 bg_img d-none d-lg-block">
                <div className="auth_img_side">
                  <a href="/login" className="app_logo">
                    <Image src={logo} alt="logo" width={150} height={50} />
                  </a>
                  <div className="txt_holder" data-translate="AuthBannerMainTitle">
                    <h1>بدل بيع اشتري</h1>
                    <h2>بمنتهى السهولة!</h2>
                  </div>
                  <Image src={authBG} alt="auth background" width={300} height={200} className="auth_bg" />
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="auth_form">
                  <div className="back_logo d-flex">
                    <button className="back_icon">
                      <Image src={backIcon} alt="Back" width={24} height={24} />
                    </button>
                    <div className="p-progressbar">
                      <div className="p-progressbar-value" style={{ width: "30%" }}></div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-8 col-lg-10 col-xl-7 mx-auto">
                      <h3 id="EnterPhone" data-translate="enter your phone number">
                        أدخل رقم هاتفك
                      </h3>

                      <form action="" method="post">
                        <div className="inputs_holder mb-4">
                          <div className="row">
                            <input
                              type="hidden"
                              className="w-100 phone_input"
                              name="Email"
                              id="Phone"
                              placeholder="رقم الهاتف"
                              required
                            />
                            <span className="text-danger field-validation-valid"></span>
                          </div>

                          <div className="col-md-12 mb-4 keep_input">
                            <div className="phone_number">
                              <div className="p-dropdown">
                                <div className="p-dropdown-label">
                                  <Image className="selected_flag" src={egy} alt="EG" width={24} height={24} />
                                  <span className="selected_name">+20</span>
                                </div>
                                <div className="p-dropdown-panel">
                                  <div className="p-dropdown-item" data-value="+20">
                                    <Image src={egy} alt="EG" width={24} height={24} />
                                    +20
                                  </div>
                                </div>
                              </div>
                              <input
                                className="w-100 phone_input"
                                type="text"
                                name="phone"
                                placeholder="رقم الهاتف"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="loading_btn p-ripple p-element secondary_btn big_btn p-button p-component">
                            Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
