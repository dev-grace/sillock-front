import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import BannerImg from "./img/sillock-logo-none-bg.png";

import "./css/index.css";
import "./css/wave.css";
import "./css/background.css";

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import * as ReactBootstrap from 'react-bootstrap';

const banner = {
  color: "#8a2be2",
  fontSize: "1.25rem",
  fontWeight: "bold"
}

const navContent = {
  color: "black",
  fontSize: "1rem",
  fontWeight: "bold",
  paddingRight: "30px"
}

const buttonStyle1 = {
  fontSize: "1.75rem",
  background: 'linear-gradient(20deg, rgba(220,0,230,50%) 30%, rgba(180,0,185,70%) 90%)',
  borderRadius: 3,
  width: "100%",
  border: 0,
  color: 'white',
  height: "20vw",
  boxShadow: '0 3px 5px 2px rgba(204, 204, 255, .3)',
}

const buttonStyle2 = {
  fontSize: "1.75rem",
  background: 'linear-gradient(10deg, rgba(102,102,255,50%) 30%, rgba(102,180,255,70%) 90%)',
  borderRadius: 3,
  border: 0,
  width: "100%",
  color: 'white',
  height: "20vw",
  boxShadow: '0 3px 5px 2px rgba(204, 204, 255, .3)',
}

function UserLogIn() {//로그아웃된 상태일때  
  return <ReactBootstrap.Button href="/userinfo/login" variant="light" className="btn btn-light font-weight-bold">로그인</ReactBootstrap.Button>;
}

function UserLogOut() { //로그인된 상태일때 
  return <ReactBootstrap.Button onClick={function () { UserLogOut2(); }} variant="light" className="btn btn-light font-weight-bold" id="logout" >로그아웃</ReactBootstrap.Button>;
}


function UserLogOut2() {
  console.log("토큰삭제")
  localStorage.removeItem('jwt');
  console.log("토큰삭제 완료");
  Getjwt();
  //localStorage에 기록되는데 시작이 좀 걸리는 듯해서 0.5초 뒤 새로고침 한번 함.
  setTimeout(function () {
    console.log("토큰삭제 완료");
    window.location.href = window.location.href;
  }, 700);

  // this.props.history.push("/");
}


function Getjwt() {
  var ret;
  var status;
  axios.get('http://35.232.159.201:3000/api/auth/check', {
    headers: {
      'x-access-token': localStorage.getItem('jwt')
    }
  })
    .then(function (response) {
      ret = response;
      status = ret.status;
      console.log("전송결과 : " + ret.statusText);
      // console.log(status);
      localStorage.setItem('status', status);
    })
    .catch(function (error) {
      ret = error.response;
      // console.log(ret);
      status = ret.status;
      localStorage.setItem('status', status);
    });
}


function UserLogInOut() { //check api에 몰어봐서 200이면 로그인된 상태-> 다른 링크 접근가능
  var isLoggedIn; // check한 토큰 유효하면 로그인유지
  var status;

  status = localStorage.getItem('status');
  //현재 axios밖의 status에는 할당이 안됨.
  // console.log("status: "+status);

  if (status !== "200") isLoggedIn = false; //토큰이 없으면
  else isLoggedIn = true;
  // console.log("status2: "+status);
  return isLoggedIn;
}

function load() {
  var isLoggedIn = UserLogInOut();
  console.log("isLoggedIn 결과 : " + isLoggedIn);
  if (isLoggedIn) return <UserLogOut />;
  return <UserLogIn />;
}

function loginMessage() {
  alert('로그인이 필요합니다');
}

class UserMain extends Component {
  render() {
    return (
      <div className="um-body">
        <div>
          <ul class="background">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>

        <Navbar collapseOnSelect expand="lg" bg="light" className="fixed-top">
          <Navbar.Brand href="#home">
            <img className="banner-img align-middle" src={BannerImg} width="30" height="30" alt="" loading="lazy" alt="Banner-img" />
            <span style={banner}>Sillock</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="/home" style={navContent}>실록소개</Nav.Link>
              <Nav.Link href="#" style={navContent}>실록안내</Nav.Link>
              <Nav.Link href="/institutionMain" style={navContent}>기업/기관</Nav.Link>
              {UserLogInOut() ? <Nav.Link href="/user/profile/mysillock" style={navContent}>내 지갑</Nav.Link>
                : <Nav.Link onClick={function () { loginMessage() }} style={navContent}>내 지갑</Nav.Link>}
              {load()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div class="container-fluid um-container-fluid">
          <div class="um-content">
            <div>
              <Container className="h-100">
                <Row className="align-items-center h-100">
                  <Col xs={12} md={4}>
                    <h2 className="info2">Sillock</h2>
                    <h5 >사실을 있는 그대로 적은 기록</h5>
                    <h5>그리고 블록체인</h5>
                  </Col>
                  <Col xs={12} md={8} className="w-100 text-center">
                    <Row>
                      <Col xs={12} md={6} className="box">
                        {UserLogInOut() ? <Button href="/wallet/walletMain" style={buttonStyle1} className="mb-4">지갑생성하기</Button>
                          : <Button onClick={function () { loginMessage() }} style={buttonStyle1} className="mb-4">지갑생성하기</Button>}
                      </Col>

                      <Col xs={12} md={6} className="box">
                        {UserLogInOut() ? <Button href="/certificateMain" style={buttonStyle2}>내 증명서 만들기</Button>
                          : <Button onClick={function () { loginMessage() }} style={buttonStyle2}>내 증명서 만들기</Button>}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserMain;