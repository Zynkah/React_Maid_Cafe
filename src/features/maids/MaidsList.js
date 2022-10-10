import { Col } from "reactstrap";
import Maids from "./Maids";
import { selectAllMaids } from './maidsSlice';

const MaidsList = () => {
    const maids = selectAllMaids();

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