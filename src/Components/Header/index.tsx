/* eslint-disable import/no-absolute-path */
import {
  BlurRectangle,
  HeaderContainer,
  LeftCircle,
  LogoHolder,
  RightCircle,
} from './style'

import logo from '/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      {/* blur elements */}
      <LeftCircle />
      <RightCircle />
      <BlurRectangle />
      <LogoHolder>
        <img src={logo} draggable={false} alt="Github Blog" />
      </LogoHolder>
    </HeaderContainer>
  )
}
