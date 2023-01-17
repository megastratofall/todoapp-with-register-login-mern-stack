import Layout from "../components/Layout";
import React from 'react';
import Navbar from "../components/navigation/Navbar";
import TaskList from "../components/task/TaskList";

const Home = () => {
return (
<>
<Layout>
<Navbar/>
<TaskList/>
</Layout>
</>
)
}

export default Home