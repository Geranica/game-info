import { useGetDevelopersQuery } from "../../../api/apiSlice";

import DeveloperCard from "../../DeveloperCard/DeveloperCard";

import "./DevelopersPage.scss";

const DevelopersPage = () => {
  const { data } = useGetDevelopersQuery({ page: 1 });
  const developersData = data?.developers;
  const developersItems = developersData?.map((item) => {
    return (
      <li key={item.id} className="developers-page__developer-card">
        <DeveloperCard
          name={item.name}
          background={item.image_background}
          gamesCount={item.games_count}
        />
      </li>
    );
  });

  return (
    <section className="developers-page">
      <div className="developers-page__container container">
        <ul className="developers-page__list">{developersItems}</ul>
      </div>
    </section>
  );
};

export default DevelopersPage;
