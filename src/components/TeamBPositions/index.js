import { connect } from "react-redux";
import TeamBPositions from "./TeamBPositions";

const mapStateToProps = (state) => {
    return {
        teamBPlayers: state.teamB.players,
        teamBKit: state.teamB.kit,
        teamBColor: state.teamB.color,
    };
};

export default connect(mapStateToProps)(TeamBPositions);