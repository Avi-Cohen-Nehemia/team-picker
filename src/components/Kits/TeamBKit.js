import { connect } from "react-redux";
import Kit from "./Kit";

import { selectTeamBKit, selectTeamBColor } from "../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        kit: state.teamB.kit,
        color: state.teamB.color
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleKit: (data) => dispatch(selectTeamBKit(data)),
        handleColor: (data) => dispatch(selectTeamBColor(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Kit);