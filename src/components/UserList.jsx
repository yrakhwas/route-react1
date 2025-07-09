import { Button } from "antd";
import { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";

const url = "https://dummyjson.com/users";

const pagination = {
        skip: 0,
        limit: 15
    }
function UserList()
{

    

    //let users = [];
    const [users, setUsers] = useState([]);


    useEffect(()=>{
        //console.log("useEffect called");
        loadUsers();
        // return()=>{
        //     console.log("Cleanup function called");
        // }
    }, [])
    // console.log( "Before updating data" , users); 
    const loadUsers = () =>{
        let apiUrl = `${url}?limit=${pagination.limit}&skip=${pagination.skip}`;
        pagination.skip += pagination.limit;

    //     fetch(apiUrl)
    //     .then(response=>response.json())
    //     .then(data => {
    //         setUsers([...users,...data.users]); 
    //         // console.log( "Inside function updating data" , users); 
            
    //     }
    // )

        // axios.post(apiUrl, {
        //     title: "Mr.",
        //     firstName: "John",
        //     userId: "john123",
        //     lastName: "Doe",
        // }).catch(err=>{
        //     console.error("Error posting data", err);
        // });

        axios.get(apiUrl).then(data=>{
            console.log("Data received", data);
            setUsers([...users,...data.data.users]);})
            .catch(err=>{
                console.error("Error fetching data", err);
            })




    }
    // console.log( "After updating data" , users); 
    // loadUsers();
    return(
       <>
        <h2>Users list</h2>
        <Button onClick={loadUsers}>Load</Button>
        <ol>
            {
                users.map(u=>
                    <li key={u.id}>User : {u.firstName} {u.lastName} Age : {u.age}</li>
                    //<User {...u}/>
                )
            }
        </ol>
        <Button onClick={loadUsers}>More...</Button>
       </>
    )
}

export default UserList;