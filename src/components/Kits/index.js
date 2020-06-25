import { connect } from "react-redux";
import Kits from "./Kits";

import { selectKit } from "../../data/actions/state";

const mapDispatchToProps = (dispatch) => {
    return {
        handleKit: () => dispatch(selectKit()),
    };
};

export default connect(null, mapDispatchToProps)(Kits);