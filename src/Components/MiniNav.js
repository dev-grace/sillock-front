import React, { Component } from 'react';
import {Nav,Navbar,Form,Dropdown,ButtonGroup,DropdownButton} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';


class MiniNav extends Component{
    constructor(props) {
        super(props);
       
    }
    goBack = () => {
        this.props.history.goBack();
    }
    go = () => {
        this.props.history.go(1);
    }
    render(){
        return(
            <Navbar bg="light" variant="light" className="pt-0 pb-0">
            <Navbar.Brand onClick={(e) => { this.goBack() }} ><i className="fas fa-chevron-left color-blue"></i></Navbar.Brand>
            <Navbar.Brand onClick={(e) => { this.go() }}><i className="fas fa-chevron-right"></i></Navbar.Brand>
            <Nav className="mr-auto ">
            {/* <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/user/profile/mysillock">내 지갑</Nav.Link> */}
            </Nav>
            <Form inline>
            <Nav.Link href="/user/profile/mysillock" style={{ textDecoration: 'none', color: 'black'}}><i className="fas fa-user-circle" variant="Secondary"></i></Nav.Link>
             <>
                <DropdownButton
                    as={ButtonGroup}
                    key='left'
                    id={`dropdown-button-drop-left`}
                    drop='left'
                    variant="light"
                >
                    <Dropdown.Item eventKey="1" href="/">홈</Dropdown.Item>
                    <Dropdown.Item eventKey="2" href="/home">SILLOCK 소개</Dropdown.Item>
                    <Dropdown.Item eventKey="3" href="/user/profile/mysillock">내 지갑</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">로그아웃</Dropdown.Item>
                </DropdownButton>
        </>
            </Form>
        </Navbar>
        )
    }
}
// export withRouter MiniNav;
export default withRouter(MiniNav);