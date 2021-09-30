import SortableTableList from "../../components/SortableTable/SortableTable";
import ScatterChartPlot from "../../components/Scatter/ScatterPlot";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import TableData from '../../data/SortTabletwo.js'

const Viewtwo = (props) => {
  var r = 450;
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
      <Container className=" p-1  bg-white rounded">
     

        <Row>
          <Col>
            <Card className="shadow p-1  bg-white rounded">
              <Card.Text><b>PR Savvy HCPs<br/>500</b></Card.Text>
            </Card>
          </Col>
          <Col>
            <Card className="shadow p-1 bg-white rounded">
              <Card.Text><b>Research Focused HCPs <br/>200</b></Card.Text>
            </Card>
          </Col>
          <Col>
            <Card className="shadow p-1  bg-white rounded">
              <Card.Text><b>Both<br/>250</b></Card.Text>
            </Card>
          </Col>
        </Row>

        
            <Card className=" p-1  bg-white rounded">
              <p>
                <u><b>HCP Segment Distribution</b></u>
              </p>
              <Row className="border-top m-1 p-1">
                <Col>
              <ScatterChartPlot height={r} />
              </Col>
              <Col> <Card>Insights Box</Card></Col>
          </Row>
        </Card>
           



        
              <Card className=" p-1  bg-white rounded">
                <SortableTableList data={TableData}/>
              </Card>
    
      </Container>

      <br />
    </div>
  );
};

export default Viewtwo;
