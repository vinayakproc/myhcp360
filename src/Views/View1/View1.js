import React from "react";
import HeatMapGrid from "../../components/Heatmap/Heatmap";
import StackedAreaChart from "../../components/StackedAreaChart/StackedArea";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Viewone.css";

const Viewone = (props) => {
  let BrandSharewidth = 600;
  let ShareAmongIBRKOL = 425;

  return (
    <div
      style={{
        marginLeft: "270px",
        height: "100vh",
        width: "993px",
        position: "relative",
      }}
    >
      {/* <h2 className="sticky-top border bg-white basecolor p-1">HCP 360°</h2> */}

      <Container className="  bg-white rounded">
        <br />

        <Card className=" p-1  bg-white rounded ">
          <p>
            <u>
              <b>Brands Share of Voice</b>
            </u>
          </p>
          <Row className="border-top  p-1">
            <Col md={8}>
              <StackedAreaChart width={BrandSharewidth} />
            </Col>
            <Col md={4}>
              {" "}
              <Card>Insights Box</Card>
            </Col>
          </Row>
        </Card>

        <Card className=" p-1  bg-white rounded">
          <p>
            <u>
              <b>MOM Share Channel by Channel</b>
            </u>
          </p>
          <Row className="border-top  p-1">
            <Col md={4}>
              {" "}
              <Card>Insights Box</Card>
            </Col>
            <Col>
              <HeatMapGrid />
            </Col>
          </Row>
        </Card>

        <Row>
          <Col>
            <Card className=" bg-white rounded pb-1">
              <p className="border-bottom pb-1 pt-1">
                <u>
                  <b>Share Among IBR KOLs</b>
                </u>
              </p>

              <StackedAreaChart width={ShareAmongIBRKOL} />
            </Card>
          </Col>

          <Col>
            <Card className="bg-white rounded pb-1">
              <p className="border-bottom pb-1 pt-1">
                <u>
                  <b>Share Among Community HCPs</b>
                </u>
              </p>
              <StackedAreaChart width={ShareAmongIBRKOL} />
            </Card>
          </Col>
        </Row>
      </Container>

      <br />
    </div>
  );
};

export default Viewone;
