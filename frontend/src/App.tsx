import { useState } from 'react'
// import './App.css'
import { Posts } from "./Component/Posts"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getPageOfPosts } from '../../src/services/postService'
import { Users } from "./Component/Users"
import User_Details from "./Component/User_Details"
import { UserModel } from '../../src/models/api/userModel'
import './Styles/app.scss';
import NewUserForm from "./Component/NewUserForm"
import NewPostForm from "./Component/NewPostForm"
import Navbar from "./Component/NavBar"



function App() {

  return (
    <Router>
      <Navbar />

      <div className="App">

        <Routes>
          <Route path="/posts">
            <Route path="" element={<Posts />} />
            <Route path="create" element={<NewPostForm />} />
          </Route>

          <Route path="/users" >

            <Route path="" element={<Users />} />
            <Route path=":id" element={<User_Details />} />
            <Route path="create" element={<NewUserForm />} />

          </Route>




        </Routes>

      </div>
    </Router>
  )
}

export default App
