import React from 'react';
import firebase from './Firebase';

class Attendees extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
            displayAttendees: []
        }
    }
    render() {
        return(
            <div className="container mt-4">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <h1 className="font-weight-light text-center">
        Attendees
      </h1>
    </div>
  </div>
  List Goes Here
</div>
        )
    }
}

export default Attendees;