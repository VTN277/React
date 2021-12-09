import { connect } from 'react-redux'
import Counter from '../component/couter'
import { increment, decrement, reset } from '../actions';

const mapStateToProps = (state) => {
    return {
        couter: state
    };
}

const mapDisPatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    }
}
export default connect(mapStateToProps, mapDisPatchToProps)(Counter);
