import React from 'react';
import { connect } from 'react-redux';
import { getTemp } from '../actions';
import '../styles/Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button className="Button"
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={() => this.props.getTemp(this.props.name)}
      >Get temperature</button>
    );
  }

};

const mapStateToProps = (state) => (
  { name: state.reducer.cityName }
)
const mapDispatchToProps = {
  getTemp,
};


Button = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default Button;