import { connect } from "react-redux";
import TeamPositions from "./TeamPositions";

const mapStateToProps = (state) => {
    return {
        teamPlayers: state.teamA.players,
        teamKit: state.teamA.kit,
        teamColor: state.teamA.color,
        team: "a"
    };
};

export default connect(mapStateToProps)(TeamPositions);