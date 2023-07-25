import React,{useState} from "react";
import {Modal} from 'antd';
import Layout from "./../components/Layout/Layout";

const HomePage = () => {
  const [showModal,setShowModal]=useState(false)
  return (
    <Layout>
      <div className="filters">
      <div>Range filters</div>
      <div>
        <button className="btn btn-primary" onClick = { ()=> setShowModal(true)}>Add new</button>
      </div>
      <h1>Home Page</h1>
      </div>
      <Modal 
      title="Add transaction"
      visible={showModal}
      onCancel={()=>setShowModal(false)}
      footer={false}>

      </Modal>
    </Layout>

  );
};

export default HomePage;