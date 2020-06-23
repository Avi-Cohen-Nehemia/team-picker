import { connect } from "react-redux";
import { generateTeams } from "../../data/actions/state";
import GenerateTeams from "./GenerateTeams";

const mapStateToProps = (state) => {
    return {
        conditionsNotMet: state.playersPool.length < 6 || state.playersPool.length % 2 !== 0,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleGenerateTeams: () => dispatch(generateTeams()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateTeams);