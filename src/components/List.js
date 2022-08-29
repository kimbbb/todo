import React from "react";
import styled from 'styled-components';
import Item from "./Item.js";
import '../style/list.css'
 
const TodoList = styled.div`
    position: relative;
    top: 6%;
    width: 90%;
    height: 64%;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 16px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #004DA7B2;
      border-radius: 10px;
      background-clip: padding-box;
    }
    ::-webkit-scrollbar-track {
      background-color: #EFF2F9;
      border-radius: 10px;
    }
`;



function List() {
  return(
    <>
    <TodoList>
      <Item text="메롱" done={true}/>
      <Item text="커밋" done={false}/>
      <Item text="커밋" done={false}/>
      <Item text="커밋" done={false}/>
      <Item text="커밋" done={false}/>
      <Item text="커밋" done={false}/>
      <Item text="커밋" done={false}/>
      <Item text="야!" done={true}/>
      <Item text="야!" done={true}/>
      <Item text="야!" done={true}/>
    </TodoList>
    </>
  )
}

export default List;