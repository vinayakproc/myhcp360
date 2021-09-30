
import SortableTableList from "../../components/SortableTable/SortableTable";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Card} from "react-bootstrap";
import Tabledata from '../../data/SortTableone.js'

const Viewthree = props =>{


  return (
    <div
      style={{
        marginLeft: "270px",
        height: "100vh",
        width: "993px",
        position: "relative",
      }}
    >
      {/* <h2 
        className="sticky-top border bg-white basecolor p-1 "
      >
        HCP 360°
      </h2> */}
       <Container className="  p-1  bg-white rounded">
           <br/>

      <Card className=" p-2  bg-white rounded"><SortableTableList data={Tabledata}/></Card>

 </Container>

 <br/>
 
    </div>
  );
}

export default Viewthree;
