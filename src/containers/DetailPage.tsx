import React from "react";
import { connect } from "react-redux";
import AceEditor from "react-ace";
import { Link, useParams } from "react-router-dom";

import "brace/mode/json";
import "brace/theme/monokai";

import DetailGraphBlock from "../components/DetailGraphBlock";
import { DataChart } from "../interfaces";

interface DetailPageProps {
  data: DataChart[];
}

const DetailPage: React.FC<DetailPageProps> = ({ data }) => {
  const { slug } = useParams()
  const item = data[slug as any];

  return (
    <div className="detail-page">
      <DetailGraphBlock type={item.type} data={item.data} />
      <div className="detail-page__title">{item.title}</div>
      <Link className="go-back" to="/">
        X
      </Link>
      <div className="detail__info">
        <div>Title: {item.title}</div>
        <div>Type: {item.type}</div>
        <div>
          Data:
          <AceEditor
            mode="json"
            theme="monokai"
            name="layouteditor"
            width="100%"
            height="200px"
            wrapEnabled
            readOnly
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={JSON.stringify(item.data, null, "\t")}
          />
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (
  state: DetailPageProps,
) => {
  return {
    data: state.data,
  };
};

export default connect<DetailPageProps, {}>(
  mapStateToProps as any)(DetailPage);
