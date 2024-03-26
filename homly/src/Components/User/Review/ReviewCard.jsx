import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function ReviewCard() {
  const userDetails = [
    {
      name: "User 1",
      avatarSrc: "/static/images/avatar/1.jpg",
      text: "Highly Recommended",
    },
    {
      name: "User 2",
      avatarSrc: "/static/images/avatar/2.jpg",
      text: "Wish I could come, but I'm out of town this…",
    },
    {
      name: "User 3",
      avatarSrc: "/static/images/avatar/3.jpg",
      text: "Highly Recommended",
    },
  ];

  return (
    <List sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      {userDetails.map((user, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start" sx={{ width: "calc(100% / 3)" }}>
            <ListItemAvatar>
              <Avatar alt={user.name} src={user.avatarSrc} />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {user.text}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>

          {index !== userDetails.length - 1 && (
            <Divider orientation="vertical" flexItem />
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
