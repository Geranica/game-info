import { buttonsData } from "./buttons";
import './SelectGenrePanel.scss'
const SelectGenrePanel = () => {
  const buttonsElement = buttonsData.map((item) => {
    return (
      <li className="select-genre-panel__item" key={item.slug}>
        <button>{item.label}</button>
      </li>
    );
  });

  return (
    <div className="select-genre-panel">
      <div className="select-genre-panel__container">
        <ul className="select-genre-panel__list">{buttonsElement}</ul>
      </div>
    </div>
  );
};


export default SelectGenrePanel;