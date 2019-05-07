import React, { Component } from 'react'
import {Consumer} from '../../../context'
import axios from 'axios';

export default class Search extends Component {

state={

  trackTitle:'',
  heading:'Top 10 Tracks',
 // dispatch:action => this.setState(state =>(state ,action)

};

onChange=(e)=>{
this.setState({ [e.target.name] : e.target.value })
}


onSubmit=(dispatch,e)=>{
  e.preventDefault();

axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?
g_track=${this.state.trackTitle}
&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`

)
.then(res=> {
     dispatch({
       type:"SEARCH_TRACKS",
       payload:res.data.message.body.track_list
     })
     }
     ).catch(err => console.log(err));
      
}
  render() {
    return (

        <Consumer>
          {value =>{
            const {dispatch } = value; 
             return(
                <div className="card card-body mb-4 p-4">  
                  <h1 className="display-4 text-center">
                     <i className="fas fa-music"></i>   Search a song 
                  </h1>  
                  <p className="lead text-center"> Get the lyrics for any song </p>
                <form onSubmit={this.onChange.bind(this, dispatch)}>
                     <div className="form-group">
                         <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Song Title"
                          name="trackTitle"
                          value={this.state.trackTitle}
                          onChange={this.onChange}
                         />                  
                         
                <button className="btn btn-primary btn-lg btn-block mb-5 mt-3" type="submit">
                      Get Lyrics
                </button>

                         
                     </div>
                </form>
              

                  <div>

                </div>

               </div>         
           )
          }}                

       </Consumer>   
       
     
    )
  }
}
