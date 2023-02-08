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


function App() {

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/posts"
            element={<Posts />}>

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
