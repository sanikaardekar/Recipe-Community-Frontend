import * as React from "react";
import {
  CardActionArea,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import "./RecentlyAdded.css";

export default function RecentlyAdded() {
  const CardInfo = [
    {
      Recipe_image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      Recipe_name: "shrimp",
      User_name: "Sanika Ardekar",
      Profile_pic:
        "https://media.istockphoto.com/photos/portrait-of-cute-little-girl-outdoors-picture-id1268675353?b=1&k=20&m=1268675353&s=170667a&w=0&h=g4oqUB2IOMDNQTgJbEVdS8cA53ID2ykesOs43wwxRZ4=",
      id: 1,
    },

    {
      Recipe_image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      Recipe_name:
        "Ice cream ascsdcfvefverve vefvefvefvefvefvefvefvefvefvefvscxvefvetv",
      User_name: "Sanika Ardekar",
      Profile_pic:
        "https://media.istockphoto.com/photos/portrait-of-cute-little-girl-outdoors-picture-id1268675353?b=1&k=20&m=1268675353&s=170667a&w=0&h=g4oqUB2IOMDNQTgJbEVdS8cA53ID2ykesOs43wwxRZ4=",
      id: 2,
    },

    {
      Recipe_image:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      Recipe_name: "Ice cream",
      User_name: "Sanika Ardekar",
      Profile_pic:
        "https://media.istockphoto.com/photos/portrait-of-cute-little-girl-outdoors-picture-id1268675353?b=1&k=20&m=1268675353&s=170667a&w=0&h=g4oqUB2IOMDNQTgJbEVdS8cA53ID2ykesOs43wwxRZ4=",
      id: 3,
    },

    {
      Recipe_image:
        "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      Recipe_name: "belgian waffle",
      User_name: "Sanika Ardekar",
      Profile_pic:
        "https://media.istockphoto.com/photos/portrait-of-cute-little-girl-outdoors-picture-id1268675353?b=1&k=20&m=1268675353&s=170667a&w=0&h=g4oqUB2IOMDNQTgJbEVdS8cA53ID2ykesOs43wwxRZ4=",
      id: 4,
    },
  ];
  return (
    <div className="container">
      <div className="feed">Feed</div>
      {/* <Box ml={5} mr={5} pl={5} pr={5 } mt={2} pt={2} mb={1} pb={1}> */}
      <Grid
        container
        spacing={3}
        alignContent="flex-start"
        justifyContent="center"
        marginleft={0}
        marginright={10}
      >
        {CardInfo.map((card, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  height: "280px",
                  borderRadius: "10px",
                  backgroundColor: "#098751",
                }}
              >
                <CardMedia
                  component="img"
                  height="175"
                  image={card.Recipe_image}
                  className="recipe-image-ra"
                />
                <CardContent>
                  <div className="recipe-name-try-it">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="recipe-name-ra"
                      style={{color:"white"}}
                    >
                      {card.Recipe_name}
                    </Typography>
                    <CardActionArea className="card-content">
                      <Button size="small" className="try-it-btn">
                        Try it
                      </Button>
                    </CardActionArea>
                  </div>
                  <div className="user-info-tags">
                    <div className="user-info-ra">
                      <img
                        className="profile-pic-ra"
                        alt={"usershere"}
                        src={card.Profile_pic}
                        height={40}
                        width={40}
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="user-name-ra"
                        style={{ color: "white"}}
                      >
                        {card.User_name}
                      </Typography>
                    </div>
                    <div className="tags">
                      <Button variant="contained" size="small" className="btn">
                        non-veg
                      </Button>
                      <Button variant="contained" size="small" className="btn">
                        vegan
                      </Button>
                      <Button variant="contained" size="small" className="btn">
                        veg
                      </Button>
                      <Button variant="contained" size="small" className="btn">
                        veg
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {/* </Box> */}
    </div>
  );
}
