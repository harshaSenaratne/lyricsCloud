import React, { Component } from 'react'
import {Consumer} from '../../../context'
import Spinner from '../Spinner/Spinner';
import Card from './Card';
class Tracks extends Component {
 
  render() {
    return (
      <Consumer>
        
         {value =>{
             const {trackList,heading } = value;
             console.log('what is inside the heading ',heading);
             if(trackList === undefined || trackList.length === 0){
              return <Spinner/>;
             }
             else{
               return (
                <React.Fragment>
                  <h3 className='text-center  mb-4'>{heading}</h3>
                 <div className="row">
                   {trackList.map(item=>(
                <Card key={item.track.track_id} track={item.track}/>
                   )
                   )
                   }
                 </div>
              </React.Fragment> 
              );
             }
          }

          }
      </Consumer>
    );
  }
}

export default Tracks;