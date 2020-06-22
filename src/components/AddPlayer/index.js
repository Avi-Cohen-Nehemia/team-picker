import { connect } from "react-redux";
import AddPlayer from "./AddPlayer";

const mapStateToProps = (state) => {
    return {
        player1Name: state.playerName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: data => {
            dispatch(addPlayer(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);