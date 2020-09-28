import React, { FC, useState } from "react";
import { robots } from "./robots";
import { CardList } from "./CardList";
import { SearchBox, Props as SearchBoxProps } from "./SearchBox";
import "./App.css";

type Props = {};

const App: FC<Props> = () => {
  const [searchfield, setSeachfield] = useState("");
  const lowerCasedSearchFiled = searchfield.toLowerCase();
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(lowerCasedSearchFiled)
  );

  const onSearchfieldChange: SearchBoxProps["onSearchfieldChange"] = (e) => {
    setSeachfield(e.target.value);
  };

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox onSearchfieldChange={onSearchfieldChange} />
      <CardList cardList={filteredRobots} />
    </div>
  );
};

export default App;
