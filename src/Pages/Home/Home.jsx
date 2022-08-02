import { Link } from "react-router-dom";

const Home = ({ members }) => {
  return members.map((member, index) => {
    return (
      <li id={index}>
        <Link
          id={index + 1}
          to={`/${member.type === "pj" ? "company" : "Usuarios"}/${member.id}`}
        >
          {member.name}
        </Link>
      </li>
    );
  });
};

export default Home;
