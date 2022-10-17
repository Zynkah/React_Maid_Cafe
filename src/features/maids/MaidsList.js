import { Col } from "reactstrap";
import Maids from "./Maids";
import { selectAllMaids } from './maidsSlice';
import { useSelector } from "react-redux";

const MaidsList = () => {
    const maids = useSelector(selectAllMaids);

    return (
        <Col className="mt-4">
            {maids.map((maid) => {
            return (
                <div className="d-flex mb-5" key={maid.id}>
                    <Maids maid={maid}/>
                </div>
                )
            })}
        </Col>
        )

}

export default MaidsList;