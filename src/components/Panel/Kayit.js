import React, { Component } from 'react';
import '../../index.css';

export default class Kayit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <input type="text" placeholder="Adınız" className="Input-Base4" />
          <input type="text" placeholder="Soyadınız" className="Input-Base4" />
          <input
            type="text"
            placeholder="E-posta adresi"
            className="Input-Base1"
            style={{ marginTop: '20px' }}
          />
          <input
            type="text"
            placeholder="Parolanızı giriniz."
            className="Input-Base2"
          />
          <input
            type="text"
            placeholder="Parolanızı tekrar giriniz."
            className="Input-Base2"
          />
          <button className="buttoncerceve">
            <span className="Giris-Yap">İleri</span>
          </button>
        </div>
      </div>
    );
  }
}
