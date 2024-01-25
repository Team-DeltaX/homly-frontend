import React from "react";
import { Container, Box } from "@mui/material";

import NavBar from "../../Components/NavBar/NavBar";
import MyReservationCard from "../../Components/MyReservationCard/MyReservationCard";

export default function Home() {
  return (
    <div>
      <Box
        className="main_container"
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" style={{ padding: 0 ,height:'100vh'}}>
          <NavBar />
          <Container sx={{ marginTop: "100px" }}>
            <div>This is Home page.</div>
            <MyReservationCard
              image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9saWRheSUyMGhvbWV8ZW58MHx8MHx8fDA%3D"
              title="Anuradhapura 1"
              rating={4.5}
              address="No 1, Anuradhapura"
              cheking="2021-10-10"
              checkout="2021-10-20"
              adultCount={2}
              childCount={3}
              roomCount={20}
              hallCount={1}
              reserved="2021-09-20"
              reservedExpire="2021-09-25"
              paid="false"
            />
          </Container>
        </Container>
      </Box>
    </div>
  );
}
