import { connect } from "react-redux";
import { generateTeams } from "../../data/actions/state";
import GenerateTeams from "./GenerateTeams";

const mapDispatchToProps = (dispatch) => {
    return {
        handleGenerateTeams: () => dispatch(generateTeams()),
    }
}

export default connect(null, mapDispatchToProps)(GenerateTeams);