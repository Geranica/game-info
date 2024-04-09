import { useGetDeveloperQuery } from "../../../api/apiSlice";
import { useParams } from "react-router-dom";

import "./DeveloperPage.scss";

const DeveloperPage = () => {
  const { developerId } = useParams();
  const { data: developerData } = useGetDeveloperQuery(developerId);
  console.log(developerData);

  return (
    <section className="developer-page">
      <div className="developer-page__container container">
        <h2 className="developer-page__name">{developerData?.name}</h2>
        <div className="developer-page__main-content">
          <div
            dangerouslySetInnerHTML={{
              __html: developerData?.description
                ? developerData.description
                : "No description",
            }}
            className="developer-page__description"
          ></div>
          <div className="developer-page__image">
            <img src={developerData?.image_background} alt="" />
          </div>
        </div>
        <h3 className="developer-page__games-list-title">{`Games developed by ${developerData?.name}:`}</h3>
      </div>
    </section>
  );
};

export default DeveloperPage;
