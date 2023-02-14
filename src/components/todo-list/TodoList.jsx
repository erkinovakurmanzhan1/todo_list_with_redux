import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActionTypes } from "../../store/todoReducer/todoReducer";
import Button from "../../UI/Button";
import Header from "../header/Header";
import Todo from "./Todo";

const TodoList = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const enebled = text.trim().length > 0;
  const inputChangeHandler = (event) => {
    setText(event.target.value);
  };

  const addHandler = () => {
    dispatch({
      type: todoActionTypes.ADD,
      payload: text,
    });

    setText("");
  };

  const allDeleteHandler = () => {
    dispatch({
      type: todoActionTypes.DELETE_ALL,
      payload: [],
    });
  };
  return (
    <>
      <Header />
      
      <Container>
        <div>
          <Input
            value={text}
            type="text"
            placeholder="write your plan"
            onChange={inputChangeHandler}
          />
        </div>

        <BtnContainer>
          <AddButton disabled={!enebled} onClick={addHandler}>
            Add
          </AddButton>
          <Button color='#176777' onClick={allDeleteHandler}>All delete</Button>
        </BtnContainer>
      </Container>

      <Todo />
    </>
  );
};

export default TodoList;

const AddButton = styled.button`
  background-color: #176777;
  color: white;
  border-radius: 5px;
  font-size: 24px;
  padding: 15px;
  border: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: .5rem;
`;
const Input = styled.input`
  color: #0a0a70;

  font-size: 26px;
  width: 400px;
  padding: 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid grey;
`;
