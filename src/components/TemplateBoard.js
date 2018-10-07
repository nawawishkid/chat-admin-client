import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import styled from "styled-components";

const TemplateBoard = ({
  header,
  children,
  emptyComponent,
  renderEmpty: Empty
}) => {
  let EmptyComponent = emptyComponent || Empty;

  if (typeof EmptyComponent === "undefined") {
    EmptyComponent = BoardEmpty;
  }

  return (
    <div>
      <h1>{header}</h1>
      <div>
        {children.length === 0 ? (
          <EmptyComponent />
        ) : (
          <Board header={header}>{children}</Board>
        )}
      </div>
    </div>
  );
};

const Board = ({ children }) => (
  <Row>
    {React.Children.map(children, (child, index) => (
      <ItemWrapper key={index}>{child}</ItemWrapper>
    ))}
  </Row>
);

const BoardEmpty = styled(props => (
  <div {...props}>
    <h3>Such empty!</h3>
  </div>
))`
  height: 100%;
  text-align: center;
`;

const ItemWrapper = ({ children }) => (
  <Col xs={24} md={12} lg={8} style={{ padding: "0 1em", marginBottom: "1em" }}>
    {children}
  </Col>
);

export { TemplateBoard };

export default TemplateBoard;
