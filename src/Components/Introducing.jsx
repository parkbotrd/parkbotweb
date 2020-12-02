import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 777,
        minWidth: 337
    },
    media: {
        height: 307,
    },
})

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
})(Button);

let goto = () => {
    document.getElementById("main").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
}

export default function Main() {
    const classes = useStyles();
    return (
        <div id="intro" className="App-intro">
            <Card className={classes.root} onClick={goto} style={{ width: '30vw' }}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://cuteyoru.cdn3.cafe24.com/play.gif"
                        title="무료, 광고 없음."
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            무료, 광고 없음
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            대부분의 음악 기능은 광고 없이, 무료로 제공돼요.
                            <br/>Ayana의 광고를 더 이상 듣지 마세요.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card className={classes.root} onClick={goto} style={{ marginTop: '30px', width: '30vw' }}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://cuteyoru.cdn3.cafe24.com/help.jpg"
                        title="많은 기능들"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            많은 기능들
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            프레드봇에서는 유료 버전만 지원하는 볼륨 설정,
                            <br />왠만한 봇에서는 지원하지 않는 이퀄라이저까지 모두 지원해요.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card className={classes.root} onClick={goto} style={{ marginTop: '30px', width: '30vw' }}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://cuteyoru.cdn3.cafe24.com/support.png"
                        title="언제나 열려있는 문의"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            언제나 열려있는 문의 / 건의
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            궁금한점이 있을 경우 힘들게 영어로 문의하지 마세요.
                            <br />한국어로 문의하시면 한국인이 직접 답장해드려요.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <StyledButton style={{ marginTop: '50px' }} onClick={goto}>
                남들보다 더 빨리 초대하세요.
            </StyledButton>
        </div>
    )
}
