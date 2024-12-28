import React from "react";
import User from "./User"
import "./App.css"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {founded: this.props.founded,
      click: 0
    }
    ;
    
    this.on_click_emo = (index_card) => {
      this.setState((prevState) => ({
        ...prevState,
        click: index_card, // Оновлюємо властивість "click"
      }));
    
      console.log(index_card);
    };
  }

  render(){
    return (<div className="theme_list">
      <div class="top_button">
        <button class="add-topic-button">
          + Додати тему
        </button>
        <button class="dropdown-button">
          Найновіші <span class="arrow">▼</span>
        </button>
      </div>
      {this.state.founded.map((el, index)=><User close_onsame = {this.on_click_emo} onEmoji = {this.props.onEmoji} onLike = {this.props.onLike} key={index} id = {index} user = {el}></User>)}
    </div>)
  }
}
export default App;
