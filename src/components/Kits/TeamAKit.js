import { connect } from "react-redux";
import Kit from "./Kit";

import { selectTeamAKit } from "../../data/actions/state";
import { selectTeamAColor } from "../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        kit: state.teamA.kit,
        color: state.teamA.color
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleKit: (data) => dispatch(selectTeamAKit(data)),
        handleColor: (data) => dispatch(selectTeamAColor(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Kit);