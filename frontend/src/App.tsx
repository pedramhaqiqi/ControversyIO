import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Form, useFormik } from "formik";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Fade from "@mui/material/Fade";
import OutlinedCard from "./cardComp";
import React from "react";
// import SendIcon from '@mui/icons-material/Send';
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function App() {
  const txt = useRef(null);
  const [json, setJson] = useState({});
  const [right, setRight] = useState("");
  const [left, setLeft] = useState("");
  const [mid, setMid] = useState("");
  const [submit, setSubmit] = useState(false);
  const [recieved, setRecieved] = useState(false);
  const formik = useFormik({
    initialValues: {
      p: "",
    },
    onSubmit: (values) => {
      fetch("http://localhost:8080/", {
        method: "POST",
        body: JSON.stringify({ m1: values.p }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setRight(data.r1);
          setMid(data.r2);
          setLeft(data.r3);
          setRecieved(true);
        });
    },
  });
  const show = submit;

  return (
    <div className="App">
      <header className="App-header">
        <p id="header-title">Controversy.io</p>
      </header>
      {!recieved && (
        <div className="main-container">
          <h1 id="controversy-title">Controversy.io</h1>
          <h3 id="sub-title">
            Access all sides of the argument, delivered by AI
          </h3>
          {/* <Fade in={submit === false} timeout={2000}>
          <form className="topic-form" action="/action_page.php">
            <Box>
              <TextField
                ref={txt}
                id="outlined-basic"
                variant="standard"
                sx={{ bgcolor: "white", mx: 3, width: "20vw" }}
              />
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  setTimeout(() => {
                    setSubmit(true);
                  }, 7000);
                }}
                disabled={!setSubmit}
              >
                {" "}
                submit
              </Button>
            </Box>
          </form>
        </Fade> */}

          <form onSubmit={formik.handleSubmit}>
            <input
              id="p"
              name="p"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.p}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      {recieved && (
        <Box>
          <Box
            sx={{
              display: "flex",
              mt: "5vh",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <OutlinedCard name="Positive Argument" data={left}></OutlinedCard>
            <OutlinedCard name="Neutral Argument" data={right}></OutlinedCard>
            <OutlinedCard name="Negative Argument" data={mid}></OutlinedCard>
          </Box>
          <Button
            sx={{ mt: "1.5vh", mb: "1.5vh" }}
            variant="contained"
            size="medium"
            onClick={() => setSubmit(false)}
          >
            {" "}
            Try Again
          </Button>
        </Box>
      )}
    </div>
  );
}

export default App;
