import React from 'react';
import { Button } from 'antd'
import axios from 'axios';
const get = () => {
  axios.get('http://localhost:8888/deploy/new')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
}
export default function Home(props) {
  return (
    <>
    <Button type="primary" onClick={get}>Primary</Button>
    </>
  )
};