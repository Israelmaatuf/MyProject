import React from "react";
import { useState } from "react";
import { Form, Col, Button, Carousel } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "../css/Recommendations.css";

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

function Recommendations(props) {
  const { classes } = props;
  const [recommendation, setRecommendation] = useState({
    name: "",
    phone: "",
    email: "",
    Recommendation: "",
  });
  const InputChange = (event) => {
    setRecommendation((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };
  function HandleSubmit(evt) {
    evt.preventDefault();
    console.log(recommendation);
  }
  const isDisable =
    recommendation.name.length === 0 ||
    recommendation.phone.length === 0 ||
    recommendation.email.length === 0 ||
    recommendation.Recommendation.length === 0;
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <div className="RecommendationsTitle">
            <h2>המלצות</h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div>
            <Carousel className="RecommendationsCarousel">
              <Carousel.Item>
                <h3 className="d-block w-100">לקוחות ממליצים</h3>

                <br />
                <div className="textCarousel">
                  {" "}
                  <span>
                    שלום! אני רוצה להגיד לך שהאוכל היה מאוד טעים!!! האורחים ממש
                    נהנו... תודה רבה!
                  </span>
                </div>
                <br />
                <br />
                <br />
                <br />

                <span className="RecommendationsFooter"> משפחת מעטוף</span>
              </Carousel.Item>
              <Carousel.Item>
                <h3 className="d-block w-100">לקוחות ממליצים</h3>
                <br />
                <br />
                <div className="textCarousel">
                  {" "}
                  <span>
                    שלום! אני רוצה להגיד לך שהאוכל היה מאוד טעים!!! האורחים ממש
                    נהנו... תודה רבה!
                  </span>
                </div>
                <br />
                <br />
                <br />
                <br />

                <span className="RecommendationsFooter"> משפחת מעטוף</span>
              </Carousel.Item>
              <Carousel.Item>
                <h3 className="d-block w-100">לקוחות ממליצים</h3>
                <br />
                <br />
                <div className="textCarousel">
                  {" "}
                  <span>
                    שלום! אני רוצה להגיד לך שהאוכל היה מאוד טעים!!! האורחים ממש
                    נהנו... תודה רבה!
                  </span>
                </div>
                <br />
                <br />
                <br />
                <br />

                <span className="RecommendationsFooter"> משפחת מעטוף</span>
              </Carousel.Item>
              <Carousel.Item>
                <h3 className="d-block w-100">לקוחות ממליצים</h3>
                <br />
                <br />
                <div className="textCarousel">
                  {" "}
                  <span>
                    שלום! אני רוצה להגיד לך שהאוכל היה מאוד טעים!!! האורחים ממש
                    נהנו... תודה רבה!
                  </span>
                </div>
                <br />
                <br />
                <br />
                <br />

                <span className="RecommendationsFooter"> משפחת מעטוף</span>
              </Carousel.Item>
            </Carousel>
          </div>
          <br />
          <br />
        </Grid>
        <Grid item xs={12}>
          <div className="RecommendationsForm">
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control
                    className="FormStyleRecommendations"
                    placeholder="שם ומשפחה"
                    name="name"
                    type="text"
                    value={recommendation.name}
                    onChange={InputChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="FormStyleRecommendations"
                    placeholder="טלפון"
                    name="phone"
                    type="number"
                    value={recommendation.phone}
                    onChange={InputChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="FormStyleRecommendations"
                    placeholder="אימייל"
                    name="email"
                    type="text"
                    value={recommendation.email}
                    onChange={InputChange}
                  />
                </Col>
              </Form.Row>
            </Form>
            <br />

            <br />
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control
                    className="WriteARecommendation"
                    placeholder="כתוב המלצה"
                    name="Recommendation"
                    type="text"
                    value={recommendation.Recommendation}
                    onChange={InputChange}
                  />
                </Col>
              </Form.Row>
            </Form>
            <br />
            <br />
            <Button
              onClick={HandleSubmit}
              type="submit"
              className="ButtonSendARecommendation"
              disabled={isDisable}
            >
              שלח המלצה
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
Recommendations.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Recommendations);
