import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Action from './Action';
import ReduxApp2 from './ReduxApp2';

const mapStateToProps = (state) => {
  console.log('state mapped to props, state.data: ' + state.data);
  return {
    data: state.data
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log('map dispatched to props');
  // code modification 
  return bindActionCreators({ onChange: Action }, dispatch);
}
const DataMapper =
  connect(mapStateToProps, mapDispatchToProps)(ReduxApp2)

export default DataMapper;