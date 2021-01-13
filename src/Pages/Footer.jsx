import React from 'react';
import { Col, Container, Row, ModalFooter } from 'react-bootstrap';

const FooterPage = () => {
  return (
    <ModalFooter className="font-small" style={{ backgroundColor: '#000', borderTop: 'none' }}>
      <Container fluid className="text-center footer">
        <Row>
          <Col md="6">
            <br />
            <h5 className="title">파크봇</h5>
            <p>
              디스코드를 흥겹게, <br />
                    디스코드에서 음악을.
            </p>
          </Col>
          <Col md="6">
            <br />
            <h5 className="title">연락하기</h5>
            <a style={{ textDecoration: 'none' }} href="https://discord.gg/jE33mfD">지원 서버 참가하기</a><br />
            <a style={{ textDecoration: 'none' }} href="mailto:support@parkbot.ml">이메일</a>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; 2019 ~ {new Date().getFullYear()} 파크봇, 모든 권리 보유.
        </Container>
      </div>
    </ModalFooter>
  );
};

export default FooterPage;