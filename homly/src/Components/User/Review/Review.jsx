
import { ThemeProvider } from "@mui/material";
import theme from "../../../HomlyTheme";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import dayjs from 'dayjs';
import AxiosClient from "../../../services/AxiosClient";

const Review = ({reviews, cardWidth}) => {
  const formattedDate = dayjs(reviews.updatedAt).format('MMMM DD, YYYY');
  const [image, setImage] = React.useState("");
  const [userName, setUserName] = React.useState("");
  React.useEffect(() => {
    AxiosClient.get(`/user/auth/review/employee/${reviews.ServiceNo}`)
      .then((res) => {
        setUserName(res.data[0].name);
        // console.log(res.data[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
      AxiosClient.get(`/user/auth/review/user/${reviews.ServiceNo}`)
      .then((res) => {
        setImage(res.data[0].image);
      })
      .catch((err) => {
        console.log(err);
      });
    });
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ flexGrow: 1, width: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={image}>
              R
            </Avatar>
          }
          title={userName}
          subheader={formattedDate}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
              {reviews.UserReview}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        </CardActions>
    </Card>
    </ThemeProvider>
  );
};

export default Review;
