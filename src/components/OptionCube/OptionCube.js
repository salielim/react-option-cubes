import React from 'react';
import { connect } from 'react-redux';
import { updateOptionCube } from './ducks';
import './style.scss';

const optionsData = [
  {
    id: 838203882,
    label: 'Option 1'
  },
  {
    id: 992490390,
    label: 'Option 2'
  },
  {
    id: 992490390,
    label: 'Option 3'
  }
]

class OptionCubes extends React.PureComponent<Props> {
  getClass = id => {
    if (this.props.feFrameworkArr) {
      const { feFrameworkArr } = this.props;
      return feFrameworkArr.find(function(el) {
        return el.id === id;
      }) !== undefined
        ? 'option-cubes-active'
        : null;
    }
  };
  handleCubeClick = (payload, name) => e => {
    const { updateOptionCube, fieldName } = this.props;
    updateOptionCube(payload, fieldName);
  };
  render() {
    return (
      <div className="option-cubes-container">
        {optionsData.map(item => (
          <div
            className={`option-cubes ${this.getClass(item.id)}`}
            key={item.label}
            onClick={this.handleCubeClick(item.id, item.label)}
          >
            <div className="option-img-wrapper">
              {/* {this.getClass(item.id) && <IconSelect />} */}
              <div className="option-cubes-caption">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
};

const mapDispatchToProps = dispatch => ({
  updateOptionCube: (payload, name) => dispatch(updateOptionCube(payload, name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionCubes);
