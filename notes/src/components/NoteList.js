import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';

class NoteList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: [],
        newNote: {
          tag: '',
          title: '',
          textBody: '',
        }
      }
    }
  
    componentDidMount() {
      axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response => {
          this.setState({ notes: response.data })
        })
        .catch(error => console.log('It\'s over! Turn back now!'))
  
    }
    
  
    render() {
      return (
        
        <div className='container'>
          <div className="App">
  
            <div className='main-view'>
              <div className='title-cont'>
                <h2>Your Notes: </h2>
              </div>
              <div className="cont-body">
                {this.state.notes.map((note, i) => (
                  <Link to={`/:${i}`}key={i} >
                  <div className="note">
  
                    <div className='note-title'>
                      <h3>{note.title}</h3>
                    </div>
  
                    <div className="note-body">
                      {note.textBody}
                    </div>
                    
                  </div>
                 </Link>
                )
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default NoteList;
  
  