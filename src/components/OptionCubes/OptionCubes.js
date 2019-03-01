import React from 'react';
import { connect } from 'react-redux';
import { selectOneOption, selectManyOptions } from './ducks';
import IconSelect from '../IconSelect'
import './style.scss';

class OptionCubes extends React.PureComponent<Props> {
  getClass = id => {
    const { selectedCubes, selectOne } = this.props;
    if (selectedCubes) {
      if (selectOne) {
        return id === selectedCubes.id ? 
        'option-cube__box--active' : null
      } else {
        return selectedCubes.find(function(el){ return el.id === id }) !== undefined ? 'option-cube__box--active' : null;
      }
    }
  }

  handleCubeClick = (payload) => e => {
    const { selectOneOption, selectManyOptions, field, selectOne } = this.props;
    selectOne ? selectOneOption(payload, field) : selectManyOptions(payload, field);
  };

  render() {
    const { data, width, height } = this.props;
    return (
      <div className="option-cube">
        {data.map(item => (
          <div
            className={`option-cube__box--inactive ${this.getClass(item.id)}`}
            key={item.label}
            onClick={this.handleCubeClick(item)}
            style={{ width, height }}
          >
            <div>
              {this.getClass(item.id) && <IconSelect />}
              {item.img && <img alt={item.label} src={item.img} />}
              <div>{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  if (state.OptionCubes) {
    const selectedCubes = state.OptionCubes[props.field] ?  state.OptionCubes[props.field] : null
    return {
      selectedCubes
    };
  }
};

const mapDispatchToProps = dispatch => ({
  selectOneOption: (payload, field) => dispatch(selectOneOption(payload, field)),
  selectManyOptions: (payload, field) => dispatch(selectManyOptions(payload, field))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionCubes);
