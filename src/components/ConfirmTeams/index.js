import { connect } from "react-redux";
import ConfirmTeams from "./ConfirmTeams";

const mapStateToProps = (state) => {
    return {
        teamA: state.teamA.players,
        teamB: state.teamB.players,
        teamASkillLevel: state.teamA.totalSkillLevel,
        teamBSkillLevel: state.teamB.totalSkillLevel,
    };
};

export default connect(mapStateToProps)(ConfirmTeams);