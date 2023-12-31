import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useEffect } from "react";
import { register } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const navigate = useNavigate();
  const [allData,setAllData] = useState({
    username:"",
    password:"",
    email:""
  })

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const res =await publicRequest.post("/auth/register",allData);
    console.log(res.data);
    navigate("/login");
  }

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setAllData(prev=>({...prev,[name]:value}));
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="username" value={allData.username} onChange={handleChange} name="username"/>
          <Input  type="email" placeholder="email" value={allData.email} onChange={handleChange} name="email"/>
          <Input type="password" placeholder="password" value={allData.password} onChange={handleChange} name="password"/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
