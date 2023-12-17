import React from 'react'
import User from './User';

const App = () => {
  const data = [
    {
      Name: "Prasanna Kumar",
      Email: "kumar22maran@gmail.com",
      Favourite: "Python",
    },
    {
      Name: "Ranvijay Singh",
      Email: "ranalphamale23982@gmail.com",
      Favourite: "Java",
    },
    {
      Name: "Leo Das",
      Email: "leodas13577@gmail.com",
      Favourite: "Javascript",
    },
  ];

  return (
    <div>
      {data.map((user, index) => {
        return (
          <User
            key={index}
            name={user.Name}
            email={user.Email}
            favourite={user.Favourite}
          ></User>
        );
      })}
    </div>
  );
}



export default App