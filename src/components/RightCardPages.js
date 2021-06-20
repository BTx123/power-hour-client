import React, { useState } from "react";
import {
  Button,
  Layout,
  Row,
  Col,
  Typography,
  Card,
  Input,
  Divider,
  Carousel,
  Space,
} from "antd";
import { LeftSquareOutlined } from "@ant-design/icons";
const { Search } = Input;
const RightCardPages = (props) => {
  const { title, link } = props;
  const [page, setPage] = useState("welcome");
  const [name, setName] = useState("");
  const onNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const onNameClick = (e) => {
    setPage("joinOrHost");
  };
  const onNamePressEnter = (e) => {
    setPage("joinOrHost");
  };
  const [playlistURL, setplaylistURL] = useState("");

  if (page === "welcome") {
    return (
      <Card
        title="Welcome"
        className="centerMargin"
        style={{ width: 350, height: 320 }}
      >
        <p>What should we call you?</p>
        <Input
          placeholder="Enter a nickname"
          onChange={onNameChange}
          onPressEnter={onNamePressEnter}
          value={name}
        />
        <div className="center">
          <br />
          <Button type="primary" onClick={onNameClick}>
            Get Started
          </Button>
        </div>
      </Card>
    );
  } else if (page === "joinOrHost") {
    return (
      <div>
        <Card
          title={`Welcome, ${name}`}
          className="centerMargin"
          style={{ width: 350, height: 320 }}
        >
          <Button
            type="default"
            icon={<LeftSquareOutlined />}
            onClick={(e) => setPage("welcome")}
          />

          <div className="center">
            <br />
            <Button
              type="primary"
              onClick={(e) => setPage("playlistSelection")}
            >
              Host
            </Button>
            <br />
            <br />
            <Button type="primary" disabled title="Coming soon...">
              Join
            </Button>
          </div>
        </Card>
      </div>
    );
  } else if (page === "playlistSelection") {
    return (
      <div>
        <Card
          title="Enter a Spotify playlist URL"
          className="centerMargin"
          style={{ width: 350, height: 320 }}
        >
          <Button
            type="default"
            icon={<LeftSquareOutlined />}
            onClick={(e) => setPage("joinOrHost")}
          />
          <br />
          <br />
          <div className="center">
            <Search
              placeholder="Spotify playlist URL"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={(e) => setPage("playlistSelection")}
              onChange={(e) => setplaylistURL(e.target.value)}
            />
          </div>
        </Card>
      </div>
    );
  }
};

export default RightCardPages;
