import styled from 'styled-components';

export const Table = styled.table`
  width: 700px;
  margin: 20px auto;

  thead {
    background-color: #77c3ec;
  }

  thead th {
    padding: 15px;
    color: white;
  }

  td {
    padding: 12px 0;
    text-align: center;
    color: #545454;
  }

  tbody tr:nth-child(odd) {
    background-color: #ffffff;
  }

  tbody tr:nth-child(even) {
    background-color: #d5e0e7;
  }
`;
