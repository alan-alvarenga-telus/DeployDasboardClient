import React, { useState } from 'react';
import { Button, Spin, Input } from 'antd'
import axios from 'axios';
const { TextArea } = Input;

export default function Home(props) {
  const [form, setForm] = useState({
    data: null,
    loading: false,
  });
  const newDeploy = () => {
    setForm({...form, loading: true });
    axios.get('http://btln003067:8888/deploy/new')
      .then(({data}) => setForm({ data: data.data, loading: false }))
      .catch((err) => setForm({ data: err, loading: false }));
  }
  const getStatus = () => {
    setForm({...form, loading: true });
    axios.get('http://btln003067:8888/deploy/status')
      .then(({data}) => setForm({ data: data.data, loading: false }))
      .catch((err) => setForm({ data: err, loading: false }));
  }

  return (
    <>
      <Button type="primary" onClick={newDeploy}>Deploy New FOMC version</Button>
      <Button type="default" onClick={getStatus}>Server App Status</Button>
      {(form.loading) 
      ? <Spin size='large' /> 
      : <TextArea rows={6} value={form.data} style={{fontSize: "10px", fontFamily:"MONOSPACE"}}/>
      }
    </>
  );
};