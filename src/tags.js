import React from "react";
import "./tags.css"

class Tags_list extends React.Component{
    render(){
        return (
            <div class = "tags_list">
                <h6 style={{margin: "5px", fontSize:"18px"}}>Популярні теги</h6>
{this.props.tag_list.map((el, index) =>
  index < 5 ? (
    <h5 key={index} style={{margin: "15px", fontSize:"24px"}}>@{el}</h5>
  ) : null // Повертаємо null, якщо умова не виконується
)}
            </div>
        )
    }
}

export default Tags_list