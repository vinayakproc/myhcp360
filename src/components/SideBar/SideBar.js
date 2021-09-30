import abbvielogo from '../../images/Abbvielogo.png'
import myHCP from '../../images/myhcplatest.png'
import Viewone from '../../Views/View1/View1';
import Viewtwo from '../../Views/View2/Viewtwo';
import Viewthree from '../../Views/Viewthree/Viewthree';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,Switch 
} from "react-router-dom";
import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './sidebar.module.css'
import ScrollToTop from '../ScrollToTop/ScrollToTop';



const SideBarView = props => {

  function scrollToTop() {
    window.scrollTo(0, 0);
}


  return (
    <div 
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}
    >   
    <Router >
      <ScrollToTop>
      <div >
      <CDBSidebar className="border shadow" textColor="#002060" backgroundColor="#ffffff" style={{ position:'fixed', height: '100vh', width:'200px'}}>
        <CDBSidebarHeader 
       // prefix={<i className="fa fa-bars fa-large"></i>}
        >
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
         <img alt="Abbvie-logo" src={myHCP} height="80" width="160" style={{ backgroundColor: "#FFFFFF"  }}/>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content " >
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked" >
              <CDBSidebarMenuItem >Share of Voice</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/viewtwo" activeClassName="activeClicked" onclick={scrollToTop}>
              <CDBSidebarMenuItem>HCP Segment Distribution</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/viewthree" activeClassName="activeClicked">
              <CDBSidebarMenuItem>Detailed HCP View</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
                <div
                  className="sidebar-btn-wrapper"
                  style={{
                    padding: "20px 5px"
                  }}
                >
                  <img alt="Abbvie-logo" src={abbvielogo} height="30" width="150" style={{ backgroundColor: "#FFFFFF"  }}/>
                </div>
              </CDBSidebarFooter>
      </CDBSidebar>

      <Switch >
          <Route exact path="/viewtwo" >
            <Viewtwo  />
          </Route>
          <Route exact path="/">
            <Viewone />
          </Route>
          <Route exact path="/viewthree">
            <Viewthree />
          </Route>
        </Switch>
        </div>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default SideBarView;
