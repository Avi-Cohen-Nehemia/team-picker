import { connect } from "react-redux";
import PlayersTable from "./PlayersTable";

import { removePlayer } from "./../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        playersPool: state.playersPool,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleRemovePlayer: (index) => dispatch(removePlayer(index)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersTable);