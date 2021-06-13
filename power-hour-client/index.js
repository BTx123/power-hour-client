import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  DatePicker,
  version,
  Layout,
  Row,
  Col,
  Typography,
  Card,
  Input,
  Divider
} from "antd";
import ExternalLink from "../Components/ExternalLink";
import "antd/dist/antd.css";
import "./index.css";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

ReactDOM.render(
  <div className="App">
    <Layout className="content">
      <Header className="centerMargin" className="title">
        <Title className="center">Power Hour</Title>
      </Header>
      <br />
      <Content>
        <Row>
          <Col md={{ span: 12, order: 1 }} xs={{ span: 24, order: 2 }}>
            {" "}
            <Card
              title="What is Power Hour?"
              className="centerMargin"
              extra={
                <ExternalLink
                  title="Learn More"
                  link="https://en.wikipedia.org/wiki/Power_hour"
                />
              }
              style={{ width: 350, height: 320 }}
            >
              {" "}
              <p>
                Drink to your favorite songs for a whole hour (or other
                specified amount of time)!
                <br />
                <br />
                If you have a join code, choose “Join an Hour” on the right and
                enter the code.
                <br />
                <br />
                If you’re creating a new lobby, choose “Host an Hour”.
              </p>
            </Card>{" "}
          </Col>
          <Col md={{ span: 12, order: 2 }} xs={{ span: 24, order: 1 }}>
            {" "}
            <Card
              title="Welcome"
              className="centerMargin"
              style={{ width: 350, height: 320 }}
            >
              <br />
              <br />
              <Input placeholder="Enter a nickname" />
              <br />
              <br />
              <div className="center">
                <br />
                <Button type="primary">Get Started</Button>
              </div>
            </Card>{" "}
          </Col>
        </Row>
      </Content>
      <br />
      <br />
      <Divider />
      <Footer className="content center">
        © 2021. Developed with hate by the Dumpster.
      </Footer>
    </Layout>
  </div>,
  document.getElementById("root")
);
