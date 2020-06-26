import { connect } from "react-redux";
import FootballPitch from "./FootballPitch";

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
    };
};

export default connect(mapStateToProps)(FootballPitch);