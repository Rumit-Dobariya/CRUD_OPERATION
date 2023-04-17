import React from "react";
import {
  Button,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container
} from "reactstrap";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
// import { setBooks, create_UUID } from "../services/book.service";

export default class Addbook extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: create_UUID()
//     };
//   }
  
  
  render() {
    return (
      <Form
        onSubmit={this.handleForm}
        validate={values => {
          const errors = {};
          function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }
         
          
          debugger;
          if (!values.email) {
            errors.email = "Fill this field";
          } else if (!validateEmail(values.email)) {
            errors.email = "Invalid email address";
          }
          
        }}

        render={({ handleForm, values, submitting, validating, valid }) => (
          <form onSubmit={handleForm}>
            <Container>
              
              <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}>
                  <FormGroup>
                    <Label for="email" className="font-weight-bold">
                      Mail Id
                    </Label>
                    <Field name="email">
                      {({ input, meta }) => (
                        <div>
                          <Input
                            {...input}
                            type="email"
                            placeholder="email id"
                            invalid={meta.error && meta.touched}
                          />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}>
                  <Button type="submit" color="primary" disabled={!valid}>
                    Submit
                  </Button>
                  <Link to="/books" className="btn btn-danger ml-5">
                    Cancel
                  </Link>
                </Col>
              </Row>
            </Container>
          </form>
        )}
      />
    );
  }
}
