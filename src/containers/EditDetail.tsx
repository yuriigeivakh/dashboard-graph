import React, { Component } from "react";
import { connect } from "react-redux";
import { DropdownButton, Dropdown } from "react-bootstrap";
import debounce from "lodash.debounce";

import InputField from "../components/InputField";
import DataEdit from "./DataEdit";
import { DataChart } from "../interfaces";
import { setType, setTitle } from "../actions";

import graphTypes from "../constants/graph-types";

interface EditDetailProps {
  setType: ({
    key,
    value,
    item
  }: {
    key: string;
    value: string;
    item: string;
  }) => void;
  setTitle: ({
    key,
    value,
    item
  }: {
    key: string;
    value: string;
    item: string;
  }) => void;
  title: string;
  type: string;
  slug: string;
  data: DataChart;
}

class EditDetail extends Component<EditDetailProps> {
  public debouncedChange: (value: string) => void;
  constructor(props) {
    super(props);
    this.debouncedChange = debounce(this.handleChange, 300);
  }

  handleChange = (value) => {
    const { slug, setTitle } = this.props;

    setTitle({ key: slug, value, item: "title" });
  };

  handleSelect = (value) => {
    const { slug, setType } = this.props;

    setType({ key: slug, value, item: "type" });
  };

  render() {
    const { slug, title, type, data } = this.props;
    return (
      <div className="detail__edit">
        <label>Title</label>
        <InputField value={title} onChange={this.handleChange} />
        <label>Type</label>
        <DropdownButton
          title={type}
          id="type-change-dropdown"
          onSelect={this.handleSelect}
        >
          {graphTypes.map(({ label, value }) => (
            <Dropdown.Item key={value} eventKey={value}>
              {label}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <label>Data</label>
        <DataEdit root={data} value={JSON.stringify(data, null, "\t")} slug={slug} />
      </div>
    );
  }
}

// export default EditDetail;
export default connect(null, { setTitle, setType })(EditDetail);
