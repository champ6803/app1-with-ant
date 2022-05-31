import React from "react";
import { Icon, Divider } from "antd";

function TitleHead(props) {
  const { text, icon } = props;
  return (
    <div className="text-title">
      <h3
      >
        <div>
          {/* <Icon type="stock" /> */}
          <span className="text-style">{text}</span>
        </div>
      </h3>

      <Divider style={{ margin: "10px 0px" }} />
    </div>
  );
}

export { TitleHead };
