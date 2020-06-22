import { connect } from "react-redux";
import PlayersTable from "./PlayersTable";

const mapStateToProps = (state) => {
    return {
        playersPool: state.playersPool,
    };
};

export default connect(mapStateToProps)(PlayersTable);