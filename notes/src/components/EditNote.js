import React, { Component } from "react";
import axios from "axios";

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            title: "",
            textBody: "",
            note: []
      
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.getNote(id);
      }


    getNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => this.setState({ note: response.data }))
            .catch(response=> console.log(response));
        }

     changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
          };
        






    submitNote = event => {
        this.props.editNote(event, this.state.note._id, this.state);
        this.setState({ title: "", textBody: "" })
        this.props.history.push("/")
        }

        
        
    render() {
          
        return (
                <div className="new-note-container">
            <div className="notes-header">
              <h3>Create New Note:</h3>
            </div>
            <form onSubmit={this.submitNote}>
              <input
                className="form-note-title"
                name="title"
                value={this.state.title}
                onChange={this.changeHandler}
                type="text"
                placeholder="Note Title"
                />
              <textarea
                className="form-note-content"
                name="textBody"
                value={this.state.textBody}
                onChange={this.changeHandler}
                type="text"
                placeholder="Note Content"
                />
    
              <button className="form-button">Save</button>
            </form>
          </div>
        );
    }
    }
    
 
export default EditNote;