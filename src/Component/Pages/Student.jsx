import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AddStudent from "../AddStudent";
import AlertMessage from "../AlertMessage";
import ShowStudents from "../ShowStudents";

const Student = () => {
  const [update, setUpdate] = useState(false);
  const [show, setShow] = useState(false);

  const client = new QueryClient();

  const updateState = () => {
    setUpdate(!update);
    setShow(true);
    console.log("updatgaeeeeeeeee");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [update]);

  return (
    <div
      style={{ display: "flex", flexFlow: "column", alignItems: "center" }}
    >
      {show && <AlertMessage text={"Successfully added"}/>}
      <QueryClientProvider client={client}>
        <AddStudent updateState={updateState} />
        <ShowStudents update={update} />
      </QueryClientProvider>
    </div>
  );
};

export default Student;
