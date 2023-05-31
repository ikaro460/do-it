import { Redirect } from "react-router-dom/cjs/react-router-dom";

export const Dashboard = ({ authenticated }) => {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return <div>Dashboard</div>;
};
