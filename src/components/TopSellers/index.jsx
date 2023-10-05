import { useEffect, useState } from "react";
import { StyledTopSellers } from "./style"
import {api} from "@/services/api"

function TopSellers() {
  const [allUsers, setAllUsers] = useState([])

  async function getAllUsers() {
    try {
      const { data } = await api.get("/users");
      setAllUsers(data);
    } catch (error) {
      console.error(error);
    } 
  }

  useEffect(() => {
    async function getUsers() {
      await getAllUsers();
    }
    getUsers();
  }, []);

  const percentages = ["34%", "25%", "20%", "13%", "8%"]

    return (
      <StyledTopSellers>
        <p>Top Sellers</p>
        <ul>
          <li>
            <span>#</span>
            <span>Name</span>
            <span>Popularity</span>
            <span>Sales</span>
          </li>
          {!allUsers.length ? <p style={{ color: "red"}}>Error loading users.</p> : allUsers.map((user, index)=>{
            if(index <= 4){
              return (
                <li key={user.id}>
                  <span>0{user.id}</span>
                  <p>{user.name}</p>
                  <div>
                    <div>
                      <div/>
                    </div>
                  </div>
                  <p>{percentages[index]}</p>
                </li>
              )
            }
          })}
        </ul>
      </StyledTopSellers>
    )
  }
  
export default TopSellers
  