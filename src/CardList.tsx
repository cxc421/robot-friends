import React, { FC } from "react";
import { Props as CardProps, Card } from "./Card";

export type Props = {
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
