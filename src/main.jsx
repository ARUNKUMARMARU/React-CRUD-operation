import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const user = [
    {
        userid : 1,
        username : "user1",
        dob : "01/01/2000",
        email : "user1@gmail.com",
        mobileno : 9087654321,

    },
    {
        userid : 2,
        username : "user2",
        dob : "02/01/2000",
        email : "user1@gmail.com",
        mobileno : 9087654321,

    },
    {
        userid : 3,
        username : "user3",
        dob : "03/01/2000",
        email : "user1@gmail.com",
        mobileno : 9087654321,

    }
];

ReactDOM.createRoot(document.getElementById('root')).render(<App user ={ user } />);
