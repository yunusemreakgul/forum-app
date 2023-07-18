import React from "react";

import * as S from "./styled";
import { Items } from "./constants.js";

function Sidebar() {
    return (
      <S.Sidebar>
        {Items.map((item) => (
        <S.Item key={item.id}>
          <S.ItemNumber>{item.number} </S.ItemNumber>
          <S.ItemBody>
            <S.SubTitle> {item.subtitle} </S.SubTitle>
            <S.Title> {item.title} </S.Title>
          </S.ItemBody>
        </S.Item>
        ))}        
      </S.Sidebar>



    );
  }
  
  export default Sidebar;
  