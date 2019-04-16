import React, { Component } from 'react';
import '../../index.css';
import Login from './Login';
export default class Forget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGirisSayfasi: false
    };
  }
  onclick2() {
    this.setState({ showGirisSayfasi: true });
  }
  render() {
    if (this.state.showGirisSayfasi) {
      return <Login />;
    }
    return (
      <div className="form-container sign-in-container black-color">
        <span>
          <img
            className="LOGO1"
            src={require('../Assets/LOGO1.png')}
            alt="logo1"
          />
        </span>
        <div className="Frame2">
          <p className="Lorem-Ipsum-is-simply-dummy-text-of-the-printing-industry">
            Lorem Ipsum is simply dummy text of the printing industry.
          </p>
          <p className="Lorem-Ipsum-has-been">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type it specimen
            book.
          </p>
          <input
            type="text"
            placeholder="E-posta adresinizi giriniz."
            className="Input-Base3"
          />
          <button className="buttoncerceve">
            <span className="Giris-Yap">Sıfırlama Maili Gönder</span>
          </button>
          <div
            className="Giris-yap-sayfasna-geri-don"
            onClick={() => this.onclick2()}
          >
            Giris Yap'a Geri Dön
          </div>
        </div>
        <div className="Aramiza-katılmak-istermisin-frame">
          <span className="Aramza-katlmak-ister-misin-Kayt-Ol">
            Aramıza katılmak ister misin?{' '}
          </span>
          <span className="kayit-ol" onClick={this.props.onButtonClick}>
            {' '}
            Kayıt Ol
          </span>
        </div>
      </div>
    );
  }
}
