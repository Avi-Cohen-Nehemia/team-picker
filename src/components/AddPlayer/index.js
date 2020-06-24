import { connect } from "react-redux";
import AddPlayer from "./AddPlayer";

import { addPlayer } from "../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        playerName: state.playerName,
        playerStrength: state.playerStrength ? state.playerStrength : 1,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (data) => dispatch(addPlayer(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);