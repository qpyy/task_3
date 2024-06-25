import deleteIcon from "../../assets/icons/deleteIcon.svg";
import { StyledParagraph, StyledIcon, StyledTodo } from "./style";

const Todo = ({ task, toggleComplete, deleteTodo }) => {
  return (
    <StyledTodo>
      <StyledParagraph completed={task.completed} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </StyledParagraph>
      <StyledIcon src={deleteIcon} onClick={() => deleteTodo(task.id)} />
    </StyledTodo>
  );
};

export default Todo;
