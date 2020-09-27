import React, { FC } from "react";
import { CardProps, Card } from "./Card";

type Props = {
  cardList: CardProps[];
};

const CardList: FC<Props> = ({ cardList }) => {
  return (
    <div>
      {cardList.map((cardProps) => (
        <Card key={cardProps.id} {...cardProps} />
      ))}
    </div>
  );
};

export { CardList };
