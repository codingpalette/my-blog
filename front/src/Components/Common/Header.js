import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBox = styled.header`
  width: 100%;
  height: 60px;
  position: sticky;
  left: 0;
  top: 15px;
  z-index: 1000;
  box-sizing: border-box;

  /* background-color: #6c63ff;
  @media (prefers-color-scheme: dark) {
    background-color: #1f2023;
  } */
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebf5fc;
  padding: 0 10px;
  border-radius: 30px;
  box-shadow: -6px -6px 20px rgba(255, 255, 255, 1),
    6px 6px 20px rgba(0, 0, 0, 0.1);
  height: 100%;
  h1 {
    margin-left: 20px;
    margin-right: 10px;
  }
`;

const HeaderNav = styled.nav`
  height: 100%;
  overflow-x: auto;
  border-radius: 30px;
  display: flex;
  ul {
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
  }
  ul li a {
    display: block;
    padding: 10px 20px;
    margin: 0 5px;
    border-radius: 40px;
    color: #6c63ff;
    box-shadow: -4px -4px 15px rgba(255, 255, 255, 1),
      4px 4px 15px rgba(0, 0, 0, 0.1);
  }
  ul li a:hover {
    box-shadow: inset -4px -4px 10px rgba(255, 255, 255, 0.5),
      inset 4px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

// const HeaderNavBtn = styled.button`
//   position: absolute;
//   right: 40px;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 45px;
//   height: 45px;
//   display: none;
//   box-shadow: -2px -2px 6px rgba(255, 255, 255, 1),
//     2px 2px 6px rgba(0, 0, 0, 0.1);
//   border-radius: 50%;
//   span {
//     position: absolute;
//     left: 50%;
//     width: 60%;
//     height: 2px;
//     background-color: #6c63ff;
//     transition: 0.3s;
//   }
//   .line1 {
//     top: 30%;
//     transform: translate(-50%);
//   }
//   .line2 {
//     top: 50%;
//     transform: translate(-50%, -50%);
//   }
//   .line3 {
//     top: 70%;
//     transform: translate(-50%, -100%);
//   }
//   &.active {
//     box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 1),
//       inset 2px 2px 6px rgba(0, 0, 0, 0.1);
//     .line1 {
//       top: 50%;
//       transform: translate(-50%, -50%) rotate(45deg);
//     }
//     .line2 {
//       opacity: 0;
//     }
//     .line3 {
//       top: 50%;
//       transform: translate(-50%, -50%) rotate(-45deg);
//     }
//   }
//   @media screen and (max-width: 768px) {
//     display: block;
//   }
// `;

const Header = () => {
  // const [active, setActive] = useState('');

  // const NavBtnClick = () => {
  //   setActive(active === '' ? 'active' : '');
  // };
  return (
    <>
      <HeaderBox className="max_box">
        <HeaderContent>
          <h1>
            <Link to="/">로고</Link>
          </h1>
          <HeaderNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/post">Post</Link>
              </li>
              <li>
                <Link to="/todo">todo</Link>
              </li>
            </ul>
          </HeaderNav>
          {/* <HeaderNavBtn className={active} onClick={NavBtnClick}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </HeaderNavBtn> */}
        </HeaderContent>
      </HeaderBox>
    </>
  );
};

export default Header;
