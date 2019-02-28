import React from 'react';
import { connect } from 'react-redux';
import { selectOneOption, selectManyOptions } from './ducks';
import './style.scss';

class OptionCubes extends React.PureComponent<Props> {
  getClass = id => {
    if (this.props.feFrameworkArr) {
      const { feFrameworkArr } = this.props;
      return feFrameworkArr.find(function(el) {
        return el.id === id;
      }) !== undefined
        ? 'option-cube--inactive'
        : null;
    }
  };

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
              {/* {this.getClass(item.id) && <IconSelect />} */}
              {item.img && <img alt={item.label} src={item.img} />}
              <div>{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {};

const mapDispatchToProps = dispatch => ({
  selectOneOption: (payload, field) => dispatch(selectOneOption(payload, field)),
  selectManyOptions: (payload, field) => dispatch(selectManyOptions(payload, field))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionCubes);
