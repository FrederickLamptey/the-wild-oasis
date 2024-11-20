import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === 'horizontal' &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === 'vertical' &&
    css`
    flex-direction: column;
    gap: 1.6rem;
    `}
`;

//You can have a default props defined in the following way:

Row.defaultProps = {
    type: "vertical",
}

//So in this case, we can choose not to explicitly provide props for the Row component in the App component if we want it to be vertical.

export default Row;
