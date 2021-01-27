import React from "react";
import "./CheckBoxBasic.css";
import { Button , Form , Col } from 'react-bootstrap';
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";


export default function CheckBoxBasic() {
  return (
    <div>
      <div className="col1">
        <FormControl component="fieldset">
          <FormLabel id="salatsMenuTitle" component="legend">
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
      <div className="col2">
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
      <div className="col2">
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
      <div className="col1">
        <FormControl component="fieldset">
          <FormLabel id="salatsMenuTitle" component="legend">
            מנה ראשונה - צמחוני (3 לבחירה)
          </FormLabel>
          <br />
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="בלינצס תפוח אדמה"
              control={<Checkbox color="primary" />}
              label="בלינצס תפוח אדמה"
              labelPlacement="בלינצס תפוח אדמה"
            />
            <FormControlLabel
              value="בורקס תפוח אדמה + רוטב"
              control={<Checkbox color="primary" />}
              label="בורקס תפוח אדמה + רוטב"
              labelPlacement="בורקס תפוח אדמה + רוטב"
            />
            <FormControlLabel
              value="פילו ירקות"
              control={<Checkbox color="primary" />}
              label="פילו ירקות"
              labelPlacement="פילו ירקות"
            />
          </FormGroup>
        </FormControl>
        <FormControl className="menuBasicVegetarian1" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="טורטיה תפוח אדמה מטוגן"
              control={<Checkbox color="primary" />}
              label="טורטיה תפוח אדמה מטוגן"
              labelPlacement="טורטיה תפוח אדמה מטוגן"
            />
            <FormControlLabel
              value="טורטיה ירק"
              control={<Checkbox color="primary" />}
              label="טורטיה ירק"
              labelPlacement="טורטיה ירק"
            />
            <FormControlLabel
              value="פלפל ממולא"
              control={<Checkbox color="primary" />}
              label="פלפל ממולא"
              labelPlacement="פלפל ממולא"
            />
          </FormGroup>
        </FormControl>
        <FormControl className="menuBasicVegetarian2" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="טורטיה תפוח אדמה מטוגן"
              control={<Checkbox color="primary" />}
              label="טורטיה תפוח אדמה מטוגן"
              labelPlacement="טורטיה תפוח אדמה מטוגן"
            />
            <FormControlLabel
              value="טורטיה ירק"
              control={<Checkbox color="primary" />}
              label="טורטיה ירק"
              labelPlacement="טורטיה ירק"
            />
          </FormGroup>
        </FormControl>
      </div>
      <br />
      <br />
      <div className="col1">
        <FormControl component="fieldset">
          <FormLabel id="salatsMenuTitle" component="legend">
            מנה ראשונה בשרי/דגים (3 לבחירה)
          </FormLabel>
          <br />
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="מפרום ברוטב עגבניות"
              control={<Checkbox color="primary" />}
              label="מפרום ברוטב עגבניות"
              labelPlacement="מפרום ברוטב עגבניות"
            />
            <FormControlLabel
              value="נסיכה מרוקאי"
              control={<Checkbox color="primary" />}
              label="נסיכה מרוקאי"
              labelPlacement="נסיכה מרוקאי"
            />
            <FormControlLabel
              value="טורטיה בשר"
              control={<Checkbox color="primary" />}
              label="טורטיה בשר"
              labelPlacement="טורטיה בשר"
            />
            <FormControlLabel
              value="טורטיה מעורב"
              control={<Checkbox color="primary" />}
              label="טורטיה מעורב"
              labelPlacement="טורטיה מעורב"
            />
          </FormGroup>
        </FormControl>
        <FormControl className="menuBasicMeetFish1" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="מוסקה ברוטב עגבניות"
              control={<Checkbox color="primary" />}
              label="מוסקה ברוטב עגבניות"
              labelPlacement="מוסקה ברוטב עגבניות"
            />
            <FormControlLabel
              value="קציצות דגים ברוטב"
              control={<Checkbox color="primary" />}
              label="קציצות דגים ברוטב"
              labelPlacement="קציצות דגים ברוטב"
            />
            <FormControlLabel
              value="דג וויטפיש"
              control={<Checkbox color="primary" />}
              label="דג וויטפיש"
              labelPlacement="דג וויטפיש"
            />
            <FormControlLabel
              value="סלמון מרוקאי*"
              control={<Checkbox color="primary" />}
              label="סלמון מרוקאי*"
              labelPlacement="סלמון מרוקאי*"
            />
          </FormGroup>
        </FormControl>
        <FormControl className="menuBasicMeetFish2" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="סלמון טריאקי*"
              control={<Checkbox color="primary" />}
              label="סלמון טריאקי*"
              labelPlacement="סלמון טריאקי*"
            />
            <FormControlLabel
              value="סלמון עשבי טיבול*"
              control={<Checkbox color="primary" />}
              label="סלמון עשבי טיבול*"
              labelPlacement="סלמון עשבי טיבול*"
            />
            <FormControlLabel
              value="מושט אפוי בתנור"
              control={<Checkbox color="primary" />}
              label="מושט אפוי בתנור"
              labelPlacement="מושט אפוי בתנור"
            />
          </FormGroup>
        </FormControl>
      </div>
      <br />
      <br />
      <div className="col1">
        <FormControl component="fieldset">
          <FormLabel id="salatsMenuTitle" component="legend">
            עיקריות (3 לבחירה)
          </FormLabel>
          <br />
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="קציצות בשר ברוטב"
              control={<Checkbox color="primary" />}
              label="קציצות בשר ברוטב"
              labelPlacement="קציצות בשר ברוטב"
            />
            <FormControlLabel
              value="קציצות עוף ברוטב"
              control={<Checkbox color="primary" />}
              label="קציצות עוף ברוטב"
              labelPlacement="קציצות עוף ברוטב"
            />
            <FormControlLabel
              value="שניצל מטוגן"
              control={<Checkbox color="primary" />}
              label="שניצל מטוגן"
              labelPlacement="שניצל מטוגן"
            />
            <FormControlLabel
              value="חזה ממולא מצופה מטוגן"
              control={<Checkbox color="primary" />}
              label="חזה ממולא מצופה מטוגן"
              labelPlacement="חזה ממולא מצופה מטוגן"
            />
            <FormControlLabel
              value="חזה ממולא + רוטב"
              control={<Checkbox color="primary" />}
              label="חזה ממולא + רוטב"
              labelPlacement="חזה ממולא + רוטב"
            />
          </FormGroup>
        </FormControl>
        <FormControl className="menuBasicMeet1" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="שיפודי חזה עוף"
              control={<Checkbox color="primary" />}
              label="שיפודי חזה עוף"
              labelPlacement="שיפודי חזה עוף"
            />
            <FormControlLabel
              value="שיפודי קבב"
              control={<Checkbox color="primary" />}
              label="שיפודי קבב"
              labelPlacement="שיפודי קבב"
            />
            <FormControlLabel
              value="צלי בקר ברוטב*"
              control={<Checkbox color="primary" />}
              label="צלי בקר ברוטב*"
              labelPlacement="צלי בקר ברוטב*"
            />
            <FormControlLabel
              value="סטייק חזה עוף"
              control={<Checkbox color="primary" />}
              label="סטייק חזה עוף"
              labelPlacement="סטייק חזה עוף"
            />
            <FormControlLabel
              value="רוסטביף ברוטב אסיאתי*"
              control={<Checkbox color="primary" />}
              label="רוסטביף ברוטב אסיאתי*"
              labelPlacement="רוסטביף ברוטב אסיאתי*"
            />
          </FormGroup>
        </FormControl>
        <FormControl className="menuBasicMeet2" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="כרעיים עוף בגריל*"
              control={<Checkbox color="primary" />}
              label="כרעיים עוף בגריל*"
              labelPlacement="כרעיים עוף בגריל*"
            />
            <FormControlLabel
              value="כרעיים בטריאקי*"
              control={<Checkbox color="primary" />}
              label="כרעיים בטריאקי*"
              labelPlacement="כרעיים בטריאקי*"
            />
            <FormControlLabel
              value="סטייק פרגית*"
              control={<Checkbox color="primary" />}
              label="סטייק פרגית*"
              labelPlacement="סטייק פרגית*"
            />
            <FormControlLabel
              value="שיפודי פרגית*"
              control={<Checkbox color="primary" />}
              label="שיפודי פרגית*"
              labelPlacement="שיפודי פרגית*"
            />
          </FormGroup>
        </FormControl>
      </div>
      <br />
      <br />
      <div className="col1">
        <FormControl component="fieldset">
          <FormLabel id="salatsMenuTitle" component="legend">
            תוספות (3 לבחירה)
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
              value="אורז צהוב"
              control={<Checkbox color="primary" />}
              label="אורז צהוב"
              labelPlacement="אורז צהוב"
            />
            <FormControlLabel
              value="תפוח אדמה אפוי"
              control={<Checkbox color="primary" />}
              label="תפוח אדמה אפוי"
              labelPlacement="תפוח אדמה אפוי"
            />
            <FormControlLabel
              value="זיתים + פטריות"
              control={<Checkbox color="primary" />}
              label="זיתים + פטריות"
              labelPlacement="זיתים + פטריות"
            />
            <FormControlLabel
              value="אפונה וגזר"
              control={<Checkbox color="primary" />}
              label="אפונה וגזר"
              labelPlacement="אפונה וגזר"
            />
          </FormGroup>
        </FormControl>
        <FormControl className="menuBasicExtras1" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="שעועית ברוטב עגבניות"
              control={<Checkbox color="primary" />}
              label="שעועית ברוטב עגבניות"
              labelPlacement="שעועית ברוטב עגבניות"
            />
            <FormControlLabel
              value="ירקות מוקפצים"
              control={<Checkbox color="primary" />}
              label="ירקות מוקפצים"
              labelPlacement="ירקות מוקפצים"
            />
            <FormControlLabel
              value="נודלס ירקות"
              control={<Checkbox color="primary" />}
              label="נודלס ירקות"
              labelPlacement="נודלס ירקות"
            />
            <FormControlLabel
              value="אנטיפסטי"
              control={<Checkbox color="primary" />}
              label="אנטיפסטי"
              labelPlacement="אנטיפסטי"
            />
            <FormControlLabel
              value="אפונה וסלרי"
              control={<Checkbox color="primary" />}
              label="אפונה וסלרי"
              labelPlacement="אפונה וסלרי"
            />
          </FormGroup>
        </FormControl>
        <FormControl className="menuBasicExtras2" component="fieldset">
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="פטריות מוקפצות"
              control={<Checkbox color="primary" />}
              label="פטריות מוקפצות"
              labelPlacement="פטריות מוקפצות"
            />
            <FormControlLabel
              value="קוסקוס"
              control={<Checkbox color="primary" />}
              label="קוסקוס"
              labelPlacement="קוסקוס"
            />
            <FormControlLabel
              value="מרק ירקות (לקוסקוס)"
              control={<Checkbox color="primary" />}
              label="מרק ירקות (לקוסקוס)"
              labelPlacement="מרק ירקות (לקוסקוס)"
            />
          </FormGroup>
        </FormControl>
      </div>
      <br />
      <br />
      <div className="col1">
        <FormControl component="fieldset">
          <FormLabel id="salatsMenuTitle" component="legend">
            המיוחדים של שבת
          </FormLabel>
          <br />
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="סלט ביצים"
              control={<Checkbox color="primary" />}
              label="סלט ביצים"
              labelPlacement="סלט ביצים"
            />
            <FormControlLabel
              value="סלט כבד קצוץ"
              control={<Checkbox color="primary" />}
              label="סלט כבד קצוץ"
              labelPlacement="סלט כבד קצוץ"
            />
            <FormControlLabel
              value="גרגירי חומוס (ארבס)"
              control={<Checkbox color="primary" />}
              label="גרגירי חומוס (ארבס)"
              labelPlacement="גרגירי חומוס (ארבס)"
            />
          </FormGroup>
        </FormControl>
        <FormControl
          className="menuBasicSpecialOfShabbat1"
          component="fieldset"
        >
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="חמין עם בקר + קישקע"
              control={<Checkbox color="primary" />}
              label="חמין עם בקר + קישקע"
              labelPlacement="חמין עם בקר + קישקע"
            />
            <FormControlLabel
              value="חמין פרווה + קישקע"
              control={<Checkbox color="primary" />}
              label="חמין פרווה + קישקע"
              labelPlacement="חמין פרווה + קישקע"
            />
            <FormControlLabel
              value="מרק ירקות + שקדים"
              control={<Checkbox color="primary" />}
              label="מרק ירקות + שקדים"
              labelPlacement="מרק ירקות + שקדים"
            />
          </FormGroup>
        </FormControl>
        <FormControl
          className="menuBasicSpecialOfShabbat2"
          component="fieldset"
        >
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="דגים מלוחים"
              control={<Checkbox color="primary" />}
              label="דגים מלוחים"
              labelPlacement="דגים מלוחים"
            />
            <FormControlLabel
              value="וויטפיש"
              control={<Checkbox color="primary" />}
              label="וויטפיש"
              labelPlacement="וויטפיש"
            />
          </FormGroup>
        </FormControl>
      </div>
      <br />
      <br />
      <div className="col1">
        <FormControl component="fieldset">
          <FormLabel id="salatsMenuTitle" component="legend">
            שונות (בתוספת תשלום)
          </FormLabel>
          <br />
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="לחמניות"
              control={<Checkbox color="primary" />}
              label="לחמניות"
              labelPlacement="לחמניות"
            />
            <FormControlLabel
              value="משלוח"
              control={<Checkbox color="primary" />}
              label="משלוח"
              labelPlacement="משלוח"
            />
          </FormGroup>
        </FormControl>
        <FormControl
          className="menuBasicSpecialOfShabbat1"
          component="fieldset"
        >
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="פסטלים/סיגרים"
              control={<Checkbox color="primary" />}
              label="פסטלים/סיגרים"
              labelPlacement="פסטלים/סיגרים"
            />
            <FormControlLabel
              value="קובות מטוגנות"
              control={<Checkbox color="primary" />}
              label="קובות מטוגנות"
              labelPlacement="קובות מטוגנות"
            />
          </FormGroup>
        </FormControl>
        <FormControl
          className="menuBasicSpecialOfShabbat2"
          component="fieldset"
        >
          <FormGroup aria-label="position" col>
            <FormControlLabel
              value="פשטידות"
              control={<Checkbox color="primary" />}
              label="פשטידות"
              labelPlacement="פשטידות"
            />
            <FormControlLabel
              value="שניצלונים"
              control={<Checkbox color="primary" />}
              label="שניצלונים"
              labelPlacement="שניצלונים"
            />
          </FormGroup>
        </FormControl>
      </div>
      <br/><br/>
      <div className="orderFormBasicMenu">
      <Form>
  <Form.Row>
    <Col>
      <Form.Control className="FormStyle" placeholder="שם" />
    </Col>
    <Col>
      <Form.Control className="FormStyle" placeholder="טלפון" />
    </Col>
    <Col>
      <Form.Control className="FormStyle" placeholder="אימייל" />
    </Col>
    <Col>
      <Form.Control className="FormStyle" placeholder="כתובת" />
    </Col>
  </Form.Row>
</Form>
<br/>
<Form>
  <Form.Row>
    <Col>
      <Form.Control className="FormStyle" placeholder="מספר מנות" />
    </Col>
    <Col>
      <Form.Control className="FormStyle" placeholder="תאריך" />
    </Col>
    <Col>
      <Form.Control className="FormStyle" placeholder="יום" />
    </Col>
    <Col>
      <Form.Control className="FormStyle" placeholder="שעה" />
    </Col>
  </Form.Row>
</Form>
<br/>
<Form>
  <Form.Row>
    <Col >
      <Form.Control className="CommentsToOrderBasicMenu" placeholder="הערות להזמנה" />
    </Col>
  </Form.Row>
</Form>
<br/><br/>
<Button type="submit" className="buttonSendOrder">שלח</Button>
        </div>      
      
        
      
    </div>
  );
}
