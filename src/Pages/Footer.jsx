import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
return (
    <MDBFooter className="font-small">
      <MDBContainer fluid className="text-center footer">
        <MDBRow>
            <MDBCol md="6">
                <br />
                <h5 className="title">파크봇</h5>
                <p>
                    디스코드를 흥겹게, <br />
                    디스코드에서 음악을.
                </p>
            </MDBCol>
            <MDBCol md="6">
                <br />
                <h5 className="title">연락하기</h5>
                <a href="https://discord.gg/jE33mfD">지원 서버 참가하기</a><br />
                <a href="mailto:support@parkbot.ml">이메일</a>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
                &copy; 2019 ~ {new Date().getFullYear()} 파크봇, 모든 권리 보유.
            </MDBContainer>
        </div>
    </MDBFooter>
);
}

export default FooterPage;