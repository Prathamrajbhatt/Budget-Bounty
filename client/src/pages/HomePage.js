import React,{useState} from "react";
import {Modal,Form,Input,Select} from 'antd';
import Layout from "./../components/Layout/Layout";

const HomePage = () => {
  const [showModal,setShowModal]=useState(false)



  //form handling
  const handleSubmit=(values)=>{
    console.log(values);
  }
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
      open={showModal}
      onCancel={()=>setShowModal(false)}
      footer={false}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Amount" name="amount">
          <Input type="text"></Input>
        </Form.Item>
        <Form.Item type="text" name="type">
            <Select>
              <Select.Option>Income</Select.Option>
              <Select.Option>Expense</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item type="category" name="category">
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="tip">tip</Select.Option>
              <Select.Option value="project">project</Select.Option>
              <Select.Option value="bills">bills</Select.Option>
              <Select.Option value="movies">movies</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Date" name="Date">
          <Input type="date"></Input>
        </Form.Item>
        <Form.Item label="Reference" name="Reference">
          <Input type="text"></Input>
        </Form.Item>
        <Form.Item label="Description" name="Description">
          <Input type="text"></Input>
        </Form.Item>
        <div calssName="d-flex justify-content-end">
          <button  type="submit" className="btn btn-primary" >SAVE</button>
        </div>
      </Form>
      </Modal>
    </Layout>

  );
};

export default HomePage;