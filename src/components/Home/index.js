import React, { useState } from 'react';
import { Button } from 'antd'
import axios from 'axios';

export default function Home(props) {
  const [payload, setPayload] = useState({
    data: null,
    error: null
  });
  const get = () => {
    axios.get('http://localhost:8888/deploy/new')
    .then((res) => setPayload({ data: res.data.data, error: res.data.error}))
    .catch((err) => setPayload({ error: err.error, data: null }));
  }
  return (
    <>
    <Button type="primary" onClick={get}>Deploy New FOMC version</Button>
    {(!payload.error && payload.data) ? <pre>{JSON.stringify(payload.data)}</pre> : null}
    {(payload.error) ? <pre>{payload.error}</pre> : null}
    </>
  )
};