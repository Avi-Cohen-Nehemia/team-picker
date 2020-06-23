import { connect } from "react-redux";
import TeamTable from "./TeamTable";

const mapStateToProps = (state) => {
    return {
        teamA: state.teamA,
        teamB: state.teamB
    };
};


export default connect(mapStateToProps)(TeamTable);