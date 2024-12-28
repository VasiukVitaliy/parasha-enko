import React, {useRef} from "react";

import { VscSettings } from "react-icons/vsc";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";




class User extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isVisible: false,
      scrollPos : 0,
      showLeftArrow: false,
      showRightArrow: true,
    }
    this.list_like = ['👍','👎']
    this.list_emo = ['😄','😭','🤯','😍','🤦‍♂️']

    this.emoRef = React.createRef(null)

    this.interact_window = ()=>{
      return <div className="interact_emo_window">
         
        <div className="outer_interact" >
        {this.state.showLeftArrow && (<MdArrowBackIosNew />)}

        <div className = "in_interact" ref = {this.emoRef} onScroll = {this.handleScroll}>
       

          {this.list_emo.map((el,index)=>(
            <span key={index+ 1} onClick={() => {this.props.onEmoji(this.props.id, index + 1);this.setState({isVisible: !this.state.isVisible})}}>{el}</span>
          ))}

        
        </div>
        {this.state.showRightArrow && (<MdArrowForwardIos />)}
        </div>
        
      </div>
    }

    this.handleScroll = () => {
      const emoWindow = this.emoRef.current;
      if (emoWindow) {
        this.setState({
          showLeftArrow: emoWindow.scrollLeft > 10,
          showRightArrow: emoWindow.clientWidth - emoWindow.scrollLeft - 100 > 10,
        });
        
      }
    }
    
    this.click_emoji = ()=>{
      this.setState({isVisible: !this.state.isVisible})
    }
  }
  
    render(){
        return (
          <div id= "card">
            <div className="theme_out">
              <div className="theme_in">
                <div className="user_header">
                {this.props.user.avatar ? <img src = {this.props.user.avatar}></img> : <FaUserCircle size={50} style={{ margin: "20px"}}/>}
                
                <h4>{this.props.user.user_name}</h4>
                {this.props.user.is_expert ? <IoIosCheckmarkCircleOutline size={30}/> : ''}
                </div>

                <p>{this.props.user.question}</p>
                <small>@{this.props.user.maintag}</small>
              </div>
              <div className="icons_menu">
                <div className="disanlike">
                  {this.list_like.map((el, index)=>
                    (<button key = {index} onClick = {()=>{this.props.onLike(this.props.id,index + 1);this.setState(this.state)}}
                    style = {this.props.user.like_dis_list[0] === index + 1 ?{ backgroundColor: "rgb(255, 230, 169)"}: undefined}>{el}{this.props.user.like_dis_list[index + 1] === 0 ? '' : this.props.user.like_dis_list[index + 1]}</button>)
                  )}
                  {this.list_emo.map((el, index) => {
                if (this.props.user.list_emoji[index + 1] === 0) {
                  return null; // Or return an empty string as you did before
                } else {
                  return (
                    <button
                      key={index + 1}
                      onClick={() => {
                        this.props.onEmoji(this.props.id, index + 1);
                        this.setState(this.state);
                      }}
                      style={
                        this.props.user.list_emoji[0] === index + 1
                          ? { backgroundColor: "rgb(255, 230, 169)" }
                          : undefined
                      }
                    >
                      {el}
                      {this.props.user.list_emoji[index + 1]}
                    </button>
                  );
  }
})}

                  
                </div>

                <div className="chat_settings">
                  <IoChatboxEllipsesOutline size = {33.33}/>
                  <span onClick = {()=>{this.click_emoji(); this.props.close_onsame(this.props.id)}}>😀</span>
                  <VscSettings size = {33.33}/>
                  
                </div>
              
              </div>
              
            </div>
            {this.state.isVisible ? this.interact_window() : ''}
            </div>
            
          )
    }
}

export default User