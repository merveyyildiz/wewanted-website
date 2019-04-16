import React, { Component } from 'react';
import '../../index.css';
import Forget from './Forget';
import Kayit from './Kayit';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForgetPassword: false,
      showKayitPage: false
    };
  }

  onclick() {
    this.setState({ showForgetPassword: true });
  }
  onclick3() {
    this.setState({ showKayitPage: true });
  }

  render() {
    if (this.state.showForgetPassword) {
      return <Forget onButtonClick={this.handleButtonClick} />;
    } else if (this.state.showKayitPage) {
      return <Kayit />;
    }
    return (
      <div className="form-container sign-in-container black-color">
        <span>
          <img
            className="LOGO1"
            src={require('../Assets/LOGO1.png')}
            alt="logo1"
          />
          <div className="Frame2">
            <p className="Lorem-Ipsum-is-simply-dummy-text-of-the-printing-industry">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
            <p className="Lorem-Ipsum-has-been">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type it
              specimen book.
            </p>
            <input type="text" className="Input-Base1" />
            <input type="password" className="Input-Base2" />
            <div className="Formcerceve">
              <span>
                <input type="checkbox" className="Base" />
              </span>

              <span className="Beni-Hatirla">Beni Hatırla</span>
              <span onClick={() => this.onclick()} className="Sifremi-Unuttum">
                Şifremi Unuttum
              </span>
            </div>

            <button className="buttoncerceve">
              <span className="Giris-Yap">Giriş Yap</span>
            </button>
          </div>
          <div className="Ya-da-sosyal-medya-araclyla-ile">
            Ya da sosyal medya aracılığıyla ile
          </div>
          <div className="Fontcerceve">
            <div className="Yuvarlak">
              <img
                src={require('../Assets/google-brands.png')}
                className="google-brands"
              />
            </div>
            <div className="Yuvarlak">
              <img
                src={require('../Assets/facebook-f-brands.png')}
                className="google-brands"
              />
            </div>
            <div className="Yuvarlak">
              <img
                src={require('../Assets/twitter-brands.png')}
                className="google-brands"
              />
            </div>
            <div className="Yuvarlak">
              <img
                src={require('../Assets/github-brands.png')}
                className="google-brands"
              />
            </div>
          </div>
          <div className="Aramiza-katılmak-istermisin-frame">
            <span className="Aramza-katlmak-ister-misin-Kayt-Ol">
              Aramıza katılmak ister misin?{' '}
            </span>
            <span
              className="kayit-ol"
              onClick={() => {
                this.props.onButtonClick();
                this.onclick3();
              }}
            >
              {' '}
              Kayıt Ol
            </span>
          </div>
        </span>
      </div>
    );
  }
}
