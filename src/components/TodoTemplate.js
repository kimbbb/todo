import styled from 'styled-components';

const Todo = styled.div`
  width: 500px;
  height: 700px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`

function TodoTemplate({children}) {
  return(
    <Todo>{children}</Todo>
  )
}

export default TodoTemplate;