import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
`;

export const Logo = styled.img`
  height: 60px;
`;

export const LinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
`;

// .navigation {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 25px;
//   align-items: center;

//   .logo-container {
//     height: 100%;
//     display: flex;
//     align-items: center;
//     width: 70px;

//     .logo {
//       height: 60px;
//     }
//   }

// //   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//     gap: 20px;

//     .nav-link {
//       cursor: pointer;
//     }
//   }
// }
