import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .pagination {
    li {
      a {
        color: #5b9c90;
        background-color: #ffffff;
        border: 1px solid #5b9c90;
        margin: 2px;
        padding: 6px 12px;
        

        &:hover {
          color: #ffffff;
          background-color: #5b9c90;
          border-color: #ffffff;
        }
        
        &:focus {
            box-shadow: none; /* 클릭 시 테두리 효과 제거 */
          }
    }
      span {
        background-color: #5b9c90;
        border: none;   
      }
    }
  }
`;