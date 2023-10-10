import React, { useContext, useState, useEffect } from "react";
import {
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { FaSearch } from "react-icons/fa";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getUsers = async () => {
      const q = query(collection(db, "users"));
      try {
        const querySnapshot = await getDocs(q);
        const userList = [];
        querySnapshot.forEach((doc) => {
          userList.push(doc.data());
        });
        setUsers(userList);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    getUsers();
  }, []);

  const handleSelect = async (user) => {
   
  };

  return (
    <div className="search w-full border-r border-gray-400">
      <div className="searchForm flex">
        <input
          className="w-full bg-slate-200 p-4"
          type="text"
          placeholder="Find a user"
        />
        <button
          className="px-6 bg-slate-800 text-white"
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </div>
      {users.map((user) => (
        <div
          key={user.uid}
          className="userChat flex gap-4 bg-slate-600 hover:bg-slate-700 border-b-[1px] border-slate-800 text-white items-center p-4"
          onClick={() => handleSelect(user)}
        >
          <img
            className="w-16 h-16 object-cover rounded-full"
            src={user.photoURL}
            alt=""
          />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListUsers;
