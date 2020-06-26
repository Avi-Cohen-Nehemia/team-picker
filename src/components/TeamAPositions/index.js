import { connect } from "react-redux";
import TeamAPositions from "./TeamAPositions";

const mapStateToProps = (state) => {
    return {
        teamAPlayers: state.teamA.players,
        teamAKit: state.teamA.kit,
        teamAColor: state.teamA.color,
    };
};

export default connect(mapStateToProps)(TeamAPositions);