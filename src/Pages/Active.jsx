import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Modal, Form } from 'react-bootstrap';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Active() {
  const [showResult, setShowResult] = useState(false);
  const ResultClose = () => setShowResult(false);
  const ResultShow = () => setShowResult(true);
  const [responseResult, setresponseResult] = useState('');
  const [Activecode, setActivecode] = useState('');
  const [showActive, setShowActive] = useState(false);
  const ActiveClose = () => setShowActive(false);
  const ActiveShow = () => setShowActive(true);
  const classes = useStyles();
  const [Userid, setUserid] = useState('');
  const [showEmail, setShowEmail] = useState(false);
  const EmailClose = () => setShowEmail(false);
  const EmailShow = () => setShowEmail(true);

  const checkActivecode = async () => {
    // eslint-disable-next-line
    if (Activecode.split(' ').join('').length !== 36) return ActiveShow()
    const reA = /^[0-9 | a-z]{8}-[0-9 | a-z]{4}-[0-9 | a-z]{4}-[0-9 | a-z]{4}-[0-9 | a-z]{12}$/
    if (!reA.test(Activecode)) return ActiveShow();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userid: Userid, code: Activecode })
    };
    const { message } = await fetch(`https://api.parkbot.ml/premium/activation?fakecode=${new Date/1}`, requestOptions).then(res => res.json());
    setresponseResult(message);
    ResultShow();
  };

  const activecode = qe => setActivecode(qe.target.value);

  const checkUserid = () => {
    // eslint-disable-next-line
    const re = /^[0-9]{18}$/
    if (!re.test(Userid)) return EmailShow();
    return checkActivecode();
  };

  const userid = (e) => {
    setUserid(e.target.value);
  };

  return (
    <div className="App App-active">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            파크봇
          </Typography>
          <Typography variant="h5" component="h2">
            파크봇 프리미엄 활성화하기
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <a href="/docs/userid">이곳을 클릭해 가이드를 참고해서</a> 유저아이디를 복사하고, 붙여넣어주세요.
          </Typography>
          <Typography variant="body2" component="p">
            <Form>
              <Form.Control id="userid" onChange={userid} name="userid" placeholder="유저아이디 입력" value={Userid} />
            </Form>
          </Typography>
          <Typography variant="body2" component="p">
            <Typography className={classes.pos} color="textSecondary" style={{ marginTop: '10px' }}>
              이메일로 받으신 활성화코드를 입력해주세요.
            </Typography>
            <Form>
              <Form.Control id="activecode" onChange={activecode} name="activecode" placeholder="1ab2345c-67d8-90ef-g12h-ijklmn3op4q5" value={Activecode} />
            </Form>
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={checkUserid}>활성화</Button>
        </CardActions>
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
          올바른 유저아이디(18자)를 입력해주세요.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="primary" onClick={EmailClose}>이해하였습니다.</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showActive}
        onHide={ActiveClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>경고</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          올바른 활성화 코드(<code>-</code>포함)를 입력해주세요.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="primary" onClick={ActiveClose}>이해하였습니다.</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showResult}
        onHide={ResultClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>알림</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {responseResult}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="primary" onClick={ResultClose}>이해하였습니다.</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}