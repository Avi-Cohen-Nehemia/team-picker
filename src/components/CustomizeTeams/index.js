import { connect } from "react-redux";
import CustomizeTeams from "./CustomizeTeams";
import history from "../../history";

import { setTeamsNames } from "../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        teamAName: state.teamA.name,
        teamBName: state.teamB.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (data) => {
            dispatch(setTeamsNames(data));
            history.push("/football-pitch");
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeTeams);