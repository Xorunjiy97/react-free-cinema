import Component from './RatingPage';
import * as selectors from './selectors';
import * as actions from './actions';
import { connect } from "react-redux";

const mapStateToProps = state => ({
    saveCard: selectors.getSaveCard(state),
});
const mapDispatchToProps = dispatch => ({
    saveCardsData: payload => dispatch(actions.saveCardsData(payload)),
});


export default connect(mapStateToProps,mapDispatchToProps)(Component);