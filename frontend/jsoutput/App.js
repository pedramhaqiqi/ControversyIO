"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
require("@fontsource/roboto/300.css");
require("@fontsource/roboto/400.css");
require("@fontsource/roboto/500.css");
require("@fontsource/roboto/700.css");
const formik_1 = require("formik");
const react_1 = require("react");
const Box_1 = __importDefault(require("@mui/material/Box"));
const material_1 = require("@mui/material");
const Fade_1 = __importDefault(require("@mui/material/Fade"));
const cardComp_1 = __importDefault(require("./cardComp"));
// import SendIcon from '@mui/icons-material/Send';
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const react_2 = require("react");
function App() {
    const txt = (0, react_1.useRef)(null);
    const [json, setJson] = (0, react_2.useState)({});
    const [right, setRight] = (0, react_2.useState)("");
    const [left, setLeft] = (0, react_2.useState)("");
    const [mid, setMid] = (0, react_2.useState)("");
    const [submit, setSubmit] = (0, react_2.useState)(false);
    const formik = (0, formik_1.useFormik)({
        initialValues: {
            p: '',
        },
        onSubmit: (values) => {
            fetch("http://localhost:5000/", {
                method: "GET",
                body: JSON.stringify({ topic: values.p }),
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                console.log(data);
            });
        },
    });
    const show = submit;
    return (<div className="App">
      <header className="App-header">
        <p id='header-title'>Controversy.io</p>
      </header>
      <div className='main-container'>
        <h1 id="controversy-title">Controversy.io</h1>
        <h3 id="sub-title">Access all sides of the argument, delivered by AI</h3>
         <Fade_1.default in={submit === false} timeout={2000}>
         <form className="topic-form" action="/action_page.php">
         <Box_1.default>
         <TextField_1.default ref={txt} id="outlined-basic" variant="standard" sx={{ bgcolor: "white", mx: 3, width: '20vw' }}/>   
         <material_1.Button variant="contained" size="small" onClick={() => { setTimeout(() => { setSubmit(true); }, 7000); }} disabled={!setSubmit}> submit 
         </material_1.Button>
         </Box_1.default>
         </form> 
         </Fade_1.default>
      {/* <form onSubmit={formik.handleSubmit}>
         <input
           id="p"
           name="p"
           type="text"
           onChange={formik.handleChange}
           value={formik.values.p}
         />
         <button type="submit">Submit</button>
         </form>
          </Box> } */}
      </div>
      <Fade_1.default in={show === true} timeout={4000}>
       <Box_1.default>
        <Box_1.default sx={{ display: 'flex', mt: '5vh', justifyContent: 'center', alignContent: 'center' }}>
            <cardComp_1.default name="Positive Argument" data></cardComp_1.default>
            <cardComp_1.default name="Neutral Argument" data></cardComp_1.default>
            <cardComp_1.default name="Negative Argument" data></cardComp_1.default>
        </Box_1.default>
        <material_1.Button sx={{ mt: '1.5vh', mb: '1.5vh' }} variant="contained" size="medium" onClick={() => setSubmit(false)}> Try Again 
        </material_1.Button>
        </Box_1.default>
      </Fade_1.default>
      
    </div>);
}
exports.default = App;
