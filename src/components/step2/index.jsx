import React from "react";
import Step from "../step";

import * as S from "./styled";

function step2(props) {

    return (
      <Step {...props}>
        <S.Step2>
        {error && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.RadioGroup>
          {step2[billingType].map((item) => (
            <S.RadioLabel 
              key={item.id} 
              isSelected={item.id === plan?.id}
            >
              <S.RadioInput
                name="plan-type"
                type="radio"
                onChange={() => changePlan(item)}
              />
              <S.Icon src={Icons[item.id]} />
              <S.Title>{item.title}</S.Title>
              <S.Subtitle>{item.price}</S.Subtitle>
              {billingType === "yearly" && (
                <S.Description>{item.description}</S.Description>
              )}
            </S.RadioLabel>
          ))}
        </S.RadioGroup>
        <S.BillingArea>
          <S.BillingText isChecked={billingType === MONTHLY}>
            {MONTHLY}
          </S.BillingText>
          <S.BillingLabel>
            <S.InputCheck onChange={handleCheck} type="checkbox" />
            <S.Checkbox>
              <S.CheckButton isChecked={billingType === YEARLY}></S.CheckButton>
            </S.Checkbox>
          </S.BillingLabel>
          <S.BillingText isChecked={billingType === YEARLY}>
            {YEARLY}
          </S.BillingText>
        </S.BillingArea>
      </S.Step2>
        
      </Step>
    );
  }
  
  export default step2;