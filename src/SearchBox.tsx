import React, { FC } from "react";

export type Props = {
  onSearchfieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox: FC<Props> = ({ onSearchfieldChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={onSearchfieldChange}
      />
    </div>
  );
};

export { SearchBox };
