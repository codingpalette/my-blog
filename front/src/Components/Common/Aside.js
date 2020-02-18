import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AsideBox = styled.aside`
  position: sticky;
  left: 0;
  top: 65px;
  width: 240px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100%;
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
    /* @media (prefers-color-scheme: dark) {
      color: #ddd;
    } */
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
    /* @media (prefers-color-scheme: dark) {
      color: #fff;
    } */
  }
  .tag_box span.txt {
    font-size: 1rem;
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
