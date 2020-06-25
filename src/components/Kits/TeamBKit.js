import { connect } from "react-redux";
import Kit from "./Kit";

import { selectTeamBKit } from "../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        kit: state.teamB.kit
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleKit: (data) => dispatch(selectTeamBKit(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Kit);