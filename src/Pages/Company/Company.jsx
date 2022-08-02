import { Link, useParams } from "react-router-dom";
import members from "../../components/members";

const Company = () => {
  let params = useParams();

  const member = members.find((mem) => {
    return mem.id === params.id;
  });

  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Company;
