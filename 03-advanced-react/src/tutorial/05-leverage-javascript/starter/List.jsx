import { useEffect, useState } from "react";
import { people } from "../../../data";
import Person from "./Person";

const List = () => {
  const [user, setUser] = useState(people);
  return (
    <div>
      {user.map((person) => {
        return <Person key={person.name} person={person} />;
      })}
    </div>
  );
};

export default List;
