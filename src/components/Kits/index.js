import { connect } from "react-redux";
import Kits from "./Kits";

import { selectKit } from "../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        kitA: state.teamA.kit ? "blue" : null,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleKit: () => dispatch(selectKit()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Kits);