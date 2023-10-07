import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings} className="slider">
          <div>
        <div className="card1">
        <Card className="border border-white" style={{ width: '18rem' }}>
      <Card.Img className="img-fluid p-3" variant="top" src="https://www.disciplemedia.com/wp-content/uploads/2022/08/Group-1029-wpcf_401x401.png" />
      <Card.Body className=" mx-4">
        <Card.Title >Mark Williamson</Card.Title>
        <Card.Text>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eum! 
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
          </div>
          <div>
          <div>
        <div className="card2 mx-1 ">
        <Card className="border border-white" style={{ width: '18rem' }}>
      <Card.Img className="img-fluid p-3" variant="top" src="https://www.disciplemedia.com/wp-content/uploads/2022/08/Group-746-wpcf_401x401.png" />
      <Card.Body>
        <Card.Title>Hari Ghotra</Card.Title>
        <Card.Text>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae 
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>
          </div>
          <div>
          <div>
        <div className="card3 mx-3 ">
        <Card className="border border-white" style={{ width: '18rem' }}>
      <Card.Img className="img-fluid p-3" variant="top" src="https://www.disciplemedia.com/wp-content/uploads/2022/08/Group-746-1-wpcf_401x401.png" />
      <Card.Body>
        <Card.Title>Virginia scheuer</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis 
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div> 
          </div>
          <div>
          <div>
        <div className="card4">
        <Card className="border border-white" style={{ width: '18rem' }}>
      <Card.Img className="img-fluid p-3" variant="top" src="https://www.disciplemedia.com/wp-content/uploads/2022/09/Group-1027-wpcf_401x401.png" />
      <Card.Body>
        <Card.Title>Rod Stryker</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, corrupti.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>
          </div>
        </Slider>
      </div>
    );
  }
}


























