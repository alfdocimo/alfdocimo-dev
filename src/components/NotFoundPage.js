import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

const NotFoundPage = () => {
  return (
    <Result
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/">
          <Button type="primary" shape="round" size="large">
            Back Home
          </Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
