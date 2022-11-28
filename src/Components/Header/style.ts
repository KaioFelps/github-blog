/* eslint-disable import/no-absolute-path */
import styled from 'styled-components'
import leftRisks from '/left-header-image.svg'
import rightRisks from '/right-header-image.svg'

export const LogoHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    margin-top: 64px;
  }
`

export const BlurRectangle = styled.div`
  width: 100%;
  max-width: 900px;
  height: 52px;
  margin: 20px;
  background: ${(p) => p.theme.secondary};
  filter: blur(106px);
  opacity: 0.7;

  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`

export const LeftCircle = styled.div`
  width: 236px;
  height: 236px;
  border-radius: 999px;
  background: ${(p) => p.theme.secondary};
  filter: blur(200px);
  opacity: 0.7;

  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
`

export const RightCircle = styled.div`
  width: 155px;
  height: 155px;
  border-radius: 999px;
  background: ${(p) => p.theme.secondary};
  filter: blur(184px);
  opacity: 0.7;

  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-20%);
`

export const HeaderContainer = styled.header`
  width: 100%;
  height: 296px;

  background-color: ${(p) => p.theme['base-800']};
  background: url(${leftRisks}) left center no-repeat,
    url(${rightRisks}) right center no-repeat;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    background: url(${leftRisks}) left center no-repeat;
  }
`
