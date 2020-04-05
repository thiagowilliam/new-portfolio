import React from 'react';

import * as S from './styles';

import BoxSocial from '../../components/Social';

export default function Contact() {
  return (
    <S.Container id="contact">
      <S.Poligono />
      <S.Centraliza>
        <S.TituloContact>
          Wanna <span>Start Work</span> With Me?
        </S.TituloContact>

        <S.BoxDetails>
          <h2>My Contact Details</h2>

          <S.InfoDetails>
            <h3>Email</h3>
            <p>Thiago.will.silva@gmail.com</p>
          </S.InfoDetails>

          <S.InfoDetails>
            <h3>Telefone</h3>
            <p>+353 0830700040</p>
          </S.InfoDetails>

          <BoxSocial />
        </S.BoxDetails>
      </S.Centraliza>

      <S.Footer>
        <p>ReactJS © Copyright 2020</p>
        <S.WrapperHeart>
          <S.PulsingHeart />
        </S.WrapperHeart>
      </S.Footer>
    </S.Container>
  );
}
