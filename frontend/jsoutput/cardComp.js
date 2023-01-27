"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Card_1 = __importDefault(require("@mui/material/Card"));
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const card = (name, data) => (<React.Fragment>
      <CardContent_1.default sx={{ height: '32vh', maxWidth: '60vh' }}>
        <Typography_1.default variant="h5" component="div">
          {name}
        </Typography_1.default>
        <Typography_1.default variant="body2" align='left' pl='10px'>
          <br />
          {data}
        </Typography_1.default>
      </CardContent_1.default>
    </React.Fragment>);
function OutlinedCard({ name, data }) {
    return (<Box_1.default sx={{ minWidth: 275, mr: '1vw', ml: '1vw' }}>
        <Card_1.default variant="outlined">{card(name, data)}</Card_1.default>
      </Box_1.default>);
}
exports.default = OutlinedCard;
