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
} from "antd";
import ExternalLink from "./components/ExternalLink";
import RightCardPages from "./components/RightCardPages";
import "./App.scss";
function onChange(a, b, c) {
  console.log(a, b, c);
}

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

// Created with https://dev.to/jose1897/how-to-create-a-react-app-without-create-react-app-command-1fgc

const App = () => {
  return (
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
              <Carousel autoplay autoplaySpeed={5000}>
                <div>
                  <Card
                    title="How to play Power Hour"
                    className="centerMargin"
                    extra={
                      <ExternalLink
                        title="Learn More"
                        link="https://en.wikipedia.org/wiki/Power_hour"
                      />
                    }
                    style={{ width: 350, height: 320 }}
                  >
                    <p>
                      Drink to your favorite songs for a whole hour (or other
                      specified amount of time)!
                      <br />
                      <br />
                      If you have a join code, choose "Join an Hour" on the
                      right and enter the code.
                      <br />
                      <br />
                      If you’re creating a new lobby, choose "Host an Hour".
                    </p>
                  </Card>
                </div>
                <div>
                  <Card
                    title="Second Page"
                    className="centerMargin"
                    extra={
                      <ExternalLink
                        title="Learn More"
                        link="https://en.wikipedia.org/wiki/Power_hour"
                      />
                    }
                    style={{ width: 350, height: 320 }}
                  >
                    <p>
                      Drink to your favorite songs for a whole hour (or other
                      specified amount of time)!
                      <br />
                      <br />
                      If you have a join code, choose "Join an Hour" on the
                      right and enter the code.
                      <br />
                      <br />
                      If you’re creating a new lobby, choose "Host an Hour".
                    </p>
                  </Card>
                </div>
                <div>
                  <Card
                    title="Third Page"
                    className="centerMargin"
                    extra={
                      <ExternalLink
                        title="Learn More"
                        link="https://en.wikipedia.org/wiki/Power_hour"
                      />
                    }
                    style={{ width: 350, height: 320 }}
                  >
                    <p>
                      Drink to your favorite songs for a whole hour (or other
                      specified amount of time)!
                      <br />
                      <br />
                      If you have a join code, choose "Join an Hour" on the
                      right and enter the code.
                      <br />
                      <br />
                      If you’re creating a new lobby, choose "Host an Hour".
                    </p>
                  </Card>
                </div>
                <div>
                  <Card
                    title="Fourth Page"
                    className="centerMargin"
                    extra={
                      <ExternalLink
                        title="Learn More"
                        link="https://en.wikipedia.org/wiki/Power_hour"
                      />
                    }
                    style={{ width: 350, height: 320 }}
                  >
                    <p>
                      Drink to your favorite songs for a whole hour (or other
                      specified amount of time)!
                      <br />
                      <br />
                      If you have a join code, choose "Join an Hour" on the
                      right and enter the code.
                      <br />
                      <br />
                      If you’re creating a new lobby, choose "Host an Hour".
                    </p>
                  </Card>
                </div>
              </Carousel>
            </Col>
            <Col md={{ span: 12, order: 2 }} xs={{ span: 24, order: 1 }}>
              <RightCardPages></RightCardPages>
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
    </div>
  );
};

export default App;
