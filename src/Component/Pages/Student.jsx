import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AddStudent from "../AddStudent";
import ShowStudents from "../ShowStudents";

const Student = () => {
  const [update, setUpdate] = useState(true);
  const client = new QueryClient();

  const updateState = () => {
    setUpdate(!update);
  };

  return (
    <QueryClientProvider client={client}>
      <AddStudent updateState={updateState} />
      <ShowStudents update={update}/>
    </QueryClientProvider>
  );
};

export default Student;
