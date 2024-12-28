import React from 'react';
import ReactDOM from 'react-dom/client';
import image from './avatar_1.jpg';
import App from './App';
import Tags_list from './tags'

const root = ReactDOM.createRoot(document.getElementsByClassName("main-page-submain")[0]);


class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popul_tags: ["africa","arbuz","perni","africa","arbuz","perni","africa","arbuz","perni","africa","arbuz","perni"],
      founded: [
        {
          avatar: image,
          user_name: 'user112',
          is_expert: true,
          question: 'Поясніть, будь-ласка, принцип алгоритму бульбашки',
          maintag: 'Дискретна математика',
          like_dis_list: [0,20,10],
          list_emoji: [0,12,15,9,0,0]
        },
        {
          avatar: false,
          user_name: 'user113',
          is_expert: false,
          question: 'Поясніть, будь-ласка, принцип алгоритму Дейстри',
          maintag: 'Дискретна математика',
          like_dis_list: [0,20,10],
          list_emoji: [0,12,0,9,0,0]
        },
        
      ],
    };
    this.give_emoji = (index_f, index_e) => {
      this.setState((prevState) => {
        const updatedFounded = [...prevState.founded]; // Копія масиву
        if(!prevState.founded[index_f].list_emoji[0]){ 
          updatedFounded[index_f].list_emoji[index_e] += 1;
          updatedFounded[index_f].list_emoji[0] = index_e
          }
          else if(index_e !== prevState.founded[index_f].list_emoji[0]){
            updatedFounded[index_f].list_emoji[prevState.founded[index_f].list_emoji[0]] -= 1;
            updatedFounded[index_f].list_emoji[index_e] += 1;
            updatedFounded[index_f].list_emoji[0] = index_e
          }
          else{
            updatedFounded[index_f].list_emoji[index_e] -= 1;
            updatedFounded[index_f].list_emoji[0] = 0;
          }
          console.log(this.state.founded[index_f].list_emoji)
        } 
      );
    };


    this.give_dis_like = (index_f, index_e)=>{
      this.setState((prevState) => {
        const updatedFounded = [...prevState.founded];
        if(!prevState.founded[index_f].like_dis_list[0]){ 
          updatedFounded[index_f].like_dis_list[index_e] += 1;
          updatedFounded[index_f].like_dis_list[0] = index_e
          }
          else if(index_e !== prevState.founded[index_f].like_dis_list[0]){
            updatedFounded[index_f].like_dis_list[prevState.founded[index_f].like_dis_list[0]] -= 1;
            updatedFounded[index_f].like_dis_list[index_e] += 1;
            updatedFounded[index_f].like_dis_list[0] = index_e
          }
          else{
            updatedFounded[index_f].like_dis_list[index_e] -= 1;
            updatedFounded[index_f].like_dis_list[0] = 0;
          }
      });
    }
  }

  

  render() {
    return (<div style={{display:"flex",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      alignSelf: "flex-start",
      backgroundColor:"rgb(244, 236, 224)",
}}>

        <App founded={this.state.founded} onEmoji = {this.give_emoji} onLike = {this.give_dis_like}></App>
        <Tags_list tag_list = {this.state.popul_tags}></Tags_list>
        
      </div>);
  }
}

root.render(
    <Root></Root>
  
);
