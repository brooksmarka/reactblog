import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost} from '../actions';

class PostsNew extends Component {

  renderField(field){    //field contains event handlers which makes sure Field deals with this text input

    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : ''}`;
    return(
      <div className={className}>
        <label> {field.label} </label>
        <input
          className="form-control"
          type="text"
          {...field.input}                //contains pregenerated event handlers ... passes all these as props
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    this.props.createPost(values, () => {     //createPost action creator takes two arguments, values and callback
      this.props.history.push('/');           //this callback navigates back to '/'
    });
  }

  render() {
    const { handleSubmit } = this.props;  //handleSubmit is a method from reduxForm
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field                           //used to describe unique input in form.  Communicates with reduxForm
          label="Title"
          name="title"
          component={this.renderField}   //tells Field what to look like when displayed
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-success">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
  //console.log(values) -> {title: 'asdf', categories: 'asdf', content: 'asdf'}

  const errors = {};
  //Validate the inputs from 'values'
  //properties must match the 'name' property in <Field /> for validation to work
  if(!values.title){
    errors.title = "Please enter a title!";
  }
  if(!values.categories){
    errors.categories = "Please enter a category!";
  }
  if(!values.content){
    errors.content = "Please enter some content!";
  }
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid

  return errors;
}

export default reduxForm({              //wraps reduxForm around PostsNew
  validate,
  form: 'PostsNewForm'                  //namespace for this specific form component
})(
  connect(null,{ createPost }) (PostsNew)
);
