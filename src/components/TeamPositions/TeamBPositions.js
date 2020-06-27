import { connect } from "react-redux";
import TeamPositions from "./TeamPositions";

const mapStateToProps = (state) => {
    return {
        teamPlayers: state.teamB.players,
        teamKit: state.teamB.kit,
        teamColor: state.teamB.color,
        team: "b"
    };
};

export default connect(mapStateToProps)(TeamPositions);