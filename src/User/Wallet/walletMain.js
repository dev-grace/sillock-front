import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, Row, Col } from 'react-bootstrap';
import "./css/walletMain.css";

class WalletMain extends Component {
    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="wM-body">
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/">Sillock</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">홈</Nav.Link>
                        <Nav.Link href="/user/profile/mysillock">내 지갑</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-primary" onClick={(e) => { this.goBack() }}>뒤로가기 </Button>
                    </Form>
                </Navbar>

                <div class="row wM-content">
                    <div class="col-sm-12 my-auto">
                        <div className="text-center">
                            <h2>내 지갑 생성하기</h2>
                        </div>

                        <Row className="row mt-5 text-center">
                            <Col>
                                <Button variant="outlined" id="wM-button" className="wM-btn"><Link to="/wallet/FirstStep">새 지갑 만들기</Link></Button>
                            </Col>
                        </Row>

                        <Row className="row mt-5 text-center">
                            <Col>
                                <Button variant="outlined" id="wM-button" className="wM-btn"><Link to="/wallet/uploadWallet">지갑 가져오기</Link></Button>
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
        );
    }
}

export default WalletMain;