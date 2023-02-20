import { Link } from "react-router-dom";

const Card = ({ page, results }: any) => {
  let display;

  if (results) {
    display = results.map((x: any) => {
      const { id, image, name, status, location } = x;

      const handleStatus = () => {
        if (status === "Dead") {
          return "bg-red-700";
        }
        if (status === "Alive") {
          return "bg-portal-color";
        }

        return "bg-unknown-color";
      };

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="w-full bg-primary-color border-double border-4 border-portal-color rounded-3xl"
        >
          <div className="flex flex-col justify-between h-full">
            <img className="rounded-t-3xl" src={image} alt="" />
            <div className="text-portal-color px-2">
              <div className="mt-4 mb-4 text-xl">{name}</div>
              <div className="mb-4">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
            <div className={`${handleStatus()} rounded-xl m-2 p-2`}>
              {status}
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No Characters Found";
  }

  return <>{display}</>;
};

export default Card;
