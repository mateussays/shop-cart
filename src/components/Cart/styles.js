import styled from "styled-components";

export const TableContainer= styled.div`
  display: flex;
  max-width: 1250px;
  margin: 48px auto;
`

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;

  tr:nth-child(even) {
    background-color: #FFF;
  }
`

export const TableHead = styled.thead`

  th.first-column {
    width: 800px;
    text-align: left;
  }

  th.last-column {
    width: 100px;
  }
  
`

export const Th = styled.th`
  text-align: center;
  border-bottom: 1px solid #ddd;
  padding: 20px 20px;
  background-color: #FFF;
`

export const Tbody = styled.tbody`

`

export const Td = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 12px;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    

    span {
      margin-left: 10px;
    }

    .remove-btn {
      cursor: pointer;
    }
  }

  div.container-btn {
    justify-content: space-around;
  }
`

export const TdTotal = styled.td`
  padding: 20px 20px;

  span {
    margin-right: 5px;
  }
`