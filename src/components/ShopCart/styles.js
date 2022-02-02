import styled from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 20px;
  margin: 48px auto 0;
  width: 250px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  background-color: #FFF;
`;

export const CardHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
`;

export const CardImageContainer = styled.div`
  border-bottom: 1px solid #CCC;
  padding-bottom: 15px;
`

export const TitleCard = styled.h3`
  color: #BA4D85;
  text-align: center;
`

export const DescriptionCard = styled.p`
  color: #848484;
  font-size: 14px;
`

export const SubcontainerCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .price {
    display: flex;
  }

  .price p {
    margin-left: 10px;
    color: #848484;
    font-size: 14px;
    text-decoration: line-through;
  }

`

export const Button = styled.button`
  padding: 5px;
  background-color: ${props => props.primary ? '#FFF' : '#BA4D85'};
  color: ${props => props.primary ? '#006400' : '#FFF'};
  border-radius: 5px;
  border: none;
  cursor: pointer;
`