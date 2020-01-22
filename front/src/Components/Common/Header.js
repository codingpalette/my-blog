import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBox = styled.header`
  width: 100%;
  height: 50px;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 1000;
  @media (prefers-color-scheme: dark) {
    background-color: #1f2023;
  }

  @media (prefers-color-scheme: light) {
    background-color: #6c63ff;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  h1 {
    margin-right: 10px;
  }
`;

const HeaderNav = styled.nav`
  transition: 0.3s;
  overflow-y: hidden;
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  ul li a {
    color: #fff;
    padding: 0 10px;
    transition: color 0.2s;
  }
  ul li a:hover {
    color: rgba(255, 255, 255, 0.75);
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 0%;
    top: 50px;
    width: 100%;
    background-color: #6c63ff;
    max-height: 0;
    &.active {
      max-height: 100px;
    }
    ul li {
      width: 100%;
    }
    ul li a {
      display: block;
      padding: 10px;
    }
  }
  @media screen and (max-width: 768px) and (prefers-color-scheme: dark) {
    background-color: #1f2023;
  }
`;

const HeaderNavBtn = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 27px;
  height: 20px;
  display: none;
  span {
    position: absolute;
    left: 50%;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: 0.3s;
  }
  .line1 {
    top: 0;
    transform: translate(-50%);
  }
  .line2 {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .line3 {
    top: 100%;
    transform: translate(-50%, -100%);
  }
  &.active {
    .line1 {
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    .line2 {
      opacity: 0;
    }
    .line3 {
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [active, setActive] = useState('');

  const NavBtnClick = () => {
    setActive(active === '' ? 'active' : '');
  };
  return (
    <>
      <HeaderBox>
        <HeaderContent className="max_box">
          <h1>
            <Link to="/">로고</Link>
          </h1>
          <HeaderNav className={active}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/post">Post</Link>
              </li>
            </ul>
          </HeaderNav>
          <HeaderNavBtn className={active} onClick={NavBtnClick}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </HeaderNavBtn>
        </HeaderContent>
      </HeaderBox>
    </>
  );
};

export default Header;
