import "./style.css";
import data from "./data.json";
import { Chart } from "./Chart";

const chart = new Chart(data);
chart.render();
