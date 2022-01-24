import React, { Component } from "react";

interface TypeItemProps {
  type: string;
  value: string;
  label: string;
  onClick: (value: string) => void;
}

class TypeItem extends Component<TypeItemProps> {
  handleClick = () => {
    const { onClick, value } = this.props;

    onClick(value);
  };

  render() {
    const { type, label, value } = this.props;

    return (
      <div
        className={`type-item ${value === type ? "selected" : ""}`}
        onClick={this.handleClick}
      >
        {label}
      </div>
    );
  }
}

export default TypeItem;
