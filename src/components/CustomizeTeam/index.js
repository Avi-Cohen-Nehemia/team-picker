import { connect } from "react-redux";
import CustomizeTeams from "./CustomizeTeam";

import { setTeamsNames } from "../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        teamAName: state.teamA.name,
        teamBName: state.teamA.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (data) => dispatch(setTeamsNames(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeTeams);