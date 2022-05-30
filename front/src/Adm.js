import React, { useRef, useState } from "react";
import apiClient from "./services/api";
import Header from "./components/HeaderMain";
import Footer from "./components/Footer";

export default function App() {
  const post_title = useRef(null);
  const post_description = useRef(null);
  const [postResult, setPostResult] = useState(null);

  const [form, setForm] = useState({
    title: '',
    description: '',
  })

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };
  async function postData() {
    const postData = form;
    try {
      const res = await apiClient.post("/cadastrarEvento", postData, {
        headers: {
          "x-access-token": "token-value",
        },
      });
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(fortmatResponse(err.response?.data || err));
    }
  }
  const clearPostOutput = () => {
    setPostResult(null);
  };
  return (
    <div id="app" className="container">
      <Header/>
      <div className="card">
        <div className="card-header">Cadastrar Eventos:</div>
        <div className="card-body">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Nome do evento" onBlur={(e) => setForm({...form, title: e.target.value})}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="descrição do evento" />
          </div>
          <button className="btn btn-sm btn-primary" onClick={postData}>Criar!</button>
          { postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
        </div>
      </div>
      <Footer/>
    </div>
  );
}