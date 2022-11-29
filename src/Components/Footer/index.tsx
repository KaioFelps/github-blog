import { NavLink } from "react-router-dom";
import { FooterContainer } from "./style";
// eslint-disable-next-line import/no-absolute-path
import logo from "/Short-logo.svg";

export function Footer() {
  return (
    <FooterContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <p>Made with 💙 by Kaio Felps</p>
    </FooterContainer>
  );
}
