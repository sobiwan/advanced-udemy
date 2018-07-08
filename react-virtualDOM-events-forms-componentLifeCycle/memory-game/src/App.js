import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import Box from './box';
import Navbar from './navbar';
import './App.css';

const BoxState = {
  HIDING: 0, 
  SHOWING: 1,
  MATCHING: 2
}

class App extends Component {

  constructor(props) {
    super(props);
    let boxes = [
      {id: 0, boxState: BoxState.HIDING, backgroundColor: 'red'},
      {id: 1, boxState: BoxState.HIDING, backgroundColor: 'red'},
      {id: 2, boxState: BoxState.HIDING, backgroundColor: 'blue'},
      {id: 3, boxState: BoxState.HIDING, backgroundColor: 'blue'},
      {id: 4, boxState: BoxState.HIDING, backgroundColor: 'green'},
      {id: 5, boxState: BoxState.HIDING, backgroundColor: 'green'},
      {id: 6, boxState: BoxState.HIDING, backgroundColor: 'yellow'},
      {id: 7, boxState: BoxState.HIDING, backgroundColor: 'yellow'},
      {id: 8, boxState: BoxState.HIDING, backgroundColor: 'purple'},
      {id: 9, boxState: BoxState.HIDING, backgroundColor: 'purple'},
      {id: 10, boxState: BoxState.HIDING, backgroundColor: 'orange'},
      {id: 11, boxState: BoxState.HIDING, backgroundColor: 'orange'},
      {id: 12, boxState: BoxState.HIDING, backgroundColor: 'pink'},
      {id: 13, boxState: BoxState.HIDING, backgroundColor: 'pink'},
      {id: 14, boxState: BoxState.HIDING, backgroundColor: 'black'},
      {id: 15, boxState: BoxState.HIDING, backgroundColor: 'black'},
    ];
    boxes = shuffle(boxes);
    this.state = {boxes, noClick: false};
  
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleClick(id){
    console.log(id);
    const mapBoxState = (boxes, idsToChange, newBoxState) =>{
      return boxes.map(b => {
        if (idsToChange.includes(b.id)){
          return {
            ...b,
            boxState: newBoxState
          };
        }
        return b;
      });
    }

    //Box that was just clicked on
    const foundBox = this.state.boxes.find(b => b.id === id);

    //checking if box is not hiding, then do nothing. or if no Click is true
    if (this.state.noClick || foundBox.boxState !== BoxState.HIDING) {
      return;
    }

    let noClick = false;

    //use Map Box to turn Box to showing
    let boxes = mapBoxState(this.state.boxes, [id], BoxState.SHOWING);
    //filter to only get showing boxes back
    const showingBoxes = boxes.filter((b)=> b.boxState === BoxState.SHOWING);
    //get id of showing boxes
    const ids = showingBoxes.map(b => b.id);
    //check if two boxes are showing and if their colors match
    //if they don't match then Hide them again. 
    if (showingBoxes.length === 2 &&
        showingBoxes[0].backgroundColor === showingBoxes[1].backgroundColor) {
          boxes = mapBoxState(boxes, ids, BoxState.MATCHING);
        } else if (showingBoxes.length === 2) {
          let hidingBoxes = mapBoxState(boxes, ids, BoxState.HIDING);
          //don't allow to click while it checks if matching
          noClick = true;

          this.setState({boxes, noClick}, ()=> {
            setTimeout(()=> {
              // set the state of the boxes to HIDING afetr 1.3 seconds
              this.setState({boxes: hidingBoxes, noClick: false});
            }, 1300);
          })
          return;
        }
        
        this.setState({boxes, noClick});
  }

  handleNewGame(){
    let boxes = this.state.boxes.map(b =>({
        ...b, 
        boxState: BoxState.HIDING
      }));
      boxes = shuffle(boxes);
      this.setState({boxes});
  }

  render() {
    const boxes = this.state.boxes.map((box)=>{
      return (
      <Box 
        key ={box.id}
        backgroundColor={box.backgroundColor}
        showing={box.boxState !== BoxState.HIDING}
        onClick={()=>this.handleClick(box.id)}
      />
    )}
  );

    return (
      <div className="App">
        <Navbar onNewGame={this.handleNewGame.bind(this)}/>
        {boxes}
      </div>
    );
  }
}

export default App;
