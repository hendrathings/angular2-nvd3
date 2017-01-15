export declare namespace SampleData {
    const chartTypes: string[];
    const allOptions: {
        lineChart: {
            chart: {
                type: string;
                height: number;
                x: (d: any) => any;
                y: (d: any) => any;
            };
        };
        discreteBarChart: {
            chart: {
                type: string;
                height: number;
                x: (d: any) => any;
                y: (d: any) => any;
            };
        };
        pieChart: {
            chart: {
                type: string;
                height: number;
                x: (d: any) => any;
                y: (d: any) => any;
            };
        };
        scatterChart: {
            chart: {
                type: string;
                height: number;
            };
        };
        multiBarChart: {
            chart: {
                type: string;
                height: number;
                stacked: boolean;
            };
        };
        candlestickBarChart: {
            chart: {
                type: string;
                height: number;
                x: (d: any) => any;
                y: (d: any) => any;
            };
        };
        ohlcBarChart: {
            chart: {
                type: string;
                height: number;
                x: (d: any) => any;
                y: (d: any) => any;
            };
        };
        boxPlotChart: {
            chart: {
                type: string;
                height: number;
                x: (d: any) => any;
            };
        };
        multiChart: {
            chart: {
                type: string;
                height: number;
            };
        };
        sunburstChart: {
            chart: {
                type: string;
                height: number;
            };
        };
        stackedAreaChart: {
            chart: {
                type: string;
                height: number;
                x: (d: any) => any;
                y: (d: any) => any;
            };
        };
        multiBarHorizontalChart: {
            chart: {
                type: string;
                height: number;
                x: (d: any) => any;
                y: (d: any) => any;
            };
        };
        cumulativeLineChart: {
            chart: {
                type: string;
                height: number;
                x: (d: any) => any;
                y: (d: any) => number;
                average: (d: any) => number;
            };
        };
        historicalBarChart: {
            chart: {
                type: string;
                height: number;
                x: (d: any) => any;
                y: (d: any) => number;
            };
        };
        parallelCoordinates: {
            chart: {
                type: string;
                height: number;
                dimensionData: string[];
            };
        };
        sparklinePlus: {
            chart: {
                type: string;
                height: number;
                x: (d: any, i: any) => any;
            };
        };
        bulletChart: {
            chart: {
                type: string;
                height: number;
            };
        };
        linePlusBarWithFocusChart: {
            chart: {
                type: string;
                height: number;
                color: string[];
                x: (d: any, i: any) => any;
            };
        };
        forceDirectedGraph: {
            chart: {
                type: string;
            };
        };
    };
    const allData: {
        lineChart: {
            key: string;
            values: {
                x: number;
                y: number;
            }[];
        }[];
        discreteBarChart: {
            key: string;
            values: {
                'label': string;
                'value': number;
            }[];
        }[];
        pieChart: {
            key: string;
            y: number;
        }[];
        scatterChart: {
            key: string;
            values: {
                x: number;
                y: number;
            }[];
        }[];
        multiBarChart: {
            key: string;
            values: {
                x: number;
                y: number;
            }[];
        }[];
        candlestickBarChart: {
            values: {
                'date': number;
                'open': number;
                'high': number;
                'low': number;
                'close': number;
                'volume': number;
                'adjusted': number;
            }[];
        }[];
        ohlcBarChart: {
            values: {
                'date': number;
                'open': number;
                'high': number;
                'low': number;
                'close': number;
                'volume': number;
                'adjusted': number;
            }[];
        }[];
        boxPlotChart: {
            label: string;
            values: {
                Q1: number;
                Q2: number;
                Q3: number;
                whisker_low: number;
                whisker_high: number;
                outliers: number[];
            };
        }[];
        multiChart: {
            key: string;
            type: string;
            yAxis: number;
            values: {
                x: number;
                y: number;
            }[];
        }[];
        sunburstChart: {
            'name': string;
            'children': {
                'name': string;
                'children': {
                    'name': string;
                    'children': {
                        'name': string;
                        'size': number;
                    }[];
                }[];
            }[];
        }[];
        stackedAreaChart: {
            'key': string;
            'values': number[][];
        }[];
        multiBarHorizontalChart: {
            'key': string;
            'values': {
                'label': string;
                'value': number;
            }[];
        }[];
        cumulativeLineChart: {
            key: string;
            values: number[][];
            mean: number;
        }[];
        historicalBarChart: {
            'key': string;
            'bar': boolean;
            'values': number[][];
        }[];
        parallelCoordinates: {
            'name': string;
            'economy (mpg)': string;
            'cylinders': string;
            'displacement (cc)': string;
            'power (hp)': string;
            'weight (lb)': string;
            '0-60 mph (s)': string;
            'year': string;
        }[];
        sparklinePlus: {
            x: number;
            y: number;
        }[];
        bulletChart: {
            'title': string;
            'subtitle': string;
            'ranges': number[];
            'measures': number[];
            'markers': number[];
        };
        linePlusBarWithFocusChart: ({
            'key': string;
            'bar': boolean;
            'values': {
                x: number;
                y: number;
            }[];
        } | {
            'key': string;
            'values': {
                x: number;
                y: number;
            }[];
        })[];
        forceDirectedGraph: {
            'nodes': {
                'name': string;
                'group': number;
            }[];
            'links': {
                'source': number;
                'target': number;
                'value': number;
            }[];
        };
    };
    const chartClassExpected: {
        lineChart: string;
        discreteBarChart: string;
        pieChart: string;
        scatterChart: string;
        multiBarChart: string;
        multiBarHorizontalChart: string;
        candlestickBarChart: string;
        ohlcBarChart: string;
        boxPlotChart: string;
        multiChart: string;
        sunburstChart: string;
        stackedAreaChart: string;
        cumulativeLineChart: string;
        historicalBarChart: string;
        parallelCoordinates: string;
        sparklinePlus: string;
        bulletChart: string;
        linePlusBarWithFocusChart: string;
        forceDirectedGraph: string;
    };
}
