import { connect } from "react-redux";
import FootballPitch from "./FootballPitch";

import { incrementTeamAScore, incrementTeamBScore, resetScore } from "../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        teamAPlayers: state.teamA.players,
        teamBPlayers: state.teamB.players,
        teamAName: state.teamA.name,
        teamBName: state.teamB.name,
        teamAKit: state.teamA.kit,
        teamBKit: state.teamB.kit,
        teamAColor: state.teamA.color,
        teamBColor: state.teamB.color,
        teamAScore: state.teamA.score,
        teamBScore: state.teamB.score,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleTeamAScore: () => dispatch(incrementTeamAScore()),
        handleTeamBScore: () => dispatch(incrementTeamBScore()),
        handleResetScore: () => dispatch(resetScore())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FootballPitch);