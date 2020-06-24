import { connect } from "react-redux";
import AddPlayer from "./AddPlayer";

import { addPlayer } from "../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        playerName: state.playerName,
        playerSkillLevel: state.playerSkillLevel ? state.playerSkillLevel : "⭐",
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (data) => dispatch(addPlayer(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);