import styled from "styled-components";
import NavDrawer from "./NavDrawer.jsx";

const StyledNav = styled.nav`
  height: 50px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = ({styledNavProps}) => {
   return <StyledNav {...styledNavProps}>
      <div>Logo</div>
      <div><NavDrawer/></div>
   </StyledNav>
}
export default Nav;
