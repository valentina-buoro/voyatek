import UserCard from "../../components/UserProfile/card";
import React, { useEffect } from "react";
import "../globals.css";
import axios from "axios";

const LandingPage = () => {
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    setError(false);
    setUsers([]);
  try{
    const response: any = await axios.get("https://randomuser.me//api?results=10");
    setUsers(response.data.results);
    if (response.data) {
      setLoading(false);
    }
  }catch(e){
    setLoading(false)
    setError(true)}
  };

  return (
    <div className="">
      <p className="font-bold text-3xl">Random Users</p>
      {loading && <div><p className="font-bold text-4xl text-center mt-14 m">Loading...</p></div>}
      {error && <p className="font-bold text-4xl text-red-900 text-center mt-14 m">Error fetching Profiles</p>}
      
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">

        
    {users && users?.map((profile: any) => (
      <UserCard key={profile.id} user={profile} />
    ))}
    </div>
    </div>
  );
};

export default LandingPage;
