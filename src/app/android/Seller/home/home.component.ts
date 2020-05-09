import { Component, OnInit } from '@angular/core';
import * as FusionCharts from 'fusioncharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  incomeDataSource: any;
  bookingDataSource: any;
  timeSeriesType: string;
  splineType: string;
  width: string;
  height: string;
  constructor() {
    this.timeSeriesType = 'timeseries';
    this.splineType = 'msspline';
    this.width = '100%';
    this.height = '310';
    this.incomeDataSource = {
      // Initially data is set as null
      data: null,
      chart: {
        showLegend: 0,
        // palettecolors: "#009f4d",
      },
      caption: {
        text: ''
      },
      yAxis: [
        {
          plot: {
            value: 'Income',
            type: 'smooth-line'
          },
          format: {
            prefix: '₹ ',
          },
          title: 'Income (in thousands)'
        }
      ]
    };
    this.incomeFetchData();

    this.bookingDataSource = {
      // Initially data is set as null
      data: null,
      chart: {
        yaxisname: "# of Bookings",
        caption: "Last week Report",
        numdivlines: "3",
        showvalues: "0",
        legenditemfontsize: "14",
        legenditemfontbold: "1",
        plottooltext: "<b>$dataValue</b> Bookings $seriesName on <b>$label</b>",
        theme: "fusion",
        palettecolors: "#5d62b5, #ffbf00, #008080, #009f4d, #df143d",
      },
      categories: [
        {
          category: [
            {
              label: "May 10"
            },
            {
              label: "May 11"
            },
            {
              label: "May 12"
            },
            {
              label: "May 13"
            },
            {
              label: "May 14"
            },
            {
              label: "May 15"
            },
            {
              label: "May 16"
            }
          ]
        }
      ],
      dataset: [
        {
          seriesname: "Received",
          data: [
            {
              value: "55"
            },
            {
              value: "45"
            },
            {
              value: "52"
            },
            {
              value: "29"
            },
            {
              value: "48"
            },
            {
              value: "28"
            },
            {
              value: "32"
            }
          ]
        },
        {
          seriesname: "Pending",
          data: [
            {
              value: "48"
            },
            {
              value: "32"
            },
            {
              value: "45"
            },
            {
              value: "21"
            },
            {
              value: "47"
            },
            {
              value: "9"
            },
            {
              value: "25"
            }
          ]
        },
        {
          seriesname: "Processing",
          data: [
            {
              value: "80"
            },
            {
              value: "25"
            },
            {
              value: "12"
            },
            {
              value: "2"
            },
            {
              value: "5"
            },
            {
              value: "9"
            },
            {
              value: "25"
            }
          ]
        },
        {
          seriesname: "Completed",
          data: [
            {
              value: "10"
            },
            {
              value: "11"
            },
            {
              value: "13"
            },
            {
              value: "15"
            },
            {
              value: "18"
            },
            {
              value: "20"
            },
            {
              value: "10"
            }
          ]
        },
        {
          seriesname: "Cancelled",
          data: [
            {
              value: "0"
            },
            {
              value: "2"
            },
            {
              value: "5"
            },
            {
              value: "1"
            },
            {
              value: "7"
            },
            {
              value: "0"
            },
            {
              value: "5"
            }
          ]
        },
      ]
    };
  }

  // In this method we will create our DataStore and using that we will create a custom DataTable which takes two
  // parameters, one is data another is schema.
  incomeFetchData() {
    var jsonify = res => res.json();
    var dataFetch = fetch(
      'https://gobest.s3.ap-south-1.amazonaws.com/income_data.json'
    ).then(jsonify);
    var schemaFetch = fetch(
      'https://gobest.s3.ap-south-1.amazonaws.com/income_schema.json'
    ).then(jsonify);

    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      // First we are creating a DataStore
      const fusionDataStore = new FusionCharts.DataStore();
      // After that we are creating a DataTable by passing our data and schema as arguments
      const fusionTable = fusionDataStore.createDataTable(data, schema);
      // Afet that we simply mutated our timeseries datasource by attaching the above
      // DataTable into its data property.
      this.incomeDataSource.data = fusionTable;
    });
  }

  ngOnInit(): void {
  }
}
