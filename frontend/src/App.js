
import { useQuery } from '@apollo/client';
import {Get,Get_User} from './queries.js'
import React,{ useState ,useEffect} from 'react';

function App() {  
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);

  const {loading,error,data}=useQuery(Get);
  const { loading: userLoading, error: userError, data1 } = useQuery(Get_User, {variables: { id: userId },    
    skip: !userId,
    onCompleted: (data) => {
      setUser(data?.userfromid);
    },
  });

  const handleInputChange = (event) => { 
    setUserId(event.target.value);
  };

  useEffect(() => {
    console.log('user',user)
  },[user])


  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error.message}</p>;
  if (userLoading) return <p>Loading...</p>; 
  if (userError) return <p>Error: {userError.message}</p>;
  

  return (
    <div>
      <center><h1>Hello</h1></center>
      <div>
        <h2>User List</h2>
        <ul>
          {data?.users?.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}          
        </ul>

        <h2>Find User by ID</h2>
        <input type="text" value={userId} onChange={handleInputChange} placeholder="Enter User ID" />
        <button onClick={() => {if (!userId) return;}}>Search</button>
        {user && (
          <div>
            <h3>User Details</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default App;
