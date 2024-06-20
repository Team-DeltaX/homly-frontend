
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

const Review = ({reviews, cardWidth}) => {
  console.log("reirew222",cardWidth)

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ width:1152/`${cardWidth}` }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={reviews.ServiceNo}
          subheader="September 14, 2016"
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
