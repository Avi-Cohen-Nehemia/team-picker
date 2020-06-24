import { connect } from "react-redux";
import AlertMessage from "./AlertMessage";

const mapStateToProps = (state) => {
    return {
        conditionsNotMet: state.playersPool.length < 6 || state.playersPool.length % 2 !== 0,
    };
};

export default connect(mapStateToProps)(AlertMessage);