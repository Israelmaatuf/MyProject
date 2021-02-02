import React from "react";
import { Form , Col, Button, Carousel } from "react-bootstrap";
import "../css/Recommendations.css";

function Recommendations() {
  return (
    <div className="headerRecommendations">
      <div className="RecommendationsTitle">
        <h2>המלצות</h2>
      </div>
      <div>
      <Carousel className="RecommendationsCarousel">
  <Carousel.Item>
    <h3
      className="d-block w-100"
    >לקוחות ממליצים</h3>
    <br/><br/>
    <div className="textCarousel"> <span>שלום! אני רוצה להגיד לך 
    שהאוכל היה מאוד טעים!!! 
    האורחים ממש נהנו... תודה רבה!
    </span>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <span className="RecommendationsFooter"> משפחת מעטוף</span>
    
  </Carousel.Item>
  <Carousel.Item>
    <h3
      className="d-block w-100"
    >לקוחות ממליצים</h3>
    <br/><br/>
    <div className="textCarousel"> <span>שלום! אני רוצה להגיד לך 
    שהאוכל היה מאוד טעים!!! 
    האורחים ממש נהנו... תודה רבה!
    </span>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <span className="RecommendationsFooter"> משפחת מעטוף</span>
    
  </Carousel.Item>
  <Carousel.Item>
    <h3
      className="d-block w-100"
    >לקוחות ממליצים</h3>
    <br/><br/>
    <div className="textCarousel"> <span>שלום! אני רוצה להגיד לך 
    שהאוכל היה מאוד טעים!!! 
    האורחים ממש נהנו... תודה רבה!
    </span>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <span className="RecommendationsFooter"> משפחת מעטוף</span>
    
  </Carousel.Item>
  <Carousel.Item>
    <h3
      className="d-block w-100"
    >לקוחות ממליצים</h3>
    <br/><br/>
    <div className="textCarousel"> <span>שלום! אני רוצה להגיד לך 
    שהאוכל היה מאוד טעים!!! 
    האורחים ממש נהנו... תודה רבה!
    </span>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <span className="RecommendationsFooter"> משפחת מעטוף</span>
    
  </Carousel.Item>
  
  
</Carousel>
      </div>
      <br/><br/>
      <div className="RecommendationsForm">
      <Form>
  <Form.Row>
    <Col>
      <Form.Control className="FormStyleRecommendations" placeholder="שם ומשפחה" />
    </Col>
    <Col>
      <Form.Control className="FormStyleRecommendations" placeholder="טלפון" />
    </Col>
    <Col>
      <Form.Control className="FormStyleRecommendations" placeholder="אימייל" />
    </Col>
  </Form.Row>
</Form>
<br/>

<br/>
<Form>
  <Form.Row>
    <Col >
      <Form.Control className="WriteARecommendation" placeholder="כתוב המלצה" />
    </Col>
  </Form.Row>
</Form>
<br/><br/>
<Button type="submit" className="ButtonSendARecommendation">שלח המלצה</Button>
        </div>
    </div>
  );
}

export default Recommendations;
