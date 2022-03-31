import React, { useState } from "react";
import { IStarwarsPerson } from "../../store/reducers/starwarsReduser/types";
import Modal from "../Modal";

import * as S from "./styles";

interface IStarwars {
  list: IStarwarsPerson[];
}

const Starwars: React.FC<IStarwars> = ({ list }) => {
  const [open, setIsOpen] = useState(false);
  const [currentPerson, setCurrentPerson] = useState<IStarwarsPerson>(
    {} as IStarwarsPerson
  );

  const clickHandler = (person: IStarwarsPerson) => {
    setCurrentPerson(person);
    setIsOpen(true);
  };

  return (
    <>
      <ul data-testid="star-wars">
        {list.map((item) => (
          <S.ListItem key={item.name} data-testid="star-wars-element">
            <S.PersonName>{item.name}</S.PersonName>
            <button onClick={() => clickHandler(item)}>More info</button>
          </S.ListItem>
        ))}
      </ul>
      <Modal
        open={open}
        person={currentPerson}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Starwars;
