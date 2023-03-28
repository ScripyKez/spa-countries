import axios from "axios";
import { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { searchByCountry } from "../config";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(id)).then(res => {
      setCountry(res.data[0]);
    });
  }, [id]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>

      {country && <Info navigate={navigate} {...country} />}
      {id}
    </div>
  );
}
