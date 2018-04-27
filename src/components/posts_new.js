import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

  renderTitleField(field){  //field contains event handlers which makes sure Field deals with this text input
    return(
      <div>
        <input
          type="text"
          {...field.input}  //contains pregenerated event handlers ... passes all these as props
        />
      </div>

    );
  }

  render() {
    return (
      <form>
        <Field        //used to describe unique input in form.  Communicates with reduxForm
          name="title"
          component={this.renderTitleField}  //tells Field what to look like when displayed
        />
      </form>
    );
  }
}

export default reduxForm({   //wraps reduxForm around PostsNew
  form: 'PostsNewForm'       //namespace for this specific form component
})(PostsNew);
