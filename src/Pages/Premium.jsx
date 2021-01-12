import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';

function App() {
  const [Email, setEmail] = useState('');
  const [showEmail, setShowEmail] = useState(false);
  const [content, setContent] = useState('2700₩/월');
  const [paymentContainer, setPaymentContainer] = useState(true);
  const [notice, setNotice] = useState('Paypal, Visa, MasterCard등을 지원');
  const EmailClose = () => setShowEmail(false);
  const EmailShow = () => setShowEmail(true);

  const [showTos, setShowTos] = useState(false);
  const TosClose = () => { setShowTos(false); openCheckout(); };
  const TosShow = () => setShowTos(true);

  const { Paddle } = window;

  const openCheckout = () => {
    // document.getElementById("notice").innerHTML = '결제를 완료해 주세요.'
    setContent('결제 대기중\n(결제가 시작되지 않는다면 다시 클릭)');
    // document.getElementById("button_buy_krw").innerHTML = 'KRW 2100결제 대기중\n(결제가 시작되지 않는다면 다시 클릭)'
    Paddle.Checkout.open({
      product: 619708,
      email: Email,
      successCallback: data => {
        setContent('2700₩/월');
        // document.getElementById("button_buy_krw").innerHTML = ''
        //document.getElementById("email").style.width ='0px'
        //document.getElementById("email").style.height ='0px'
        let checkoutId = data.checkout.id;

        Paddle.Order.details(checkoutId, orderDetails => {
          console.log(orderDetails);

          setPaymentContainer(false);

          setNotice(orderDetails);
        });
      },
      closeCallback: () => {
        // document.getElementById("notice").innerHTML = '결제가 취소되었습니다.'
        setContent('결제 다시 시작하기');
      }
    });
  };

  const checkEmail = () => {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(Email)) return EmailShow();
    return TosShow();
  };

  const email = e => setEmail(e.target.value);

  return (
    <div className="App App-premium">
      {
        paymentContainer
          ? <div id="sv_payment">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className="text-black">1회성 결제 생성 요청하기</Card.Title>
                <Card.Text className="text-muted sandoll" style={{ fontSize: '20px' }} id="notice">
                  문화상품권과 계좌이체 지원.
                </Card.Text>
                <p style={{ fontSize: '13px' }}>
                  해당 수단을 이용하면 최대 7일이 걸릴 수 있습니다.
                </p>
                <Button variant="primary" onClick={() => window.open('https://fsgufatt4y0.typeform.com/to/AYeI19UJ', '커스텀 결제 생성', 'width=1200, height=777')}>2900₩/30일</Button>
              </Card.Body>
            </Card>
          </div>
          : null
      }

      <Card style={{ width: '18rem', margin: '20px' }}>
        <Card.Body>
          <Card.Title style={{ color: 'black' }} className="sandoll">정기결제</Card.Title>
          <Card.Text className="text-muted sandoll" style={{ fontSize: '20px' }} id="notice">
            {
              typeof notice === 'string' ? notice : <>
                결제가 완료되었습니다.
                <br />
            영수증: <a href={notice.order.receipt_url}>{notice.order.receipt_url}</a>
                <br />
                <br />
            파크봇 프리미엄을 활성화 하기 위해서는 이메일을 참고해주세요.
                <br />
            이메일의 절차를 따른 후에는 <code>#premium</code>커맨드로 프리미엄이 정상적으로 추가되었는지 확인해주시고, 프리미엄이 추가되지 않았다면 support@parkbot.ml로 문의해주세요.
                <br />
            또한, 해당 상품은 <bold>정기결제</bold> 상품입니다. 매달 이메일로 간 코드를 <a href="https://parkbot.ml/active">https://parkbot.ml/active</a>에 입력해야합니다. 정기결제 취소는 Paddle에서 진행하실 수 있습니다.
              </>
            }
          </Card.Text>
          <Form>
            <Form.Control id="email" onChange={email} type="email" name="email" placeholder="premium@parkbot.ml" value={Email} />
          </Form>
          <Button id="button_buy_usd" variant="primary" style={{ marginTop: '10px' }} onClick={checkEmail}>{content}</Button>
          <p style={{ color: 'gray', fontSize: '7px', marginTop: '5px', marginBottom: '-10px' }}>결제시 카드사에서 부과하는 해외 결제 수수료가 청구될 수 있으며, 이는 청약철회의 사유가 될 수 없습니다.</p>
        </Card.Body>
      </Card>

      <Modal
        show={showEmail}
        onHide={EmailClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>경고</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          올바른 이메일주소를 입력해주세요.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={EmailClose}>이해하였습니다.</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showTos}
        onHide={TosClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>결제 유의사항</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <a href="/tos">파크봇의 이용약관</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={TosClose}>확인하였습니다.</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
