import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import TypeItem from "../components/TypeItem";

import { setType } from "../actions";

import graphTypes from "../constants/graph-types";
import ArrowDown from "../icons/ArrowDown";

interface TitleProps {
  slug: string;
  title: string;
  type: string;
  setType: ({
    key,
    value,
    item
  }: {
    key: string;
    value: string;
    item: string;
  }) => void;
}

class Title extends Component<TitleProps> {
  handleClick = (value) => {
    const { slug } = this.props;

    this.props.setType({ key: slug, value, item: "type" });
  };

  render() {
    const { title, type, slug } = this.props;
    return (
      <Accordion id="edit">
        <Accordion.Header>
            {title}
            <ArrowDown/>
          </Accordion.Header>
      <Accordion.Collapse eventKey=''>
        <>
        <Dropdown.Item>
          <Link to={`/${slug}/view`}>View</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={`/${slug}/edit`}>Edit</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          Chart type

          {graphTypes.map(({ label, value }) => {
            return (
              <TypeItem
                key={value}
                onClick={this.handleClick}
                type={type}
                value={value}
                label={label}
              />
            );
          })}
        </Dropdown.Item>
        </>
        </Accordion.Collapse>
      </Accordion>
    );
  }
}

export default connect(null, { setType })(Title);
