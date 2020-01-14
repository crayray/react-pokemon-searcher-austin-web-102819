import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {

  state = {
    isFlipped: false
  };

  // flipCard = id => {
   
  //   if (id.isFlipped === true) {
  //     card = 
  //       <Card>
  //         <div onClick={this.flipCard(this.state)}>
  //           <div className="image">
  //             <img alt="oh no!" src={`${this.props.image.front}`} />
  //           </div>
  //           <div className="content">
  //             <div className="header">{this.props.name}</div>
  //           </div>
  //           <div className="extra content">
  //             <span>
  //               <i className="icon heartbeat red" />
  //               <h2>{this.props.id}</h2>
  //             </span>
  //           </div>
  //         </div>
  //       </Card>
      
  //   }else {
  //     card=
  //       <Card>
  //         <div onClick={this.flipCard(this.state)}>
  //           <div className="image">
  //             <img alt="oh no!" src={`${this.props.image.back}`} />
  //           </div>
  //           <div className="content">
  //             <div className="header">{this.props.name}</div>
  //           </div>
  //           <div className="extra content">
  //             <span>
  //               <i className="icon heartbeat red" />
  //               <h2>{this.props.id}</h2>
  //             </span>
  //           </div>
  //         </div>
  //       </Card>

  //   }
  // };

  render() {
    return (
      <Card>
        {/* <div onClick={this.flipCard(this.state)}> */}
        <div>
          <div className="image">
            <img alt="oh no!" src={`${this.props.image.front}`} />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              <h2>{this.props.id}</h2>
            </span>
          </div>
        </div>
      </Card>
      // {card}
    );
  }
}

export default PokemonCard;
