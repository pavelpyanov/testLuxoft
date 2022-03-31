import React from "react";
import { IStarwarsPerson } from "../../store/reducers/starwarsReduser/types";
import * as S from "./styles";

interface IModal {
  person: IStarwarsPerson;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<IModal> = ({ person, open, onClose }) => {
  return (
    <>
      <S.OverLay open={open} onClick={onClose} />

      <S.Modal open={open} data-testid="modal">
        <S.Close onClick={onClose}>Close</S.Close>
        <S.Item>
          <span>Name: </span>
          <span>{person.name}</span>
        </S.Item>
        <S.Item>
          <span>Birth year: </span>
          <span>{person.birth_year}</span>
        </S.Item>
        <S.Item>
          <span>Gender: </span>
          <span>{person.gender}</span>
        </S.Item>
        <S.Item>
          <span>Hair color: </span>
          <span>{person.hair_color}</span>
        </S.Item>
        <S.Item>
          <span>Height: </span>
          <span>{person.height}</span>
        </S.Item>
      </S.Modal>
    </>
  );
};

export default Modal;
