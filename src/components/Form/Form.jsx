import members from "../members";
import FormContainer from "./style";

const Form = () => {
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();

        const newPosition = {
          id: (parseInt(members[members.length - 1].id) + 1).toString(),
          name: e.target[0].value,
          type: e.target[1].value,
        };
        members.push(newPosition);

        console.log(members);
      }}
    >
      <input type="text" id="nome" placeholder="Nome" />

      <select name="type" id="type">
        <option value="pj">pj</option>
        <option value="pf">pf</option>
      </select>

      <button type="submit">Cadastrar</button>
    </FormContainer>
  );
};

export default Form;
