import { Link, useParams } from "react-router-dom";

const Usuarios = ({ members }) => {
  let params = useParams();

  const member = members.find((mem) => {
    return mem.id === params.id;
  });

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Usuarios;
