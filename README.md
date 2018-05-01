# reactblog

### This application allows the user to easily create, read, update, and delete blog posts.

* Posts data is loaded from the api once the PostsIndex component mounts and utilizes redux-promise as middleware before the action hits the reducer to handle the asynchronous network call.

* react-router was used to navigate between routes.  Using Switch, Route, and Link we are able to show pages to the user without loading new HTML, just the new component.  Switch was used to prioritize specific routes so two routes were not loaded at the same time

* :id was used in these routes to provide a specific post to be rendered on the screen

* callbacks were used within React Router and action creators to handle asynchronous network calls.  Components were only rendered once data had been retrieved from the API.

* The lodash library was used to convert data which was stored in an array to convert it into an object for ease of retrieval within the app.

* The app showcases the flow of data from the user input within react which triggers an action creator, which hits middleware, and then flows to a reducer to then change our application state and provide it back to React to show on the screen to the user until they make another input change.

_This project was bootstrapped with the [ReduxSimpleStarter](https://github.com/StephenGrider/ReduxSimpleStarter) package._
