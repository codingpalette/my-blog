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
  background-color: #efeeee;
  padding: 0 10px;
  border-radius: 30px;
  box-shadow: 6px 6px 12px #cbcaca, -6px -6px 12px #ffffff;
  height: 100%;
  @media (prefers-color-scheme: dark) {
    background-color: #262a3c;
    box-shadow: 4px 4px 7px #171924, -2px -2px 5px #353b54;
  }
  h1 {
    margin-left: 20px;
    margin-right: 10px;
  }
`;

const HeaderNav = styled.nav`
  height: 100%;
  width: 100%;
  overflow-x: auto;
  border-radius: 30px;
  display: flex;
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
  ul li a {
    display: block;
    padding: 10px 20px;
    margin: 0 5px;
    border-radius: 40px;
    color: #6c63ff;
    box-shadow: 3px 3px 6px #cbcaca, -3px -3px 6px #ffffff;
    @media (prefers-color-scheme: dark) {
      box-shadow: 4px 4px 7px #171924, -2px -2px 5px #353b54;
    }
  }
  ul li a:hover {
    box-shadow: inset 3px 3px 6px #cbcaca, inset -3px -3px 6px #ffffff;
    @media (prefers-color-scheme: dark) {
      box-shadow: inset 4px 4px 7px #171924, inset -2px -2px 5px #353b54;
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderBox className="max_box">
        <HeaderContent>
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
        </HeaderContent>
      </HeaderBox>
    </>
  );
};

export default Header;
