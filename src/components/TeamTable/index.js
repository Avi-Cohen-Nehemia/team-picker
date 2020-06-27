import { connect } from "react-redux";
import TeamTable from "./TeamTable";

const mapStateToProps = (state) => {
    return {
        teamA: state.teamA.players,
        teamB: state.teamB.players
    };
};

export default connect(mapStateToProps)(TeamTable);