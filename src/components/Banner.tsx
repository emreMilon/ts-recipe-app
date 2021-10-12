import React, { FC } from "react";
import { SearchForm } from "./SearchForm";
import "./styles.css";

export const Banner: FC = () => {
  return (
    <div className="container-banner">
      <div className="banner">
        <SearchForm />
      </div>
    </div>
  );
};
