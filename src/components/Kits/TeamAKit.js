import { connect } from "react-redux";
import Kit from "./Kit";

import { selectTeamAKit } from "../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        kit: state.teamA.kit
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleKit: (data) => dispatch(selectTeamAKit(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Kit);