/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

const theme = {
  ac0: "#00CC99",
  ac1: "#FFA901",
  ac2: "#00ebb0",
  ac3: "#ffd001",
  bg0: "#FFFFFF",
  bg1: "#EEEEEE",
  fg0: "#000000",
  fg1: "#CCCCCC",
};

//-------------------------------------------
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: false,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = ["Óleo", "Pão", "Batata", "Tomate", "Banana", "Café", "Leite"];

export const data = {
  labels,
  datasets: [
    {
      label: "Out.",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: `${theme.ac3}`,
      backgroundColor: `${theme.ac1}`,
    },
    {
      label: "Set.",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: `${theme.ac2}`,
      backgroundColor: `${theme.ac0}`,
    },
  ],
};
//-------------------------------------------
// TODO: make grid layout smart

function App() {
  const styles = {
    container: css`
      background-color: ${theme.bg0};
      color: ${theme.fg0};
      width: 100vw;
      height: 100vh;

      display: flex;
      flex-direction: column;
    `,

    header: css`
      background-color: ${theme.bg1};
      width: 100%;
      height: 50px;

      display: flex;
      align-items: center;
      padding: 10px;
      gap: 10px;
    `,

    headerLogo: css`
      img {
        width: auto;
        height: 25px;
      }
    `,

    main: css`
      background-color: ${theme.bg0};
      width: 100%;
      flex: 1;

      padding: 20px;
    `,

    card: css`
      background-color: ${theme.bg1};
      padding: 20px;

      max-width: 400px;
      width: 100%;

      border-radius: 10px;
      margin-bottom: 20px;
    `,

    cardContent: css`
      h1 {
        font-weight: normal;
        margin-top: 0;
      }

      h2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
      }
    `,

    highlight: css`
      background-color: ${theme.ac0};
      border-radius: 999px;
      padding: 10px;
    `,

    percent: css`
      display: flex;
      align-items: center;
      color: red;
    `,
  };

  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <div css={styles.headerLogo}>
          <img src="/logo512.png" alt="EconoStat" />
        </div>
        <div>
          Dashboard <i>EconoStat</i>
        </div>
      </div>
      <div css={styles.main}>
        <div css={styles.card}>
          <div css={styles.cardContent}>
            <h1>Preço da cesta</h1>
            <h2>
              <div>
                <span css={styles.highlight}>R$</span> 432,07
              </div>
              <div css={styles.percent}>
                <ArrowUpwardIcon />
                18,04%
              </div>
            </h2>
          </div>
        </div>
        <div css={styles.card}>
          <div css={styles.cardContent}>
            <h1>Variações</h1>
            <h2>
              <Bar options={options} data={data} />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
