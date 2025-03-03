import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import "./FilterSelector.css";
import { filterValues } from "../model/recipeData";

type Filter = {
  [key: string]: string;
};

const defaultFilter: Filter = {};
for (const keys in filterValues) {
  defaultFilter[keys] = "";
}

export const FilterSelector = () => {
  const [filter, setFilter] = useState(defaultFilter);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const newFilter: Filter = {};
    for (const keys in filterValues) {
      newFilter[keys] = searchParams.get(keys) || "";
    }
    setFilter(newFilter);
  }, [searchParams]);

  const setSearch = (name: string, value: string) => {
    const oldParam = searchParams.get(name);

    setSearchParams((p) => {
      if (oldParam && oldParam === value) p.delete(name);
      else p.set(name, value);
      return p;
    });
  };

  return Object.keys(filterValues).map((key) => (
    <div className="filter" key={key}>
      <p id="label">{key}:</p>
      {filterValues[key as keyof typeof filterValues].map((v) => (
        <p
          id="option"
          className={filter[key as keyof typeof filter] === v ? "active" : ""}
          onClick={() => setSearch(key, v)}
          key={v}
        >
          {v}
        </p>
      ))}
    </div>
  ));
};
