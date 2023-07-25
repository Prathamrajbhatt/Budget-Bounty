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
      visible={showModal}
      onCancel={()=>setShowModal(false)}
      footer={false}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Amount" name="amount">
          <Input type="text"></Input>
        </Form.Item>
        <Form.Item >
          <Input type="text" name="type"></Input>
            <Select>
              <Select.Option>Income</Select.Option>
              <Select.Option>Expense</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item >
          <Input type="category" name="category"></Input>
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="tip">tip</Select.Option>
              <Select.Option value="project">project</Select.Option>
              <Select.Option value="bills">bills</Select.Option>
              <Select.Option value="movies">movies</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Date">
          <Input type="date"></Input>
        </Form.Item>
        <Form.Item label="Reference">
          <Input type="text"></Input>
        </Form.Item>
        <Form.Item label="Description">
          <Input type="text"></Input>
        </Form.Item>
        <div calssName="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit"> SAVE</button>
        </div>
      </Form>
      </Modal>
    </Layout>

  );
};

export default HomePage;