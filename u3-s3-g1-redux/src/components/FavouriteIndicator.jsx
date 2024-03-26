import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { FaHeart } from "react-icons/fa";

import { useSelector } from "react-redux";

const FavLink = () => {
  const favLinkLength = useSelector((state) => state.favourites.length);
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-end my-4">
      <Button onClick={() => navigate("/Favourite")} className="d-flex align-items-center">
        <FaHeart />
        <span className="ms-2">{favLinkLength}</span>
      </Button>
    </div>
  );
};

export default FavLink;
