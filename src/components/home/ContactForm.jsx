// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = ({contactForm}) => {
  const [state, handleSubmit] = useForm(contactForm.formspree_id);
  if (state.succeeded) {
      return <p>Thanks for your message!</p>;
  }

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            id="email"
            type="email" 
            name="email"
            placeholder="Your email" 
            required
            />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={6}
              id="message"
              type="textarea" 
              name="message"
              placeholder="Message"
              required
              />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </Form.Group>

        <Button 
          variant="btn btn-outline-dark" 
          type="submit" 
          disabled={state.submitting}>
          Submit
        </Button>
      </Form>
  );
}

export default ContactForm;