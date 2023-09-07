import React from "react";
import { DataManage1ContextCreate } from "../../Data_Manage";

import { useContext } from "react";
import { ChartDataColor20 } from "../Colors/ChartDataColor20";
function ModelDataFake() {
    const Data = [
        {
          id: 1,
          year: 2016,
          userGain: 80000,
          userLost: 823
        },
        {
          id: 2,
          year: 2017,
          userGain: 45677,
          userLost: 345
        },
        {
          id: 3,
          year: 2018,
          userGain: 78888,
          userLost: 555
        },
        {
          id: 4,
          year: 2019,
          userGain: 90000,
          userLost: 4555
        },
        {
          id: 6,
          year: 2020,
          userGain: 45000,
          userLost: 234
        }
      ];

    const finalChart_data = {
        labels: Data.map((data) => data.year),
        datasets: [
            {
              label: "Users Gained ",
              data: Data.map((data) => data.userGain),
              backgroundColor:ChartDataColor20,
              borderColor: "black",
              borderWidth: 2
            }
          ]
        
    };
    return finalChart_data;
}

export default ModelDataFake;
