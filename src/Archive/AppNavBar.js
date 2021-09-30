
import "bootstrap/dist/css/bootstrap.min.css";
import SideBarView from "./components/SideBar/SideBar";

import abbvielogo from "./images/Abbvielogo.png";
import { Row, Col } from "react-bootstrap";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App bg-light ">
     
      
      <Row >
        <Col  xs={2}>
          {" "}
          <img alt="Abbvie-logo" src={abbvielogo} height="50" width="200" style={{ backgroundColor: "#FFFFFF" }}/>
        </Col>
        <Col className=" text-white " style={{ backgroundColor: "#002060" }}>
          <h1>HCP 360°</h1>
        </Col>
      </Row>

      <SideBarView/>





      {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="border border-dark">
  <Row>
    <Col sm={1}  >
      <Nav variant="pills" className="flex-column dark" >
        <Nav.Item>
          <Nav.Link className="text-dark" eventKey="first">Share of Voice</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-dark" eventKey="second">HCP Segment Distribution</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={11}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <Viewone/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Viewtwo/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>




      <Router>
        <Navbar bg="dark" expand="lg" inverse >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" className=" dr-auto">
              <LinkContainer to="/viewone">
                <Nav.Link className="text-white">Share of Voice</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/viewtwo">
                <Nav.Link className="text-white">HCP Segment Distribution</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/viewtwo">
            {" "}
            <Viewtwo />{" "}
          </Route>
          <Route exact path="/viewone">
            {" "}
            <Viewone />{" "}
          </Route>
        </Switch>
      </Router> */}
      
    </div>
  );
}

export default App;
