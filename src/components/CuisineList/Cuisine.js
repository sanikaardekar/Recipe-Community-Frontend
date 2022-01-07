import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Cuisine.css';

 const SliderImages = [
     {image:'https://media.istockphoto.com/photos/fresh-homemade-pizza-margherita-picture-id1278998606?b=1&k=20&m=1278998606&s=170667a&w=0&h=BlXvVFfwLwD4ckIF_7sg_mis8ULaqy9sdPgA6grpSo4=',
     name:'pizza',
     id:1},
     {image:'https://media.istockphoto.com/photos/bakery-chef-prepare-pizza-picture-id1291299956?b=1&k=20&m=1291299956&s=170667a&w=0&h=Ys_FLtdY0Uzc7yTQl6JzvCHTQ3eRAuqNNU4x8EX1FB8=',
     name:'sushi',
     id:2},
     {image:'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80',
     name:'modak',
     id:3},
     {image:'https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=268&q=80',
     name:'burger',
     id:4},
     {image:'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
     name:'salads',
     id:5},
     {image:'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
     name:'noodles',
     id:6},
     {image:'https://media.istockphoto.com/photos/chinese-homemade-noodles-with-marinated-soup-picture-id1266377452?b=1&k=20&m=1266377452&s=170667a&w=0&h=1Vw1kF2QH-tt7Ez8XTyeiZw7Xc6MDidmFTRb-lz4SS8=',
     name:'vadapav',
     id:7},
     {image:'https://media.istockphoto.com/photos/lanzhou-stretched-noodles-picture-id1293674026?b=1&k=20&m=1293674026&s=170667a&w=0&h=SCRwBJLQjDj3qwq25Bk0pb2COJSoZmctjAyhkKp9SJk=',
     name:'dessert',
     id:8},
     {image:'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm9vZGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
     name:'noodles',
     id:9},
     {image:'https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bm9vZGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
     name:'sandwich',
     id:10},
     {image:'https://images.unsplash.com/photo-1607328874071-45a9cd600644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5vb2RsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
     name:'',
     id:11},
     {image:'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5vb2RsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
     name:'',
     id:12},
 ]
export default function Cuisine()
{ 
    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 9,
        slidesToScroll: 5,

        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
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
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              },
            },
          ],
      }
    return (
        <Container>
        <Row>
        <Col>
        <div className="title">Cuisines</div>
        <Slider {...settings}>
        {SliderImages.map((slide,index) => {
             return(
                 <div className="cuisine-list" key={index}>
                <img
                  className="cuisine-image"
                  alt={"cuisine"}
                  src={slide.image}
                  height={100}
                  width={100}
                />
            <div className="cuisine-name">{slide.name}</div>
            </div>
             );
        })}
        </Slider>
        </Col>
        </Row>
        </Container>
    );

}