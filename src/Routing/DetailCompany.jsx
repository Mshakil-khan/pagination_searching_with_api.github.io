import React, { useEffect, useState } from "react";
import { FetchCompanyDetails } from "../service/Api";
import { Link } from "react-router-dom";
import { Cheader } from "../components/Cheader";
import { Cbody } from "../components/Cbody";
import { Loading } from "../components/Loading";

export const DetailCompany = () => {
  const [upCommingCapsule, setupCommingCapsule] = useState([]);
  const [spinner, setspinner] = useState(true);

  useEffect(() => {
    const fetchcompany = async () => {
      const res = await FetchCompanyDetails();
      setspinner(false);
      setupCommingCapsule(res);
    };
    fetchcompany();
  }, []);

  return (
    <div className="container">
      {spinner ? (
        <Loading />
      ) : (
        <>
          <Link to="/">
            <button> Home</button>
          </Link>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {upCommingCapsule.map((val, id) => (
              <div
                className="col-lg-4 col-md-4 "
                key={id}
                style={{ display: "table" }}
              >
                <div className="card  " style={{ display: "table-cell" }}>
                  <div className="card-header d-flex justify-content-between">
                    <Cheader val={val} />
                  </div>
                  <div className="card-body">
                    <Cbody val={val} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
