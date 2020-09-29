import React, { FC, useState, useEffect } from "react";
import { CardList, Props as CardListProps } from "./CardList";
import { SearchBox, Props as SearchBoxProps } from "./SearchBox";
import "./App.css";

type CardList = CardListProps["cardList"];

type Props = {};

const App: FC<Props> = () => {
  const [cardList, setCardList] = useState<CardList>([]);
  const [searchfield, setSeachfield] = useState("");
  const lowerCasedSearchFiled = searchfield.toLowerCase();
  const filteredCardList = cardList.filter((robot) =>
    robot.name.toLowerCase().includes(lowerCasedSearchFiled)
  );

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((userList: CardList) =>
        setCardList(
          userList.map((user) => ({
            id: user.id,
            email: user.email,
            name: user.name,
          }))
        )
      );
  }, []);

  const onSearchfieldChange: SearchBoxProps["onSearchfieldChange"] = (e) => {
    setSeachfield(e.target.value);
  };

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox onSearchfieldChange={onSearchfieldChange} />
      <CardList cardList={filteredCardList} />
    </div>
  );
};

export default App;
