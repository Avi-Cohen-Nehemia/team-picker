import { connect } from "react-redux";
import { generateTeams } from "../../data/actions/state";
import GenerateTeams from "./GenerateTeams";

const mapDispatchToProps = (dispatch) => {
    return {
        handleGenerateTeams: (data) => dispatch(generateTeams(data)),
    }
}

export default connect(null, mapDispatchToProps)(GenerateTeams);