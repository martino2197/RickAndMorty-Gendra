import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/Hooks/useFetch";
import { ResultsApi } from "../utils/types";

const CharacterDetails = () => {
  const { id } = useParams();

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  const {
    data: fetchedData,
    loading,
    error,
  }: {
    data: ResultsApi;
    loading: boolean | null;
    error: string | null;
  } = useFetch(api);

  const handleStatus = () => {
    if (fetchedData.status === "Dead") {
      return "bg-red-700";
    }
    if (fetchedData.status === "Alive") {
      return "bg-portal-color";
    }

    return "bg-unknown-color";
  };

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {fetchedData && (
            <div className="flex justify-center mb-5">
              <div className="flex-col flex md:flex-row bg-primary-color gap-6 rounded-3xl p-10 border-double border-4 border-portal-color">
                <img
                  className="img-fluid rounded-3xl"
                  src={fetchedData.image}
                  alt=""
                />
                <div className="flex flex-col justify-between gap-6 text-primary-color">
                  <div className="flex flex-col items-start bg-portal-color rounded-3xl p-8">
                    <h1 className="text-4xl">{fetchedData.name}</h1>
                    <div className="">
                      <span className="fw-bold">
                        Gender: {fetchedData.gender}
                      </span>
                    </div>
                    <div className="">
                      <span className="fw-bold">
                        Location: {fetchedData.location?.name}
                      </span>
                    </div>
                    <div className="">
                      <span className="fw-bold">
                        Origin: {fetchedData.origin?.name}
                      </span>
                    </div>
                    <div className="">
                      <span className="fw-bold">
                        Species: {fetchedData.species}
                      </span>
                    </div>
                  </div>
                  <div className={`${handleStatus()} rounded-3xl p-4`}>
                    <div className="badge bg-secondary fs-5">
                      {fetchedData.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CharacterDetails;
