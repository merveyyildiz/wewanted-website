import React from 'react';
import '../../index.css';
import styled from 'styled-components';
const Container = styled.div`
  width: 604px;
  height: 329px;
  margin-top: 100px;
  margin-bottom: 0px;
  margin-left: 50px;
`;
const Button = styled.div`
  margin-left: 50px;
  margin-top: 44px;
`;
const Linkler = styled.div`
  height: 2px;
  margin-left: 56.5px;
  margin-top: 144px;
  margin-bottom: 65px;
  display: flex;
`;
export default function Left() {
  return (
    <form className="Frame">
      <Container>
        <p className="Lorem">Lorem ipsum Dolor Sit Amet, Lorem</p>
      </Container>
      <Button>
        <button className="Rectangle-3 ">
          <span className="Button-1">Button 1</span>
        </button>
      </Button>
      <Linkler>
        <div className="Anasayfa">Anasayfa</div>
        <div className="Hakkmzda">Hakkımızda</div>
        <div className="WeWantEd-Labs">WeWantEd-Labs</div>
        <div className="Etkinlikler">Etkinlikler</div>
        <div className="Blog">Blog</div>
      </Linkler>
    </form>
  );
}
