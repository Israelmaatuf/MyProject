import React from "react";
import "./CheckBoxGrilled.css";
import { Button, Form, Col } from "react-bootstrap";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function CheckBoxGrilled() {
  return (
    <div>
      <div className="grilledMenuCol1">
        <FormControl component="fieldset">
          <FormLabel className="salatsMenuGrilledTitle" component="legend">
            סלטים (6 לבחירה)
          </FormLabel>
          <br />
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="חציל בלאדי + טחינה"
              control={<Checkbox color="primary" />}
              label="חציל בלאדי + טחינה"
              labelPlacement="חציל בלאדי + טחינה"
            />
            <FormControlLabel
              value="גזר מרוקאי מבושל"
              control={<Checkbox color="primary" />}
              label="גזר מרוקאי מבושל"
              labelPlacement="גזר מרוקאי מבושל"
            />
            <FormControlLabel
              value="תפוח אדמה במיונז"
              control={<Checkbox color="primary" />}
              label="תפוח אדמה במיונז"
              labelPlacement="תפוח אדמה במיונז"
            />
            <FormControlLabel
              value="חציל מטוגן + ירק"
              control={<Checkbox color="primary" />}
              label="חציל מטוגן + ירק"
              labelPlacement="חציל מטוגן + ירק"
            />
            <FormControlLabel
              value="חומוס + טחינה"
              control={<Checkbox color="primary" />}
              label="חומוס + טחינה"
              labelPlacement="חומוס + טחינה"
            />
            <FormControlLabel
              value="חציל במיונז"
              control={<Checkbox color="primary" />}
              label="חציל במיונז"
              labelPlacement="חציל במיונז"
            />
            <FormControlLabel
              value="סלט ירקות חי"
              control={<Checkbox color="primary" />}
              label="סלט ירקות חי"
              labelPlacement="סלט ירקות חי"
            />
            <FormControlLabel
              value="פלפל חריף"
              control={<Checkbox color="primary" />}
              label="פלפל חריף"
              labelPlacement="פלפל חריף"
            />
            <FormControlLabel
              value="גזר מגורד חי"
              control={<Checkbox color="primary" />}
              label="גזר מגורד חי"
              labelPlacement="גזר מגורד חי"
            />
          </FormGroup>
        </FormControl>
      </div>
      <div className="grilledMenuCol2">
        <FormControl component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="בורגול"
              control={<Checkbox color="primary" />}
              label="בורגול"
              labelPlacement="בורגול"
            />
            <FormControlLabel
              value="כרוב פיקנטי"
              control={<Checkbox color="primary" />}
              label="כרוב פיקנטי"
              labelPlacement="כרוב פיקנטי"
            />
            <FormControlLabel
              value="כרוב + חמוציות"
              control={<Checkbox color="primary" />}
              label="כרוב + חמוציות"
              labelPlacement="כרוב + חמוציות"
            />
            <FormControlLabel
              value="כרוב וגזר במיונז"
              control={<Checkbox color="primary" />}
              label="כרוב וגזר במיונז"
              labelPlacement="כרוב וגזר במיונז"
            />
            <FormControlLabel
              value="שרי פיקנטי"
              control={<Checkbox color="primary" />}
              label="שרי פיקנטי"
              labelPlacement="שרי פיקנטי"
            />
            <FormControlLabel
              value="כרוב סגול במיונז"
              control={<Checkbox color="primary" />}
              label="כרוב סגול במיונז"
              labelPlacement="כרוב סגול במיונז"
            />
            <FormControlLabel
              value="חמוצי הבית"
              control={<Checkbox color="primary" />}
              label="חמוצי הבית"
              labelPlacement="חמוצי הבית"
            />
            <FormControlLabel
              value="מטבוחה"
              control={<Checkbox color="primary" />}
              label="מטבוחה"
              labelPlacement="מטבוחה"
            />
            <FormControlLabel
              value="מלפפון בשמיר"
              control={<Checkbox color="primary" />}
              label="מלפפון בשמיר"
              labelPlacement="מלפפון בשמיר"
            />
          </FormGroup>
        </FormControl>
      </div>
      <div className="grilledMenuCol3">
        <FormControl component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="סלק מבושל"
              control={<Checkbox color="primary" />}
              label="סלק מבושל"
              labelPlacement="סלק מבושל"
            />
            <FormControlLabel
              value="תירס מקסיקני"
              control={<Checkbox color="primary" />}
              label="תירס מקסיקני"
              labelPlacement="תירס מקסיקני"
            />
            <FormControlLabel
              value="תירס במיונז"
              control={<Checkbox color="primary" />}
              label="תירס במיונז"
              labelPlacement="תירס במיונז"
            />
            <FormControlLabel
              value="פלפלים קלויים"
              control={<Checkbox color="primary" />}
              label="פלפלים קלויים"
              labelPlacement="פלפלים קלויים"
            />
            <FormControlLabel
              value="בטטה בצילי"
              control={<Checkbox color="primary" />}
              label="בטטה בצילי"
              labelPlacement="בטטה בצילי"
            />
            <FormControlLabel
              value="סלט פטריות"
              control={<Checkbox color="primary" />}
              label="סלט פטריות"
              labelPlacement="סלט פטריות"
            />
            <FormControlLabel
              value="חסה שרי + רוטב"
              control={<Checkbox color="primary" />}
              label="חסה שרי + רוטב"
              labelPlacement="חסה שרי + רוטב"
            />
            <FormControlLabel
              value="חציל בטעם כבד"
              control={<Checkbox color="primary" />}
              label="חציל בטעם כבד"
              labelPlacement="חציל בטעם כבד"
            />
          </FormGroup>
        </FormControl>
      </div>
      <br />
      <br />
      <div className="grilledMenuCol1">
        <FormControl component="fieldset">
          <FormLabel className="salatsMenuGrilledTitle" component="legend">
            מספר סוגי לחמים (ללא הגבלה)
          </FormLabel>
          <br />
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="פיתות לאפות עיראקיות"
              control={<Checkbox color="primary" />}
              label="פיתות לאפות עיראקיות"
              labelPlacement="פיתות לאפות עיראקיות"
            />
            <FormControlLabel
              value="פרנות מרוקאיות"
              control={<Checkbox color="primary" />}
              label="פרנות מרוקאיות"
              labelPlacement="פרנות מרוקאיות"
            />
          </FormGroup>
        </FormControl>
        <FormControl className="menuGrilledBreads1" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="לחמניות כוסמין"
              control={<Checkbox color="primary" />}
              label="לחמניות כוסמין"
              labelPlacement="לחמניות כוסמין"
            />
          </FormGroup>
        </FormControl>
        <FormControl className="menuGrilledBreads2" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="פיתות משוחות בשמן זית וזעתר"
              control={<Checkbox color="primary" />}
              label="פיתות משוחות בשמן זית וזעתר"
              labelPlacement="פיתות משוחות בשמן זית וזעתר"
            />
          </FormGroup>
        </FormControl>
      </div>
      <br />
      <br />
      <div className="grilledMenuCol1">
        <FormControl component="fieldset">
          <FormLabel className="salatsMenuGrilledTitle" component="legend">
            בשרים על האש (ללא הגבלה)
          </FormLabel>
          <br />
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="פרגיות בנוסח מזרחי"
              control={<Checkbox color="primary" />}
              label="פרגיות בנוסח מזרחי"
              labelPlacement="פרגיות בנוסח מזרחי"
            />
            <FormControlLabel
              value="קבב"
              control={<Checkbox color="primary" />}
              label="קבב"
              labelPlacement="קבב"
            />
            <FormControlLabel
              value="חזה עוף ביין לבן ועשבי תיבול"
              control={<Checkbox color="primary" />}
              label="חזה עוף ביין לבן ועשבי תיבול"
              labelPlacement="חזה עוף ביין לבן ועשבי תיבול"
            />
          </FormGroup>
        </FormControl>
        <FormControl className="menuGrilledMeet1" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="שישליק הודו (שווארמה מקבה)"
              control={<Checkbox color="primary" />}
              label="שישליק הודו (שווארמה מקבה)"
              labelPlacement="שישליק הודו (שווארמה מקבה)"
            />
            <FormControlLabel
              value="כבד עוף"
              control={<Checkbox color="primary" />}
              label="כבד עוף"
              labelPlacement="כבד עוף"
            />
            <FormControlLabel
              value="כנפיים אסייאתי בשום צ'ילי"
              control={<Checkbox color="primary" />}
              label="כנפיים אסייאתי בשום צ'ילי"
              labelPlacement="כנפיים אסייאתי בשום צ'ילי"
            />
          </FormGroup>
        </FormControl>
        <FormControl className="menuGrilledMeet2" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="נקניקיות הודו/בקר"
              control={<Checkbox color="primary" />}
              label="נקניקיות הודו/בקר"
              labelPlacement="נקניקיות הודו/בקר"
            />
            <FormControlLabel
              value="אנטריקוט (בתוספת תשלום)*"
              control={<Checkbox color="primary" />}
              label="אנטריקוט (בתוספת תשלום)*"
              labelPlacement="אנטריקוט (בתוספת תשלום)*"
            />
            <FormControlLabel
              value="אסאדו (בתוספת תשלום)*"
              control={<Checkbox color="primary" />}
              label="אסאדו (בתוספת תשלום)*"
              labelPlacement="אסאדו (בתוספת תשלום)*"
            />
          </FormGroup>
        </FormControl>
      </div>
      <br />
      <br />
      <div className="grilledMenuCol1">
        <FormControl component="fieldset">
          <FormLabel className="salatsMenuGrilledTitle" component="legend">
          תוספות
          </FormLabel>
          <br />
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="אורז לבן"
              control={<Checkbox color="primary" />}
              label="אורז לבן"
              labelPlacement="אורז לבן"
            />
            <FormControlLabel
              value="אורז בוכרי (אושפלאו)"
              control={<Checkbox color="primary" />}
              label="אורז בוכרי (אושפלאו)"
              labelPlacement="אורז בוכרי (אושפלאו)"
            />
            <FormControlLabel
              value="אנטיפסטי ירקות על האש"
              control={<Checkbox color="primary" />}
              label="אנטיפסטי ירקות על האש"
              labelPlacement="אנטיפסטי ירקות על האש"
            />
            
          </FormGroup>
        </FormControl>
        <FormControl className="menuGrilledExtras1" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="תפוח אדמה אפוי"
              control={<Checkbox color="primary" />}
              label="תפוח אדמה אפוי"
              labelPlacement="תפוח אדמה אפוי"
            />
            <FormControlLabel
              value="נודלס ירקות"
              control={<Checkbox color="primary" />}
              label="נודלס ירקות"
              labelPlacement="נודלס ירקות"
            />
            
          </FormGroup>
        </FormControl>
        <FormControl className="menuGrilledExtras2" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="ירקות מוקפצים"
              control={<Checkbox color="primary" />}
              label="ירקות מוקפצים"
              labelPlacement="ירקות מוקפצים"
            />
            <FormControlLabel
              value="ארטישוק עם פטריות"
              control={<Checkbox color="primary" />}
              label="ארטישוק עם פטריות"
              labelPlacement="ארטישוק עם פטריות"
            />
          
          </FormGroup>
        </FormControl>
      </div>
    
      <br />
      <br />
      <div className="orderFormGrilledMenu">
        <Form>
          <Form.Row>
            <Col>
              <Form.Control className="FormGrilledStyle" placeholder="שם" />
            </Col>
            <Col>
              <Form.Control className="FormGrilledStyle" placeholder="טלפון" />
            </Col>
            <Col>
              <Form.Control className="FormGrilledStyle" placeholder="אימייל" />
            </Col>
            <Col>
              <Form.Control className="FormGrilledStyle" placeholder="כתובת" />
            </Col>
          </Form.Row>
        </Form>
        <br />
        <Form>
          <Form.Row>
            <Col>
              <Form.Control className="FormGrilledStyle" placeholder="מספר מנות" />
            </Col>
            <Col>
              <Form.Control className="FormGrilledStyle" placeholder="תאריך" />
            </Col>
            <Col>
              <Form.Control className="FormGrilledStyle" placeholder="יום" />
            </Col>
            <Col>
              <Form.Control className="FormGrilledStyle" placeholder="שעה" />
            </Col>
          </Form.Row>
        </Form>
        <br />
        <Form>
          <Form.Row>
            <Col>
              <Form.Control
                className="CommentsToOrderGrilledMenu"
                placeholder="הערות להזמנה"
              />
            </Col>
          </Form.Row>
        </Form>
        <br />
        <br />
        <Button type="submit" className="buttonGrilledSendOrder">
          שלח
        </Button>
      </div>
    </div>
  );
}
