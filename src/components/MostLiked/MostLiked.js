import './MostLiked.css';
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const SliderImages = [
    {Recipe_image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    Recipe_name: 'Ice cream',
    User_name: 'Anaida',
    Profile_pic: 'https://media.istockphoto.com/photos/portrait-of-cute-little-girl-outdoors-picture-id1268675353?b=1&k=20&m=1268675353&s=170667a&w=0&h=g4oqUB2IOMDNQTgJbEVdS8cA53ID2ykesOs43wwxRZ4=',
    id:1},
  

    {Recipe_image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    Recipe_name: 'Ice cream wefef evefer efdefer ergerfg ergerg ',
    User_name: 'Anaida',
    Profile_pic: 'https://media.istockphoto.com/photos/portrait-of-cute-little-girl-outdoors-picture-id1268675353?b=1&k=20&m=1268675353&s=170667a&w=0&h=g4oqUB2IOMDNQTgJbEVdS8cA53ID2ykesOs43wwxRZ4=',
    id:2 },

    {Recipe_image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    Recipe_name: 'Ice cream',
    User_name: 'Anaida',
    Profile_pic: 'https://media.istockphoto.com/photos/portrait-of-cute-little-girl-outdoors-picture-id1268675353?b=1&k=20&m=1268675353&s=170667a&w=0&h=g4oqUB2IOMDNQTgJbEVdS8cA53ID2ykesOs43wwxRZ4=',
    id:3 },

    {Recipe_image:  'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    Recipe_name: 'Ice cream',
    User_name: 'Anaida',
    Profile_pic: 'https://media.istockphoto.com/photos/portrait-of-cute-little-girl-outdoors-picture-id1268675353?b=1&k=20&m=1268675353&s=170667a&w=0&h=g4oqUB2IOMDNQTgJbEVdS8cA53ID2ykesOs43wwxRZ4=',
    id:4 },

    {Recipe_image:  'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    Recipe_name: 'Ice cream',
    User_name: 'Anaida',
    Profile_pic: 'https://media.istockphoto.com/photos/portrait-of-cute-little-girl-outdoors-picture-id1268675353?b=1&k=20&m=1268675353&s=170667a&w=0&h=g4oqUB2IOMDNQTgJbEVdS8cA53ID2ykesOs43wwxRZ4=',
    id:5 },

    {Recipe_image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    Recipe_name: 'Ice cream',
    User_name: 'Anaida',
    Profile_pic: 'https://media.istockphoto.com/photos/portrait-of-cute-little-girl-outdoors-picture-id1268675353?b=1&k=20&m=1268675353&s=170667a&w=0&h=g4oqUB2IOMDNQTgJbEVdS8cA53ID2ykesOs43wwxRZ4=',
    id:6 },

]

const MostLiked = () => {
  // const [mostLiked, setmostLiked] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setSuggestions(data);
  //     });
  // }, []);
  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            initialSlide: 2
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
          {  
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        },
      },
    ],
  };
  return(
    <Container className="container">
       <Row>
    <Col>
        <Slider {...settings}>
          {SliderImages.map((slide,index) => {
             return(
               <div className="card-box" key={index}>
              <Card className="bg-light text-light card-container">
              <Card.Img src={slide.Recipe_image} alt="Card image" className="recipe_image" />
              <Card.ImgOverlay className="recipe-overlay">
                <Card.Title className="recipe-name">{slide.Recipe_name}</Card.Title>
                <div className="user-info">
                <img
                  className="profile_pic"
                  alt={"usershere"}
                  src={slide.Profile_pic}
                  height={45}
                  width={45}
                />
                <Card.Text className="user-name">
                  {slide.User_name}
                </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
            </div>
             );
          })}
        </Slider>
    </Col>
       </Row>
    </Container>
  );
  };
  
  export default MostLiked