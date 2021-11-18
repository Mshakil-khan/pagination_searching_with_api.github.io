import React, { useEffect, useMemo, useState } from "react";
import { Fetchdata } from "../service/Api";
import { Paginationn } from "./Paginationn";
import { Search } from "./Search";
import { Cbody } from "./Cbody";
import { Cheader } from "./Cheader";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";

export const Main = () => {
  const [dataValue, setdataValue] = useState([]);
  const [totalValue, settotalValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 3;
  const [spinner, setspinner] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await Fetchdata();
      setspinner(false);
      setdataValue(res);
    };

    getData();
  }, []);

  const memoData = useMemo(() => {
    let dataValueMemo = dataValue;
    if (search) {
      dataValueMemo = dataValueMemo.filter((val) =>
        Object.values(val)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }
    settotalValue(dataValueMemo.length);

    return dataValueMemo.slice(
      (currentPage - 1) * itemsPerPage,
      (currentPage - 1) * itemsPerPage + itemsPerPage
    );
  }, [dataValue, currentPage, search]);

  return (
    <div className="container">
      {/* for Loading */}
      {spinner ? (
        <Loading />
      ) : (
        <>
          {" "}
          <Link to="/details">
            <button>Check Upcomming launch</button>
          </Link>
          <div
            className="row "
            style={{
              padding: "20px 0px 10px 10px",
            }}
          >
            <div className="col-md-6 pagi">
              {/* for Pagination */}
              <Paginationn
                totalValue={totalValue}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onChangeValue={(page) => setCurrentPage(page)}
              />
            </div>
            <div className="col-md-6  ">
              {/* for Searching */}
              <Search
                onSearchValue={(val) => {
                  setSearch(val);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
          <div className="row">
            {/* for display data */}
            {memoData.map((val, id) => (
              <div
                className="col-lg-4 col-md-4"
                style={{ display: "table" }}
                key={id}
              >
                <div className="card mb-3 " style={{ display: "table-cell" }}>
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
