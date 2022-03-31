import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../components/MainLayout";
import Starwars from "../../components/Starwars";
import LoadStatus from "../../store/loadStatus";
import { fetchPeople } from "../../store/reducers/starwarsReduser/actionsCreators";
import { selectStarwars } from "../../store/reducers/starwarsReduser/selectors";

const StarWarsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { error, loadStatus, starwarsResponse } = useSelector(selectStarwars);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  const isLoading = loadStatus === LoadStatus.loading;
  const isLoaded = loadStatus === LoadStatus.loadSuccess;
  const isError = loadStatus === LoadStatus.error;
  return (
    <MainLayout>
      <h1>Star wars people</h1>
      {isLoading && "Loading..."}
      {isError && error}
      {isLoaded && <Starwars list={starwarsResponse.results} />}
      <p>Used React 18. Look to index.tsx in the root src</p>
    </MainLayout>
  );
};

export default StarWarsPage;
