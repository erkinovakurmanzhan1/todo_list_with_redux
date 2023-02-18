import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActions } from "../../store/todoSlice/todoSlice";
import Button from "../../UI/Button";

const TodoItem = ({ text, element }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [newValue, setValue] = useState("");

  const completedHandler = () => {
    dispatch(todoActions.completed(element.id));
  };

  const deleteHandler = () => {
    dispatch(todoActions.delete(element.id));
  };

  const saveInputChange = (event) => {
    setValue(event.target.value);
  };
  const saveButtonHandler = () => {
    dispatch(todoActions.edit({ id: element.id, value: newValue }));
    setEdit(false);
  };

  const editHandler = () => {
    setEdit(true);
    setValue(text);
  };

  return (
    <Container>
      {edit ? (
        <ContainerEdit>
          <InputBox>
            <InputSecond
              type="text"
              onChange={saveInputChange}
              value={newValue}
            />
          </InputBox>

          <ButtonBox>
            <Button color="#135967" onClick={saveButtonHandler}>
              save
            </Button>
          </ButtonBox>
        </ContainerEdit>
      ) : (
        <>
          <Title className={`${element.completed && "todo"}`}>{text}</Title>

          <BoxButton>
            <Button color="#7b9add" onClick={editHandler}>
              <Color>✎</Color>
            </Button>
            <Button color="#7b9add" onClick={completedHandler}>
              <Color>✔️</Color>
            </Button>
            <Button color="#7b9add" onClick={deleteHandler}>
              <Color>✖️</Color>
            </Button>
          </BoxButton>
        </>
      )}
    </Container>
  );
};

export default TodoItem;
const Color = styled.b`
  color: #203544;
  font-size: 2rem;
`;

const ButtonBox = styled.div`
  margin: 1.3rem 0 0 0.5rem;
`;

const ContainerEdit = styled.div`
  display: flex;
`;

const InputBox = styled.div`
  margin: 1.3rem 0 0 0.5rem;
`;

const Container = styled.div`
  width: 620px;
  height: 100px;
  background-color: #7b9add;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
const Title = styled.p`
  padding: 1.8rem 0 0 1rem;
  font-size: 30px;
  color: #0a0a70;

  &.todo {
    text-decoration: line-through;
    opacity: 0.5;
  }
`;
const BoxButton = styled.div`
  display: flex;
  gap: 15px;
  margin: 0.7rem 0.5rem 0 0;
`;
const InputSecond = styled.input`
  color: #1a1a8d;
  font-size: 29px;
  width: 400px;
  padding: 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #7b9add;
  background-color: #7b9add;
`;
