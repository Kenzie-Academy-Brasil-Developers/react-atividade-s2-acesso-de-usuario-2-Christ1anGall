import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";

const Home = ({ members }) => {
  return (
    <div>
      {members.map((member, index) => {
        return (
          <li id={index}>
            <Link
              id={index + 1}
              to={`/${member.type === "pj" ? "company" : "Usuarios"}/${
                member.id
              }`}
            >
              {member.name}
            </Link>
          </li>
        );
      })}

      <Form />
    </div>
  );
};

export default Home;
