import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { Link, Params, useParams } from "react-router-dom";
import { setTitle, setType } from "../actions";

import DetailGraphBlock from "../components/DetailGraphBlock";
import EditDetail from "./EditDetail";
import { DataChart } from "../interfaces";

const mapStateToProps = (
  state: EditPageProps,
) => {
  return {
    data: state.data,
  };
};

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

interface EditPageProps {
  data: {
    [key: string]: DataChart;
  };
}

const EditPage: React.FC<PropsFromRedux> = ({ data } ) => {
  const { slug }: Readonly<Params<string>> = useParams()
  const item = data[slug as string];
  const { title, data: dataItem, type } = item;

  return (
    <div className="edit-page">
      <div className="edit-page__title">{title}</div>
      <Link className="go-back" to="/">
        X
      </Link>
      <DetailGraphBlock type={type} data={dataItem} />
      <EditDetail title={title} data={dataItem} type={type} slug={slug as string} />
    </div>
  );
}

export default connector(EditPage);
