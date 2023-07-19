import React from "react";
import * as S from "./styled";

function step() {

    return (
      <S.Step>
      <S.StepHeader>
        <S.Title>Title</S.Title>
        <S.Subtitle>Subtitle</S.Subtitle>
      </S.StepHeader>
      <S.Body>Body</S.Body>
      <S.StepFooter>
        <S.GoBackButton >Go Back</S.GoBackButton>
        <S.GoNextButton >Next Step</S.GoNextButton>
      </S.StepFooter>
    </S.Step>


    );
  }
  
  export default step;