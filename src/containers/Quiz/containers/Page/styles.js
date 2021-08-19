import styled from 'styled-components'

export const Main = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  font-size: 24px;
  text-align: left;
  line-height: 30px;
  @media (max-width: 900px){
    font-size: 18px;
    line-height: 20px;
  }
`

export const AnswerBox = styled.div`
  text-align: center;
  line-height: 40px;
`

export const BodyPara = styled.p`
  font-family: arial;
`

export const StyledTable = styled.table`
  margin-top: 30px;
  width: 100%;
  caption-side: top;
  border: none;
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }              */
  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
    text-align: left;
    font-family: arial;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`