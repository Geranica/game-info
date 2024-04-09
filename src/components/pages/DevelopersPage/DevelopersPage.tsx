import { useSelector, useDispatch } from "react-redux";
import { selectPage } from "../../../slices/developersSlice";

import { setContent } from "../../../utils/setContent";

import { useGetDevelopersQuery } from "../../../api/apiSlice";
import useInfiniteScroll from "../../../hooks/infiniteScroll";
import { nextPage } from "../../../slices/developersSlice";

import DeveloperCard from "../../DeveloperCard/DeveloperCard";
import Spinner from "../../Spinner/Spinner";

import "./DevelopersPage.scss";

const DevelopersPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const { data, isSuccess, isFetching } = useGetDevelopersQuery({
    page: currentPage,
  });
  const increasePage = () => {
    dispatch(nextPage());
  };
  const { targetElement } = useInfiniteScroll(increasePage);

  const developersData = data?.developers;
  const developersItems = developersData?.map((item, index) => {
    return (
      <li
        ref={index === developersData.length - 1 ? targetElement : null}
        key={item.id}
        className="developers-page__developer-card"
      >
        <DeveloperCard
          name={item.name}
          background={item.image_background}
          gamesCount={item.games_count}
          id={item.id}
        />
      </li>
    );
  });

  const contentDataObject = {
    isSuccess,
    isSuccessContent: (
      <ul className="developers-page__list">{developersItems}</ul>
    ),
    isFetching,
    isFetchingContent: (
      <>
        <ul className="developers-page__list">{developersItems}</ul>
        <Spinner />
      </>
    ),
  };

  return (
    <section className="developers-page">
      <div className="developers-page__container container">
        <h2 className="developers-page__title">Developers</h2>
        {setContent(contentDataObject)}
      </div>
    </section>
  );
};

export default DevelopersPage;
