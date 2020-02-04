import PropTypes from "prop-types";
import React, { Component } from "react";
import Select, { components } from "react-select";

const Option = props => (
    <div>
        <components.Option {...props}>
            <input
                type="checkbox"
                checked={props.isSelected}
                onChange={() => null}
            />{" "}
            <label>{props.label}</label>
        </components.Option>
    </div>
);

const MultiValue = props => (
    <components.MultiValue {...props}>
        <span>{props.data.label}</span>
    </components.MultiValue>
);

class Multiselect extends Component {
    render() {
        const { options, onChange, value, ...otherProps } = this.props;

        return (
            <Select
                value={value}
                closeMenuOnSelect={false}
                isMulti
                components={{ Option, MultiValue }}
                options={options}
                hideSelectedOptions={false}
                backspaceRemovesValue={false}
                onChange={e => onChange(e)}
                {...otherProps}
            />
        );
    }
}

Multiselect.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.node,
            label: PropTypes.node,
        }),
    ).isRequired,
    onChange: PropTypes.func.isRequired,
};

Multiselect.defaultProps = {
    options: [],
};

export default Multiselect;
