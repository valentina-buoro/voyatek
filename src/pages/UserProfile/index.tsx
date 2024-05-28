import Card from "@/components/UserProfile/card";
import React, { useEffect } from "react";
import "../globals.css";

import axios from "axios";

const LandingPage = () => {
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState(false);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
  try{
    const response: any = await axios.get("https://randomuser.me//api?results=10");
    setUsers(response.data.results);
    console.log(users);
    console.log(response.data.results);
  }catch(e){
    setError(true)}
  };

  return (
    <div className="">
      <p className="font-bold text-3xl">Random Users</p>
      {error && <p className="bg-red-300 font-medium text-center mt-10 p-10">Something went wrong</p>}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">

        
    {users && users?.map((profile: any) => (
      <Card key={profile.id} user={profile} />
    ))}
    </div>
    </div>
  );
};

export default LandingPage;
