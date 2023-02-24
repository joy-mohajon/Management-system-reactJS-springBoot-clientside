import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AddStudent from "../AddStudent";

const Student = () => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <AddStudent />
    </QueryClientProvider>
  );
};

export default Student;
