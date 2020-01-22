import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AsideBox = styled.aside`
  position: sticky;
  left: 0;
  top: 0;
  width: 240px;
  text-align: center;
  @media (prefers-color-scheme: dark) {
    background-color: #1f2023;
  }

  @media (prefers-color-scheme: light) {
    background-color: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .content_box {
    padding: 15px 10px;
    box-sizing: border-box;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  }
  .profile_box {
    width: 100%;
    max-width: 120px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    &:after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .name {
    display: block;
    padding: 10px 0;
    color: #000;
    font-size: 18px;
    @media (prefers-color-scheme: dark) {
      color: #ddd;
    }
  }
  .description {
    font-size: 12px;
    color: #999;
  }
  .tag_box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
  }
  .tag_box li:nth-child(2) {
    margin: 0 10px;
    padding: 0 10px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  .tag_box li:hover span.num {
    color: #6c63ff;
  }
  .tag_box span {
    display: block;
  }
  .tag_box span.num {
    color: #000;
    transition: 0.2s;
    @media (prefers-color-scheme: dark) {
      color: #fff;
    }
  }
  .tag_box span.txt {
    font-size: 14px;
    margin-top: 5px;
  }
`;

const Aside = () => {
  return (
    <>
      <AsideBox>
        <div className="content_box">
          <div className="profile_box">
            <img
              src={require('../../assets/profile.jpg')}
              alt="프로필 이미지"
            />
          </div>
          <strong className="name">Codingpalette</strong>
          <p className="description">좋은 개발자를 꿈꾸며...</p>
          <ul className="tag_box">
            <li>
              <Link to="/">
                <span className="num">786</span>
                <span className="txt">포스트</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="num">50</span>
                <span className="txt">카테고리</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="num">100</span>
                <span className="txt">태그</span>
              </Link>
            </li>
          </ul>
        </div>
      </AsideBox>
    </>
  );
};

export default Aside;
