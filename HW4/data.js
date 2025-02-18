var data = {
    "name": "ns1:timeSeriesResponseType",
    "declaredType": "org.cuahsi.waterml.TimeSeriesResponseType",
    "scope": "javax.xml.bind.JAXBElement$GlobalScope",
    "value": {
      "queryInfo": {
        "queryURL": "http://nwis.waterservices.usgs.gov/nwis/iv/format=json&sites=03453500,03447687,03454500,03443000,03448800,0344894205&startDT=2024-09-25&endDT=2024-09-30&parameterCd=00060,00065&siteStatus=all",
        "criteria": {
          "locationParam": "[ALL:03453500, ALL:03447687, ALL:03454500, ALL:03443000, ALL:03448800, ALL:0344894205]",
          "variableParam": "[00060, 00065]",
          "timeParam": {
            "beginDateTime": "2024-09-25T00:00:00.000",
            "endDateTime": "2024-09-30T23:59:59.000"
          },
          "parameter": []
        },
        "note": [
          {
            "value": "[ALL:03453500, ALL:03447687, ALL:03454500, ALL:03443000, ALL:03448800, ALL:0344894205]",
            "title": "filter:sites"
          },
          {
            "value": "[mode=RANGE, modifiedSince=null] interval={INTERVAL[2024-09-25T00:00:00.000-04:00/2024-09-30T23:59:59.000Z]}",
            "title": "filter:timeRange"
          },
          {
            "value": "methodIds=[ALL]",
            "title": "filter:methodId"
          },
          {
            "value": "2025-02-18T17:35:30.345Z",
            "title": "requestDT"
          },
          {
            "value": "bfa49a80-ee1e-11ef-a1c3-4cd98f8df011",
            "title": "requestId"
          },
          {
            "value": "Provisional data are subject to revision. Go to http://waterdata.usgs.gov/nwis/help/?provisional for more information.",
            "title": "disclaimer"
          },
          {
            "value": "nadww01",
            "title": "server"
          }
        ]
      },
      "timeSeries": [
        {
          "sourceInfo": {
            "siteName": "FRENCH BROAD RIVER AT BLANTYRE, NC",
            "siteCode": [
              {
                "value": "03443000",
                "network": "NWIS",
                "agencyCode": "USGS"
              }
            ],
            "timeZoneInfo": {
              "defaultTimeZone": {
                "zoneOffset": "-05:00",
                "zoneAbbreviation": "EST"
              },
              "daylightSavingsTimeZone": {
                "zoneOffset": "-04:00",
                "zoneAbbreviation": "EDT"
              },
              "siteUsesDaylightSavingsTime": true
            },
            "geoLocation": {
              "geogLocation": {
                "srs": "EPSG:4326",
                "latitude": 35.29916667,
                "longitude": -82.62388889
              },
              "localSiteXY": []
            },
            "note": [],
            "siteType": [],
            "siteProperty": [
              {
                "value": "ST",
                "name": "siteTypeCd"
              },
              {
                "value": "06010105",
                "name": "hucCd"
              },
              {
                "value": "37",
                "name": "stateCd"
              },
              {
                "value": "37175",
                "name": "countyCd"
              }
            ]
          },
          "variable": {
            "variableCode": [
              {
                "value": "00060",
                "network": "NWIS",
                "vocabulary": "NWIS:UnitValues",
                "variableID": 45807197,
                "default": true
              }
            ],
            "variableName": "Streamflow, ft&#179;/s",
            "variableDescription": "Discharge, cubic feet per second",
            "valueType": "Derived Value",
            "unit": {
              "unitCode": "ft3/s"
            },
            "options": {
              "option": [
                {
                  "name": "Statistic",
                  "optionCode": "00000"
                }
              ]
            },
            "note": [],
            "noDataValue": -999999,
            "variableProperty": [],
            "oid": "45807197"
          },
          "values": [
            {
              "value": [
                {
                  "value": "634",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T00:00:00.000-04:00"
                },
                {
                  "value": "641",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T00:15:00.000-04:00"
                },
                {
                  "value": "650",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T00:30:00.000-04:00"
                },
                {
                  "value": "657",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T00:45:00.000-04:00"
                },
                {
                  "value": "666",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T01:00:00.000-04:00"
                },
                {
                  "value": "672",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T01:15:00.000-04:00"
                },
                {
                  "value": "677",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T01:30:00.000-04:00"
                },
                {
                  "value": "684",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T01:45:00.000-04:00"
                },
                {
                  "value": "691",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T02:00:00.000-04:00"
                },
                {
                  "value": "695",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T02:15:00.000-04:00"
                },
                {
                  "value": "700",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T02:30:00.000-04:00"
                },
                {
                  "value": "707",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T02:45:00.000-04:00"
                },
                {
                  "value": "709",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T03:00:00.000-04:00"
                },
                {
                  "value": "716",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T03:15:00.000-04:00"
                },
                {
                  "value": "721",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T03:30:00.000-04:00"
                },
                {
                  "value": "725",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T03:45:00.000-04:00"
                },
                {
                  "value": "733",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T04:00:00.000-04:00"
                },
                {
                  "value": "742",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T04:15:00.000-04:00"
                },
                {
                  "value": "749",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T04:30:00.000-04:00"
                },
                {
                  "value": "761",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T04:45:00.000-04:00"
                },
                {
                  "value": "771",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T05:00:00.000-04:00"
                },
                {
                  "value": "783",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T05:15:00.000-04:00"
                },
                {
                  "value": "795",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T05:30:00.000-04:00"
                },
                {
                  "value": "810",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T05:45:00.000-04:00"
                },
                {
                  "value": "823",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T06:00:00.000-04:00"
                },
                {
                  "value": "835",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T06:15:00.000-04:00"
                },
                {
                  "value": "851",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T06:30:00.000-04:00"
                },
                {
                  "value": "864",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T06:45:00.000-04:00"
                },
                {
                  "value": "876",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T07:00:00.000-04:00"
                },
                {
                  "value": "889",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T07:15:00.000-04:00"
                },
                {
                  "value": "900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T07:30:00.000-04:00"
                },
                {
                  "value": "913",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T07:45:00.000-04:00"
                },
                {
                  "value": "924",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T08:00:00.000-04:00"
                },
                {
                  "value": "937",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T08:15:00.000-04:00"
                },
                {
                  "value": "948",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T08:30:00.000-04:00"
                },
                {
                  "value": "959",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T08:45:00.000-04:00"
                },
                {
                  "value": "970",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T09:00:00.000-04:00"
                },
                {
                  "value": "981",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T09:15:00.000-04:00"
                },
                {
                  "value": "989",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T09:30:00.000-04:00"
                },
                {
                  "value": "997",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T09:45:00.000-04:00"
                },
                {
                  "value": "1010",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T10:00:00.000-04:00"
                },
                {
                  "value": "1020",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T10:15:00.000-04:00"
                },
                {
                  "value": "1020",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T10:30:00.000-04:00"
                },
                {
                  "value": "1030",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T10:45:00.000-04:00"
                },
                {
                  "value": "1040",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T11:00:00.000-04:00"
                },
                {
                  "value": "1040",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T11:15:00.000-04:00"
                },
                {
                  "value": "1050",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T11:30:00.000-04:00"
                },
                {
                  "value": "1050",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T11:45:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T12:00:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T12:15:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T12:30:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T12:45:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T13:00:00.000-04:00"
                },
                {
                  "value": "1070",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T13:15:00.000-04:00"
                },
                {
                  "value": "1070",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T13:30:00.000-04:00"
                },
                {
                  "value": "1070",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T13:45:00.000-04:00"
                },
                {
                  "value": "1070",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T14:00:00.000-04:00"
                },
                {
                  "value": "1070",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T14:15:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T14:30:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T14:45:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T15:00:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T15:15:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T15:30:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T15:45:00.000-04:00"
                },
                {
                  "value": "1050",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T16:00:00.000-04:00"
                },
                {
                  "value": "1050",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T16:15:00.000-04:00"
                },
                {
                  "value": "1050",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T16:30:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T16:45:00.000-04:00"
                },
                {
                  "value": "1050",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T17:00:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T17:15:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T17:30:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T17:45:00.000-04:00"
                },
                {
                  "value": "1070",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T18:00:00.000-04:00"
                },
                {
                  "value": "1080",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T18:15:00.000-04:00"
                },
                {
                  "value": "1120",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T18:30:00.000-04:00"
                },
                {
                  "value": "1190",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T18:45:00.000-04:00"
                },
                {
                  "value": "1300",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T19:00:00.000-04:00"
                },
                {
                  "value": "1450",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T19:15:00.000-04:00"
                },
                {
                  "value": "1620",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T19:30:00.000-04:00"
                },
                {
                  "value": "1770",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T19:45:00.000-04:00"
                },
                {
                  "value": "1900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T20:00:00.000-04:00"
                },
                {
                  "value": "2000",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T20:15:00.000-04:00"
                },
                {
                  "value": "2100",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T20:30:00.000-04:00"
                },
                {
                  "value": "2210",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T20:45:00.000-04:00"
                },
                {
                  "value": "2340",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T21:00:00.000-04:00"
                },
                {
                  "value": "2460",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T21:15:00.000-04:00"
                },
                {
                  "value": "2580",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T21:30:00.000-04:00"
                },
                {
                  "value": "2700",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T21:45:00.000-04:00"
                },
                {
                  "value": "2810",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T22:00:00.000-04:00"
                },
                {
                  "value": "2910",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T22:15:00.000-04:00"
                },
                {
                  "value": "2970",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T22:30:00.000-04:00"
                },
                {
                  "value": "3050",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T22:45:00.000-04:00"
                },
                {
                  "value": "3110",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T23:00:00.000-04:00"
                },
                {
                  "value": "3160",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T23:15:00.000-04:00"
                },
                {
                  "value": "3200",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T23:30:00.000-04:00"
                },
                {
                  "value": "3240",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T23:45:00.000-04:00"
                },
                {
                  "value": "3270",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T00:00:00.000-04:00"
                },
                {
                  "value": "3310",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T00:15:00.000-04:00"
                },
                {
                  "value": "3340",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T00:30:00.000-04:00"
                },
                {
                  "value": "3370",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T00:45:00.000-04:00"
                },
                {
                  "value": "3390",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T01:00:00.000-04:00"
                },
                {
                  "value": "3420",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T01:15:00.000-04:00"
                },
                {
                  "value": "3460",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T01:30:00.000-04:00"
                },
                {
                  "value": "3490",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T01:45:00.000-04:00"
                },
                {
                  "value": "3530",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T02:00:00.000-04:00"
                },
                {
                  "value": "3570",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T02:15:00.000-04:00"
                },
                {
                  "value": "3610",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T02:30:00.000-04:00"
                },
                {
                  "value": "3660",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T02:45:00.000-04:00"
                },
                {
                  "value": "3700",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T03:00:00.000-04:00"
                },
                {
                  "value": "3740",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T03:15:00.000-04:00"
                },
                {
                  "value": "3790",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T03:30:00.000-04:00"
                },
                {
                  "value": "3830",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T03:45:00.000-04:00"
                },
                {
                  "value": "3870",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T04:00:00.000-04:00"
                },
                {
                  "value": "3900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T04:15:00.000-04:00"
                },
                {
                  "value": "3930",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T04:30:00.000-04:00"
                },
                {
                  "value": "3960",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T04:45:00.000-04:00"
                },
                {
                  "value": "3980",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T05:00:00.000-04:00"
                },
                {
                  "value": "4000",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T05:15:00.000-04:00"
                },
                {
                  "value": "4040",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T05:30:00.000-04:00"
                },
                {
                  "value": "4070",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T05:45:00.000-04:00"
                },
                {
                  "value": "4100",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T06:00:00.000-04:00"
                },
                {
                  "value": "4140",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T06:15:00.000-04:00"
                },
                {
                  "value": "4200",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T06:30:00.000-04:00"
                },
                {
                  "value": "4230",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T06:45:00.000-04:00"
                },
                {
                  "value": "4270",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T07:00:00.000-04:00"
                },
                {
                  "value": "4320",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T07:15:00.000-04:00"
                },
                {
                  "value": "4360",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T07:30:00.000-04:00"
                },
                {
                  "value": "4420",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T07:45:00.000-04:00"
                },
                {
                  "value": "4460",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T08:00:00.000-04:00"
                },
                {
                  "value": "4500",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T08:15:00.000-04:00"
                },
                {
                  "value": "4540",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T08:30:00.000-04:00"
                },
                {
                  "value": "4590",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T08:45:00.000-04:00"
                },
                {
                  "value": "4630",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T09:00:00.000-04:00"
                },
                {
                  "value": "4670",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T09:15:00.000-04:00"
                },
                {
                  "value": "4710",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T09:30:00.000-04:00"
                },
                {
                  "value": "4750",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T09:45:00.000-04:00"
                },
                {
                  "value": "4780",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T10:00:00.000-04:00"
                },
                {
                  "value": "4810",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T10:15:00.000-04:00"
                },
                {
                  "value": "4850",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T10:30:00.000-04:00"
                },
                {
                  "value": "4890",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T10:45:00.000-04:00"
                },
                {
                  "value": "4910",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T11:00:00.000-04:00"
                },
                {
                  "value": "4950",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T11:15:00.000-04:00"
                },
                {
                  "value": "4990",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T11:30:00.000-04:00"
                },
                {
                  "value": "5020",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T11:45:00.000-04:00"
                },
                {
                  "value": "5050",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T12:00:00.000-04:00"
                },
                {
                  "value": "5090",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T12:15:00.000-04:00"
                },
                {
                  "value": "5130",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T12:30:00.000-04:00"
                },
                {
                  "value": "5170",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T12:45:00.000-04:00"
                },
                {
                  "value": "5210",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T13:00:00.000-04:00"
                },
                {
                  "value": "5290",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T13:15:00.000-04:00"
                },
                {
                  "value": "5360",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T13:30:00.000-04:00"
                },
                {
                  "value": "5420",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T13:45:00.000-04:00"
                },
                {
                  "value": "5480",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T14:00:00.000-04:00"
                },
                {
                  "value": "5560",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T14:15:00.000-04:00"
                },
                {
                  "value": "5640",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T14:30:00.000-04:00"
                },
                {
                  "value": "5720",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T14:45:00.000-04:00"
                },
                {
                  "value": "5820",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T15:00:00.000-04:00"
                },
                {
                  "value": "5900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T15:15:00.000-04:00"
                },
                {
                  "value": "5990",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T15:30:00.000-04:00"
                },
                {
                  "value": "6070",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T15:45:00.000-04:00"
                },
                {
                  "value": "6170",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T16:00:00.000-04:00"
                },
                {
                  "value": "6260",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T16:15:00.000-04:00"
                },
                {
                  "value": "6360",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T16:30:00.000-04:00"
                },
                {
                  "value": "6460",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T16:45:00.000-04:00"
                },
                {
                  "value": "6550",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T17:00:00.000-04:00"
                },
                {
                  "value": "6640",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T17:15:00.000-04:00"
                },
                {
                  "value": "6750",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T17:30:00.000-04:00"
                },
                {
                  "value": "6840",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T17:45:00.000-04:00"
                },
                {
                  "value": "6940",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T18:00:00.000-04:00"
                },
                {
                  "value": "7040",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T18:15:00.000-04:00"
                },
                {
                  "value": "7110",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T18:30:00.000-04:00"
                },
                {
                  "value": "7200",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T18:45:00.000-04:00"
                },
                {
                  "value": "7310",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T19:00:00.000-04:00"
                },
                {
                  "value": "7380",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T19:15:00.000-04:00"
                },
                {
                  "value": "7460",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T19:30:00.000-04:00"
                },
                {
                  "value": "7550",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T19:45:00.000-04:00"
                },
                {
                  "value": "7590",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T20:00:00.000-04:00"
                },
                {
                  "value": "7690",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T20:15:00.000-04:00"
                },
                {
                  "value": "7760",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T20:30:00.000-04:00"
                },
                {
                  "value": "7860",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T20:45:00.000-04:00"
                },
                {
                  "value": "7940",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T21:00:00.000-04:00"
                },
                {
                  "value": "8010",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T21:15:00.000-04:00"
                },
                {
                  "value": "8110",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T21:30:00.000-04:00"
                },
                {
                  "value": "8190",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T21:45:00.000-04:00"
                },
                {
                  "value": "8250",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T22:00:00.000-04:00"
                },
                {
                  "value": "8340",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T22:15:00.000-04:00"
                },
                {
                  "value": "8420",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T22:30:00.000-04:00"
                },
                {
                  "value": "8510",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T22:45:00.000-04:00"
                },
                {
                  "value": "8580",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T23:00:00.000-04:00"
                },
                {
                  "value": "8690",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T23:15:00.000-04:00"
                },
                {
                  "value": "8770",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T23:30:00.000-04:00"
                },
                {
                  "value": "8840",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T23:45:00.000-04:00"
                },
                {
                  "value": "8900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T00:00:00.000-04:00"
                },
                {
                  "value": "8980",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T00:15:00.000-04:00"
                },
                {
                  "value": "9080",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T00:30:00.000-04:00"
                },
                {
                  "value": "9140",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T00:45:00.000-04:00"
                },
                {
                  "value": "9240",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T01:00:00.000-04:00"
                },
                {
                  "value": "9300",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T01:15:00.000-04:00"
                },
                {
                  "value": "9420",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T01:30:00.000-04:00"
                },
                {
                  "value": "9550",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T01:45:00.000-04:00"
                },
                {
                  "value": "9640",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T02:00:00.000-04:00"
                },
                {
                  "value": "9740",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T02:15:00.000-04:00"
                },
                {
                  "value": "9880",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T02:30:00.000-04:00"
                },
                {
                  "value": "9960",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T02:45:00.000-04:00"
                },
                {
                  "value": "10100",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T03:00:00.000-04:00"
                },
                {
                  "value": "10200",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T03:15:00.000-04:00"
                },
                {
                  "value": "10300",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T03:30:00.000-04:00"
                },
                {
                  "value": "10500",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T03:45:00.000-04:00"
                },
                {
                  "value": "10600",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T04:00:00.000-04:00"
                },
                {
                  "value": "10700",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T04:15:00.000-04:00"
                },
                {
                  "value": "10900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T04:30:00.000-04:00"
                },
                {
                  "value": "11000",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T04:45:00.000-04:00"
                },
                {
                  "value": "11200",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T05:00:00.000-04:00"
                },
                {
                  "value": "11400",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T05:15:00.000-04:00"
                },
                {
                  "value": "11500",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T05:30:00.000-04:00"
                },
                {
                  "value": "11700",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T05:45:00.000-04:00"
                },
                {
                  "value": "11900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T06:00:00.000-04:00"
                },
                {
                  "value": "12100",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T06:15:00.000-04:00"
                },
                {
                  "value": "12400",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T06:30:00.000-04:00"
                },
                {
                  "value": "12600",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T06:45:00.000-04:00"
                },
                {
                  "value": "12800",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T07:00:00.000-04:00"
                },
                {
                  "value": "13100",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T07:15:00.000-04:00"
                },
                {
                  "value": "13300",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T07:30:00.000-04:00"
                },
                {
                  "value": "13700",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T07:45:00.000-04:00"
                },
                {
                  "value": "14100",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T08:00:00.000-04:00"
                },
                {
                  "value": "14400",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T08:15:00.000-04:00"
                },
                {
                  "value": "14900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T08:30:00.000-04:00"
                },
                {
                  "value": "15500",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T08:45:00.000-04:00"
                },
                {
                  "value": "16000",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T09:00:00.000-04:00"
                },
                {
                  "value": "16500",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T09:15:00.000-04:00"
                },
                {
                  "value": "16900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T09:30:00.000-04:00"
                },
                {
                  "value": "17400",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T09:45:00.000-04:00"
                },
                {
                  "value": "17800",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T10:00:00.000-04:00"
                },
                {
                  "value": "18200",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T10:15:00.000-04:00"
                },
                {
                  "value": "18600",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T10:30:00.000-04:00"
                },
                {
                  "value": "18900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T10:45:00.000-04:00"
                },
                {
                  "value": "19300",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T11:00:00.000-04:00"
                },
                {
                  "value": "19700",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T11:15:00.000-04:00"
                },
                {
                  "value": "20000",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T11:30:00.000-04:00"
                },
                {
                  "value": "20400",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T11:45:00.000-04:00"
                },
                {
                  "value": "20700",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T12:00:00.000-04:00"
                },
                {
                  "value": "21100",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T12:15:00.000-04:00"
                },
                {
                  "value": "21400",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T12:30:00.000-04:00"
                },
                {
                  "value": "21700",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T12:45:00.000-04:00"
                },
                {
                  "value": "22100",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T13:00:00.000-04:00"
                },
                {
                  "value": "22500",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T13:15:00.000-04:00"
                },
                {
                  "value": "22900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T13:30:00.000-04:00"
                },
                {
                  "value": "23200",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T13:45:00.000-04:00"
                },
                {
                  "value": "23500",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T14:00:00.000-04:00"
                },
                {
                  "value": "23900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T14:15:00.000-04:00"
                },
                {
                  "value": "24200",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T14:30:00.000-04:00"
                },
                {
                  "value": "24500",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T14:45:00.000-04:00"
                },
                {
                  "value": "24900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T15:00:00.000-04:00"
                },
                {
                  "value": "25200",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T15:15:00.000-04:00"
                },
                {
                  "value": "25500",
                  "qualifiers": [
                    "A",
                    "e"
                  ],
                  "dateTime": "2024-09-27T15:30:00.000-04:00"
                },
                {
                  "value": "27300",
                  "qualifiers": [
                    "A",
                    "e"
                  ],
                  "dateTime": "2024-09-27T19:30:00.000-04:00"
                },
                {
                  "value": "28300",
                  "qualifiers": [
                    "A",
                    "e"
                  ],
                  "dateTime": "2024-09-27T23:30:00.000-04:00"
                },
                {
                  "value": "29200",
                  "qualifiers": [
                    "A",
                    "e"
                  ],
                  "dateTime": "2024-09-28T07:00:00.000-04:00"
                },
                {
                  "value": "28300",
                  "qualifiers": [
                    "A",
                    "e"
                  ],
                  "dateTime": "2024-09-28T11:00:00.000-04:00"
                },
                {
                  "value": "26600",
                  "qualifiers": [
                    "A",
                    "e"
                  ],
                  "dateTime": "2024-09-28T15:00:00.000-04:00"
                },
                {
                  "value": "24200",
                  "qualifiers": [
                    "A",
                    "e"
                  ],
                  "dateTime": "2024-09-28T19:00:00.000-04:00"
                },
                {
                  "value": "21300",
                  "qualifiers": [
                    "A",
                    "e"
                  ],
                  "dateTime": "2024-09-28T23:00:00.000-04:00"
                },
                {
                  "value": "18100",
                  "qualifiers": [
                    "A",
                    "e"
                  ],
                  "dateTime": "2024-09-29T03:00:00.000-04:00"
                },
                {
                  "value": "15100",
                  "qualifiers": [
                    "A",
                    "e"
                  ],
                  "dateTime": "2024-09-29T07:00:00.000-04:00"
                },
                {
                  "value": "12000",
                  "qualifiers": [
                    "A",
                    "e"
                  ],
                  "dateTime": "2024-09-29T11:00:00.000-04:00"
                },
                {
                  "value": "9240",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T15:30:00.000-04:00"
                },
                {
                  "value": "9190",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T15:45:00.000-04:00"
                },
                {
                  "value": "9120",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T16:00:00.000-04:00"
                },
                {
                  "value": "9040",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T16:15:00.000-04:00"
                },
                {
                  "value": "8960",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T16:30:00.000-04:00"
                },
                {
                  "value": "8880",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T16:45:00.000-04:00"
                },
                {
                  "value": "8820",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T17:00:00.000-04:00"
                },
                {
                  "value": "8740",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T17:15:00.000-04:00"
                },
                {
                  "value": "8660",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T17:30:00.000-04:00"
                },
                {
                  "value": "8600",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T17:45:00.000-04:00"
                },
                {
                  "value": "8540",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T18:00:00.000-04:00"
                },
                {
                  "value": "8460",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T18:15:00.000-04:00"
                },
                {
                  "value": "8400",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T18:30:00.000-04:00"
                },
                {
                  "value": "8320",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T18:45:00.000-04:00"
                },
                {
                  "value": "8280",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T19:00:00.000-04:00"
                },
                {
                  "value": "8220",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T19:15:00.000-04:00"
                },
                {
                  "value": "8130",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T19:30:00.000-04:00"
                },
                {
                  "value": "8080",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T19:45:00.000-04:00"
                },
                {
                  "value": "8010",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T20:00:00.000-04:00"
                },
                {
                  "value": "7950",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T20:15:00.000-04:00"
                },
                {
                  "value": "7890",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T20:30:00.000-04:00"
                },
                {
                  "value": "7830",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T20:45:00.000-04:00"
                },
                {
                  "value": "7750",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T21:00:00.000-04:00"
                },
                {
                  "value": "7700",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T21:15:00.000-04:00"
                },
                {
                  "value": "7660",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T21:30:00.000-04:00"
                },
                {
                  "value": "7570",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T21:45:00.000-04:00"
                },
                {
                  "value": "7530",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T22:00:00.000-04:00"
                },
                {
                  "value": "7490",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T22:15:00.000-04:00"
                },
                {
                  "value": "7420",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T22:30:00.000-04:00"
                },
                {
                  "value": "7350",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T22:45:00.000-04:00"
                },
                {
                  "value": "7310",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T23:00:00.000-04:00"
                },
                {
                  "value": "7250",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T23:15:00.000-04:00"
                },
                {
                  "value": "7200",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T23:30:00.000-04:00"
                },
                {
                  "value": "7150",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T23:45:00.000-04:00"
                },
                {
                  "value": "7070",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T00:00:00.000-04:00"
                },
                {
                  "value": "7040",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T00:15:00.000-04:00"
                },
                {
                  "value": "7000",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T00:30:00.000-04:00"
                },
                {
                  "value": "6950",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T00:45:00.000-04:00"
                },
                {
                  "value": "6910",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T01:00:00.000-04:00"
                },
                {
                  "value": "6840",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T01:15:00.000-04:00"
                },
                {
                  "value": "6800",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T01:30:00.000-04:00"
                },
                {
                  "value": "6740",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T01:45:00.000-04:00"
                },
                {
                  "value": "6700",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T02:00:00.000-04:00"
                },
                {
                  "value": "6660",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T02:15:00.000-04:00"
                },
                {
                  "value": "6620",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T02:30:00.000-04:00"
                },
                {
                  "value": "6580",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T02:45:00.000-04:00"
                },
                {
                  "value": "6540",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T03:00:00.000-04:00"
                },
                {
                  "value": "6490",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T03:15:00.000-04:00"
                },
                {
                  "value": "6450",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T03:30:00.000-04:00"
                },
                {
                  "value": "6400",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T03:45:00.000-04:00"
                },
                {
                  "value": "6360",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T04:00:00.000-04:00"
                },
                {
                  "value": "6310",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T04:15:00.000-04:00"
                },
                {
                  "value": "6270",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T04:30:00.000-04:00"
                },
                {
                  "value": "6250",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T04:45:00.000-04:00"
                },
                {
                  "value": "6200",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T05:00:00.000-04:00"
                },
                {
                  "value": "6160",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T05:15:00.000-04:00"
                },
                {
                  "value": "6130",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T05:30:00.000-04:00"
                },
                {
                  "value": "6080",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T05:45:00.000-04:00"
                },
                {
                  "value": "6060",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T06:00:00.000-04:00"
                },
                {
                  "value": "6010",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T06:15:00.000-04:00"
                },
                {
                  "value": "5970",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T06:30:00.000-04:00"
                },
                {
                  "value": "5940",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T06:45:00.000-04:00"
                },
                {
                  "value": "5900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T07:00:00.000-04:00"
                },
                {
                  "value": "5870",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T07:15:00.000-04:00"
                },
                {
                  "value": "5840",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T07:30:00.000-04:00"
                },
                {
                  "value": "5810",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T07:45:00.000-04:00"
                },
                {
                  "value": "5770",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T08:00:00.000-04:00"
                },
                {
                  "value": "5730",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T08:15:00.000-04:00"
                },
                {
                  "value": "5720",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T08:30:00.000-04:00"
                },
                {
                  "value": "5680",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T08:45:00.000-04:00"
                },
                {
                  "value": "5640",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T09:00:00.000-04:00"
                },
                {
                  "value": "5610",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T09:15:00.000-04:00"
                },
                {
                  "value": "5560",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T09:30:00.000-04:00"
                },
                {
                  "value": "5540",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T09:45:00.000-04:00"
                },
                {
                  "value": "5490",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T10:00:00.000-04:00"
                },
                {
                  "value": "5460",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T10:15:00.000-04:00"
                },
                {
                  "value": "5430",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T10:30:00.000-04:00"
                },
                {
                  "value": "5410",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T10:45:00.000-04:00"
                },
                {
                  "value": "5380",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T11:00:00.000-04:00"
                },
                {
                  "value": "5340",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T11:15:00.000-04:00"
                },
                {
                  "value": "5310",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T11:30:00.000-04:00"
                },
                {
                  "value": "5290",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T11:45:00.000-04:00"
                },
                {
                  "value": "5240",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T12:00:00.000-04:00"
                },
                {
                  "value": "5230",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T12:15:00.000-04:00"
                },
                {
                  "value": "5190",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T12:30:00.000-04:00"
                },
                {
                  "value": "5160",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T12:45:00.000-04:00"
                },
                {
                  "value": "5150",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T13:00:00.000-04:00"
                },
                {
                  "value": "5120",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T13:15:00.000-04:00"
                },
                {
                  "value": "5100",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T13:30:00.000-04:00"
                },
                {
                  "value": "5080",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T13:45:00.000-04:00"
                },
                {
                  "value": "5070",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T14:00:00.000-04:00"
                },
                {
                  "value": "5040",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T14:15:00.000-04:00"
                },
                {
                  "value": "5020",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T14:30:00.000-04:00"
                },
                {
                  "value": "5000",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T14:45:00.000-04:00"
                },
                {
                  "value": "4980",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T15:00:00.000-04:00"
                },
                {
                  "value": "4960",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T15:15:00.000-04:00"
                },
                {
                  "value": "4940",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T15:30:00.000-04:00"
                },
                {
                  "value": "4920",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T15:45:00.000-04:00"
                },
                {
                  "value": "4900",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T16:00:00.000-04:00"
                },
                {
                  "value": "4870",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T16:15:00.000-04:00"
                },
                {
                  "value": "4870",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T16:30:00.000-04:00"
                },
                {
                  "value": "4850",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T16:45:00.000-04:00"
                },
                {
                  "value": "4820",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T17:00:00.000-04:00"
                },
                {
                  "value": "4800",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T17:15:00.000-04:00"
                },
                {
                  "value": "4780",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T17:30:00.000-04:00"
                },
                {
                  "value": "4760",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T17:45:00.000-04:00"
                },
                {
                  "value": "4740",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T18:00:00.000-04:00"
                },
                {
                  "value": "4710",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T18:15:00.000-04:00"
                },
                {
                  "value": "4700",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T18:30:00.000-04:00"
                },
                {
                  "value": "4680",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T18:45:00.000-04:00"
                },
                {
                  "value": "4660",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T19:00:00.000-04:00"
                },
                {
                  "value": "4640",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T19:15:00.000-04:00"
                },
                {
                  "value": "4610",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T19:30:00.000-04:00"
                },
                {
                  "value": "4600",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T19:45:00.000-04:00"
                },
                {
                  "value": "4580",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T20:00:00.000-04:00"
                },
                {
                  "value": "4560",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T20:15:00.000-04:00"
                },
                {
                  "value": "4540",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T20:30:00.000-04:00"
                },
                {
                  "value": "4510",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T20:45:00.000-04:00"
                },
                {
                  "value": "4480",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T21:00:00.000-04:00"
                },
                {
                  "value": "4470",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T21:15:00.000-04:00"
                },
                {
                  "value": "4450",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T21:30:00.000-04:00"
                },
                {
                  "value": "4430",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T21:45:00.000-04:00"
                },
                {
                  "value": "4400",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T22:00:00.000-04:00"
                },
                {
                  "value": "4380",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T22:15:00.000-04:00"
                },
                {
                  "value": "4360",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T22:30:00.000-04:00"
                },
                {
                  "value": "4340",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T22:45:00.000-04:00"
                },
                {
                  "value": "4320",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T23:00:00.000-04:00"
                },
                {
                  "value": "4300",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T23:15:00.000-04:00"
                },
                {
                  "value": "4280",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T23:30:00.000-04:00"
                },
                {
                  "value": "4250",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T23:45:00.000-04:00"
                }
              ],
              "qualifier": [
                {
                  "qualifierCode": "e",
                  "qualifierDescription": "Value has been estimated.",
                  "qualifierID": 0,
                  "network": "NWIS",
                  "vocabulary": "uv_rmk_cd"
                },
                {
                  "qualifierCode": "A",
                  "qualifierDescription": "Approved for publication -- Processing and review completed.",
                  "qualifierID": 1,
                  "network": "NWIS",
                  "vocabulary": "uv_rmk_cd"
                }
              ],
              "qualityControlLevel": [],
              "method": [
                {
                  "methodDescription": "",
                  "methodID": 90172
                }
              ],
              "source": [],
              "offset": [],
              "sample": [],
              "censorCode": []
            }
          ],
          "name": "USGS:03443000:00060:00000"
        },
        {
          "sourceInfo": {
            "siteName": "FRENCH BROAD RIVER AT BLANTYRE, NC",
            "siteCode": [
              {
                "value": "03443000",
                "network": "NWIS",
                "agencyCode": "USGS"
              }
            ],
            "timeZoneInfo": {
              "defaultTimeZone": {
                "zoneOffset": "-05:00",
                "zoneAbbreviation": "EST"
              },
              "daylightSavingsTimeZone": {
                "zoneOffset": "-04:00",
                "zoneAbbreviation": "EDT"
              },
              "siteUsesDaylightSavingsTime": true
            },
            "geoLocation": {
              "geogLocation": {
                "srs": "EPSG:4326",
                "latitude": 35.29916667,
                "longitude": -82.62388889
              },
              "localSiteXY": []
            },
            "note": [],
            "siteType": [],
            "siteProperty": [
              {
                "value": "ST",
                "name": "siteTypeCd"
              },
              {
                "value": "06010105",
                "name": "hucCd"
              },
              {
                "value": "37",
                "name": "stateCd"
              },
              {
                "value": "37175",
                "name": "countyCd"
              }
            ]
          },
          "variable": {
            "variableCode": [
              {
                "value": "00065",
                "network": "NWIS",
                "vocabulary": "NWIS:UnitValues",
                "variableID": 45807202,
                "default": true
              }
            ],
            "variableName": "Gage height, ft",
            "variableDescription": "Gage height, feet",
            "valueType": "Derived Value",
            "unit": {
              "unitCode": "ft"
            },
            "options": {
              "option": [
                {
                  "name": "Statistic",
                  "optionCode": "00000"
                }
              ]
            },
            "note": [],
            "noDataValue": -999999,
            "variableProperty": [],
            "oid": "45807202"
          },
          "values": [
            {
              "value": [
                {
                  "value": "6.56",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T00:00:00.000-04:00"
                },
                {
                  "value": "6.59",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T00:15:00.000-04:00"
                },
                {
                  "value": "6.63",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T00:30:00.000-04:00"
                },
                {
                  "value": "6.66",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T00:45:00.000-04:00"
                },
                {
                  "value": "6.70",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T01:00:00.000-04:00"
                },
                {
                  "value": "6.73",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T01:15:00.000-04:00"
                },
                {
                  "value": "6.75",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T01:30:00.000-04:00"
                },
                {
                  "value": "6.78",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T01:45:00.000-04:00"
                },
                {
                  "value": "6.81",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T02:00:00.000-04:00"
                },
                {
                  "value": "6.83",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T02:15:00.000-04:00"
                },
                {
                  "value": "6.85",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T02:30:00.000-04:00"
                },
                {
                  "value": "6.88",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T02:45:00.000-04:00"
                },
                {
                  "value": "6.89",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T03:00:00.000-04:00"
                },
                {
                  "value": "6.92",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T03:15:00.000-04:00"
                },
                {
                  "value": "6.94",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T03:30:00.000-04:00"
                },
                {
                  "value": "6.96",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T03:45:00.000-04:00"
                },
                {
                  "value": "6.99",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T04:00:00.000-04:00"
                },
                {
                  "value": "7.03",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T04:15:00.000-04:00"
                },
                {
                  "value": "7.06",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T04:30:00.000-04:00"
                },
                {
                  "value": "7.11",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T04:45:00.000-04:00"
                },
                {
                  "value": "7.15",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T05:00:00.000-04:00"
                },
                {
                  "value": "7.20",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T05:15:00.000-04:00"
                },
                {
                  "value": "7.25",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T05:30:00.000-04:00"
                },
                {
                  "value": "7.31",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T05:45:00.000-04:00"
                },
                {
                  "value": "7.36",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T06:00:00.000-04:00"
                },
                {
                  "value": "7.41",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T06:15:00.000-04:00"
                },
                {
                  "value": "7.47",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T06:30:00.000-04:00"
                },
                {
                  "value": "7.52",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T06:45:00.000-04:00"
                },
                {
                  "value": "7.57",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T07:00:00.000-04:00"
                },
                {
                  "value": "7.62",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T07:15:00.000-04:00"
                },
                {
                  "value": "7.66",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T07:30:00.000-04:00"
                },
                {
                  "value": "7.71",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T07:45:00.000-04:00"
                },
                {
                  "value": "7.75",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T08:00:00.000-04:00"
                },
                {
                  "value": "7.80",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T08:15:00.000-04:00"
                },
                {
                  "value": "7.84",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T08:30:00.000-04:00"
                },
                {
                  "value": "7.88",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T08:45:00.000-04:00"
                },
                {
                  "value": "7.92",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T09:00:00.000-04:00"
                },
                {
                  "value": "7.96",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T09:15:00.000-04:00"
                },
                {
                  "value": "7.99",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T09:30:00.000-04:00"
                },
                {
                  "value": "8.02",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T09:45:00.000-04:00"
                },
                {
                  "value": "8.06",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T10:00:00.000-04:00"
                },
                {
                  "value": "8.09",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T10:15:00.000-04:00"
                },
                {
                  "value": "8.11",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T10:30:00.000-04:00"
                },
                {
                  "value": "8.14",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T10:45:00.000-04:00"
                },
                {
                  "value": "8.17",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T11:00:00.000-04:00"
                },
                {
                  "value": "8.19",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T11:15:00.000-04:00"
                },
                {
                  "value": "8.21",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T11:30:00.000-04:00"
                },
                {
                  "value": "8.22",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T11:45:00.000-04:00"
                },
                {
                  "value": "8.24",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T12:00:00.000-04:00"
                },
                {
                  "value": "8.25",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T12:15:00.000-04:00"
                },
                {
                  "value": "8.26",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T12:30:00.000-04:00"
                },
                {
                  "value": "8.26",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T12:45:00.000-04:00"
                },
                {
                  "value": "8.27",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T13:00:00.000-04:00"
                },
                {
                  "value": "8.28",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T13:15:00.000-04:00"
                },
                {
                  "value": "8.28",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T13:30:00.000-04:00"
                },
                {
                  "value": "8.29",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T13:45:00.000-04:00"
                },
                {
                  "value": "8.28",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T14:00:00.000-04:00"
                },
                {
                  "value": "8.28",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T14:15:00.000-04:00"
                },
                {
                  "value": "8.27",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T14:30:00.000-04:00"
                },
                {
                  "value": "8.27",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T14:45:00.000-04:00"
                },
                {
                  "value": "8.26",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T15:00:00.000-04:00"
                },
                {
                  "value": "8.25",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T15:15:00.000-04:00"
                },
                {
                  "value": "8.25",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T15:30:00.000-04:00"
                },
                {
                  "value": "8.24",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T15:45:00.000-04:00"
                },
                {
                  "value": "8.23",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T16:00:00.000-04:00"
                },
                {
                  "value": "8.22",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T16:15:00.000-04:00"
                },
                {
                  "value": "8.22",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T16:30:00.000-04:00"
                },
                {
                  "value": "8.24",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T16:45:00.000-04:00"
                },
                {
                  "value": "8.22",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T17:00:00.000-04:00"
                },
                {
                  "value": "8.24",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T17:15:00.000-04:00"
                },
                {
                  "value": "8.25",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T17:30:00.000-04:00"
                },
                {
                  "value": "8.26",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T17:45:00.000-04:00"
                },
                {
                  "value": "8.29",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T18:00:00.000-04:00"
                },
                {
                  "value": "8.34",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T18:15:00.000-04:00"
                },
                {
                  "value": "8.47",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T18:30:00.000-04:00"
                },
                {
                  "value": "8.71",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T18:45:00.000-04:00"
                },
                {
                  "value": "9.09",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T19:00:00.000-04:00"
                },
                {
                  "value": "9.57",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T19:15:00.000-04:00"
                },
                {
                  "value": "10.08",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T19:30:00.000-04:00"
                },
                {
                  "value": "10.51",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T19:45:00.000-04:00"
                },
                {
                  "value": "10.86",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T20:00:00.000-04:00"
                },
                {
                  "value": "11.15",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T20:15:00.000-04:00"
                },
                {
                  "value": "11.41",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T20:30:00.000-04:00"
                },
                {
                  "value": "11.69",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T20:45:00.000-04:00"
                },
                {
                  "value": "12.00",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T21:00:00.000-04:00"
                },
                {
                  "value": "12.32",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T21:15:00.000-04:00"
                },
                {
                  "value": "12.64",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T21:30:00.000-04:00"
                },
                {
                  "value": "12.95",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T21:45:00.000-04:00"
                },
                {
                  "value": "13.23",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T22:00:00.000-04:00"
                },
                {
                  "value": "13.47",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T22:15:00.000-04:00"
                },
                {
                  "value": "13.64",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T22:30:00.000-04:00"
                },
                {
                  "value": "13.82",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T22:45:00.000-04:00"
                },
                {
                  "value": "13.97",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T23:00:00.000-04:00"
                },
                {
                  "value": "14.08",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T23:15:00.000-04:00"
                },
                {
                  "value": "14.19",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T23:30:00.000-04:00"
                },
                {
                  "value": "14.29",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-25T23:45:00.000-04:00"
                },
                {
                  "value": "14.36",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T00:00:00.000-04:00"
                },
                {
                  "value": "14.44",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T00:15:00.000-04:00"
                },
                {
                  "value": "14.51",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T00:30:00.000-04:00"
                },
                {
                  "value": "14.58",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T00:45:00.000-04:00"
                },
                {
                  "value": "14.64",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T01:00:00.000-04:00"
                },
                {
                  "value": "14.71",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T01:15:00.000-04:00"
                },
                {
                  "value": "14.79",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T01:30:00.000-04:00"
                },
                {
                  "value": "14.87",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T01:45:00.000-04:00"
                },
                {
                  "value": "14.95",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T02:00:00.000-04:00"
                },
                {
                  "value": "15.06",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T02:15:00.000-04:00"
                },
                {
                  "value": "15.15",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T02:30:00.000-04:00"
                },
                {
                  "value": "15.25",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T02:45:00.000-04:00"
                },
                {
                  "value": "15.35",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T03:00:00.000-04:00"
                },
                {
                  "value": "15.44",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T03:15:00.000-04:00"
                },
                {
                  "value": "15.55",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T03:30:00.000-04:00"
                },
                {
                  "value": "15.63",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T03:45:00.000-04:00"
                },
                {
                  "value": "15.72",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T04:00:00.000-04:00"
                },
                {
                  "value": "15.79",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T04:15:00.000-04:00"
                },
                {
                  "value": "15.85",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T04:30:00.000-04:00"
                },
                {
                  "value": "15.91",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T04:45:00.000-04:00"
                },
                {
                  "value": "15.97",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T05:00:00.000-04:00"
                },
                {
                  "value": "16.01",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T05:15:00.000-04:00"
                },
                {
                  "value": "16.08",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T05:30:00.000-04:00"
                },
                {
                  "value": "16.13",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T05:45:00.000-04:00"
                },
                {
                  "value": "16.18",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T06:00:00.000-04:00"
                },
                {
                  "value": "16.25",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T06:15:00.000-04:00"
                },
                {
                  "value": "16.34",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T06:30:00.000-04:00"
                },
                {
                  "value": "16.39",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T06:45:00.000-04:00"
                },
                {
                  "value": "16.45",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T07:00:00.000-04:00"
                },
                {
                  "value": "16.52",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T07:15:00.000-04:00"
                },
                {
                  "value": "16.58",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T07:30:00.000-04:00"
                },
                {
                  "value": "16.67",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T07:45:00.000-04:00"
                },
                {
                  "value": "16.73",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T08:00:00.000-04:00"
                },
                {
                  "value": "16.79",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T08:15:00.000-04:00"
                },
                {
                  "value": "16.86",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T08:30:00.000-04:00"
                },
                {
                  "value": "16.93",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T08:45:00.000-04:00"
                },
                {
                  "value": "16.99",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T09:00:00.000-04:00"
                },
                {
                  "value": "17.04",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T09:15:00.000-04:00"
                },
                {
                  "value": "17.10",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T09:30:00.000-04:00"
                },
                {
                  "value": "17.16",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T09:45:00.000-04:00"
                },
                {
                  "value": "17.21",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T10:00:00.000-04:00"
                },
                {
                  "value": "17.25",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T10:15:00.000-04:00"
                },
                {
                  "value": "17.30",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T10:30:00.000-04:00"
                },
                {
                  "value": "17.36",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T10:45:00.000-04:00"
                },
                {
                  "value": "17.39",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T11:00:00.000-04:00"
                },
                {
                  "value": "17.45",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T11:15:00.000-04:00"
                },
                {
                  "value": "17.50",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T11:30:00.000-04:00"
                },
                {
                  "value": "17.54",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T11:45:00.000-04:00"
                },
                {
                  "value": "17.59",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T12:00:00.000-04:00"
                },
                {
                  "value": "17.64",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T12:15:00.000-04:00"
                },
                {
                  "value": "17.70",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T12:30:00.000-04:00"
                },
                {
                  "value": "17.75",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T12:45:00.000-04:00"
                },
                {
                  "value": "17.79",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T13:00:00.000-04:00"
                },
                {
                  "value": "17.86",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T13:15:00.000-04:00"
                },
                {
                  "value": "17.92",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T13:30:00.000-04:00"
                },
                {
                  "value": "17.98",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T13:45:00.000-04:00"
                },
                {
                  "value": "18.03",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T14:00:00.000-04:00"
                },
                {
                  "value": "18.10",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T14:15:00.000-04:00"
                },
                {
                  "value": "18.17",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T14:30:00.000-04:00"
                },
                {
                  "value": "18.24",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T14:45:00.000-04:00"
                },
                {
                  "value": "18.32",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T15:00:00.000-04:00"
                },
                {
                  "value": "18.39",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T15:15:00.000-04:00"
                },
                {
                  "value": "18.46",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T15:30:00.000-04:00"
                },
                {
                  "value": "18.53",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T15:45:00.000-04:00"
                },
                {
                  "value": "18.61",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T16:00:00.000-04:00"
                },
                {
                  "value": "18.68",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T16:15:00.000-04:00"
                },
                {
                  "value": "18.76",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T16:30:00.000-04:00"
                },
                {
                  "value": "18.84",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T16:45:00.000-04:00"
                },
                {
                  "value": "18.91",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T17:00:00.000-04:00"
                },
                {
                  "value": "18.98",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T17:15:00.000-04:00"
                },
                {
                  "value": "19.06",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T17:30:00.000-04:00"
                },
                {
                  "value": "19.13",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T17:45:00.000-04:00"
                },
                {
                  "value": "19.20",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T18:00:00.000-04:00"
                },
                {
                  "value": "19.28",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T18:15:00.000-04:00"
                },
                {
                  "value": "19.33",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T18:30:00.000-04:00"
                },
                {
                  "value": "19.39",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T18:45:00.000-04:00"
                },
                {
                  "value": "19.47",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T19:00:00.000-04:00"
                },
                {
                  "value": "19.52",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T19:15:00.000-04:00"
                },
                {
                  "value": "19.58",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T19:30:00.000-04:00"
                },
                {
                  "value": "19.64",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T19:45:00.000-04:00"
                },
                {
                  "value": "19.67",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T20:00:00.000-04:00"
                },
                {
                  "value": "19.74",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T20:15:00.000-04:00"
                },
                {
                  "value": "19.79",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T20:30:00.000-04:00"
                },
                {
                  "value": "19.86",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T20:45:00.000-04:00"
                },
                {
                  "value": "19.91",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T21:00:00.000-04:00"
                },
                {
                  "value": "19.96",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T21:15:00.000-04:00"
                },
                {
                  "value": "20.03",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T21:30:00.000-04:00"
                },
                {
                  "value": "20.08",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T21:45:00.000-04:00"
                },
                {
                  "value": "20.12",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T22:00:00.000-04:00"
                },
                {
                  "value": "20.18",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T22:15:00.000-04:00"
                },
                {
                  "value": "20.23",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T22:30:00.000-04:00"
                },
                {
                  "value": "20.29",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T22:45:00.000-04:00"
                },
                {
                  "value": "20.34",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T23:00:00.000-04:00"
                },
                {
                  "value": "20.41",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T23:15:00.000-04:00"
                },
                {
                  "value": "20.46",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T23:30:00.000-04:00"
                },
                {
                  "value": "20.50",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-26T23:45:00.000-04:00"
                },
                {
                  "value": "20.54",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T00:00:00.000-04:00"
                },
                {
                  "value": "20.59",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T00:15:00.000-04:00"
                },
                {
                  "value": "20.65",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T00:30:00.000-04:00"
                },
                {
                  "value": "20.69",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T00:45:00.000-04:00"
                },
                {
                  "value": "20.75",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T01:00:00.000-04:00"
                },
                {
                  "value": "20.79",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T01:15:00.000-04:00"
                },
                {
                  "value": "20.86",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T01:30:00.000-04:00"
                },
                {
                  "value": "20.94",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T01:45:00.000-04:00"
                },
                {
                  "value": "20.99",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T02:00:00.000-04:00"
                },
                {
                  "value": "21.05",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T02:15:00.000-04:00"
                },
                {
                  "value": "21.13",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T02:30:00.000-04:00"
                },
                {
                  "value": "21.18",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T02:45:00.000-04:00"
                },
                {
                  "value": "21.26",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T03:00:00.000-04:00"
                },
                {
                  "value": "21.33",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T03:15:00.000-04:00"
                },
                {
                  "value": "21.38",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T03:30:00.000-04:00"
                },
                {
                  "value": "21.46",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T03:45:00.000-04:00"
                },
                {
                  "value": "21.54",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T04:00:00.000-04:00"
                },
                {
                  "value": "21.62",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T04:15:00.000-04:00"
                },
                {
                  "value": "21.70",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T04:30:00.000-04:00"
                },
                {
                  "value": "21.77",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T04:45:00.000-04:00"
                },
                {
                  "value": "21.88",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T05:00:00.000-04:00"
                },
                {
                  "value": "21.95",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T05:15:00.000-04:00"
                },
                {
                  "value": "22.05",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T05:30:00.000-04:00"
                },
                {
                  "value": "22.14",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T05:45:00.000-04:00"
                },
                {
                  "value": "22.25",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T06:00:00.000-04:00"
                },
                {
                  "value": "22.35",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T06:15:00.000-04:00"
                },
                {
                  "value": "22.46",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T06:30:00.000-04:00"
                },
                {
                  "value": "22.58",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T06:45:00.000-04:00"
                },
                {
                  "value": "22.69",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T07:00:00.000-04:00"
                },
                {
                  "value": "22.81",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T07:15:00.000-04:00"
                },
                {
                  "value": "22.94",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T07:30:00.000-04:00"
                },
                {
                  "value": "23.10",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T07:45:00.000-04:00"
                },
                {
                  "value": "23.27",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T08:00:00.000-04:00"
                },
                {
                  "value": "23.44",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T08:15:00.000-04:00"
                },
                {
                  "value": "23.66",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T08:30:00.000-04:00"
                },
                {
                  "value": "23.88",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T08:45:00.000-04:00"
                },
                {
                  "value": "24.09",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T09:00:00.000-04:00"
                },
                {
                  "value": "24.29",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T09:15:00.000-04:00"
                },
                {
                  "value": "24.48",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T09:30:00.000-04:00"
                },
                {
                  "value": "24.65",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T09:45:00.000-04:00"
                },
                {
                  "value": "24.82",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T10:00:00.000-04:00"
                },
                {
                  "value": "24.96",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T10:15:00.000-04:00"
                },
                {
                  "value": "25.11",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T10:30:00.000-04:00"
                },
                {
                  "value": "25.24",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T10:45:00.000-04:00"
                },
                {
                  "value": "25.37",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T11:00:00.000-04:00"
                },
                {
                  "value": "25.51",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T11:15:00.000-04:00"
                },
                {
                  "value": "25.61",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T11:30:00.000-04:00"
                },
                {
                  "value": "25.75",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T11:45:00.000-04:00"
                },
                {
                  "value": "25.87",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T12:00:00.000-04:00"
                },
                {
                  "value": "25.99",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T12:15:00.000-04:00"
                },
                {
                  "value": "26.11",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T12:30:00.000-04:00"
                },
                {
                  "value": "26.22",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T12:45:00.000-04:00"
                },
                {
                  "value": "26.35",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T13:00:00.000-04:00"
                },
                {
                  "value": "26.46",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T13:15:00.000-04:00"
                },
                {
                  "value": "26.58",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T13:30:00.000-04:00"
                },
                {
                  "value": "26.68",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T13:45:00.000-04:00"
                },
                {
                  "value": "26.78",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T14:00:00.000-04:00"
                },
                {
                  "value": "26.90",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T14:15:00.000-04:00"
                },
                {
                  "value": "27.00",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T14:30:00.000-04:00"
                },
                {
                  "value": "27.10",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T14:45:00.000-04:00"
                },
                {
                  "value": "27.20",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T15:00:00.000-04:00"
                },
                {
                  "value": "27.29",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T15:15:00.000-04:00"
                },
                {
                  "value": "27.38",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-27T15:30:00.000-04:00"
                },
                {
                  "value": "28.43",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-28T07:00:00.000-04:00"
                },
                {
                  "value": "20.82",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T15:15:00.000-04:00"
                },
                {
                  "value": "20.75",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T15:30:00.000-04:00"
                },
                {
                  "value": "20.72",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T15:45:00.000-04:00"
                },
                {
                  "value": "20.68",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T16:00:00.000-04:00"
                },
                {
                  "value": "20.63",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T16:15:00.000-04:00"
                },
                {
                  "value": "20.58",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T16:30:00.000-04:00"
                },
                {
                  "value": "20.53",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T16:45:00.000-04:00"
                },
                {
                  "value": "20.49",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T17:00:00.000-04:00"
                },
                {
                  "value": "20.44",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T17:15:00.000-04:00"
                },
                {
                  "value": "20.39",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T17:30:00.000-04:00"
                },
                {
                  "value": "20.35",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T17:45:00.000-04:00"
                },
                {
                  "value": "20.31",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T18:00:00.000-04:00"
                },
                {
                  "value": "20.26",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T18:15:00.000-04:00"
                },
                {
                  "value": "20.22",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T18:30:00.000-04:00"
                },
                {
                  "value": "20.17",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T18:45:00.000-04:00"
                },
                {
                  "value": "20.14",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T19:00:00.000-04:00"
                },
                {
                  "value": "20.10",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T19:15:00.000-04:00"
                },
                {
                  "value": "20.04",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T19:30:00.000-04:00"
                },
                {
                  "value": "20.01",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T19:45:00.000-04:00"
                },
                {
                  "value": "19.96",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T20:00:00.000-04:00"
                },
                {
                  "value": "19.92",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T20:15:00.000-04:00"
                },
                {
                  "value": "19.88",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T20:30:00.000-04:00"
                },
                {
                  "value": "19.84",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T20:45:00.000-04:00"
                },
                {
                  "value": "19.78",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T21:00:00.000-04:00"
                },
                {
                  "value": "19.75",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T21:15:00.000-04:00"
                },
                {
                  "value": "19.72",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T21:30:00.000-04:00"
                },
                {
                  "value": "19.66",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T21:45:00.000-04:00"
                },
                {
                  "value": "19.63",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T22:00:00.000-04:00"
                },
                {
                  "value": "19.60",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T22:15:00.000-04:00"
                },
                {
                  "value": "19.55",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T22:30:00.000-04:00"
                },
                {
                  "value": "19.50",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T22:45:00.000-04:00"
                },
                {
                  "value": "19.47",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T23:00:00.000-04:00"
                },
                {
                  "value": "19.43",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T23:15:00.000-04:00"
                },
                {
                  "value": "19.39",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T23:30:00.000-04:00"
                },
                {
                  "value": "19.36",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-29T23:45:00.000-04:00"
                },
                {
                  "value": "19.30",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T00:00:00.000-04:00"
                },
                {
                  "value": "19.28",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T00:15:00.000-04:00"
                },
                {
                  "value": "19.25",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T00:30:00.000-04:00"
                },
                {
                  "value": "19.21",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T00:45:00.000-04:00"
                },
                {
                  "value": "19.18",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T01:00:00.000-04:00"
                },
                {
                  "value": "19.13",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T01:15:00.000-04:00"
                },
                {
                  "value": "19.10",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T01:30:00.000-04:00"
                },
                {
                  "value": "19.05",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T01:45:00.000-04:00"
                },
                {
                  "value": "19.02",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T02:00:00.000-04:00"
                },
                {
                  "value": "18.99",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T02:15:00.000-04:00"
                },
                {
                  "value": "18.96",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T02:30:00.000-04:00"
                },
                {
                  "value": "18.93",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T02:45:00.000-04:00"
                },
                {
                  "value": "18.90",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T03:00:00.000-04:00"
                },
                {
                  "value": "18.86",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T03:15:00.000-04:00"
                },
                {
                  "value": "18.83",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T03:30:00.000-04:00"
                },
                {
                  "value": "18.79",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T03:45:00.000-04:00"
                },
                {
                  "value": "18.76",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T04:00:00.000-04:00"
                },
                {
                  "value": "18.72",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T04:15:00.000-04:00"
                },
                {
                  "value": "18.69",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T04:30:00.000-04:00"
                },
                {
                  "value": "18.67",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T04:45:00.000-04:00"
                },
                {
                  "value": "18.63",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T05:00:00.000-04:00"
                },
                {
                  "value": "18.60",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T05:15:00.000-04:00"
                },
                {
                  "value": "18.58",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T05:30:00.000-04:00"
                },
                {
                  "value": "18.54",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T05:45:00.000-04:00"
                },
                {
                  "value": "18.52",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T06:00:00.000-04:00"
                },
                {
                  "value": "18.48",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T06:15:00.000-04:00"
                },
                {
                  "value": "18.45",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T06:30:00.000-04:00"
                },
                {
                  "value": "18.42",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T06:45:00.000-04:00"
                },
                {
                  "value": "18.39",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T07:00:00.000-04:00"
                },
                {
                  "value": "18.36",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T07:15:00.000-04:00"
                },
                {
                  "value": "18.34",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T07:30:00.000-04:00"
                },
                {
                  "value": "18.31",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T07:45:00.000-04:00"
                },
                {
                  "value": "18.28",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T08:00:00.000-04:00"
                },
                {
                  "value": "18.25",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T08:15:00.000-04:00"
                },
                {
                  "value": "18.24",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T08:30:00.000-04:00"
                },
                {
                  "value": "18.20",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T08:45:00.000-04:00"
                },
                {
                  "value": "18.17",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T09:00:00.000-04:00"
                },
                {
                  "value": "18.14",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T09:15:00.000-04:00"
                },
                {
                  "value": "18.10",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T09:30:00.000-04:00"
                },
                {
                  "value": "18.08",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T09:45:00.000-04:00"
                },
                {
                  "value": "18.04",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T10:00:00.000-04:00"
                },
                {
                  "value": "18.01",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T10:15:00.000-04:00"
                },
                {
                  "value": "17.99",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T10:30:00.000-04:00"
                },
                {
                  "value": "17.97",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T10:45:00.000-04:00"
                },
                {
                  "value": "17.94",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T11:00:00.000-04:00"
                },
                {
                  "value": "17.91",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T11:15:00.000-04:00"
                },
                {
                  "value": "17.88",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T11:30:00.000-04:00"
                },
                {
                  "value": "17.86",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T11:45:00.000-04:00"
                },
                {
                  "value": "17.82",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T12:00:00.000-04:00"
                },
                {
                  "value": "17.81",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T12:15:00.000-04:00"
                },
                {
                  "value": "17.77",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T12:30:00.000-04:00"
                },
                {
                  "value": "17.74",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T12:45:00.000-04:00"
                },
                {
                  "value": "17.72",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T13:00:00.000-04:00"
                },
                {
                  "value": "17.69",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T13:15:00.000-04:00"
                },
                {
                  "value": "17.66",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T13:30:00.000-04:00"
                },
                {
                  "value": "17.63",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T13:45:00.000-04:00"
                },
                {
                  "value": "17.61",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T14:00:00.000-04:00"
                },
                {
                  "value": "17.58",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T14:15:00.000-04:00"
                },
                {
                  "value": "17.54",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T14:30:00.000-04:00"
                },
                {
                  "value": "17.52",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T14:45:00.000-04:00"
                },
                {
                  "value": "17.49",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T15:00:00.000-04:00"
                },
                {
                  "value": "17.46",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T15:15:00.000-04:00"
                },
                {
                  "value": "17.44",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T15:30:00.000-04:00"
                },
                {
                  "value": "17.41",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T15:45:00.000-04:00"
                },
                {
                  "value": "17.37",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T16:00:00.000-04:00"
                },
                {
                  "value": "17.34",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T16:15:00.000-04:00"
                },
                {
                  "value": "17.33",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T16:30:00.000-04:00"
                },
                {
                  "value": "17.30",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T16:45:00.000-04:00"
                },
                {
                  "value": "17.26",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T17:00:00.000-04:00"
                },
                {
                  "value": "17.23",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T17:15:00.000-04:00"
                },
                {
                  "value": "17.20",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T17:30:00.000-04:00"
                },
                {
                  "value": "17.18",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T17:45:00.000-04:00"
                },
                {
                  "value": "17.15",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T18:00:00.000-04:00"
                },
                {
                  "value": "17.11",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T18:15:00.000-04:00"
                },
                {
                  "value": "17.09",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T18:30:00.000-04:00"
                },
                {
                  "value": "17.06",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T18:45:00.000-04:00"
                },
                {
                  "value": "17.03",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T19:00:00.000-04:00"
                },
                {
                  "value": "17.00",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T19:15:00.000-04:00"
                },
                {
                  "value": "16.96",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T19:30:00.000-04:00"
                },
                {
                  "value": "16.94",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T19:45:00.000-04:00"
                },
                {
                  "value": "16.91",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T20:00:00.000-04:00"
                },
                {
                  "value": "16.88",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T20:15:00.000-04:00"
                },
                {
                  "value": "16.85",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T20:30:00.000-04:00"
                },
                {
                  "value": "16.81",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T20:45:00.000-04:00"
                },
                {
                  "value": "16.77",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T21:00:00.000-04:00"
                },
                {
                  "value": "16.75",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T21:15:00.000-04:00"
                },
                {
                  "value": "16.72",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T21:30:00.000-04:00"
                },
                {
                  "value": "16.69",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T21:45:00.000-04:00"
                },
                {
                  "value": "16.64",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T22:00:00.000-04:00"
                },
                {
                  "value": "16.62",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T22:15:00.000-04:00"
                },
                {
                  "value": "16.58",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T22:30:00.000-04:00"
                },
                {
                  "value": "16.56",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T22:45:00.000-04:00"
                },
                {
                  "value": "16.52",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T23:00:00.000-04:00"
                },
                {
                  "value": "16.49",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T23:15:00.000-04:00"
                },
                {
                  "value": "16.46",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T23:30:00.000-04:00"
                },
                {
                  "value": "16.42",
                  "qualifiers": [
                    "A"
                  ],
                  "dateTime": "2024-09-30T23:45:00.000-04:00"
                }
              ],
              "qualifier": [
                {
                  "qualifierCode": "A",
                  "qualifierDescription": "Approved for publication -- Processing and review completed.",
                  "qualifierID": 0,
                  "network": "NWIS",
                  "vocabulary": "uv_rmk_cd"
                }
              ],
              "qualityControlLevel": [],
              "method": [
                {
                  "methodDescription": "",
                  "methodID": 90173
                }
              ],
              "source": [],
              "offset": [],
              "sample": [],
              "censorCode": []
            }
          ],
          "name": "USGS:03443000:00065:00000"
        },
        {
          "sourceInfo": {
            "siteName": "FRENCH BROAD RIVER NEAR FLETCHER, NC",
            "siteCode": [
              {
                "value": "03447687",
                "network": "NWIS",
                "agencyCode": "USGS"
              }
            ],
            "timeZoneInfo": {
              "defaultTimeZone": {
                "zoneOffset": "-05:00",
                "zoneAbbreviation": "EST"
              },
              "daylightSavingsTimeZone": {
                "zoneOffset": "-04:00",
                "zoneAbbreviation": "EDT"
              },
              "siteUsesDaylightSavingsTime": true
            },
            "geoLocation": {
              "geogLocation": {
                "srs": "EPSG:4326",
                "latitude": 35.42916667,
                "longitude": -82.5525
              },
              "localSiteXY": []
            },
            "note": [],
            "siteType": [],
            "siteProperty": [
              {
                "value": "ST",
                "name": "siteTypeCd"
              },
              {
                "value": "06010105",
                "name": "hucCd"
              },
              {
                "value": "37",
                "name": "stateCd"
              },
              {
                "value": "37089",
                "name": "countyCd"
              }
            ]
          },
          "variable": {
            "variableCode": [
              {
                "value": "00060",
                "network": "NWIS",
                "vocabulary": "NWIS:UnitValues",
                "variableID": 45807197,
                "default": true
              }
            ],
            "variableName": "Streamflow, ft&#179;/s",
            "variableDescription": "Discharge, cubic feet per second",
            "valueType": "Derived Value",
            "unit": {
              "unitCode": "ft3/s"
            },
            "options": {
              "option": [
                {
                  "name": "Statistic",
                  "optionCode": "00000"
                }
              ]
            },
            "note": [],
            "noDataValue": -999999,
            "variableProperty": [],
            "oid": "45807197"
          },
          "values": [
            {
              "value": [
                {
                  "value": "1010",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:00:00.000-04:00"
                },
                {
                  "value": "1010",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:15:00.000-04:00"
                },
                {
                  "value": "1010",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:30:00.000-04:00"
                },
                {
                  "value": "1010",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:45:00.000-04:00"
                },
                {
                  "value": "1010",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:00:00.000-04:00"
                },
                {
                  "value": "1010",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:15:00.000-04:00"
                },
                {
                  "value": "1010",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:30:00.000-04:00"
                },
                {
                  "value": "1010",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:45:00.000-04:00"
                },
                {
                  "value": "1010",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:00:00.000-04:00"
                },
                {
                  "value": "1020",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:15:00.000-04:00"
                },
                {
                  "value": "1020",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:30:00.000-04:00"
                },
                {
                  "value": "1020",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:45:00.000-04:00"
                },
                {
                  "value": "1010",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:00:00.000-04:00"
                },
                {
                  "value": "1010",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:15:00.000-04:00"
                },
                {
                  "value": "1010",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:30:00.000-04:00"
                },
                {
                  "value": "1010",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:45:00.000-04:00"
                },
                {
                  "value": "1030",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:00:00.000-04:00"
                },
                {
                  "value": "1030",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:15:00.000-04:00"
                },
                {
                  "value": "1050",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:30:00.000-04:00"
                },
                {
                  "value": "1060",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:45:00.000-04:00"
                },
                {
                  "value": "1070",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:00:00.000-04:00"
                },
                {
                  "value": "1090",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:15:00.000-04:00"
                },
                {
                  "value": "1120",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:30:00.000-04:00"
                },
                {
                  "value": "1150",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:45:00.000-04:00"
                },
                {
                  "value": "1170",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:00:00.000-04:00"
                },
                {
                  "value": "1200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:15:00.000-04:00"
                },
                {
                  "value": "1240",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:30:00.000-04:00"
                },
                {
                  "value": "1280",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:45:00.000-04:00"
                },
                {
                  "value": "1330",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:00:00.000-04:00"
                },
                {
                  "value": "1370",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:15:00.000-04:00"
                },
                {
                  "value": "1420",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:30:00.000-04:00"
                },
                {
                  "value": "1460",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:45:00.000-04:00"
                },
                {
                  "value": "1520",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:00:00.000-04:00"
                },
                {
                  "value": "1560",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:15:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:30:00.000-04:00"
                },
                {
                  "value": "1640",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:45:00.000-04:00"
                },
                {
                  "value": "1670",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:00:00.000-04:00"
                },
                {
                  "value": "1710",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:15:00.000-04:00"
                },
                {
                  "value": "1740",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:30:00.000-04:00"
                },
                {
                  "value": "1770",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:45:00.000-04:00"
                },
                {
                  "value": "1800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:00:00.000-04:00"
                },
                {
                  "value": "1820",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:15:00.000-04:00"
                },
                {
                  "value": "1840",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:30:00.000-04:00"
                },
                {
                  "value": "1870",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:45:00.000-04:00"
                },
                {
                  "value": "1870",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:00:00.000-04:00"
                },
                {
                  "value": "1900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:15:00.000-04:00"
                },
                {
                  "value": "1900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:30:00.000-04:00"
                },
                {
                  "value": "1920",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:45:00.000-04:00"
                },
                {
                  "value": "1920",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:00:00.000-04:00"
                },
                {
                  "value": "1930",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:15:00.000-04:00"
                },
                {
                  "value": "1940",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:30:00.000-04:00"
                },
                {
                  "value": "1960",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:45:00.000-04:00"
                },
                {
                  "value": "1960",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:00:00.000-04:00"
                },
                {
                  "value": "1970",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:15:00.000-04:00"
                },
                {
                  "value": "1970",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:30:00.000-04:00"
                },
                {
                  "value": "1970",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:45:00.000-04:00"
                },
                {
                  "value": "1980",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:00:00.000-04:00"
                },
                {
                  "value": "1970",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:15:00.000-04:00"
                },
                {
                  "value": "1970",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:30:00.000-04:00"
                },
                {
                  "value": "1970",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:45:00.000-04:00"
                },
                {
                  "value": "1970",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:00:00.000-04:00"
                },
                {
                  "value": "1970",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:15:00.000-04:00"
                },
                {
                  "value": "1970",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:30:00.000-04:00"
                },
                {
                  "value": "1970",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:45:00.000-04:00"
                },
                {
                  "value": "1960",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:00:00.000-04:00"
                },
                {
                  "value": "1960",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:15:00.000-04:00"
                },
                {
                  "value": "1950",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:30:00.000-04:00"
                },
                {
                  "value": "1950",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:45:00.000-04:00"
                },
                {
                  "value": "1950",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:00:00.000-04:00"
                },
                {
                  "value": "1940",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:15:00.000-04:00"
                },
                {
                  "value": "1950",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:30:00.000-04:00"
                },
                {
                  "value": "1960",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:45:00.000-04:00"
                },
                {
                  "value": "1950",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:00:00.000-04:00"
                },
                {
                  "value": "1960",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:15:00.000-04:00"
                },
                {
                  "value": "2020",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:30:00.000-04:00"
                },
                {
                  "value": "2140",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:45:00.000-04:00"
                },
                {
                  "value": "2400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:00:00.000-04:00"
                },
                {
                  "value": "2670",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:15:00.000-04:00"
                },
                {
                  "value": "2940",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:30:00.000-04:00"
                },
                {
                  "value": "3160",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:45:00.000-04:00"
                },
                {
                  "value": "3420",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:00:00.000-04:00"
                },
                {
                  "value": "3700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:15:00.000-04:00"
                },
                {
                  "value": "4020",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:30:00.000-04:00"
                },
                {
                  "value": "4340",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:45:00.000-04:00"
                },
                {
                  "value": "4650",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:00:00.000-04:00"
                },
                {
                  "value": "4960",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:15:00.000-04:00"
                },
                {
                  "value": "5210",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:30:00.000-04:00"
                },
                {
                  "value": "5530",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:45:00.000-04:00"
                },
                {
                  "value": "5810",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:00:00.000-04:00"
                },
                {
                  "value": "6070",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:15:00.000-04:00"
                },
                {
                  "value": "6310",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:30:00.000-04:00"
                },
                {
                  "value": "6550",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:45:00.000-04:00"
                },
                {
                  "value": "6810",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:00:00.000-04:00"
                },
                {
                  "value": "7030",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:15:00.000-04:00"
                },
                {
                  "value": "7100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:30:00.000-04:00"
                },
                {
                  "value": "7200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:45:00.000-04:00"
                },
                {
                  "value": "7280",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:00:00.000-04:00"
                },
                {
                  "value": "7380",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:15:00.000-04:00"
                },
                {
                  "value": "7470",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:30:00.000-04:00"
                },
                {
                  "value": "7540",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:45:00.000-04:00"
                },
                {
                  "value": "7660",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:00:00.000-04:00"
                },
                {
                  "value": "7720",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:15:00.000-04:00"
                },
                {
                  "value": "7800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:30:00.000-04:00"
                },
                {
                  "value": "7930",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:45:00.000-04:00"
                },
                {
                  "value": "8050",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:00:00.000-04:00"
                },
                {
                  "value": "8270",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:15:00.000-04:00"
                },
                {
                  "value": "8440",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:30:00.000-04:00"
                },
                {
                  "value": "8610",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:45:00.000-04:00"
                },
                {
                  "value": "8790",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:00:00.000-04:00"
                },
                {
                  "value": "8890",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:15:00.000-04:00"
                },
                {
                  "value": "9000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:30:00.000-04:00"
                },
                {
                  "value": "9080",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:45:00.000-04:00"
                },
                {
                  "value": "9110",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:00:00.000-04:00"
                },
                {
                  "value": "9200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:15:00.000-04:00"
                },
                {
                  "value": "9230",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:30:00.000-04:00"
                },
                {
                  "value": "9280",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:45:00.000-04:00"
                },
                {
                  "value": "9360",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:00:00.000-04:00"
                },
                {
                  "value": "9420",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:15:00.000-04:00"
                },
                {
                  "value": "9490",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:30:00.000-04:00"
                },
                {
                  "value": "9570",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:45:00.000-04:00"
                },
                {
                  "value": "9660",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:00:00.000-04:00"
                },
                {
                  "value": "9720",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:15:00.000-04:00"
                },
                {
                  "value": "9880",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:30:00.000-04:00"
                },
                {
                  "value": "9990",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:45:00.000-04:00"
                },
                {
                  "value": "10100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:00:00.000-04:00"
                },
                {
                  "value": "10200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:15:00.000-04:00"
                },
                {
                  "value": "10300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:30:00.000-04:00"
                },
                {
                  "value": "10400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:45:00.000-04:00"
                },
                {
                  "value": "10600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:00:00.000-04:00"
                },
                {
                  "value": "10800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:15:00.000-04:00"
                },
                {
                  "value": "11000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:30:00.000-04:00"
                },
                {
                  "value": "11100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:45:00.000-04:00"
                },
                {
                  "value": "11300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:00:00.000-04:00"
                },
                {
                  "value": "11400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:15:00.000-04:00"
                },
                {
                  "value": "11600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:30:00.000-04:00"
                },
                {
                  "value": "11800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:45:00.000-04:00"
                },
                {
                  "value": "11900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:00:00.000-04:00"
                },
                {
                  "value": "12100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:15:00.000-04:00"
                },
                {
                  "value": "12300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:30:00.000-04:00"
                },
                {
                  "value": "12500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:45:00.000-04:00"
                },
                {
                  "value": "12700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:00:00.000-04:00"
                },
                {
                  "value": "12900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:15:00.000-04:00"
                },
                {
                  "value": "13100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:30:00.000-04:00"
                },
                {
                  "value": "13400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:45:00.000-04:00"
                },
                {
                  "value": "13600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:00:00.000-04:00"
                },
                {
                  "value": "13800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:15:00.000-04:00"
                },
                {
                  "value": "14000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:30:00.000-04:00"
                },
                {
                  "value": "14300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:45:00.000-04:00"
                },
                {
                  "value": "14500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:00:00.000-04:00"
                },
                {
                  "value": "14700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:15:00.000-04:00"
                },
                {
                  "value": "15000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:30:00.000-04:00"
                },
                {
                  "value": "15400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:45:00.000-04:00"
                },
                {
                  "value": "15500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:00:00.000-04:00"
                },
                {
                  "value": "15700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:15:00.000-04:00"
                },
                {
                  "value": "16000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:30:00.000-04:00"
                },
                {
                  "value": "16200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:45:00.000-04:00"
                },
                {
                  "value": "16300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:00:00.000-04:00"
                },
                {
                  "value": "16600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:15:00.000-04:00"
                },
                {
                  "value": "16800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:30:00.000-04:00"
                },
                {
                  "value": "17100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:45:00.000-04:00"
                },
                {
                  "value": "17200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:00:00.000-04:00"
                },
                {
                  "value": "17400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:15:00.000-04:00"
                },
                {
                  "value": "17600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:30:00.000-04:00"
                },
                {
                  "value": "17700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:45:00.000-04:00"
                },
                {
                  "value": "18000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:00:00.000-04:00"
                },
                {
                  "value": "18000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:15:00.000-04:00"
                },
                {
                  "value": "18300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:30:00.000-04:00"
                },
                {
                  "value": "18300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:45:00.000-04:00"
                },
                {
                  "value": "18400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:00:00.000-04:00"
                },
                {
                  "value": "18500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:15:00.000-04:00"
                },
                {
                  "value": "18500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:30:00.000-04:00"
                },
                {
                  "value": "18500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:45:00.000-04:00"
                },
                {
                  "value": "18700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:00:00.000-04:00"
                },
                {
                  "value": "18800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:15:00.000-04:00"
                },
                {
                  "value": "18700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:30:00.000-04:00"
                },
                {
                  "value": "18900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:45:00.000-04:00"
                },
                {
                  "value": "18800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:00:00.000-04:00"
                },
                {
                  "value": "18900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:15:00.000-04:00"
                },
                {
                  "value": "18800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:30:00.000-04:00"
                },
                {
                  "value": "18900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:45:00.000-04:00"
                },
                {
                  "value": "19100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:00:00.000-04:00"
                },
                {
                  "value": "19000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:15:00.000-04:00"
                },
                {
                  "value": "19000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:30:00.000-04:00"
                },
                {
                  "value": "19100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:45:00.000-04:00"
                },
                {
                  "value": "19100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:00:00.000-04:00"
                },
                {
                  "value": "19300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:15:00.000-04:00"
                },
                {
                  "value": "19300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:30:00.000-04:00"
                },
                {
                  "value": "19300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:45:00.000-04:00"
                },
                {
                  "value": "19500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:00:00.000-04:00"
                },
                {
                  "value": "19500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:15:00.000-04:00"
                },
                {
                  "value": "19700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:30:00.000-04:00"
                },
                {
                  "value": "19800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:45:00.000-04:00"
                },
                {
                  "value": "19900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:00:00.000-04:00"
                },
                {
                  "value": "20100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:15:00.000-04:00"
                },
                {
                  "value": "20300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:30:00.000-04:00"
                },
                {
                  "value": "20300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:45:00.000-04:00"
                },
                {
                  "value": "20200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:00:00.000-04:00"
                },
                {
                  "value": "20500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:15:00.000-04:00"
                },
                {
                  "value": "20500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:30:00.000-04:00"
                },
                {
                  "value": "20700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:45:00.000-04:00"
                },
                {
                  "value": "20900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:00:00.000-04:00"
                },
                {
                  "value": "20800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:15:00.000-04:00"
                },
                {
                  "value": "21000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:30:00.000-04:00"
                },
                {
                  "value": "21100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:45:00.000-04:00"
                },
                {
                  "value": "21400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:00:00.000-04:00"
                },
                {
                  "value": "21500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:15:00.000-04:00"
                },
                {
                  "value": "21600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:30:00.000-04:00"
                },
                {
                  "value": "21700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:45:00.000-04:00"
                },
                {
                  "value": "22000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:00:00.000-04:00"
                },
                {
                  "value": "22100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:15:00.000-04:00"
                },
                {
                  "value": "22300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:30:00.000-04:00"
                },
                {
                  "value": "22400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:45:00.000-04:00"
                },
                {
                  "value": "22600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:00:00.000-04:00"
                },
                {
                  "value": "23100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:15:00.000-04:00"
                },
                {
                  "value": "23300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:30:00.000-04:00"
                },
                {
                  "value": "23400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:45:00.000-04:00"
                },
                {
                  "value": "23700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:00:00.000-04:00"
                },
                {
                  "value": "23900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:15:00.000-04:00"
                },
                {
                  "value": "24300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:30:00.000-04:00"
                },
                {
                  "value": "24800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:45:00.000-04:00"
                },
                {
                  "value": "24800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:00:00.000-04:00"
                },
                {
                  "value": "25300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:15:00.000-04:00"
                },
                {
                  "value": "25700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:30:00.000-04:00"
                },
                {
                  "value": "26000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:45:00.000-04:00"
                },
                {
                  "value": "26600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:00:00.000-04:00"
                },
                {
                  "value": "26900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:15:00.000-04:00"
                },
                {
                  "value": "27300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:30:00.000-04:00"
                },
                {
                  "value": "27800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:45:00.000-04:00"
                },
                {
                  "value": "28600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:00:00.000-04:00"
                },
                {
                  "value": "29500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:15:00.000-04:00"
                },
                {
                  "value": "29900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:30:00.000-04:00"
                },
                {
                  "value": "30900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:45:00.000-04:00"
                },
                {
                  "value": "31500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:00:00.000-04:00"
                },
                {
                  "value": "32400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:15:00.000-04:00"
                },
                {
                  "value": "33000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:30:00.000-04:00"
                },
                {
                  "value": "33900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:45:00.000-04:00"
                },
                {
                  "value": "35100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T11:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T11:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T11:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T12:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T12:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T12:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T12:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T13:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T13:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T13:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T13:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T14:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T14:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T14:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T14:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T15:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T15:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T15:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T15:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T16:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T16:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T16:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T16:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T17:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T17:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T17:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T17:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T18:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T18:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T18:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T18:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T19:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T19:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T19:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T19:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T20:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T20:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T20:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T20:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T21:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T21:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T21:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T21:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T22:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T22:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T22:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T22:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T23:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T23:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T23:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-27T23:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T00:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T00:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T00:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T00:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T01:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T01:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T01:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T01:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T02:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T02:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T02:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T02:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T03:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T03:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T03:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T03:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T04:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T04:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T04:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T04:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T05:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T05:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T05:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T05:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T06:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T06:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T06:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T06:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T07:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T07:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T07:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T07:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T08:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T08:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T08:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T08:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T09:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T09:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T09:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T09:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T10:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T10:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T10:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T10:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T11:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T11:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T11:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T11:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T12:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T12:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T12:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T12:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T13:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T13:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T13:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T13:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T14:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T14:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T14:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T14:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T15:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T15:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T15:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T15:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T16:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T16:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T16:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T16:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T17:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T17:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T17:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T17:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T18:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T18:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T18:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T18:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T19:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T19:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T19:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T19:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T20:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T20:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T20:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T20:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T21:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T21:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T21:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T21:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T22:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T22:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T22:30:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T22:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T23:00:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T23:15:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Rat"
                  ],
                  "dateTime": "2024-09-28T23:30:00.000-04:00"
                },
                {
                  "value": "35500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:45:00.000-04:00"
                },
                {
                  "value": "35500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:00:00.000-04:00"
                },
                {
                  "value": "35300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:15:00.000-04:00"
                },
                {
                  "value": "34900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:30:00.000-04:00"
                },
                {
                  "value": "34600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:45:00.000-04:00"
                },
                {
                  "value": "34400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:00:00.000-04:00"
                },
                {
                  "value": "34100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:15:00.000-04:00"
                },
                {
                  "value": "33900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:30:00.000-04:00"
                },
                {
                  "value": "33600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:45:00.000-04:00"
                },
                {
                  "value": "33300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:00:00.000-04:00"
                },
                {
                  "value": "33100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:15:00.000-04:00"
                },
                {
                  "value": "32900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:30:00.000-04:00"
                },
                {
                  "value": "32600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:45:00.000-04:00"
                },
                {
                  "value": "32300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:00:00.000-04:00"
                },
                {
                  "value": "32100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:15:00.000-04:00"
                },
                {
                  "value": "32000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:30:00.000-04:00"
                },
                {
                  "value": "31400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:45:00.000-04:00"
                },
                {
                  "value": "31500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:00:00.000-04:00"
                },
                {
                  "value": "31000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:15:00.000-04:00"
                },
                {
                  "value": "31000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:30:00.000-04:00"
                },
                {
                  "value": "30600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:45:00.000-04:00"
                },
                {
                  "value": "30600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:00:00.000-04:00"
                },
                {
                  "value": "30300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:15:00.000-04:00"
                },
                {
                  "value": "30000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:30:00.000-04:00"
                },
                {
                  "value": "29600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:45:00.000-04:00"
                },
                {
                  "value": "29700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:00:00.000-04:00"
                },
                {
                  "value": "29000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:15:00.000-04:00"
                },
                {
                  "value": "29000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:30:00.000-04:00"
                },
                {
                  "value": "28900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:45:00.000-04:00"
                },
                {
                  "value": "28600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:00:00.000-04:00"
                },
                {
                  "value": "28500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:15:00.000-04:00"
                },
                {
                  "value": "28100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:30:00.000-04:00"
                },
                {
                  "value": "27900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:45:00.000-04:00"
                },
                {
                  "value": "27800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:00:00.000-04:00"
                },
                {
                  "value": "27600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:15:00.000-04:00"
                },
                {
                  "value": "27500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:30:00.000-04:00"
                },
                {
                  "value": "27200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:45:00.000-04:00"
                },
                {
                  "value": "27000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:00:00.000-04:00"
                },
                {
                  "value": "26800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:15:00.000-04:00"
                },
                {
                  "value": "26600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:30:00.000-04:00"
                },
                {
                  "value": "26300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:45:00.000-04:00"
                },
                {
                  "value": "26200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:00:00.000-04:00"
                },
                {
                  "value": "26100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:15:00.000-04:00"
                },
                {
                  "value": "25900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:30:00.000-04:00"
                },
                {
                  "value": "25800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:45:00.000-04:00"
                },
                {
                  "value": "25600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:00:00.000-04:00"
                },
                {
                  "value": "25400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:15:00.000-04:00"
                },
                {
                  "value": "25200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:30:00.000-04:00"
                },
                {
                  "value": "24900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:45:00.000-04:00"
                },
                {
                  "value": "24900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:00:00.000-04:00"
                },
                {
                  "value": "24600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:15:00.000-04:00"
                },
                {
                  "value": "24500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:30:00.000-04:00"
                },
                {
                  "value": "24200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:45:00.000-04:00"
                },
                {
                  "value": "24200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:00:00.000-04:00"
                },
                {
                  "value": "24000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:15:00.000-04:00"
                },
                {
                  "value": "23600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:30:00.000-04:00"
                },
                {
                  "value": "23500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:45:00.000-04:00"
                },
                {
                  "value": "23400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:00:00.000-04:00"
                },
                {
                  "value": "23200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:15:00.000-04:00"
                },
                {
                  "value": "22800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:30:00.000-04:00"
                },
                {
                  "value": "22900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:45:00.000-04:00"
                },
                {
                  "value": "22800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:00:00.000-04:00"
                },
                {
                  "value": "22500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:15:00.000-04:00"
                },
                {
                  "value": "22300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:30:00.000-04:00"
                },
                {
                  "value": "22100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:45:00.000-04:00"
                },
                {
                  "value": "21900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:00:00.000-04:00"
                },
                {
                  "value": "21800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:15:00.000-04:00"
                },
                {
                  "value": "21600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:30:00.000-04:00"
                },
                {
                  "value": "21400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:45:00.000-04:00"
                },
                {
                  "value": "21300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:00:00.000-04:00"
                },
                {
                  "value": "21200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:15:00.000-04:00"
                },
                {
                  "value": "21000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:30:00.000-04:00"
                },
                {
                  "value": "20700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:45:00.000-04:00"
                },
                {
                  "value": "20500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:00:00.000-04:00"
                },
                {
                  "value": "20300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:15:00.000-04:00"
                },
                {
                  "value": "20100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:30:00.000-04:00"
                },
                {
                  "value": "20000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:45:00.000-04:00"
                },
                {
                  "value": "19800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:00:00.000-04:00"
                },
                {
                  "value": "19700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:15:00.000-04:00"
                },
                {
                  "value": "19500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:30:00.000-04:00"
                },
                {
                  "value": "19400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:45:00.000-04:00"
                },
                {
                  "value": "19300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:00:00.000-04:00"
                },
                {
                  "value": "19100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:15:00.000-04:00"
                },
                {
                  "value": "19000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:30:00.000-04:00"
                },
                {
                  "value": "18700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:45:00.000-04:00"
                },
                {
                  "value": "18600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:00:00.000-04:00"
                },
                {
                  "value": "18400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:15:00.000-04:00"
                },
                {
                  "value": "18300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:30:00.000-04:00"
                },
                {
                  "value": "18100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:45:00.000-04:00"
                },
                {
                  "value": "18100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:00:00.000-04:00"
                },
                {
                  "value": "17800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:15:00.000-04:00"
                },
                {
                  "value": "17800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:30:00.000-04:00"
                },
                {
                  "value": "17600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:45:00.000-04:00"
                },
                {
                  "value": "17500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:00:00.000-04:00"
                },
                {
                  "value": "17300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:15:00.000-04:00"
                },
                {
                  "value": "17200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:30:00.000-04:00"
                },
                {
                  "value": "17000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:45:00.000-04:00"
                },
                {
                  "value": "16900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:00:00.000-04:00"
                },
                {
                  "value": "16800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:15:00.000-04:00"
                },
                {
                  "value": "16600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:30:00.000-04:00"
                },
                {
                  "value": "16600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:45:00.000-04:00"
                },
                {
                  "value": "16400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:00:00.000-04:00"
                },
                {
                  "value": "16300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:15:00.000-04:00"
                },
                {
                  "value": "16200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:30:00.000-04:00"
                },
                {
                  "value": "16000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:45:00.000-04:00"
                },
                {
                  "value": "15900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:00:00.000-04:00"
                },
                {
                  "value": "15800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:15:00.000-04:00"
                },
                {
                  "value": "15600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:30:00.000-04:00"
                },
                {
                  "value": "15600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:45:00.000-04:00"
                },
                {
                  "value": "15500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:00:00.000-04:00"
                },
                {
                  "value": "15300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:15:00.000-04:00"
                },
                {
                  "value": "15200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:30:00.000-04:00"
                },
                {
                  "value": "15100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:45:00.000-04:00"
                },
                {
                  "value": "15000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:00:00.000-04:00"
                },
                {
                  "value": "14900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:15:00.000-04:00"
                },
                {
                  "value": "14800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:30:00.000-04:00"
                },
                {
                  "value": "14700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:45:00.000-04:00"
                },
                {
                  "value": "14600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:00:00.000-04:00"
                },
                {
                  "value": "14500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:15:00.000-04:00"
                },
                {
                  "value": "14300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:30:00.000-04:00"
                },
                {
                  "value": "14300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:45:00.000-04:00"
                },
                {
                  "value": "14200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:00:00.000-04:00"
                },
                {
                  "value": "14100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:15:00.000-04:00"
                },
                {
                  "value": "14000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:30:00.000-04:00"
                },
                {
                  "value": "13900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:45:00.000-04:00"
                },
                {
                  "value": "13800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:00:00.000-04:00"
                },
                {
                  "value": "13600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:15:00.000-04:00"
                },
                {
                  "value": "13500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:30:00.000-04:00"
                },
                {
                  "value": "13500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:45:00.000-04:00"
                },
                {
                  "value": "13400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:00:00.000-04:00"
                },
                {
                  "value": "13200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:15:00.000-04:00"
                },
                {
                  "value": "13100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:30:00.000-04:00"
                },
                {
                  "value": "13100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:45:00.000-04:00"
                },
                {
                  "value": "12900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:00:00.000-04:00"
                },
                {
                  "value": "12900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:15:00.000-04:00"
                },
                {
                  "value": "12700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:30:00.000-04:00"
                },
                {
                  "value": "12700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:45:00.000-04:00"
                },
                {
                  "value": "12600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:00:00.000-04:00"
                },
                {
                  "value": "12500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:15:00.000-04:00"
                },
                {
                  "value": "12500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:30:00.000-04:00"
                },
                {
                  "value": "12400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:45:00.000-04:00"
                },
                {
                  "value": "12300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:00:00.000-04:00"
                },
                {
                  "value": "12300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:15:00.000-04:00"
                },
                {
                  "value": "12200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:30:00.000-04:00"
                },
                {
                  "value": "12100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:45:00.000-04:00"
                },
                {
                  "value": "12000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:00:00.000-04:00"
                },
                {
                  "value": "11900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:15:00.000-04:00"
                },
                {
                  "value": "11900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:30:00.000-04:00"
                },
                {
                  "value": "11800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:45:00.000-04:00"
                },
                {
                  "value": "11700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:00:00.000-04:00"
                },
                {
                  "value": "11700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:15:00.000-04:00"
                },
                {
                  "value": "11600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:30:00.000-04:00"
                },
                {
                  "value": "11500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:45:00.000-04:00"
                },
                {
                  "value": "11500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:00:00.000-04:00"
                },
                {
                  "value": "11400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:15:00.000-04:00"
                },
                {
                  "value": "11300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:30:00.000-04:00"
                },
                {
                  "value": "11300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:45:00.000-04:00"
                },
                {
                  "value": "11200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:00:00.000-04:00"
                },
                {
                  "value": "11100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:15:00.000-04:00"
                },
                {
                  "value": "11100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:30:00.000-04:00"
                },
                {
                  "value": "11000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:45:00.000-04:00"
                },
                {
                  "value": "11000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:00:00.000-04:00"
                },
                {
                  "value": "10900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:15:00.000-04:00"
                },
                {
                  "value": "10800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:30:00.000-04:00"
                },
                {
                  "value": "10800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:45:00.000-04:00"
                },
                {
                  "value": "10700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:00:00.000-04:00"
                },
                {
                  "value": "10700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:15:00.000-04:00"
                },
                {
                  "value": "10600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:30:00.000-04:00"
                },
                {
                  "value": "10500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:45:00.000-04:00"
                },
                {
                  "value": "10400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:00:00.000-04:00"
                },
                {
                  "value": "10400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:15:00.000-04:00"
                },
                {
                  "value": "10300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:30:00.000-04:00"
                },
                {
                  "value": "10300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:45:00.000-04:00"
                },
                {
                  "value": "10200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:00:00.000-04:00"
                },
                {
                  "value": "10200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:15:00.000-04:00"
                },
                {
                  "value": "10200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:30:00.000-04:00"
                },
                {
                  "value": "10100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:45:00.000-04:00"
                },
                {
                  "value": "10100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:00:00.000-04:00"
                },
                {
                  "value": "10100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:15:00.000-04:00"
                },
                {
                  "value": "9990",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:30:00.000-04:00"
                },
                {
                  "value": "9980",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:45:00.000-04:00"
                },
                {
                  "value": "9920",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:00:00.000-04:00"
                },
                {
                  "value": "9900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:15:00.000-04:00"
                },
                {
                  "value": "9860",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:30:00.000-04:00"
                },
                {
                  "value": "9810",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:45:00.000-04:00"
                },
                {
                  "value": "9750",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:00:00.000-04:00"
                },
                {
                  "value": "9730",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:15:00.000-04:00"
                },
                {
                  "value": "9680",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:30:00.000-04:00"
                },
                {
                  "value": "9640",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:45:00.000-04:00"
                },
                {
                  "value": "9610",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:00:00.000-04:00"
                },
                {
                  "value": "9590",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:15:00.000-04:00"
                },
                {
                  "value": "9530",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:30:00.000-04:00"
                },
                {
                  "value": "9520",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:45:00.000-04:00"
                }
              ],
              "qualifier": [
                {
                  "qualifierCode": "Rat",
                  "qualifierDescription": "Rating being developed.",
                  "qualifierID": 0,
                  "network": "NWIS",
                  "vocabulary": "uv_rmk_cd"
                },
                {
                  "qualifierCode": "P",
                  "qualifierDescription": "Provisional data subject to revision.",
                  "qualifierID": 1,
                  "network": "NWIS",
                  "vocabulary": "uv_rmk_cd"
                }
              ],
              "qualityControlLevel": [],
              "method": [
                {
                  "methodDescription": "",
                  "methodID": 90184
                }
              ],
              "source": [],
              "offset": [],
              "sample": [],
              "censorCode": []
            }
          ],
          "name": "USGS:03447687:00060:00000"
        },
        {
          "sourceInfo": {
            "siteName": "FRENCH BROAD RIVER NEAR FLETCHER, NC",
            "siteCode": [
              {
                "value": "03447687",
                "network": "NWIS",
                "agencyCode": "USGS"
              }
            ],
            "timeZoneInfo": {
              "defaultTimeZone": {
                "zoneOffset": "-05:00",
                "zoneAbbreviation": "EST"
              },
              "daylightSavingsTimeZone": {
                "zoneOffset": "-04:00",
                "zoneAbbreviation": "EDT"
              },
              "siteUsesDaylightSavingsTime": true
            },
            "geoLocation": {
              "geogLocation": {
                "srs": "EPSG:4326",
                "latitude": 35.42916667,
                "longitude": -82.5525
              },
              "localSiteXY": []
            },
            "note": [],
            "siteType": [],
            "siteProperty": [
              {
                "value": "ST",
                "name": "siteTypeCd"
              },
              {
                "value": "06010105",
                "name": "hucCd"
              },
              {
                "value": "37",
                "name": "stateCd"
              },
              {
                "value": "37089",
                "name": "countyCd"
              }
            ]
          },
          "variable": {
            "variableCode": [
              {
                "value": "00065",
                "network": "NWIS",
                "vocabulary": "NWIS:UnitValues",
                "variableID": 45807202,
                "default": true
              }
            ],
            "variableName": "Gage height, ft",
            "variableDescription": "Gage height, feet",
            "valueType": "Derived Value",
            "unit": {
              "unitCode": "ft"
            },
            "options": {
              "option": [
                {
                  "name": "Statistic",
                  "optionCode": "00000"
                }
              ]
            },
            "note": [],
            "noDataValue": -999999,
            "variableProperty": [],
            "oid": "45807202"
          },
          "values": [
            {
              "value": [
                {
                  "value": "4.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:00:00.000-04:00"
                },
                {
                  "value": "4.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:15:00.000-04:00"
                },
                {
                  "value": "4.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:30:00.000-04:00"
                },
                {
                  "value": "4.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:45:00.000-04:00"
                },
                {
                  "value": "4.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:00:00.000-04:00"
                },
                {
                  "value": "4.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:15:00.000-04:00"
                },
                {
                  "value": "4.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:30:00.000-04:00"
                },
                {
                  "value": "4.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:45:00.000-04:00"
                },
                {
                  "value": "4.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:00:00.000-04:00"
                },
                {
                  "value": "4.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:15:00.000-04:00"
                },
                {
                  "value": "4.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:30:00.000-04:00"
                },
                {
                  "value": "4.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:45:00.000-04:00"
                },
                {
                  "value": "4.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:00:00.000-04:00"
                },
                {
                  "value": "4.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:15:00.000-04:00"
                },
                {
                  "value": "4.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:30:00.000-04:00"
                },
                {
                  "value": "4.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:45:00.000-04:00"
                },
                {
                  "value": "4.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:00:00.000-04:00"
                },
                {
                  "value": "4.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:15:00.000-04:00"
                },
                {
                  "value": "4.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:30:00.000-04:00"
                },
                {
                  "value": "4.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:45:00.000-04:00"
                },
                {
                  "value": "4.78",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:00:00.000-04:00"
                },
                {
                  "value": "4.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:15:00.000-04:00"
                },
                {
                  "value": "4.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:30:00.000-04:00"
                },
                {
                  "value": "4.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:45:00.000-04:00"
                },
                {
                  "value": "4.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:00:00.000-04:00"
                },
                {
                  "value": "4.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:15:00.000-04:00"
                },
                {
                  "value": "5.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:30:00.000-04:00"
                },
                {
                  "value": "5.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:45:00.000-04:00"
                },
                {
                  "value": "5.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:00:00.000-04:00"
                },
                {
                  "value": "5.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:15:00.000-04:00"
                },
                {
                  "value": "5.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:30:00.000-04:00"
                },
                {
                  "value": "5.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:45:00.000-04:00"
                },
                {
                  "value": "5.42",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:00:00.000-04:00"
                },
                {
                  "value": "5.47",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:15:00.000-04:00"
                },
                {
                  "value": "5.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:30:00.000-04:00"
                },
                {
                  "value": "5.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:45:00.000-04:00"
                },
                {
                  "value": "5.62",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:00:00.000-04:00"
                },
                {
                  "value": "5.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:15:00.000-04:00"
                },
                {
                  "value": "5.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:30:00.000-04:00"
                },
                {
                  "value": "5.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:45:00.000-04:00"
                },
                {
                  "value": "5.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:00:00.000-04:00"
                },
                {
                  "value": "5.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:15:00.000-04:00"
                },
                {
                  "value": "5.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:30:00.000-04:00"
                },
                {
                  "value": "5.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:45:00.000-04:00"
                },
                {
                  "value": "5.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:00:00.000-04:00"
                },
                {
                  "value": "5.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:15:00.000-04:00"
                },
                {
                  "value": "5.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:30:00.000-04:00"
                },
                {
                  "value": "5.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:45:00.000-04:00"
                },
                {
                  "value": "5.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:00:00.000-04:00"
                },
                {
                  "value": "5.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:15:00.000-04:00"
                },
                {
                  "value": "5.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:30:00.000-04:00"
                },
                {
                  "value": "5.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:45:00.000-04:00"
                },
                {
                  "value": "5.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:00:00.000-04:00"
                },
                {
                  "value": "5.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:15:00.000-04:00"
                },
                {
                  "value": "6.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:30:00.000-04:00"
                },
                {
                  "value": "6.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:45:00.000-04:00"
                },
                {
                  "value": "6.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:00:00.000-04:00"
                },
                {
                  "value": "6.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:15:00.000-04:00"
                },
                {
                  "value": "6.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:30:00.000-04:00"
                },
                {
                  "value": "6.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:45:00.000-04:00"
                },
                {
                  "value": "5.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:00:00.000-04:00"
                },
                {
                  "value": "6.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:15:00.000-04:00"
                },
                {
                  "value": "5.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:30:00.000-04:00"
                },
                {
                  "value": "5.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:45:00.000-04:00"
                },
                {
                  "value": "5.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:00:00.000-04:00"
                },
                {
                  "value": "5.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:15:00.000-04:00"
                },
                {
                  "value": "5.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:30:00.000-04:00"
                },
                {
                  "value": "5.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:45:00.000-04:00"
                },
                {
                  "value": "5.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:00:00.000-04:00"
                },
                {
                  "value": "5.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:15:00.000-04:00"
                },
                {
                  "value": "5.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:30:00.000-04:00"
                },
                {
                  "value": "5.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:45:00.000-04:00"
                },
                {
                  "value": "5.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:00:00.000-04:00"
                },
                {
                  "value": "5.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:15:00.000-04:00"
                },
                {
                  "value": "6.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:30:00.000-04:00"
                },
                {
                  "value": "6.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:45:00.000-04:00"
                },
                {
                  "value": "6.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:00:00.000-04:00"
                },
                {
                  "value": "6.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:15:00.000-04:00"
                },
                {
                  "value": "7.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:30:00.000-04:00"
                },
                {
                  "value": "7.31",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:45:00.000-04:00"
                },
                {
                  "value": "7.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:00:00.000-04:00"
                },
                {
                  "value": "7.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:15:00.000-04:00"
                },
                {
                  "value": "8.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:30:00.000-04:00"
                },
                {
                  "value": "8.42",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:45:00.000-04:00"
                },
                {
                  "value": "8.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:00:00.000-04:00"
                },
                {
                  "value": "8.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:15:00.000-04:00"
                },
                {
                  "value": "9.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:30:00.000-04:00"
                },
                {
                  "value": "9.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:45:00.000-04:00"
                },
                {
                  "value": "9.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:00:00.000-04:00"
                },
                {
                  "value": "9.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:15:00.000-04:00"
                },
                {
                  "value": "10.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:30:00.000-04:00"
                },
                {
                  "value": "10.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:45:00.000-04:00"
                },
                {
                  "value": "10.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:00:00.000-04:00"
                },
                {
                  "value": "10.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:15:00.000-04:00"
                },
                {
                  "value": "10.54",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:30:00.000-04:00"
                },
                {
                  "value": "10.61",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:45:00.000-04:00"
                },
                {
                  "value": "10.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:00:00.000-04:00"
                },
                {
                  "value": "10.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:15:00.000-04:00"
                },
                {
                  "value": "10.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:30:00.000-04:00"
                },
                {
                  "value": "10.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:45:00.000-04:00"
                },
                {
                  "value": "10.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:00:00.000-04:00"
                },
                {
                  "value": "10.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:15:00.000-04:00"
                },
                {
                  "value": "11.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:30:00.000-04:00"
                },
                {
                  "value": "11.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:45:00.000-04:00"
                },
                {
                  "value": "11.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:00:00.000-04:00"
                },
                {
                  "value": "11.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:15:00.000-04:00"
                },
                {
                  "value": "11.51",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:30:00.000-04:00"
                },
                {
                  "value": "11.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:45:00.000-04:00"
                },
                {
                  "value": "11.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:00:00.000-04:00"
                },
                {
                  "value": "11.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:15:00.000-04:00"
                },
                {
                  "value": "12.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:30:00.000-04:00"
                },
                {
                  "value": "12.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:45:00.000-04:00"
                },
                {
                  "value": "12.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:00:00.000-04:00"
                },
                {
                  "value": "12.23",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:15:00.000-04:00"
                },
                {
                  "value": "12.26",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:30:00.000-04:00"
                },
                {
                  "value": "12.32",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:45:00.000-04:00"
                },
                {
                  "value": "12.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:00:00.000-04:00"
                },
                {
                  "value": "12.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:15:00.000-04:00"
                },
                {
                  "value": "12.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:30:00.000-04:00"
                },
                {
                  "value": "12.65",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:45:00.000-04:00"
                },
                {
                  "value": "12.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:00:00.000-04:00"
                },
                {
                  "value": "12.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:15:00.000-04:00"
                },
                {
                  "value": "12.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:30:00.000-04:00"
                },
                {
                  "value": "13.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:45:00.000-04:00"
                },
                {
                  "value": "13.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:00:00.000-04:00"
                },
                {
                  "value": "13.32",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:15:00.000-04:00"
                },
                {
                  "value": "13.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:30:00.000-04:00"
                },
                {
                  "value": "13.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:45:00.000-04:00"
                },
                {
                  "value": "13.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:00:00.000-04:00"
                },
                {
                  "value": "13.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:15:00.000-04:00"
                },
                {
                  "value": "13.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:30:00.000-04:00"
                },
                {
                  "value": "13.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:45:00.000-04:00"
                },
                {
                  "value": "14.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:00:00.000-04:00"
                },
                {
                  "value": "14.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:15:00.000-04:00"
                },
                {
                  "value": "14.27",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:30:00.000-04:00"
                },
                {
                  "value": "14.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:45:00.000-04:00"
                },
                {
                  "value": "14.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:00:00.000-04:00"
                },
                {
                  "value": "14.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:15:00.000-04:00"
                },
                {
                  "value": "14.77",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:30:00.000-04:00"
                },
                {
                  "value": "14.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:45:00.000-04:00"
                },
                {
                  "value": "15.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:00:00.000-04:00"
                },
                {
                  "value": "15.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:15:00.000-04:00"
                },
                {
                  "value": "15.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:30:00.000-04:00"
                },
                {
                  "value": "15.31",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:45:00.000-04:00"
                },
                {
                  "value": "15.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:00:00.000-04:00"
                },
                {
                  "value": "15.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:15:00.000-04:00"
                },
                {
                  "value": "15.61",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:30:00.000-04:00"
                },
                {
                  "value": "15.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:45:00.000-04:00"
                },
                {
                  "value": "15.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:00:00.000-04:00"
                },
                {
                  "value": "15.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:15:00.000-04:00"
                },
                {
                  "value": "16.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:30:00.000-04:00"
                },
                {
                  "value": "16.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:45:00.000-04:00"
                },
                {
                  "value": "16.27",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:00:00.000-04:00"
                },
                {
                  "value": "16.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:15:00.000-04:00"
                },
                {
                  "value": "16.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:30:00.000-04:00"
                },
                {
                  "value": "16.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:45:00.000-04:00"
                },
                {
                  "value": "16.63",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:00:00.000-04:00"
                },
                {
                  "value": "16.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:15:00.000-04:00"
                },
                {
                  "value": "16.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:30:00.000-04:00"
                },
                {
                  "value": "16.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:45:00.000-04:00"
                },
                {
                  "value": "16.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:00:00.000-04:00"
                },
                {
                  "value": "17.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:15:00.000-04:00"
                },
                {
                  "value": "17.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:30:00.000-04:00"
                },
                {
                  "value": "17.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:45:00.000-04:00"
                },
                {
                  "value": "17.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:00:00.000-04:00"
                },
                {
                  "value": "17.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:15:00.000-04:00"
                },
                {
                  "value": "17.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:30:00.000-04:00"
                },
                {
                  "value": "17.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:45:00.000-04:00"
                },
                {
                  "value": "17.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:00:00.000-04:00"
                },
                {
                  "value": "17.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:15:00.000-04:00"
                },
                {
                  "value": "17.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:30:00.000-04:00"
                },
                {
                  "value": "17.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:45:00.000-04:00"
                },
                {
                  "value": "17.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:00:00.000-04:00"
                },
                {
                  "value": "17.62",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:15:00.000-04:00"
                },
                {
                  "value": "17.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:30:00.000-04:00"
                },
                {
                  "value": "17.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:45:00.000-04:00"
                },
                {
                  "value": "17.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:00:00.000-04:00"
                },
                {
                  "value": "17.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:15:00.000-04:00"
                },
                {
                  "value": "17.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:30:00.000-04:00"
                },
                {
                  "value": "17.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:45:00.000-04:00"
                },
                {
                  "value": "17.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:00:00.000-04:00"
                },
                {
                  "value": "17.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:15:00.000-04:00"
                },
                {
                  "value": "17.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:30:00.000-04:00"
                },
                {
                  "value": "17.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:45:00.000-04:00"
                },
                {
                  "value": "17.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:00:00.000-04:00"
                },
                {
                  "value": "17.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:15:00.000-04:00"
                },
                {
                  "value": "17.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:30:00.000-04:00"
                },
                {
                  "value": "17.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:45:00.000-04:00"
                },
                {
                  "value": "17.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:00:00.000-04:00"
                },
                {
                  "value": "17.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:15:00.000-04:00"
                },
                {
                  "value": "17.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:30:00.000-04:00"
                },
                {
                  "value": "18.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:45:00.000-04:00"
                },
                {
                  "value": "18.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:00:00.000-04:00"
                },
                {
                  "value": "18.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:15:00.000-04:00"
                },
                {
                  "value": "18.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:30:00.000-04:00"
                },
                {
                  "value": "18.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:45:00.000-04:00"
                },
                {
                  "value": "18.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:00:00.000-04:00"
                },
                {
                  "value": "18.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:15:00.000-04:00"
                },
                {
                  "value": "18.26",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:30:00.000-04:00"
                },
                {
                  "value": "18.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:45:00.000-04:00"
                },
                {
                  "value": "18.42",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:00:00.000-04:00"
                },
                {
                  "value": "18.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:15:00.000-04:00"
                },
                {
                  "value": "18.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:30:00.000-04:00"
                },
                {
                  "value": "18.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:45:00.000-04:00"
                },
                {
                  "value": "18.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:00:00.000-04:00"
                },
                {
                  "value": "18.63",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:15:00.000-04:00"
                },
                {
                  "value": "18.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:30:00.000-04:00"
                },
                {
                  "value": "18.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:45:00.000-04:00"
                },
                {
                  "value": "18.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:00:00.000-04:00"
                },
                {
                  "value": "18.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:15:00.000-04:00"
                },
                {
                  "value": "18.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:30:00.000-04:00"
                },
                {
                  "value": "18.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:45:00.000-04:00"
                },
                {
                  "value": "19.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:00:00.000-04:00"
                },
                {
                  "value": "19.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:15:00.000-04:00"
                },
                {
                  "value": "19.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:30:00.000-04:00"
                },
                {
                  "value": "19.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:45:00.000-04:00"
                },
                {
                  "value": "19.42",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:00:00.000-04:00"
                },
                {
                  "value": "19.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:15:00.000-04:00"
                },
                {
                  "value": "19.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:30:00.000-04:00"
                },
                {
                  "value": "19.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:45:00.000-04:00"
                },
                {
                  "value": "19.80",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:00:00.000-04:00"
                },
                {
                  "value": "19.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:15:00.000-04:00"
                },
                {
                  "value": "20.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:30:00.000-04:00"
                },
                {
                  "value": "20.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:45:00.000-04:00"
                },
                {
                  "value": "20.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:00:00.000-04:00"
                },
                {
                  "value": "20.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:15:00.000-04:00"
                },
                {
                  "value": "20.61",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:30:00.000-04:00"
                },
                {
                  "value": "20.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:45:00.000-04:00"
                },
                {
                  "value": "21.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:00:00.000-04:00"
                },
                {
                  "value": "21.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:15:00.000-04:00"
                },
                {
                  "value": "21.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:30:00.000-04:00"
                },
                {
                  "value": "21.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:45:00.000-04:00"
                },
                {
                  "value": "21.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:00:00.000-04:00"
                },
                {
                  "value": "22.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:15:00.000-04:00"
                },
                {
                  "value": "22.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:30:00.000-04:00"
                },
                {
                  "value": "22.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:45:00.000-04:00"
                },
                {
                  "value": "22.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:00:00.000-04:00"
                },
                {
                  "value": "23.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:15:00.000-04:00"
                },
                {
                  "value": "23.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:30:00.000-04:00"
                },
                {
                  "value": "24.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:45:00.000-04:00"
                },
                {
                  "value": "24.55",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:00:00.000-04:00"
                },
                {
                  "value": "25.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:15:00.000-04:00"
                },
                {
                  "value": "25.54",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:30:00.000-04:00"
                },
                {
                  "value": "26.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:45:00.000-04:00"
                },
                {
                  "value": "26.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:00:00.000-04:00"
                },
                {
                  "value": "26.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:15:00.000-04:00"
                },
                {
                  "value": "27.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:30:00.000-04:00"
                },
                {
                  "value": "27.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:45:00.000-04:00"
                },
                {
                  "value": "27.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:00:00.000-04:00"
                },
                {
                  "value": "28.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:15:00.000-04:00"
                },
                {
                  "value": "28.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:30:00.000-04:00"
                },
                {
                  "value": "28.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:45:00.000-04:00"
                },
                {
                  "value": "28.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:00:00.000-04:00"
                },
                {
                  "value": "29.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:15:00.000-04:00"
                },
                {
                  "value": "29.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:30:00.000-04:00"
                },
                {
                  "value": "29.47",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:45:00.000-04:00"
                },
                {
                  "value": "29.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:00:00.000-04:00"
                },
                {
                  "value": "29.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:15:00.000-04:00"
                },
                {
                  "value": "29.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:30:00.000-04:00"
                },
                {
                  "value": "29.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:45:00.000-04:00"
                },
                {
                  "value": "30.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:00:00.000-04:00"
                },
                {
                  "value": "30.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:15:00.000-04:00"
                },
                {
                  "value": "30.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:30:00.000-04:00"
                },
                {
                  "value": "30.23",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:45:00.000-04:00"
                },
                {
                  "value": "30.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:00:00.000-04:00"
                },
                {
                  "value": "30.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:15:00.000-04:00"
                },
                {
                  "value": "30.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:30:00.000-04:00"
                },
                {
                  "value": "30.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:45:00.000-04:00"
                },
                {
                  "value": "30.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:00:00.000-04:00"
                },
                {
                  "value": "30.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:15:00.000-04:00"
                },
                {
                  "value": "30.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:30:00.000-04:00"
                },
                {
                  "value": "30.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:45:00.000-04:00"
                },
                {
                  "value": "30.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:00:00.000-04:00"
                },
                {
                  "value": "30.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:15:00.000-04:00"
                },
                {
                  "value": "30.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:30:00.000-04:00"
                },
                {
                  "value": "30.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:45:00.000-04:00"
                },
                {
                  "value": "30.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:00:00.000-04:00"
                },
                {
                  "value": "30.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:15:00.000-04:00"
                },
                {
                  "value": "30.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:30:00.000-04:00"
                },
                {
                  "value": "30.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:45:00.000-04:00"
                },
                {
                  "value": "30.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:00:00.000-04:00"
                },
                {
                  "value": "30.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:15:00.000-04:00"
                },
                {
                  "value": "30.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:30:00.000-04:00"
                },
                {
                  "value": "30.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:45:00.000-04:00"
                },
                {
                  "value": "29.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:00:00.000-04:00"
                },
                {
                  "value": "29.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:15:00.000-04:00"
                },
                {
                  "value": "29.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:30:00.000-04:00"
                },
                {
                  "value": "29.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:45:00.000-04:00"
                },
                {
                  "value": "29.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:00:00.000-04:00"
                },
                {
                  "value": "29.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:15:00.000-04:00"
                },
                {
                  "value": "29.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:30:00.000-04:00"
                },
                {
                  "value": "29.61",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:45:00.000-04:00"
                },
                {
                  "value": "29.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:00:00.000-04:00"
                },
                {
                  "value": "29.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:15:00.000-04:00"
                },
                {
                  "value": "29.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:30:00.000-04:00"
                },
                {
                  "value": "29.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:45:00.000-04:00"
                },
                {
                  "value": "29.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:00:00.000-04:00"
                },
                {
                  "value": "29.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:15:00.000-04:00"
                },
                {
                  "value": "29.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:30:00.000-04:00"
                },
                {
                  "value": "29.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:45:00.000-04:00"
                },
                {
                  "value": "28.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:00:00.000-04:00"
                },
                {
                  "value": "28.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:15:00.000-04:00"
                },
                {
                  "value": "28.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:30:00.000-04:00"
                },
                {
                  "value": "28.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:45:00.000-04:00"
                },
                {
                  "value": "28.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:00:00.000-04:00"
                },
                {
                  "value": "28.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:15:00.000-04:00"
                },
                {
                  "value": "28.61",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:30:00.000-04:00"
                },
                {
                  "value": "28.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:45:00.000-04:00"
                },
                {
                  "value": "28.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:00:00.000-04:00"
                },
                {
                  "value": "28.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:15:00.000-04:00"
                },
                {
                  "value": "28.31",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:30:00.000-04:00"
                },
                {
                  "value": "28.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:45:00.000-04:00"
                },
                {
                  "value": "28.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:00:00.000-04:00"
                },
                {
                  "value": "28.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:15:00.000-04:00"
                },
                {
                  "value": "28.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:30:00.000-04:00"
                },
                {
                  "value": "27.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:45:00.000-04:00"
                },
                {
                  "value": "27.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:00:00.000-04:00"
                },
                {
                  "value": "27.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:15:00.000-04:00"
                },
                {
                  "value": "27.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:30:00.000-04:00"
                },
                {
                  "value": "27.65",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:45:00.000-04:00"
                },
                {
                  "value": "27.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:00:00.000-04:00"
                },
                {
                  "value": "27.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:15:00.000-04:00"
                },
                {
                  "value": "27.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:30:00.000-04:00"
                },
                {
                  "value": "27.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:45:00.000-04:00"
                },
                {
                  "value": "27.27",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:00:00.000-04:00"
                },
                {
                  "value": "27.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:15:00.000-04:00"
                },
                {
                  "value": "27.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:30:00.000-04:00"
                },
                {
                  "value": "27.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:45:00.000-04:00"
                },
                {
                  "value": "27.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:00:00.000-04:00"
                },
                {
                  "value": "26.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:15:00.000-04:00"
                },
                {
                  "value": "26.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:30:00.000-04:00"
                },
                {
                  "value": "26.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:45:00.000-04:00"
                },
                {
                  "value": "26.77",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:00:00.000-04:00"
                },
                {
                  "value": "26.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:15:00.000-04:00"
                },
                {
                  "value": "26.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:30:00.000-04:00"
                },
                {
                  "value": "26.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:45:00.000-04:00"
                },
                {
                  "value": "26.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:00:00.000-04:00"
                },
                {
                  "value": "26.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:15:00.000-04:00"
                },
                {
                  "value": "26.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:30:00.000-04:00"
                },
                {
                  "value": "26.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:45:00.000-04:00"
                },
                {
                  "value": "26.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:00:00.000-04:00"
                },
                {
                  "value": "26.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:15:00.000-04:00"
                },
                {
                  "value": "26.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:30:00.000-04:00"
                },
                {
                  "value": "25.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:45:00.000-04:00"
                },
                {
                  "value": "25.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:00:00.000-04:00"
                },
                {
                  "value": "25.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:15:00.000-04:00"
                },
                {
                  "value": "25.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:30:00.000-04:00"
                },
                {
                  "value": "25.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:45:00.000-04:00"
                },
                {
                  "value": "25.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:00:00.000-04:00"
                },
                {
                  "value": "25.51",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:15:00.000-04:00"
                },
                {
                  "value": "25.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:30:00.000-04:00"
                },
                {
                  "value": "25.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:45:00.000-04:00"
                },
                {
                  "value": "25.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:00:00.000-04:00"
                },
                {
                  "value": "25.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:15:00.000-04:00"
                },
                {
                  "value": "25.23",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:30:00.000-04:00"
                },
                {
                  "value": "25.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:45:00.000-04:00"
                },
                {
                  "value": "24.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:00:00.000-04:00"
                },
                {
                  "value": "25.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:15:00.000-04:00"
                },
                {
                  "value": "24.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:30:00.000-04:00"
                },
                {
                  "value": "24.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:45:00.000-04:00"
                },
                {
                  "value": "24.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:00:00.000-04:00"
                },
                {
                  "value": "24.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:15:00.000-04:00"
                },
                {
                  "value": "24.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:30:00.000-04:00"
                },
                {
                  "value": "24.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:45:00.000-04:00"
                },
                {
                  "value": "24.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:00:00.000-04:00"
                },
                {
                  "value": "24.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:15:00.000-04:00"
                },
                {
                  "value": "24.31",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:30:00.000-04:00"
                },
                {
                  "value": "24.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:45:00.000-04:00"
                },
                {
                  "value": "24.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:00:00.000-04:00"
                },
                {
                  "value": "24.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:15:00.000-04:00"
                },
                {
                  "value": "24.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:30:00.000-04:00"
                },
                {
                  "value": "24.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:45:00.000-04:00"
                },
                {
                  "value": "23.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:00:00.000-04:00"
                },
                {
                  "value": "23.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:15:00.000-04:00"
                },
                {
                  "value": "23.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:30:00.000-04:00"
                },
                {
                  "value": "23.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:45:00.000-04:00"
                },
                {
                  "value": "23.65",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:00:00.000-04:00"
                },
                {
                  "value": "23.55",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:15:00.000-04:00"
                },
                {
                  "value": "23.47",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:30:00.000-04:00"
                },
                {
                  "value": "23.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:45:00.000-04:00"
                },
                {
                  "value": "23.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:00:00.000-04:00"
                },
                {
                  "value": "23.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:15:00.000-04:00"
                },
                {
                  "value": "23.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:30:00.000-04:00"
                },
                {
                  "value": "23.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:45:00.000-04:00"
                },
                {
                  "value": "23.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:00:00.000-04:00"
                },
                {
                  "value": "23.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:15:00.000-04:00"
                },
                {
                  "value": "22.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:30:00.000-04:00"
                },
                {
                  "value": "22.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:45:00.000-04:00"
                },
                {
                  "value": "22.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:00:00.000-04:00"
                },
                {
                  "value": "22.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:15:00.000-04:00"
                },
                {
                  "value": "22.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:30:00.000-04:00"
                },
                {
                  "value": "22.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:45:00.000-04:00"
                },
                {
                  "value": "22.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:00:00.000-04:00"
                },
                {
                  "value": "22.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:15:00.000-04:00"
                },
                {
                  "value": "22.32",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:30:00.000-04:00"
                },
                {
                  "value": "22.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:45:00.000-04:00"
                },
                {
                  "value": "22.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:00:00.000-04:00"
                },
                {
                  "value": "22.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:15:00.000-04:00"
                },
                {
                  "value": "22.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:30:00.000-04:00"
                },
                {
                  "value": "21.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:45:00.000-04:00"
                },
                {
                  "value": "21.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:00:00.000-04:00"
                },
                {
                  "value": "21.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:15:00.000-04:00"
                },
                {
                  "value": "21.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:30:00.000-04:00"
                },
                {
                  "value": "21.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:45:00.000-04:00"
                },
                {
                  "value": "21.63",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:00:00.000-04:00"
                },
                {
                  "value": "21.55",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:15:00.000-04:00"
                },
                {
                  "value": "21.47",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:30:00.000-04:00"
                },
                {
                  "value": "21.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:45:00.000-04:00"
                },
                {
                  "value": "21.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:00:00.000-04:00"
                },
                {
                  "value": "21.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:15:00.000-04:00"
                },
                {
                  "value": "21.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:30:00.000-04:00"
                },
                {
                  "value": "21.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:45:00.000-04:00"
                },
                {
                  "value": "21.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:00:00.000-04:00"
                },
                {
                  "value": "20.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:15:00.000-04:00"
                },
                {
                  "value": "20.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:30:00.000-04:00"
                },
                {
                  "value": "20.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:45:00.000-04:00"
                },
                {
                  "value": "20.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:00:00.000-04:00"
                },
                {
                  "value": "20.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:15:00.000-04:00"
                },
                {
                  "value": "20.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:30:00.000-04:00"
                },
                {
                  "value": "20.57",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:45:00.000-04:00"
                },
                {
                  "value": "20.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:00:00.000-04:00"
                },
                {
                  "value": "20.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:15:00.000-04:00"
                },
                {
                  "value": "20.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:30:00.000-04:00"
                },
                {
                  "value": "20.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:45:00.000-04:00"
                },
                {
                  "value": "20.26",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:00:00.000-04:00"
                },
                {
                  "value": "20.23",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:15:00.000-04:00"
                },
                {
                  "value": "20.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:30:00.000-04:00"
                },
                {
                  "value": "20.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:45:00.000-04:00"
                },
                {
                  "value": "20.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:00:00.000-04:00"
                },
                {
                  "value": "19.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:15:00.000-04:00"
                },
                {
                  "value": "19.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:30:00.000-04:00"
                },
                {
                  "value": "19.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:45:00.000-04:00"
                },
                {
                  "value": "19.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:00:00.000-04:00"
                },
                {
                  "value": "19.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:15:00.000-04:00"
                },
                {
                  "value": "19.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:30:00.000-04:00"
                },
                {
                  "value": "19.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:45:00.000-04:00"
                },
                {
                  "value": "19.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:00:00.000-04:00"
                },
                {
                  "value": "19.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:15:00.000-04:00"
                },
                {
                  "value": "19.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:30:00.000-04:00"
                },
                {
                  "value": "19.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:45:00.000-04:00"
                },
                {
                  "value": "19.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:00:00.000-04:00"
                },
                {
                  "value": "19.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:15:00.000-04:00"
                },
                {
                  "value": "19.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:30:00.000-04:00"
                },
                {
                  "value": "19.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:45:00.000-04:00"
                },
                {
                  "value": "19.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:00:00.000-04:00"
                },
                {
                  "value": "19.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:15:00.000-04:00"
                },
                {
                  "value": "18.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:30:00.000-04:00"
                },
                {
                  "value": "18.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:45:00.000-04:00"
                },
                {
                  "value": "18.78",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:00:00.000-04:00"
                },
                {
                  "value": "18.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:15:00.000-04:00"
                },
                {
                  "value": "18.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:30:00.000-04:00"
                },
                {
                  "value": "18.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:45:00.000-04:00"
                },
                {
                  "value": "18.57",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:00:00.000-04:00"
                },
                {
                  "value": "18.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:15:00.000-04:00"
                },
                {
                  "value": "18.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:30:00.000-04:00"
                },
                {
                  "value": "18.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:45:00.000-04:00"
                },
                {
                  "value": "18.27",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:00:00.000-04:00"
                },
                {
                  "value": "18.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:15:00.000-04:00"
                },
                {
                  "value": "18.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:30:00.000-04:00"
                },
                {
                  "value": "18.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:45:00.000-04:00"
                },
                {
                  "value": "18.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:00:00.000-04:00"
                },
                {
                  "value": "17.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:15:00.000-04:00"
                },
                {
                  "value": "17.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:30:00.000-04:00"
                },
                {
                  "value": "17.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:45:00.000-04:00"
                },
                {
                  "value": "17.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:00:00.000-04:00"
                },
                {
                  "value": "17.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:15:00.000-04:00"
                },
                {
                  "value": "17.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:30:00.000-04:00"
                },
                {
                  "value": "17.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:45:00.000-04:00"
                },
                {
                  "value": "17.54",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:00:00.000-04:00"
                },
                {
                  "value": "17.47",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:15:00.000-04:00"
                },
                {
                  "value": "17.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:30:00.000-04:00"
                },
                {
                  "value": "17.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:45:00.000-04:00"
                },
                {
                  "value": "17.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:00:00.000-04:00"
                },
                {
                  "value": "17.23",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:15:00.000-04:00"
                },
                {
                  "value": "17.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:30:00.000-04:00"
                },
                {
                  "value": "17.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:45:00.000-04:00"
                },
                {
                  "value": "17.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:00:00.000-04:00"
                },
                {
                  "value": "17.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:15:00.000-04:00"
                },
                {
                  "value": "16.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:30:00.000-04:00"
                },
                {
                  "value": "16.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:45:00.000-04:00"
                },
                {
                  "value": "16.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:00:00.000-04:00"
                },
                {
                  "value": "16.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:15:00.000-04:00"
                },
                {
                  "value": "16.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:30:00.000-04:00"
                },
                {
                  "value": "16.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:45:00.000-04:00"
                },
                {
                  "value": "16.65",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:00:00.000-04:00"
                },
                {
                  "value": "16.61",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:15:00.000-04:00"
                },
                {
                  "value": "16.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:30:00.000-04:00"
                },
                {
                  "value": "16.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:45:00.000-04:00"
                },
                {
                  "value": "16.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:00:00.000-04:00"
                },
                {
                  "value": "16.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:15:00.000-04:00"
                },
                {
                  "value": "16.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:30:00.000-04:00"
                },
                {
                  "value": "16.31",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:45:00.000-04:00"
                },
                {
                  "value": "16.26",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:00:00.000-04:00"
                },
                {
                  "value": "16.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:15:00.000-04:00"
                },
                {
                  "value": "16.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:30:00.000-04:00"
                },
                {
                  "value": "16.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:45:00.000-04:00"
                },
                {
                  "value": "16.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:00:00.000-04:00"
                },
                {
                  "value": "16.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:15:00.000-04:00"
                },
                {
                  "value": "15.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:30:00.000-04:00"
                },
                {
                  "value": "15.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:45:00.000-04:00"
                },
                {
                  "value": "15.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:00:00.000-04:00"
                },
                {
                  "value": "15.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:15:00.000-04:00"
                },
                {
                  "value": "15.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:30:00.000-04:00"
                },
                {
                  "value": "15.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:45:00.000-04:00"
                },
                {
                  "value": "15.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:00:00.000-04:00"
                },
                {
                  "value": "15.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:15:00.000-04:00"
                },
                {
                  "value": "15.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:30:00.000-04:00"
                },
                {
                  "value": "15.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:45:00.000-04:00"
                },
                {
                  "value": "15.51",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:00:00.000-04:00"
                },
                {
                  "value": "15.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:15:00.000-04:00"
                },
                {
                  "value": "15.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:30:00.000-04:00"
                },
                {
                  "value": "15.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:45:00.000-04:00"
                },
                {
                  "value": "15.32",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:00:00.000-04:00"
                },
                {
                  "value": "15.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:15:00.000-04:00"
                },
                {
                  "value": "15.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:30:00.000-04:00"
                },
                {
                  "value": "15.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:45:00.000-04:00"
                },
                {
                  "value": "15.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:00:00.000-04:00"
                },
                {
                  "value": "15.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:15:00.000-04:00"
                },
                {
                  "value": "15.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:30:00.000-04:00"
                },
                {
                  "value": "14.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:45:00.000-04:00"
                },
                {
                  "value": "14.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:00:00.000-04:00"
                },
                {
                  "value": "14.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:15:00.000-04:00"
                },
                {
                  "value": "14.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:30:00.000-04:00"
                },
                {
                  "value": "14.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:45:00.000-04:00"
                },
                {
                  "value": "14.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:00:00.000-04:00"
                },
                {
                  "value": "14.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:15:00.000-04:00"
                },
                {
                  "value": "14.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:30:00.000-04:00"
                },
                {
                  "value": "14.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:45:00.000-04:00"
                },
                {
                  "value": "14.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:00:00.000-04:00"
                },
                {
                  "value": "14.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:15:00.000-04:00"
                },
                {
                  "value": "14.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:30:00.000-04:00"
                },
                {
                  "value": "14.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:45:00.000-04:00"
                },
                {
                  "value": "14.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:00:00.000-04:00"
                },
                {
                  "value": "14.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:15:00.000-04:00"
                },
                {
                  "value": "14.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:30:00.000-04:00"
                },
                {
                  "value": "14.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:45:00.000-04:00"
                },
                {
                  "value": "14.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:00:00.000-04:00"
                },
                {
                  "value": "14.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:15:00.000-04:00"
                },
                {
                  "value": "14.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:30:00.000-04:00"
                },
                {
                  "value": "14.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:45:00.000-04:00"
                },
                {
                  "value": "14.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:00:00.000-04:00"
                },
                {
                  "value": "13.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:15:00.000-04:00"
                },
                {
                  "value": "13.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:30:00.000-04:00"
                },
                {
                  "value": "13.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:45:00.000-04:00"
                },
                {
                  "value": "13.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:00:00.000-04:00"
                },
                {
                  "value": "13.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:15:00.000-04:00"
                },
                {
                  "value": "13.77",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:30:00.000-04:00"
                },
                {
                  "value": "13.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:45:00.000-04:00"
                },
                {
                  "value": "13.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:00:00.000-04:00"
                },
                {
                  "value": "13.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:15:00.000-04:00"
                },
                {
                  "value": "13.62",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:30:00.000-04:00"
                },
                {
                  "value": "13.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:45:00.000-04:00"
                },
                {
                  "value": "13.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:00:00.000-04:00"
                },
                {
                  "value": "13.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:15:00.000-04:00"
                },
                {
                  "value": "13.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:30:00.000-04:00"
                },
                {
                  "value": "13.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:45:00.000-04:00"
                },
                {
                  "value": "13.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:00:00.000-04:00"
                },
                {
                  "value": "13.31",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:15:00.000-04:00"
                },
                {
                  "value": "13.26",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:30:00.000-04:00"
                },
                {
                  "value": "13.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:45:00.000-04:00"
                },
                {
                  "value": "13.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:00:00.000-04:00"
                },
                {
                  "value": "13.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:15:00.000-04:00"
                },
                {
                  "value": "13.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:30:00.000-04:00"
                },
                {
                  "value": "13.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:45:00.000-04:00"
                },
                {
                  "value": "13.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:00:00.000-04:00"
                },
                {
                  "value": "13.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:15:00.000-04:00"
                },
                {
                  "value": "12.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:30:00.000-04:00"
                },
                {
                  "value": "12.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:45:00.000-04:00"
                },
                {
                  "value": "12.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:00:00.000-04:00"
                },
                {
                  "value": "12.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:15:00.000-04:00"
                },
                {
                  "value": "12.78",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:30:00.000-04:00"
                },
                {
                  "value": "12.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:45:00.000-04:00"
                },
                {
                  "value": "12.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:00:00.000-04:00"
                },
                {
                  "value": "12.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:15:00.000-04:00"
                },
                {
                  "value": "12.62",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:30:00.000-04:00"
                },
                {
                  "value": "12.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:45:00.000-04:00"
                }
              ],
              "qualifier": [
                {
                  "qualifierCode": "P",
                  "qualifierDescription": "Provisional data subject to revision.",
                  "qualifierID": 0,
                  "network": "NWIS",
                  "vocabulary": "uv_rmk_cd"
                }
              ],
              "qualityControlLevel": [],
              "method": [
                {
                  "methodDescription": "",
                  "methodID": 90181
                }
              ],
              "source": [],
              "offset": [],
              "sample": [],
              "censorCode": []
            }
          ],
          "name": "USGS:03447687:00065:00000"
        },
        {
          "sourceInfo": {
            "siteName": "NORTH FORK SWANNANOA RIVER NEAR WALKERTOWN, NC",
            "siteCode": [
              {
                "value": "0344894205",
                "network": "NWIS",
                "agencyCode": "USGS"
              }
            ],
            "timeZoneInfo": {
              "defaultTimeZone": {
                "zoneOffset": "-05:00",
                "zoneAbbreviation": "EST"
              },
              "daylightSavingsTimeZone": {
                "zoneOffset": "-04:00",
                "zoneAbbreviation": "EDT"
              },
              "siteUsesDaylightSavingsTime": true
            },
            "geoLocation": {
              "geogLocation": {
                "srs": "EPSG:4326",
                "latitude": 35.68569444,
                "longitude": -82.3324167
              },
              "localSiteXY": []
            },
            "note": [],
            "siteType": [],
            "siteProperty": [
              {
                "value": "ST",
                "name": "siteTypeCd"
              },
              {
                "value": "06010105",
                "name": "hucCd"
              },
              {
                "value": "37",
                "name": "stateCd"
              },
              {
                "value": "37021",
                "name": "countyCd"
              }
            ]
          },
          "variable": {
            "variableCode": [
              {
                "value": "00060",
                "network": "NWIS",
                "vocabulary": "NWIS:UnitValues",
                "variableID": 45807197,
                "default": true
              }
            ],
            "variableName": "Streamflow, ft&#179;/s",
            "variableDescription": "Discharge, cubic feet per second",
            "valueType": "Derived Value",
            "unit": {
              "unitCode": "ft3/s"
            },
            "options": {
              "option": [
                {
                  "name": "Statistic",
                  "optionCode": "00000"
                }
              ]
            },
            "note": [],
            "noDataValue": -999999,
            "variableProperty": [],
            "oid": "45807197"
          },
          "values": [
            {
              "value": [
                {
                  "value": "22.5",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:00:00.000-04:00"
                },
                {
                  "value": "22.5",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:15:00.000-04:00"
                },
                {
                  "value": "22.5",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:30:00.000-04:00"
                },
                {
                  "value": "22.5",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:45:00.000-04:00"
                },
                {
                  "value": "21.9",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:00:00.000-04:00"
                },
                {
                  "value": "21.9",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:15:00.000-04:00"
                },
                {
                  "value": "21.9",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:30:00.000-04:00"
                },
                {
                  "value": "21.9",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:45:00.000-04:00"
                },
                {
                  "value": "21.3",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:00:00.000-04:00"
                },
                {
                  "value": "21.3",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:15:00.000-04:00"
                },
                {
                  "value": "21.3",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:30:00.000-04:00"
                },
                {
                  "value": "21.3",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:45:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:00:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:15:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:30:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:45:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:00:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:15:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:30:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:45:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:00:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:15:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:30:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:45:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:00:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:15:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:30:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:45:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:00:00.000-04:00"
                },
                {
                  "value": "20.2",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:15:00.000-04:00"
                },
                {
                  "value": "20.2",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:30:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:45:00.000-04:00"
                },
                {
                  "value": "20.2",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:00:00.000-04:00"
                },
                {
                  "value": "20.2",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:15:00.000-04:00"
                },
                {
                  "value": "20.2",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:30:00.000-04:00"
                },
                {
                  "value": "20.2",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:45:00.000-04:00"
                },
                {
                  "value": "20.2",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:00:00.000-04:00"
                },
                {
                  "value": "20.2",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:15:00.000-04:00"
                },
                {
                  "value": "20.2",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:30:00.000-04:00"
                },
                {
                  "value": "19.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:45:00.000-04:00"
                },
                {
                  "value": "19.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:00:00.000-04:00"
                },
                {
                  "value": "19.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:15:00.000-04:00"
                },
                {
                  "value": "19.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:30:00.000-04:00"
                },
                {
                  "value": "19.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:45:00.000-04:00"
                },
                {
                  "value": "19.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:00:00.000-04:00"
                },
                {
                  "value": "19.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:15:00.000-04:00"
                },
                {
                  "value": "19.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:30:00.000-04:00"
                },
                {
                  "value": "19.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:45:00.000-04:00"
                },
                {
                  "value": "19.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:00:00.000-04:00"
                },
                {
                  "value": "19.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:15:00.000-04:00"
                },
                {
                  "value": "19.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:30:00.000-04:00"
                },
                {
                  "value": "19.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:45:00.000-04:00"
                },
                {
                  "value": "19.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:00:00.000-04:00"
                },
                {
                  "value": "19.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:15:00.000-04:00"
                },
                {
                  "value": "19.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:30:00.000-04:00"
                },
                {
                  "value": "19.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:45:00.000-04:00"
                },
                {
                  "value": "19.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:00:00.000-04:00"
                },
                {
                  "value": "19.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:15:00.000-04:00"
                },
                {
                  "value": "18.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:30:00.000-04:00"
                },
                {
                  "value": "18.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:45:00.000-04:00"
                },
                {
                  "value": "18.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:00:00.000-04:00"
                },
                {
                  "value": "18.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:15:00.000-04:00"
                },
                {
                  "value": "18.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:30:00.000-04:00"
                },
                {
                  "value": "18.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:45:00.000-04:00"
                },
                {
                  "value": "18.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:00:00.000-04:00"
                },
                {
                  "value": "18.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:15:00.000-04:00"
                },
                {
                  "value": "18.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:30:00.000-04:00"
                },
                {
                  "value": "18.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:45:00.000-04:00"
                },
                {
                  "value": "18.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:00:00.000-04:00"
                },
                {
                  "value": "18.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:15:00.000-04:00"
                },
                {
                  "value": "18.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:30:00.000-04:00"
                },
                {
                  "value": "18.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:45:00.000-04:00"
                },
                {
                  "value": "18.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:00:00.000-04:00"
                },
                {
                  "value": "19.1",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:15:00.000-04:00"
                },
                {
                  "value": "20.2",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:30:00.000-04:00"
                },
                {
                  "value": "20.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:45:00.000-04:00"
                },
                {
                  "value": "21.3",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:00:00.000-04:00"
                },
                {
                  "value": "21.9",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:15:00.000-04:00"
                },
                {
                  "value": "24.3",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:30:00.000-04:00"
                },
                {
                  "value": "25.7",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:45:00.000-04:00"
                },
                {
                  "value": "29.3",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:00:00.000-04:00"
                },
                {
                  "value": "35.0",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:15:00.000-04:00"
                },
                {
                  "value": "43.4",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:30:00.000-04:00"
                },
                {
                  "value": "98.6",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:45:00.000-04:00"
                },
                {
                  "value": "462",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:00:00.000-04:00"
                },
                {
                  "value": "657",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:15:00.000-04:00"
                },
                {
                  "value": "708",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:30:00.000-04:00"
                },
                {
                  "value": "717",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:45:00.000-04:00"
                },
                {
                  "value": "682",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:00:00.000-04:00"
                },
                {
                  "value": "665",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:15:00.000-04:00"
                },
                {
                  "value": "657",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:30:00.000-04:00"
                },
                {
                  "value": "653",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:45:00.000-04:00"
                },
                {
                  "value": "674",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:00:00.000-04:00"
                },
                {
                  "value": "740",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:15:00.000-04:00"
                },
                {
                  "value": "781",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:30:00.000-04:00"
                },
                {
                  "value": "791",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:45:00.000-04:00"
                },
                {
                  "value": "777",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:00:00.000-04:00"
                },
                {
                  "value": "749",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:15:00.000-04:00"
                },
                {
                  "value": "704",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:30:00.000-04:00"
                },
                {
                  "value": "691",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:45:00.000-04:00"
                },
                {
                  "value": "661",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:00:00.000-04:00"
                },
                {
                  "value": "644",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:15:00.000-04:00"
                },
                {
                  "value": "612",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:30:00.000-04:00"
                },
                {
                  "value": "596",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:45:00.000-04:00"
                },
                {
                  "value": "573",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:00:00.000-04:00"
                },
                {
                  "value": "569",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:15:00.000-04:00"
                },
                {
                  "value": "565",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:30:00.000-04:00"
                },
                {
                  "value": "569",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:45:00.000-04:00"
                },
                {
                  "value": "584",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:00:00.000-04:00"
                },
                {
                  "value": "624",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:15:00.000-04:00"
                },
                {
                  "value": "670",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:30:00.000-04:00"
                },
                {
                  "value": "700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:45:00.000-04:00"
                },
                {
                  "value": "717",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:00:00.000-04:00"
                },
                {
                  "value": "731",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:15:00.000-04:00"
                },
                {
                  "value": "754",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:30:00.000-04:00"
                },
                {
                  "value": "805",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:45:00.000-04:00"
                },
                {
                  "value": "863",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:00:00.000-04:00"
                },
                {
                  "value": "888",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:15:00.000-04:00"
                },
                {
                  "value": "878",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:30:00.000-04:00"
                },
                {
                  "value": "858",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:45:00.000-04:00"
                },
                {
                  "value": "838",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:00:00.000-04:00"
                },
                {
                  "value": "800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:15:00.000-04:00"
                },
                {
                  "value": "781",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:30:00.000-04:00"
                },
                {
                  "value": "791",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:45:00.000-04:00"
                },
                {
                  "value": "833",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:00:00.000-04:00"
                },
                {
                  "value": "858",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:15:00.000-04:00"
                },
                {
                  "value": "883",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:30:00.000-04:00"
                },
                {
                  "value": "888",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:45:00.000-04:00"
                },
                {
                  "value": "898",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:00:00.000-04:00"
                },
                {
                  "value": "893",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:15:00.000-04:00"
                },
                {
                  "value": "868",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:30:00.000-04:00"
                },
                {
                  "value": "858",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:45:00.000-04:00"
                },
                {
                  "value": "863",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:00:00.000-04:00"
                },
                {
                  "value": "848",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:15:00.000-04:00"
                },
                {
                  "value": "858",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:30:00.000-04:00"
                },
                {
                  "value": "863",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:45:00.000-04:00"
                },
                {
                  "value": "873",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:00:00.000-04:00"
                },
                {
                  "value": "878",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:15:00.000-04:00"
                },
                {
                  "value": "883",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:30:00.000-04:00"
                },
                {
                  "value": "868",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:45:00.000-04:00"
                },
                {
                  "value": "838",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:00:00.000-04:00"
                },
                {
                  "value": "819",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:15:00.000-04:00"
                },
                {
                  "value": "791",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:30:00.000-04:00"
                },
                {
                  "value": "740",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:45:00.000-04:00"
                },
                {
                  "value": "717",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:00:00.000-04:00"
                },
                {
                  "value": "682",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:15:00.000-04:00"
                },
                {
                  "value": "661",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:30:00.000-04:00"
                },
                {
                  "value": "644",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:45:00.000-04:00"
                },
                {
                  "value": "628",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:00:00.000-04:00"
                },
                {
                  "value": "600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:15:00.000-04:00"
                },
                {
                  "value": "580",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:30:00.000-04:00"
                },
                {
                  "value": "565",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:45:00.000-04:00"
                },
                {
                  "value": "550",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:00:00.000-04:00"
                },
                {
                  "value": "539",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:15:00.000-04:00"
                },
                {
                  "value": "532",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:30:00.000-04:00"
                },
                {
                  "value": "524",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:45:00.000-04:00"
                },
                {
                  "value": "532",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:00:00.000-04:00"
                },
                {
                  "value": "535",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:15:00.000-04:00"
                },
                {
                  "value": "550",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:30:00.000-04:00"
                },
                {
                  "value": "565",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:45:00.000-04:00"
                },
                {
                  "value": "608",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:00:00.000-04:00"
                },
                {
                  "value": "670",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:15:00.000-04:00"
                },
                {
                  "value": "722",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:30:00.000-04:00"
                },
                {
                  "value": "749",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:45:00.000-04:00"
                },
                {
                  "value": "767",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:00:00.000-04:00"
                },
                {
                  "value": "767",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:15:00.000-04:00"
                },
                {
                  "value": "781",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:30:00.000-04:00"
                },
                {
                  "value": "800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:45:00.000-04:00"
                },
                {
                  "value": "824",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:00:00.000-04:00"
                },
                {
                  "value": "843",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:15:00.000-04:00"
                },
                {
                  "value": "878",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:30:00.000-04:00"
                },
                {
                  "value": "888",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:45:00.000-04:00"
                },
                {
                  "value": "903",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:00:00.000-04:00"
                },
                {
                  "value": "888",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:15:00.000-04:00"
                },
                {
                  "value": "913",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:30:00.000-04:00"
                },
                {
                  "value": "919",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:45:00.000-04:00"
                },
                {
                  "value": "929",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:00:00.000-04:00"
                },
                {
                  "value": "934",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:15:00.000-04:00"
                },
                {
                  "value": "934",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:30:00.000-04:00"
                },
                {
                  "value": "934",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:45:00.000-04:00"
                },
                {
                  "value": "929",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:00:00.000-04:00"
                },
                {
                  "value": "939",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:15:00.000-04:00"
                },
                {
                  "value": "961",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:30:00.000-04:00"
                },
                {
                  "value": "1040",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:45:00.000-04:00"
                },
                {
                  "value": "1150",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:00:00.000-04:00"
                },
                {
                  "value": "1250",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:15:00.000-04:00"
                },
                {
                  "value": "1320",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:30:00.000-04:00"
                },
                {
                  "value": "1350",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:45:00.000-04:00"
                },
                {
                  "value": "1380",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:00:00.000-04:00"
                },
                {
                  "value": "1420",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:15:00.000-04:00"
                },
                {
                  "value": "1510",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:30:00.000-04:00"
                },
                {
                  "value": "1550",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:45:00.000-04:00"
                },
                {
                  "value": "1700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:00:00.000-04:00"
                },
                {
                  "value": "1860",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:15:00.000-04:00"
                },
                {
                  "value": "1980",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:30:00.000-04:00"
                },
                {
                  "value": "1900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:45:00.000-04:00"
                },
                {
                  "value": "1910",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:00:00.000-04:00"
                },
                {
                  "value": "1780",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:15:00.000-04:00"
                },
                {
                  "value": "1780",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:30:00.000-04:00"
                },
                {
                  "value": "1720",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:45:00.000-04:00"
                },
                {
                  "value": "1700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:00:00.000-04:00"
                },
                {
                  "value": "1770",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:15:00.000-04:00"
                },
                {
                  "value": "1880",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:30:00.000-04:00"
                },
                {
                  "value": "2240",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:45:00.000-04:00"
                },
                {
                  "value": "2550",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:00:00.000-04:00"
                },
                {
                  "value": "2680",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:15:00.000-04:00"
                },
                {
                  "value": "2710",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:30:00.000-04:00"
                },
                {
                  "value": "2670",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:45:00.000-04:00"
                },
                {
                  "value": "2490",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:00:00.000-04:00"
                },
                {
                  "value": "2410",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:15:00.000-04:00"
                },
                {
                  "value": "2780",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:30:00.000-04:00"
                },
                {
                  "value": "2850",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:45:00.000-04:00"
                },
                {
                  "value": "3100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:00:00.000-04:00"
                },
                {
                  "value": "2930",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:15:00.000-04:00"
                },
                {
                  "value": "2710",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:30:00.000-04:00"
                },
                {
                  "value": "2980",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:45:00.000-04:00"
                },
                {
                  "value": "3190",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:00:00.000-04:00"
                },
                {
                  "value": "3110",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:15:00.000-04:00"
                },
                {
                  "value": "3170",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:30:00.000-04:00"
                },
                {
                  "value": "3400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:45:00.000-04:00"
                }
              ],
              "qualifier": [
                {
                  "qualifierCode": "P",
                  "qualifierDescription": "Provisional data subject to revision.",
                  "qualifierID": 0,
                  "network": "NWIS",
                  "vocabulary": "uv_rmk_cd"
                }
              ],
              "qualityControlLevel": [],
              "method": [
                {
                  "methodDescription": "",
                  "methodID": 90186
                }
              ],
              "source": [],
              "offset": [],
              "sample": [],
              "censorCode": []
            }
          ],
          "name": "USGS:0344894205:00060:00000"
        },
        {
          "sourceInfo": {
            "siteName": "NORTH FORK SWANNANOA RIVER NEAR WALKERTOWN, NC",
            "siteCode": [
              {
                "value": "0344894205",
                "network": "NWIS",
                "agencyCode": "USGS"
              }
            ],
            "timeZoneInfo": {
              "defaultTimeZone": {
                "zoneOffset": "-05:00",
                "zoneAbbreviation": "EST"
              },
              "daylightSavingsTimeZone": {
                "zoneOffset": "-04:00",
                "zoneAbbreviation": "EDT"
              },
              "siteUsesDaylightSavingsTime": true
            },
            "geoLocation": {
              "geogLocation": {
                "srs": "EPSG:4326",
                "latitude": 35.68569444,
                "longitude": -82.3324167
              },
              "localSiteXY": []
            },
            "note": [],
            "siteType": [],
            "siteProperty": [
              {
                "value": "ST",
                "name": "siteTypeCd"
              },
              {
                "value": "06010105",
                "name": "hucCd"
              },
              {
                "value": "37",
                "name": "stateCd"
              },
              {
                "value": "37021",
                "name": "countyCd"
              }
            ]
          },
          "variable": {
            "variableCode": [
              {
                "value": "00065",
                "network": "NWIS",
                "vocabulary": "NWIS:UnitValues",
                "variableID": 45807202,
                "default": true
              }
            ],
            "variableName": "Gage height, ft",
            "variableDescription": "Gage height, feet",
            "valueType": "Derived Value",
            "unit": {
              "unitCode": "ft"
            },
            "options": {
              "option": [
                {
                  "name": "Statistic",
                  "optionCode": "00000"
                }
              ]
            },
            "note": [],
            "noDataValue": -999999,
            "variableProperty": [],
            "oid": "45807202"
          },
          "values": [
            {
              "value": [
                {
                  "value": "0.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:00:00.000-04:00"
                },
                {
                  "value": "0.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:15:00.000-04:00"
                },
                {
                  "value": "0.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:30:00.000-04:00"
                },
                {
                  "value": "0.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:45:00.000-04:00"
                },
                {
                  "value": "0.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:00:00.000-04:00"
                },
                {
                  "value": "0.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:15:00.000-04:00"
                },
                {
                  "value": "0.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:30:00.000-04:00"
                },
                {
                  "value": "0.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:45:00.000-04:00"
                },
                {
                  "value": "0.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:00:00.000-04:00"
                },
                {
                  "value": "0.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:15:00.000-04:00"
                },
                {
                  "value": "0.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:30:00.000-04:00"
                },
                {
                  "value": "0.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:45:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:00:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:15:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:30:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:45:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:00:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:15:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:30:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:45:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:00:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:15:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:30:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:45:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:00:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:15:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:30:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:45:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:00:00.000-04:00"
                },
                {
                  "value": "0.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:15:00.000-04:00"
                },
                {
                  "value": "0.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:30:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:45:00.000-04:00"
                },
                {
                  "value": "0.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:00:00.000-04:00"
                },
                {
                  "value": "0.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:15:00.000-04:00"
                },
                {
                  "value": "0.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:30:00.000-04:00"
                },
                {
                  "value": "0.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:45:00.000-04:00"
                },
                {
                  "value": "0.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:00:00.000-04:00"
                },
                {
                  "value": "0.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:15:00.000-04:00"
                },
                {
                  "value": "0.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:30:00.000-04:00"
                },
                {
                  "value": "0.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:45:00.000-04:00"
                },
                {
                  "value": "0.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:00:00.000-04:00"
                },
                {
                  "value": "0.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:15:00.000-04:00"
                },
                {
                  "value": "0.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:30:00.000-04:00"
                },
                {
                  "value": "0.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:45:00.000-04:00"
                },
                {
                  "value": "0.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:00:00.000-04:00"
                },
                {
                  "value": "0.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:15:00.000-04:00"
                },
                {
                  "value": "0.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:30:00.000-04:00"
                },
                {
                  "value": "0.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:45:00.000-04:00"
                },
                {
                  "value": "0.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:00:00.000-04:00"
                },
                {
                  "value": "0.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:15:00.000-04:00"
                },
                {
                  "value": "0.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:30:00.000-04:00"
                },
                {
                  "value": "0.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:45:00.000-04:00"
                },
                {
                  "value": "0.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:00:00.000-04:00"
                },
                {
                  "value": "0.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:15:00.000-04:00"
                },
                {
                  "value": "0.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:30:00.000-04:00"
                },
                {
                  "value": "0.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:45:00.000-04:00"
                },
                {
                  "value": "0.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:00:00.000-04:00"
                },
                {
                  "value": "0.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:15:00.000-04:00"
                },
                {
                  "value": "0.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:30:00.000-04:00"
                },
                {
                  "value": "0.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:45:00.000-04:00"
                },
                {
                  "value": "0.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:00:00.000-04:00"
                },
                {
                  "value": "0.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:15:00.000-04:00"
                },
                {
                  "value": "0.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:30:00.000-04:00"
                },
                {
                  "value": "0.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:45:00.000-04:00"
                },
                {
                  "value": "0.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:00:00.000-04:00"
                },
                {
                  "value": "0.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:15:00.000-04:00"
                },
                {
                  "value": "0.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:30:00.000-04:00"
                },
                {
                  "value": "0.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:45:00.000-04:00"
                },
                {
                  "value": "0.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:00:00.000-04:00"
                },
                {
                  "value": "0.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:15:00.000-04:00"
                },
                {
                  "value": "0.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:30:00.000-04:00"
                },
                {
                  "value": "0.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:45:00.000-04:00"
                },
                {
                  "value": "0.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:00:00.000-04:00"
                },
                {
                  "value": "0.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:15:00.000-04:00"
                },
                {
                  "value": "0.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:30:00.000-04:00"
                },
                {
                  "value": "0.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:45:00.000-04:00"
                },
                {
                  "value": "0.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:00:00.000-04:00"
                },
                {
                  "value": "0.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:15:00.000-04:00"
                },
                {
                  "value": "0.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:30:00.000-04:00"
                },
                {
                  "value": "0.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:45:00.000-04:00"
                },
                {
                  "value": "0.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:00:00.000-04:00"
                },
                {
                  "value": "0.32",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:15:00.000-04:00"
                },
                {
                  "value": "0.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:30:00.000-04:00"
                },
                {
                  "value": "0.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:45:00.000-04:00"
                },
                {
                  "value": "2.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:00:00.000-04:00"
                },
                {
                  "value": "2.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:15:00.000-04:00"
                },
                {
                  "value": "2.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:30:00.000-04:00"
                },
                {
                  "value": "2.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:45:00.000-04:00"
                },
                {
                  "value": "2.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:00:00.000-04:00"
                },
                {
                  "value": "2.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:15:00.000-04:00"
                },
                {
                  "value": "2.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:30:00.000-04:00"
                },
                {
                  "value": "2.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:45:00.000-04:00"
                },
                {
                  "value": "2.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:00:00.000-04:00"
                },
                {
                  "value": "2.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:15:00.000-04:00"
                },
                {
                  "value": "2.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:30:00.000-04:00"
                },
                {
                  "value": "2.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:45:00.000-04:00"
                },
                {
                  "value": "2.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:00:00.000-04:00"
                },
                {
                  "value": "2.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:15:00.000-04:00"
                },
                {
                  "value": "2.80",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:30:00.000-04:00"
                },
                {
                  "value": "2.77",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:45:00.000-04:00"
                },
                {
                  "value": "2.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:00:00.000-04:00"
                },
                {
                  "value": "2.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:15:00.000-04:00"
                },
                {
                  "value": "2.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:30:00.000-04:00"
                },
                {
                  "value": "2.54",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:45:00.000-04:00"
                },
                {
                  "value": "2.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:00:00.000-04:00"
                },
                {
                  "value": "2.47",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:15:00.000-04:00"
                },
                {
                  "value": "2.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:30:00.000-04:00"
                },
                {
                  "value": "2.47",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:45:00.000-04:00"
                },
                {
                  "value": "2.51",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:00:00.000-04:00"
                },
                {
                  "value": "2.61",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:15:00.000-04:00"
                },
                {
                  "value": "2.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:30:00.000-04:00"
                },
                {
                  "value": "2.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:45:00.000-04:00"
                },
                {
                  "value": "2.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:00:00.000-04:00"
                },
                {
                  "value": "2.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:15:00.000-04:00"
                },
                {
                  "value": "2.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:30:00.000-04:00"
                },
                {
                  "value": "3.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:45:00.000-04:00"
                },
                {
                  "value": "3.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:00:00.000-04:00"
                },
                {
                  "value": "3.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:15:00.000-04:00"
                },
                {
                  "value": "3.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:30:00.000-04:00"
                },
                {
                  "value": "3.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:45:00.000-04:00"
                },
                {
                  "value": "3.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:00:00.000-04:00"
                },
                {
                  "value": "3.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:15:00.000-04:00"
                },
                {
                  "value": "2.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:30:00.000-04:00"
                },
                {
                  "value": "2.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:45:00.000-04:00"
                },
                {
                  "value": "3.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:00:00.000-04:00"
                },
                {
                  "value": "3.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:15:00.000-04:00"
                },
                {
                  "value": "3.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:30:00.000-04:00"
                },
                {
                  "value": "3.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:45:00.000-04:00"
                },
                {
                  "value": "3.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:00:00.000-04:00"
                },
                {
                  "value": "3.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:15:00.000-04:00"
                },
                {
                  "value": "3.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:30:00.000-04:00"
                },
                {
                  "value": "3.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:45:00.000-04:00"
                },
                {
                  "value": "3.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:00:00.000-04:00"
                },
                {
                  "value": "3.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:15:00.000-04:00"
                },
                {
                  "value": "3.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:30:00.000-04:00"
                },
                {
                  "value": "3.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:45:00.000-04:00"
                },
                {
                  "value": "3.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:00:00.000-04:00"
                },
                {
                  "value": "3.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:15:00.000-04:00"
                },
                {
                  "value": "3.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:30:00.000-04:00"
                },
                {
                  "value": "3.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:45:00.000-04:00"
                },
                {
                  "value": "3.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:00:00.000-04:00"
                },
                {
                  "value": "3.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:15:00.000-04:00"
                },
                {
                  "value": "2.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:30:00.000-04:00"
                },
                {
                  "value": "2.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:45:00.000-04:00"
                },
                {
                  "value": "2.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:00:00.000-04:00"
                },
                {
                  "value": "2.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:15:00.000-04:00"
                },
                {
                  "value": "2.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:30:00.000-04:00"
                },
                {
                  "value": "2.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:45:00.000-04:00"
                },
                {
                  "value": "2.62",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:00:00.000-04:00"
                },
                {
                  "value": "2.55",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:15:00.000-04:00"
                },
                {
                  "value": "2.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:30:00.000-04:00"
                },
                {
                  "value": "2.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:45:00.000-04:00"
                },
                {
                  "value": "2.42",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:00:00.000-04:00"
                },
                {
                  "value": "2.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:15:00.000-04:00"
                },
                {
                  "value": "2.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:30:00.000-04:00"
                },
                {
                  "value": "2.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:45:00.000-04:00"
                },
                {
                  "value": "2.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:00:00.000-04:00"
                },
                {
                  "value": "2.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:15:00.000-04:00"
                },
                {
                  "value": "2.42",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:30:00.000-04:00"
                },
                {
                  "value": "2.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:45:00.000-04:00"
                },
                {
                  "value": "2.57",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:00:00.000-04:00"
                },
                {
                  "value": "2.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:15:00.000-04:00"
                },
                {
                  "value": "2.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:30:00.000-04:00"
                },
                {
                  "value": "2.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:45:00.000-04:00"
                },
                {
                  "value": "2.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:00:00.000-04:00"
                },
                {
                  "value": "2.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:15:00.000-04:00"
                },
                {
                  "value": "2.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:30:00.000-04:00"
                },
                {
                  "value": "3.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:45:00.000-04:00"
                },
                {
                  "value": "3.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:00:00.000-04:00"
                },
                {
                  "value": "3.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:15:00.000-04:00"
                },
                {
                  "value": "3.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:30:00.000-04:00"
                },
                {
                  "value": "3.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:45:00.000-04:00"
                },
                {
                  "value": "3.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:00:00.000-04:00"
                },
                {
                  "value": "3.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:15:00.000-04:00"
                },
                {
                  "value": "3.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:30:00.000-04:00"
                },
                {
                  "value": "3.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:45:00.000-04:00"
                },
                {
                  "value": "3.27",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:00:00.000-04:00"
                },
                {
                  "value": "3.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:15:00.000-04:00"
                },
                {
                  "value": "3.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:30:00.000-04:00"
                },
                {
                  "value": "3.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:45:00.000-04:00"
                },
                {
                  "value": "3.27",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:00:00.000-04:00"
                },
                {
                  "value": "3.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:15:00.000-04:00"
                },
                {
                  "value": "3.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:30:00.000-04:00"
                },
                {
                  "value": "3.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:45:00.000-04:00"
                },
                {
                  "value": "3.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:00:00.000-04:00"
                },
                {
                  "value": "3.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:15:00.000-04:00"
                },
                {
                  "value": "3.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:30:00.000-04:00"
                },
                {
                  "value": "4.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:45:00.000-04:00"
                },
                {
                  "value": "4.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:00:00.000-04:00"
                },
                {
                  "value": "4.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:15:00.000-04:00"
                },
                {
                  "value": "4.31",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:30:00.000-04:00"
                },
                {
                  "value": "4.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:45:00.000-04:00"
                },
                {
                  "value": "4.63",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:00:00.000-04:00"
                },
                {
                  "value": "4.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:15:00.000-04:00"
                },
                {
                  "value": "5.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:30:00.000-04:00"
                },
                {
                  "value": "4.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:45:00.000-04:00"
                },
                {
                  "value": "4.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:00:00.000-04:00"
                },
                {
                  "value": "4.78",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:15:00.000-04:00"
                },
                {
                  "value": "4.78",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:30:00.000-04:00"
                },
                {
                  "value": "4.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:45:00.000-04:00"
                },
                {
                  "value": "4.63",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:00:00.000-04:00"
                },
                {
                  "value": "4.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:15:00.000-04:00"
                },
                {
                  "value": "4.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:30:00.000-04:00"
                },
                {
                  "value": "5.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:45:00.000-04:00"
                },
                {
                  "value": "5.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:00:00.000-04:00"
                },
                {
                  "value": "6.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:15:00.000-04:00"
                },
                {
                  "value": "6.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:30:00.000-04:00"
                },
                {
                  "value": "6.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:45:00.000-04:00"
                },
                {
                  "value": "5.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:00:00.000-04:00"
                },
                {
                  "value": "5.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:15:00.000-04:00"
                },
                {
                  "value": "6.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:30:00.000-04:00"
                },
                {
                  "value": "6.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:45:00.000-04:00"
                },
                {
                  "value": "6.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:00:00.000-04:00"
                },
                {
                  "value": "6.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:15:00.000-04:00"
                },
                {
                  "value": "6.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:30:00.000-04:00"
                },
                {
                  "value": "6.51",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:45:00.000-04:00"
                },
                {
                  "value": "6.77",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:00:00.000-04:00"
                },
                {
                  "value": "6.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:15:00.000-04:00"
                },
                {
                  "value": "6.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:30:00.000-04:00"
                },
                {
                  "value": "7.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:45:00.000-04:00"
                },
                {
                  "value": "-999999",
                  "qualifiers": [
                    "P",
                    "Fld"
                  ],
                  "dateTime": "2024-09-27T13:00:00.000-04:00"
                }
              ],
              "qualifier": [
                {
                  "qualifierCode": "Fld",
                  "qualifierDescription": "Value is affected by flooding conditions at the measurement site.",
                  "qualifierID": 0,
                  "network": "NWIS",
                  "vocabulary": "uv_rmk_cd"
                },
                {
                  "qualifierCode": "P",
                  "qualifierDescription": "Provisional data subject to revision.",
                  "qualifierID": 1,
                  "network": "NWIS",
                  "vocabulary": "uv_rmk_cd"
                }
              ],
              "qualityControlLevel": [],
              "method": [
                {
                  "methodDescription": "",
                  "methodID": 90185
                }
              ],
              "source": [],
              "offset": [],
              "sample": [],
              "censorCode": []
            }
          ],
          "name": "USGS:0344894205:00065:00000"
        },
        {
          "sourceInfo": {
            "siteName": "FRENCH BROAD RIVER AT MARSHALL, NC",
            "siteCode": [
              {
                "value": "03453500",
                "network": "NWIS",
                "agencyCode": "USGS"
              }
            ],
            "timeZoneInfo": {
              "defaultTimeZone": {
                "zoneOffset": "-05:00",
                "zoneAbbreviation": "EST"
              },
              "daylightSavingsTimeZone": {
                "zoneOffset": "-04:00",
                "zoneAbbreviation": "EDT"
              },
              "siteUsesDaylightSavingsTime": true
            },
            "geoLocation": {
              "geogLocation": {
                "srs": "EPSG:4326",
                "latitude": 35.78638889,
                "longitude": -82.6608333
              },
              "localSiteXY": []
            },
            "note": [],
            "siteType": [],
            "siteProperty": [
              {
                "value": "ST",
                "name": "siteTypeCd"
              },
              {
                "value": "06010105",
                "name": "hucCd"
              },
              {
                "value": "37",
                "name": "stateCd"
              },
              {
                "value": "37115",
                "name": "countyCd"
              }
            ]
          },
          "variable": {
            "variableCode": [
              {
                "value": "00060",
                "network": "NWIS",
                "vocabulary": "NWIS:UnitValues",
                "variableID": 45807197,
                "default": true
              }
            ],
            "variableName": "Streamflow, ft&#179;/s",
            "variableDescription": "Discharge, cubic feet per second",
            "valueType": "Derived Value",
            "unit": {
              "unitCode": "ft3/s"
            },
            "options": {
              "option": [
                {
                  "name": "Statistic",
                  "optionCode": "00000"
                }
              ]
            },
            "note": [],
            "noDataValue": -999999,
            "variableProperty": [],
            "oid": "45807197"
          },
          "values": [
            {
              "value": [
                {
                  "value": "1380",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:00:00.000-04:00"
                },
                {
                  "value": "1400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:15:00.000-04:00"
                },
                {
                  "value": "1440",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:30:00.000-04:00"
                },
                {
                  "value": "1470",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:45:00.000-04:00"
                },
                {
                  "value": "1510",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:00:00.000-04:00"
                },
                {
                  "value": "1540",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:15:00.000-04:00"
                },
                {
                  "value": "1560",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:30:00.000-04:00"
                },
                {
                  "value": "1570",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:45:00.000-04:00"
                },
                {
                  "value": "1590",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:00:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:15:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:30:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:45:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:00:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:15:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:30:00.000-04:00"
                },
                {
                  "value": "1620",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:45:00.000-04:00"
                },
                {
                  "value": "1700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:00:00.000-04:00"
                },
                {
                  "value": "1830",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:15:00.000-04:00"
                },
                {
                  "value": "1960",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:30:00.000-04:00"
                },
                {
                  "value": "2050",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:45:00.000-04:00"
                },
                {
                  "value": "2070",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:00:00.000-04:00"
                },
                {
                  "value": "2050",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:15:00.000-04:00"
                },
                {
                  "value": "2020",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:30:00.000-04:00"
                },
                {
                  "value": "2000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:45:00.000-04:00"
                },
                {
                  "value": "1960",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:00:00.000-04:00"
                },
                {
                  "value": "1930",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:15:00.000-04:00"
                },
                {
                  "value": "1890",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:30:00.000-04:00"
                },
                {
                  "value": "1880",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:45:00.000-04:00"
                },
                {
                  "value": "1840",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:00:00.000-04:00"
                },
                {
                  "value": "1830",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:15:00.000-04:00"
                },
                {
                  "value": "1810",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:30:00.000-04:00"
                },
                {
                  "value": "1790",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:45:00.000-04:00"
                },
                {
                  "value": "1780",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:00:00.000-04:00"
                },
                {
                  "value": "1760",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:15:00.000-04:00"
                },
                {
                  "value": "1730",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:30:00.000-04:00"
                },
                {
                  "value": "1710",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:45:00.000-04:00"
                },
                {
                  "value": "1700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:00:00.000-04:00"
                },
                {
                  "value": "1680",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:15:00.000-04:00"
                },
                {
                  "value": "1670",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:30:00.000-04:00"
                },
                {
                  "value": "1670",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:45:00.000-04:00"
                },
                {
                  "value": "1650",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:00:00.000-04:00"
                },
                {
                  "value": "1650",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:15:00.000-04:00"
                },
                {
                  "value": "1630",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:30:00.000-04:00"
                },
                {
                  "value": "1630",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:45:00.000-04:00"
                },
                {
                  "value": "1620",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:00:00.000-04:00"
                },
                {
                  "value": "1620",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:15:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:30:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:45:00.000-04:00"
                },
                {
                  "value": "1620",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:00:00.000-04:00"
                },
                {
                  "value": "1620",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:15:00.000-04:00"
                },
                {
                  "value": "1620",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:30:00.000-04:00"
                },
                {
                  "value": "1620",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:45:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:00:00.000-04:00"
                },
                {
                  "value": "1590",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:15:00.000-04:00"
                },
                {
                  "value": "1570",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:30:00.000-04:00"
                },
                {
                  "value": "1560",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:45:00.000-04:00"
                },
                {
                  "value": "1560",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:00:00.000-04:00"
                },
                {
                  "value": "1560",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:15:00.000-04:00"
                },
                {
                  "value": "1540",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:30:00.000-04:00"
                },
                {
                  "value": "1540",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:45:00.000-04:00"
                },
                {
                  "value": "1540",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:00:00.000-04:00"
                },
                {
                  "value": "1540",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:15:00.000-04:00"
                },
                {
                  "value": "1560",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:30:00.000-04:00"
                },
                {
                  "value": "1570",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:45:00.000-04:00"
                },
                {
                  "value": "1570",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:00:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:15:00.000-04:00"
                },
                {
                  "value": "1590",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:30:00.000-04:00"
                },
                {
                  "value": "1590",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:45:00.000-04:00"
                },
                {
                  "value": "1590",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:00:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:15:00.000-04:00"
                },
                {
                  "value": "1620",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:30:00.000-04:00"
                },
                {
                  "value": "1650",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:45:00.000-04:00"
                },
                {
                  "value": "1700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:00:00.000-04:00"
                },
                {
                  "value": "1740",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:15:00.000-04:00"
                },
                {
                  "value": "1790",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:30:00.000-04:00"
                },
                {
                  "value": "1840",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:45:00.000-04:00"
                },
                {
                  "value": "1930",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:00:00.000-04:00"
                },
                {
                  "value": "2020",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:15:00.000-04:00"
                },
                {
                  "value": "2140",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:30:00.000-04:00"
                },
                {
                  "value": "2330",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:45:00.000-04:00"
                },
                {
                  "value": "5880",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:00:00.000-04:00"
                },
                {
                  "value": "9050",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:15:00.000-04:00"
                },
                {
                  "value": "10500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:30:00.000-04:00"
                },
                {
                  "value": "11700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:45:00.000-04:00"
                },
                {
                  "value": "12700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:00:00.000-04:00"
                },
                {
                  "value": "13600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:15:00.000-04:00"
                },
                {
                  "value": "14400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:30:00.000-04:00"
                },
                {
                  "value": "15000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:45:00.000-04:00"
                },
                {
                  "value": "15400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:00:00.000-04:00"
                },
                {
                  "value": "15700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:15:00.000-04:00"
                },
                {
                  "value": "15400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:30:00.000-04:00"
                },
                {
                  "value": "15000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:45:00.000-04:00"
                },
                {
                  "value": "14700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:00:00.000-04:00"
                },
                {
                  "value": "14500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:15:00.000-04:00"
                },
                {
                  "value": "14500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:30:00.000-04:00"
                },
                {
                  "value": "14700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:45:00.000-04:00"
                },
                {
                  "value": "15100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:00:00.000-04:00"
                },
                {
                  "value": "15300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:15:00.000-04:00"
                },
                {
                  "value": "15500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:30:00.000-04:00"
                },
                {
                  "value": "15500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:45:00.000-04:00"
                },
                {
                  "value": "15400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:00:00.000-04:00"
                },
                {
                  "value": "15200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:15:00.000-04:00"
                },
                {
                  "value": "15000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:30:00.000-04:00"
                },
                {
                  "value": "14900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:45:00.000-04:00"
                },
                {
                  "value": "14900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:00:00.000-04:00"
                },
                {
                  "value": "14900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:15:00.000-04:00"
                },
                {
                  "value": "14800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:30:00.000-04:00"
                },
                {
                  "value": "14900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:45:00.000-04:00"
                },
                {
                  "value": "15000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:00:00.000-04:00"
                },
                {
                  "value": "15000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:15:00.000-04:00"
                },
                {
                  "value": "15200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:30:00.000-04:00"
                },
                {
                  "value": "15500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:45:00.000-04:00"
                },
                {
                  "value": "16000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:00:00.000-04:00"
                },
                {
                  "value": "16900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:15:00.000-04:00"
                },
                {
                  "value": "18100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:30:00.000-04:00"
                },
                {
                  "value": "19900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:45:00.000-04:00"
                },
                {
                  "value": "21300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:00:00.000-04:00"
                },
                {
                  "value": "22000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:15:00.000-04:00"
                },
                {
                  "value": "22800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:30:00.000-04:00"
                },
                {
                  "value": "23400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:45:00.000-04:00"
                },
                {
                  "value": "23800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:00:00.000-04:00"
                },
                {
                  "value": "24200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:15:00.000-04:00"
                },
                {
                  "value": "24600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:30:00.000-04:00"
                },
                {
                  "value": "24900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:45:00.000-04:00"
                },
                {
                  "value": "25500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:00:00.000-04:00"
                },
                {
                  "value": "25800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:15:00.000-04:00"
                },
                {
                  "value": "25800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:30:00.000-04:00"
                },
                {
                  "value": "25600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:45:00.000-04:00"
                },
                {
                  "value": "25600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:00:00.000-04:00"
                },
                {
                  "value": "25600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:15:00.000-04:00"
                },
                {
                  "value": "25800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:30:00.000-04:00"
                },
                {
                  "value": "26200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:45:00.000-04:00"
                },
                {
                  "value": "26600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:00:00.000-04:00"
                },
                {
                  "value": "27200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:15:00.000-04:00"
                },
                {
                  "value": "28000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:30:00.000-04:00"
                },
                {
                  "value": "29200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:45:00.000-04:00"
                },
                {
                  "value": "30100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:00:00.000-04:00"
                },
                {
                  "value": "30800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:15:00.000-04:00"
                },
                {
                  "value": "31600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:30:00.000-04:00"
                },
                {
                  "value": "32500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:45:00.000-04:00"
                },
                {
                  "value": "33200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:00:00.000-04:00"
                },
                {
                  "value": "33800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:15:00.000-04:00"
                },
                {
                  "value": "34200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:30:00.000-04:00"
                },
                {
                  "value": "34300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:45:00.000-04:00"
                },
                {
                  "value": "34200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:00:00.000-04:00"
                },
                {
                  "value": "34200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:15:00.000-04:00"
                },
                {
                  "value": "34100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:30:00.000-04:00"
                },
                {
                  "value": "33700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:45:00.000-04:00"
                },
                {
                  "value": "33300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:00:00.000-04:00"
                },
                {
                  "value": "32900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:15:00.000-04:00"
                },
                {
                  "value": "32800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:30:00.000-04:00"
                },
                {
                  "value": "32300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:45:00.000-04:00"
                },
                {
                  "value": "31900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:00:00.000-04:00"
                },
                {
                  "value": "31600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:15:00.000-04:00"
                },
                {
                  "value": "31300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:30:00.000-04:00"
                },
                {
                  "value": "31000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:45:00.000-04:00"
                },
                {
                  "value": "30600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:00:00.000-04:00"
                },
                {
                  "value": "30300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:15:00.000-04:00"
                },
                {
                  "value": "29800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:30:00.000-04:00"
                },
                {
                  "value": "29400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:45:00.000-04:00"
                },
                {
                  "value": "28700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:00:00.000-04:00"
                },
                {
                  "value": "28300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:15:00.000-04:00"
                },
                {
                  "value": "27900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:30:00.000-04:00"
                },
                {
                  "value": "27500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:45:00.000-04:00"
                },
                {
                  "value": "27200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:00:00.000-04:00"
                },
                {
                  "value": "27000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:15:00.000-04:00"
                },
                {
                  "value": "26700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:30:00.000-04:00"
                },
                {
                  "value": "26600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:45:00.000-04:00"
                },
                {
                  "value": "26500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:00:00.000-04:00"
                },
                {
                  "value": "26500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:15:00.000-04:00"
                },
                {
                  "value": "26700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:30:00.000-04:00"
                },
                {
                  "value": "26700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:45:00.000-04:00"
                },
                {
                  "value": "27000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:00:00.000-04:00"
                },
                {
                  "value": "27300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:15:00.000-04:00"
                },
                {
                  "value": "27400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:30:00.000-04:00"
                },
                {
                  "value": "27600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:45:00.000-04:00"
                },
                {
                  "value": "27800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:00:00.000-04:00"
                },
                {
                  "value": "27800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:15:00.000-04:00"
                },
                {
                  "value": "28000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:30:00.000-04:00"
                },
                {
                  "value": "28200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:45:00.000-04:00"
                },
                {
                  "value": "28000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:00:00.000-04:00"
                },
                {
                  "value": "28200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:15:00.000-04:00"
                },
                {
                  "value": "28300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:30:00.000-04:00"
                },
                {
                  "value": "28200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:45:00.000-04:00"
                },
                {
                  "value": "28100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:00:00.000-04:00"
                },
                {
                  "value": "28400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:15:00.000-04:00"
                },
                {
                  "value": "28600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:30:00.000-04:00"
                },
                {
                  "value": "28800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:45:00.000-04:00"
                },
                {
                  "value": "29000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:00:00.000-04:00"
                },
                {
                  "value": "29400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:15:00.000-04:00"
                },
                {
                  "value": "29800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:30:00.000-04:00"
                },
                {
                  "value": "30200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:45:00.000-04:00"
                },
                {
                  "value": "30700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:00:00.000-04:00"
                },
                {
                  "value": "31400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:15:00.000-04:00"
                },
                {
                  "value": "31900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:30:00.000-04:00"
                },
                {
                  "value": "32400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:45:00.000-04:00"
                },
                {
                  "value": "33000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:00:00.000-04:00"
                },
                {
                  "value": "33600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:15:00.000-04:00"
                },
                {
                  "value": "33900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:30:00.000-04:00"
                },
                {
                  "value": "34400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:45:00.000-04:00"
                },
                {
                  "value": "34900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:00:00.000-04:00"
                },
                {
                  "value": "35400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:15:00.000-04:00"
                },
                {
                  "value": "35700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:30:00.000-04:00"
                },
                {
                  "value": "36100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:45:00.000-04:00"
                },
                {
                  "value": "36200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:00:00.000-04:00"
                },
                {
                  "value": "36500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:15:00.000-04:00"
                },
                {
                  "value": "36600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:30:00.000-04:00"
                },
                {
                  "value": "36700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:45:00.000-04:00"
                },
                {
                  "value": "37000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:00:00.000-04:00"
                },
                {
                  "value": "37000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:15:00.000-04:00"
                },
                {
                  "value": "37100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:30:00.000-04:00"
                },
                {
                  "value": "37200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:45:00.000-04:00"
                },
                {
                  "value": "37600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:00:00.000-04:00"
                },
                {
                  "value": "37900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:15:00.000-04:00"
                },
                {
                  "value": "38400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:30:00.000-04:00"
                },
                {
                  "value": "38700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:45:00.000-04:00"
                },
                {
                  "value": "38800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:00:00.000-04:00"
                },
                {
                  "value": "39400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:15:00.000-04:00"
                },
                {
                  "value": "39800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:30:00.000-04:00"
                },
                {
                  "value": "40500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:45:00.000-04:00"
                },
                {
                  "value": "41100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:00:00.000-04:00"
                },
                {
                  "value": "41700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:15:00.000-04:00"
                },
                {
                  "value": "42600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:30:00.000-04:00"
                },
                {
                  "value": "43800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:45:00.000-04:00"
                },
                {
                  "value": "44700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:00:00.000-04:00"
                },
                {
                  "value": "45800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:15:00.000-04:00"
                },
                {
                  "value": "47100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:30:00.000-04:00"
                },
                {
                  "value": "48000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:45:00.000-04:00"
                },
                {
                  "value": "49400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:00:00.000-04:00"
                },
                {
                  "value": "51000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:15:00.000-04:00"
                },
                {
                  "value": "52100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:30:00.000-04:00"
                },
                {
                  "value": "54100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:45:00.000-04:00"
                },
                {
                  "value": "54300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:00:00.000-04:00"
                },
                {
                  "value": "54200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:15:00.000-04:00"
                },
                {
                  "value": "53900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:30:00.000-04:00"
                },
                {
                  "value": "53600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:45:00.000-04:00"
                },
                {
                  "value": "53300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:00:00.000-04:00"
                },
                {
                  "value": "53100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:15:00.000-04:00"
                },
                {
                  "value": "52800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:30:00.000-04:00"
                },
                {
                  "value": "52400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:45:00.000-04:00"
                },
                {
                  "value": "52000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:00:00.000-04:00"
                },
                {
                  "value": "52000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:15:00.000-04:00"
                },
                {
                  "value": "51800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:30:00.000-04:00"
                },
                {
                  "value": "51500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:45:00.000-04:00"
                },
                {
                  "value": "51300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:00:00.000-04:00"
                },
                {
                  "value": "51000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:15:00.000-04:00"
                },
                {
                  "value": "50700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:30:00.000-04:00"
                },
                {
                  "value": "50400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:45:00.000-04:00"
                },
                {
                  "value": "50300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:00:00.000-04:00"
                },
                {
                  "value": "50000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:15:00.000-04:00"
                },
                {
                  "value": "49700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:30:00.000-04:00"
                },
                {
                  "value": "49400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:45:00.000-04:00"
                },
                {
                  "value": "49100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:00:00.000-04:00"
                },
                {
                  "value": "48900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:15:00.000-04:00"
                },
                {
                  "value": "48600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:30:00.000-04:00"
                },
                {
                  "value": "48400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:45:00.000-04:00"
                },
                {
                  "value": "48100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:00:00.000-04:00"
                },
                {
                  "value": "47800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:15:00.000-04:00"
                },
                {
                  "value": "47700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:30:00.000-04:00"
                },
                {
                  "value": "47500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:45:00.000-04:00"
                },
                {
                  "value": "47300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:00:00.000-04:00"
                },
                {
                  "value": "47000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:15:00.000-04:00"
                },
                {
                  "value": "46700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:30:00.000-04:00"
                },
                {
                  "value": "46500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:45:00.000-04:00"
                },
                {
                  "value": "46100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:00:00.000-04:00"
                },
                {
                  "value": "46000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:15:00.000-04:00"
                },
                {
                  "value": "45700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:30:00.000-04:00"
                },
                {
                  "value": "45400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:45:00.000-04:00"
                },
                {
                  "value": "45200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:00:00.000-04:00"
                },
                {
                  "value": "44900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:15:00.000-04:00"
                },
                {
                  "value": "44700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:30:00.000-04:00"
                },
                {
                  "value": "44500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:45:00.000-04:00"
                },
                {
                  "value": "44400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:00:00.000-04:00"
                },
                {
                  "value": "44200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:15:00.000-04:00"
                },
                {
                  "value": "43800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:30:00.000-04:00"
                },
                {
                  "value": "43500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:45:00.000-04:00"
                },
                {
                  "value": "43400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:00:00.000-04:00"
                },
                {
                  "value": "43000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:15:00.000-04:00"
                },
                {
                  "value": "42800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:30:00.000-04:00"
                },
                {
                  "value": "42600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:45:00.000-04:00"
                },
                {
                  "value": "42300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:00:00.000-04:00"
                },
                {
                  "value": "42000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:15:00.000-04:00"
                },
                {
                  "value": "41900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:30:00.000-04:00"
                },
                {
                  "value": "41500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:45:00.000-04:00"
                },
                {
                  "value": "41200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:00:00.000-04:00"
                },
                {
                  "value": "41200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:15:00.000-04:00"
                },
                {
                  "value": "40800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:30:00.000-04:00"
                },
                {
                  "value": "40500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:45:00.000-04:00"
                },
                {
                  "value": "40400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:00:00.000-04:00"
                },
                {
                  "value": "40100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:15:00.000-04:00"
                },
                {
                  "value": "39900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:30:00.000-04:00"
                },
                {
                  "value": "39600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:45:00.000-04:00"
                },
                {
                  "value": "39400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:00:00.000-04:00"
                },
                {
                  "value": "39100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:15:00.000-04:00"
                },
                {
                  "value": "38900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:30:00.000-04:00"
                },
                {
                  "value": "38900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:45:00.000-04:00"
                },
                {
                  "value": "38700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:00:00.000-04:00"
                },
                {
                  "value": "38700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:15:00.000-04:00"
                },
                {
                  "value": "38500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:30:00.000-04:00"
                },
                {
                  "value": "38500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:45:00.000-04:00"
                },
                {
                  "value": "38400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:00:00.000-04:00"
                },
                {
                  "value": "38400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:15:00.000-04:00"
                },
                {
                  "value": "18800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:45:00.000-04:00"
                },
                {
                  "value": "18600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:00:00.000-04:00"
                },
                {
                  "value": "18500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:15:00.000-04:00"
                },
                {
                  "value": "18400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:30:00.000-04:00"
                },
                {
                  "value": "18200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:45:00.000-04:00"
                },
                {
                  "value": "18100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:00:00.000-04:00"
                },
                {
                  "value": "18000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:15:00.000-04:00"
                },
                {
                  "value": "17900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:30:00.000-04:00"
                },
                {
                  "value": "17700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:45:00.000-04:00"
                },
                {
                  "value": "17600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:00:00.000-04:00"
                },
                {
                  "value": "17500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:15:00.000-04:00"
                },
                {
                  "value": "17400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:30:00.000-04:00"
                },
                {
                  "value": "17300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:45:00.000-04:00"
                },
                {
                  "value": "17200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:00:00.000-04:00"
                },
                {
                  "value": "17000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:15:00.000-04:00"
                },
                {
                  "value": "16900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:30:00.000-04:00"
                },
                {
                  "value": "16800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:45:00.000-04:00"
                },
                {
                  "value": "16700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:00:00.000-04:00"
                },
                {
                  "value": "16600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:15:00.000-04:00"
                },
                {
                  "value": "16500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:30:00.000-04:00"
                },
                {
                  "value": "16400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:45:00.000-04:00"
                },
                {
                  "value": "16300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:00:00.000-04:00"
                },
                {
                  "value": "16100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:15:00.000-04:00"
                },
                {
                  "value": "16000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:30:00.000-04:00"
                },
                {
                  "value": "15900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:45:00.000-04:00"
                },
                {
                  "value": "15800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:00:00.000-04:00"
                },
                {
                  "value": "15700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:15:00.000-04:00"
                },
                {
                  "value": "15600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:30:00.000-04:00"
                },
                {
                  "value": "15600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:45:00.000-04:00"
                },
                {
                  "value": "15400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:00:00.000-04:00"
                },
                {
                  "value": "15300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:15:00.000-04:00"
                },
                {
                  "value": "15200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:30:00.000-04:00"
                },
                {
                  "value": "15100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:45:00.000-04:00"
                },
                {
                  "value": "15000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:00:00.000-04:00"
                },
                {
                  "value": "15000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:15:00.000-04:00"
                },
                {
                  "value": "14900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:30:00.000-04:00"
                },
                {
                  "value": "14800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:45:00.000-04:00"
                },
                {
                  "value": "14700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:00:00.000-04:00"
                },
                {
                  "value": "14600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:15:00.000-04:00"
                },
                {
                  "value": "14500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:30:00.000-04:00"
                },
                {
                  "value": "14500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:45:00.000-04:00"
                },
                {
                  "value": "14400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:00:00.000-04:00"
                },
                {
                  "value": "14300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:15:00.000-04:00"
                },
                {
                  "value": "14300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:30:00.000-04:00"
                },
                {
                  "value": "14200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:45:00.000-04:00"
                },
                {
                  "value": "14100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:00:00.000-04:00"
                },
                {
                  "value": "14100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:15:00.000-04:00"
                },
                {
                  "value": "14000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:30:00.000-04:00"
                },
                {
                  "value": "14000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:45:00.000-04:00"
                },
                {
                  "value": "14000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:00:00.000-04:00"
                },
                {
                  "value": "13800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:15:00.000-04:00"
                },
                {
                  "value": "13800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:30:00.000-04:00"
                },
                {
                  "value": "13700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:45:00.000-04:00"
                },
                {
                  "value": "13600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:00:00.000-04:00"
                },
                {
                  "value": "13500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:15:00.000-04:00"
                },
                {
                  "value": "13500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:30:00.000-04:00"
                },
                {
                  "value": "13400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:45:00.000-04:00"
                }
              ],
              "qualifier": [
                {
                  "qualifierCode": "P",
                  "qualifierDescription": "Provisional data subject to revision.",
                  "qualifierID": 0,
                  "network": "NWIS",
                  "vocabulary": "uv_rmk_cd"
                }
              ],
              "qualityControlLevel": [],
              "method": [
                {
                  "methodDescription": "",
                  "methodID": 90207
                }
              ],
              "source": [],
              "offset": [],
              "sample": [],
              "censorCode": []
            }
          ],
          "name": "USGS:03453500:00060:00000"
        },
        {
          "sourceInfo": {
            "siteName": "FRENCH BROAD RIVER AT MARSHALL, NC",
            "siteCode": [
              {
                "value": "03453500",
                "network": "NWIS",
                "agencyCode": "USGS"
              }
            ],
            "timeZoneInfo": {
              "defaultTimeZone": {
                "zoneOffset": "-05:00",
                "zoneAbbreviation": "EST"
              },
              "daylightSavingsTimeZone": {
                "zoneOffset": "-04:00",
                "zoneAbbreviation": "EDT"
              },
              "siteUsesDaylightSavingsTime": true
            },
            "geoLocation": {
              "geogLocation": {
                "srs": "EPSG:4326",
                "latitude": 35.78638889,
                "longitude": -82.6608333
              },
              "localSiteXY": []
            },
            "note": [],
            "siteType": [],
            "siteProperty": [
              {
                "value": "ST",
                "name": "siteTypeCd"
              },
              {
                "value": "06010105",
                "name": "hucCd"
              },
              {
                "value": "37",
                "name": "stateCd"
              },
              {
                "value": "37115",
                "name": "countyCd"
              }
            ]
          },
          "variable": {
            "variableCode": [
              {
                "value": "00065",
                "network": "NWIS",
                "vocabulary": "NWIS:UnitValues",
                "variableID": 45807202,
                "default": true
              }
            ],
            "variableName": "Gage height, ft",
            "variableDescription": "Gage height, feet",
            "valueType": "Derived Value",
            "unit": {
              "unitCode": "ft"
            },
            "options": {
              "option": [
                {
                  "name": "Statistic",
                  "optionCode": "00000"
                }
              ]
            },
            "note": [],
            "noDataValue": -999999,
            "variableProperty": [],
            "oid": "45807202"
          },
          "values": [
            {
              "value": [
                {
                  "value": "1.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:00:00.000-04:00"
                },
                {
                  "value": "1.77",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:15:00.000-04:00"
                },
                {
                  "value": "1.80",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:30:00.000-04:00"
                },
                {
                  "value": "1.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:45:00.000-04:00"
                },
                {
                  "value": "1.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:00:00.000-04:00"
                },
                {
                  "value": "1.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:15:00.000-04:00"
                },
                {
                  "value": "1.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:30:00.000-04:00"
                },
                {
                  "value": "1.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:45:00.000-04:00"
                },
                {
                  "value": "1.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:00:00.000-04:00"
                },
                {
                  "value": "1.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:15:00.000-04:00"
                },
                {
                  "value": "1.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:30:00.000-04:00"
                },
                {
                  "value": "1.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:45:00.000-04:00"
                },
                {
                  "value": "1.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:00:00.000-04:00"
                },
                {
                  "value": "1.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:15:00.000-04:00"
                },
                {
                  "value": "1.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:30:00.000-04:00"
                },
                {
                  "value": "1.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:45:00.000-04:00"
                },
                {
                  "value": "1.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:00:00.000-04:00"
                },
                {
                  "value": "2.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:15:00.000-04:00"
                },
                {
                  "value": "2.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:30:00.000-04:00"
                },
                {
                  "value": "2.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:45:00.000-04:00"
                },
                {
                  "value": "2.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:00:00.000-04:00"
                },
                {
                  "value": "2.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:15:00.000-04:00"
                },
                {
                  "value": "2.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:30:00.000-04:00"
                },
                {
                  "value": "2.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:45:00.000-04:00"
                },
                {
                  "value": "2.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:00:00.000-04:00"
                },
                {
                  "value": "2.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:15:00.000-04:00"
                },
                {
                  "value": "2.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:30:00.000-04:00"
                },
                {
                  "value": "2.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:45:00.000-04:00"
                },
                {
                  "value": "2.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:00:00.000-04:00"
                },
                {
                  "value": "2.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:15:00.000-04:00"
                },
                {
                  "value": "2.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:30:00.000-04:00"
                },
                {
                  "value": "2.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:45:00.000-04:00"
                },
                {
                  "value": "2.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:00:00.000-04:00"
                },
                {
                  "value": "2.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:15:00.000-04:00"
                },
                {
                  "value": "1.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:30:00.000-04:00"
                },
                {
                  "value": "1.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:45:00.000-04:00"
                },
                {
                  "value": "1.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:00:00.000-04:00"
                },
                {
                  "value": "1.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:15:00.000-04:00"
                },
                {
                  "value": "1.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:30:00.000-04:00"
                },
                {
                  "value": "1.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:45:00.000-04:00"
                },
                {
                  "value": "1.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:00:00.000-04:00"
                },
                {
                  "value": "1.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:15:00.000-04:00"
                },
                {
                  "value": "1.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:30:00.000-04:00"
                },
                {
                  "value": "1.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:45:00.000-04:00"
                },
                {
                  "value": "1.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:00:00.000-04:00"
                },
                {
                  "value": "1.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:15:00.000-04:00"
                },
                {
                  "value": "1.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:30:00.000-04:00"
                },
                {
                  "value": "1.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:45:00.000-04:00"
                },
                {
                  "value": "1.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:00:00.000-04:00"
                },
                {
                  "value": "1.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:15:00.000-04:00"
                },
                {
                  "value": "1.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:30:00.000-04:00"
                },
                {
                  "value": "1.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:45:00.000-04:00"
                },
                {
                  "value": "1.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:00:00.000-04:00"
                },
                {
                  "value": "1.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:15:00.000-04:00"
                },
                {
                  "value": "1.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:30:00.000-04:00"
                },
                {
                  "value": "1.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:45:00.000-04:00"
                },
                {
                  "value": "1.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:00:00.000-04:00"
                },
                {
                  "value": "1.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:15:00.000-04:00"
                },
                {
                  "value": "1.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:30:00.000-04:00"
                },
                {
                  "value": "1.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:45:00.000-04:00"
                },
                {
                  "value": "1.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:00:00.000-04:00"
                },
                {
                  "value": "1.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:15:00.000-04:00"
                },
                {
                  "value": "1.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:30:00.000-04:00"
                },
                {
                  "value": "1.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:45:00.000-04:00"
                },
                {
                  "value": "1.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:00:00.000-04:00"
                },
                {
                  "value": "1.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:15:00.000-04:00"
                },
                {
                  "value": "1.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:30:00.000-04:00"
                },
                {
                  "value": "1.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:45:00.000-04:00"
                },
                {
                  "value": "1.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:00:00.000-04:00"
                },
                {
                  "value": "1.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:15:00.000-04:00"
                },
                {
                  "value": "1.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:30:00.000-04:00"
                },
                {
                  "value": "1.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:45:00.000-04:00"
                },
                {
                  "value": "1.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:00:00.000-04:00"
                },
                {
                  "value": "2.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:15:00.000-04:00"
                },
                {
                  "value": "2.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:30:00.000-04:00"
                },
                {
                  "value": "2.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:45:00.000-04:00"
                },
                {
                  "value": "2.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:00:00.000-04:00"
                },
                {
                  "value": "2.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:15:00.000-04:00"
                },
                {
                  "value": "2.23",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:30:00.000-04:00"
                },
                {
                  "value": "2.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:45:00.000-04:00"
                },
                {
                  "value": "3.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:00:00.000-04:00"
                },
                {
                  "value": "5.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:15:00.000-04:00"
                },
                {
                  "value": "5.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:30:00.000-04:00"
                },
                {
                  "value": "5.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:45:00.000-04:00"
                },
                {
                  "value": "6.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:00:00.000-04:00"
                },
                {
                  "value": "6.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:15:00.000-04:00"
                },
                {
                  "value": "6.55",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:30:00.000-04:00"
                },
                {
                  "value": "6.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:45:00.000-04:00"
                },
                {
                  "value": "6.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:00:00.000-04:00"
                },
                {
                  "value": "6.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:15:00.000-04:00"
                },
                {
                  "value": "6.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:30:00.000-04:00"
                },
                {
                  "value": "6.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:45:00.000-04:00"
                },
                {
                  "value": "6.62",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:00:00.000-04:00"
                },
                {
                  "value": "6.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:15:00.000-04:00"
                },
                {
                  "value": "6.57",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:30:00.000-04:00"
                },
                {
                  "value": "6.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:45:00.000-04:00"
                },
                {
                  "value": "6.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:00:00.000-04:00"
                },
                {
                  "value": "6.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:15:00.000-04:00"
                },
                {
                  "value": "6.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:30:00.000-04:00"
                },
                {
                  "value": "6.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:45:00.000-04:00"
                },
                {
                  "value": "6.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:00:00.000-04:00"
                },
                {
                  "value": "6.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:15:00.000-04:00"
                },
                {
                  "value": "6.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:30:00.000-04:00"
                },
                {
                  "value": "6.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:45:00.000-04:00"
                },
                {
                  "value": "6.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:00:00.000-04:00"
                },
                {
                  "value": "6.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:15:00.000-04:00"
                },
                {
                  "value": "6.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:30:00.000-04:00"
                },
                {
                  "value": "6.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:45:00.000-04:00"
                },
                {
                  "value": "6.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:00:00.000-04:00"
                },
                {
                  "value": "6.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:15:00.000-04:00"
                },
                {
                  "value": "6.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:30:00.000-04:00"
                },
                {
                  "value": "6.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:45:00.000-04:00"
                },
                {
                  "value": "6.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:00:00.000-04:00"
                },
                {
                  "value": "7.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:15:00.000-04:00"
                },
                {
                  "value": "7.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:30:00.000-04:00"
                },
                {
                  "value": "7.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:45:00.000-04:00"
                },
                {
                  "value": "8.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:00:00.000-04:00"
                },
                {
                  "value": "8.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:15:00.000-04:00"
                },
                {
                  "value": "8.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:30:00.000-04:00"
                },
                {
                  "value": "8.55",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:45:00.000-04:00"
                },
                {
                  "value": "8.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:00:00.000-04:00"
                },
                {
                  "value": "8.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:15:00.000-04:00"
                },
                {
                  "value": "8.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:30:00.000-04:00"
                },
                {
                  "value": "8.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:45:00.000-04:00"
                },
                {
                  "value": "8.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:00:00.000-04:00"
                },
                {
                  "value": "9.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:15:00.000-04:00"
                },
                {
                  "value": "9.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:30:00.000-04:00"
                },
                {
                  "value": "8.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:45:00.000-04:00"
                },
                {
                  "value": "8.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:00:00.000-04:00"
                },
                {
                  "value": "8.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:15:00.000-04:00"
                },
                {
                  "value": "9.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:30:00.000-04:00"
                },
                {
                  "value": "9.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:45:00.000-04:00"
                },
                {
                  "value": "9.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:00:00.000-04:00"
                },
                {
                  "value": "9.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:15:00.000-04:00"
                },
                {
                  "value": "9.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:30:00.000-04:00"
                },
                {
                  "value": "9.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:45:00.000-04:00"
                },
                {
                  "value": "9.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:00:00.000-04:00"
                },
                {
                  "value": "9.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:15:00.000-04:00"
                },
                {
                  "value": "10.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:30:00.000-04:00"
                },
                {
                  "value": "10.23",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:45:00.000-04:00"
                },
                {
                  "value": "10.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:00:00.000-04:00"
                },
                {
                  "value": "10.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:15:00.000-04:00"
                },
                {
                  "value": "10.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:30:00.000-04:00"
                },
                {
                  "value": "10.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:45:00.000-04:00"
                },
                {
                  "value": "10.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:00:00.000-04:00"
                },
                {
                  "value": "10.51",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:15:00.000-04:00"
                },
                {
                  "value": "10.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:30:00.000-04:00"
                },
                {
                  "value": "10.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:45:00.000-04:00"
                },
                {
                  "value": "10.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:00:00.000-04:00"
                },
                {
                  "value": "10.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:15:00.000-04:00"
                },
                {
                  "value": "10.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:30:00.000-04:00"
                },
                {
                  "value": "10.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:45:00.000-04:00"
                },
                {
                  "value": "10.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:00:00.000-04:00"
                },
                {
                  "value": "10.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:15:00.000-04:00"
                },
                {
                  "value": "10.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:30:00.000-04:00"
                },
                {
                  "value": "9.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:45:00.000-04:00"
                },
                {
                  "value": "9.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:00:00.000-04:00"
                },
                {
                  "value": "9.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:15:00.000-04:00"
                },
                {
                  "value": "9.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:30:00.000-04:00"
                },
                {
                  "value": "9.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:45:00.000-04:00"
                },
                {
                  "value": "9.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:00:00.000-04:00"
                },
                {
                  "value": "9.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:15:00.000-04:00"
                },
                {
                  "value": "9.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:30:00.000-04:00"
                },
                {
                  "value": "9.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:45:00.000-04:00"
                },
                {
                  "value": "9.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:00:00.000-04:00"
                },
                {
                  "value": "9.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:15:00.000-04:00"
                },
                {
                  "value": "9.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:30:00.000-04:00"
                },
                {
                  "value": "9.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:45:00.000-04:00"
                },
                {
                  "value": "9.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:00:00.000-04:00"
                },
                {
                  "value": "9.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:15:00.000-04:00"
                },
                {
                  "value": "9.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:30:00.000-04:00"
                },
                {
                  "value": "9.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:45:00.000-04:00"
                },
                {
                  "value": "9.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:00:00.000-04:00"
                },
                {
                  "value": "9.31",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:15:00.000-04:00"
                },
                {
                  "value": "9.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:30:00.000-04:00"
                },
                {
                  "value": "9.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:45:00.000-04:00"
                },
                {
                  "value": "9.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:00:00.000-04:00"
                },
                {
                  "value": "9.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:15:00.000-04:00"
                },
                {
                  "value": "9.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:30:00.000-04:00"
                },
                {
                  "value": "9.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:45:00.000-04:00"
                },
                {
                  "value": "9.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:00:00.000-04:00"
                },
                {
                  "value": "9.47",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:15:00.000-04:00"
                },
                {
                  "value": "9.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:30:00.000-04:00"
                },
                {
                  "value": "9.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:45:00.000-04:00"
                },
                {
                  "value": "9.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:00:00.000-04:00"
                },
                {
                  "value": "9.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:15:00.000-04:00"
                },
                {
                  "value": "9.54",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:30:00.000-04:00"
                },
                {
                  "value": "9.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:45:00.000-04:00"
                },
                {
                  "value": "9.61",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:00:00.000-04:00"
                },
                {
                  "value": "9.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:15:00.000-04:00"
                },
                {
                  "value": "9.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:30:00.000-04:00"
                },
                {
                  "value": "9.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:45:00.000-04:00"
                },
                {
                  "value": "9.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:00:00.000-04:00"
                },
                {
                  "value": "10.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:15:00.000-04:00"
                },
                {
                  "value": "10.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:30:00.000-04:00"
                },
                {
                  "value": "10.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:45:00.000-04:00"
                },
                {
                  "value": "10.31",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:00:00.000-04:00"
                },
                {
                  "value": "10.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:15:00.000-04:00"
                },
                {
                  "value": "10.47",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:30:00.000-04:00"
                },
                {
                  "value": "10.54",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:45:00.000-04:00"
                },
                {
                  "value": "10.63",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:00:00.000-04:00"
                },
                {
                  "value": "10.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:15:00.000-04:00"
                },
                {
                  "value": "10.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:30:00.000-04:00"
                },
                {
                  "value": "10.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:45:00.000-04:00"
                },
                {
                  "value": "10.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:00:00.000-04:00"
                },
                {
                  "value": "10.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:15:00.000-04:00"
                },
                {
                  "value": "10.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:30:00.000-04:00"
                },
                {
                  "value": "10.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:45:00.000-04:00"
                },
                {
                  "value": "10.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:00:00.000-04:00"
                },
                {
                  "value": "10.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:15:00.000-04:00"
                },
                {
                  "value": "10.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:30:00.000-04:00"
                },
                {
                  "value": "11.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:45:00.000-04:00"
                },
                {
                  "value": "11.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:00:00.000-04:00"
                },
                {
                  "value": "11.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:15:00.000-04:00"
                },
                {
                  "value": "11.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:30:00.000-04:00"
                },
                {
                  "value": "11.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:45:00.000-04:00"
                },
                {
                  "value": "11.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:00:00.000-04:00"
                },
                {
                  "value": "11.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:15:00.000-04:00"
                },
                {
                  "value": "11.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:30:00.000-04:00"
                },
                {
                  "value": "11.55",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:45:00.000-04:00"
                },
                {
                  "value": "11.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:00:00.000-04:00"
                },
                {
                  "value": "11.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:15:00.000-04:00"
                },
                {
                  "value": "11.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:30:00.000-04:00"
                },
                {
                  "value": "12.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:45:00.000-04:00"
                },
                {
                  "value": "12.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:00:00.000-04:00"
                },
                {
                  "value": "12.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:15:00.000-04:00"
                },
                {
                  "value": "12.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:30:00.000-04:00"
                },
                {
                  "value": "12.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:45:00.000-04:00"
                },
                {
                  "value": "12.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:00:00.000-04:00"
                },
                {
                  "value": "13.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:15:00.000-04:00"
                },
                {
                  "value": "13.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:30:00.000-04:00"
                },
                {
                  "value": "13.65",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:45:00.000-04:00"
                },
                {
                  "value": "13.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:00:00.000-04:00"
                },
                {
                  "value": "14.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:15:00.000-04:00"
                },
                {
                  "value": "14.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:30:00.000-04:00"
                },
                {
                  "value": "14.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:45:00.000-04:00"
                },
                {
                  "value": "15.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:00:00.000-04:00"
                },
                {
                  "value": "15.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:15:00.000-04:00"
                },
                {
                  "value": "15.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:30:00.000-04:00"
                },
                {
                  "value": "16.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:45:00.000-04:00"
                },
                {
                  "value": "16.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:00:00.000-04:00"
                },
                {
                  "value": "16.63",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:15:00.000-04:00"
                },
                {
                  "value": "16.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:30:00.000-04:00"
                },
                {
                  "value": "17.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:45:00.000-04:00"
                },
                {
                  "value": "17.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:00:00.000-04:00"
                },
                {
                  "value": "18.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:15:00.000-04:00"
                },
                {
                  "value": "18.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:30:00.000-04:00"
                },
                {
                  "value": "18.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:45:00.000-04:00"
                },
                {
                  "value": "18.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:00:00.000-04:00"
                },
                {
                  "value": "18.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:15:00.000-04:00"
                },
                {
                  "value": "18.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:30:00.000-04:00"
                },
                {
                  "value": "18.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:45:00.000-04:00"
                },
                {
                  "value": "18.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:00:00.000-04:00"
                },
                {
                  "value": "18.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:15:00.000-04:00"
                },
                {
                  "value": "17.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:30:00.000-04:00"
                },
                {
                  "value": "17.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:45:00.000-04:00"
                },
                {
                  "value": "17.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:00:00.000-04:00"
                },
                {
                  "value": "17.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:15:00.000-04:00"
                },
                {
                  "value": "17.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:30:00.000-04:00"
                },
                {
                  "value": "17.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:45:00.000-04:00"
                },
                {
                  "value": "18.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:00:00.000-04:00"
                },
                {
                  "value": "18.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:15:00.000-04:00"
                },
                {
                  "value": "18.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:30:00.000-04:00"
                },
                {
                  "value": "18.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:45:00.000-04:00"
                },
                {
                  "value": "18.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:00:00.000-04:00"
                },
                {
                  "value": "18.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:15:00.000-04:00"
                },
                {
                  "value": "19.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:30:00.000-04:00"
                },
                {
                  "value": "19.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:45:00.000-04:00"
                },
                {
                  "value": "19.80",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:00:00.000-04:00"
                },
                {
                  "value": "19.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:15:00.000-04:00"
                },
                {
                  "value": "19.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:30:00.000-04:00"
                },
                {
                  "value": "19.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:45:00.000-04:00"
                },
                {
                  "value": "20.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:00:00.000-04:00"
                },
                {
                  "value": "19.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:15:00.000-04:00"
                },
                {
                  "value": "19.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:30:00.000-04:00"
                },
                {
                  "value": "18.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:45:00.000-04:00"
                },
                {
                  "value": "18.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:00:00.000-04:00"
                },
                {
                  "value": "18.63",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:15:00.000-04:00"
                },
                {
                  "value": "18.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:30:00.000-04:00"
                },
                {
                  "value": "18.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:45:00.000-04:00"
                },
                {
                  "value": "18.27",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:00:00.000-04:00"
                },
                {
                  "value": "18.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:15:00.000-04:00"
                },
                {
                  "value": "18.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:30:00.000-04:00"
                },
                {
                  "value": "17.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:45:00.000-04:00"
                },
                {
                  "value": "17.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:00:00.000-04:00"
                },
                {
                  "value": "17.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:15:00.000-04:00"
                },
                {
                  "value": "17.57",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:30:00.000-04:00"
                },
                {
                  "value": "17.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:45:00.000-04:00"
                },
                {
                  "value": "17.32",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:00:00.000-04:00"
                },
                {
                  "value": "17.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:15:00.000-04:00"
                },
                {
                  "value": "17.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:30:00.000-04:00"
                },
                {
                  "value": "17.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:45:00.000-04:00"
                },
                {
                  "value": "17.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:00:00.000-04:00"
                },
                {
                  "value": "16.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:15:00.000-04:00"
                },
                {
                  "value": "16.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:30:00.000-04:00"
                },
                {
                  "value": "16.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:45:00.000-04:00"
                },
                {
                  "value": "16.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:00:00.000-04:00"
                },
                {
                  "value": "16.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:15:00.000-04:00"
                },
                {
                  "value": "16.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:30:00.000-04:00"
                },
                {
                  "value": "16.55",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:45:00.000-04:00"
                },
                {
                  "value": "16.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:00:00.000-04:00"
                },
                {
                  "value": "16.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:15:00.000-04:00"
                },
                {
                  "value": "16.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:30:00.000-04:00"
                },
                {
                  "value": "16.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:45:00.000-04:00"
                },
                {
                  "value": "16.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:00:00.000-04:00"
                },
                {
                  "value": "16.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:15:00.000-04:00"
                },
                {
                  "value": "16.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:30:00.000-04:00"
                },
                {
                  "value": "16.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:45:00.000-04:00"
                },
                {
                  "value": "16.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:00:00.000-04:00"
                },
                {
                  "value": "15.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:15:00.000-04:00"
                },
                {
                  "value": "15.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:30:00.000-04:00"
                },
                {
                  "value": "15.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:45:00.000-04:00"
                },
                {
                  "value": "15.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:00:00.000-04:00"
                },
                {
                  "value": "15.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:15:00.000-04:00"
                },
                {
                  "value": "15.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:30:00.000-04:00"
                },
                {
                  "value": "15.65",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:45:00.000-04:00"
                },
                {
                  "value": "15.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:00:00.000-04:00"
                },
                {
                  "value": "15.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:15:00.000-04:00"
                },
                {
                  "value": "15.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:30:00.000-04:00"
                },
                {
                  "value": "15.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:45:00.000-04:00"
                },
                {
                  "value": "15.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:00:00.000-04:00"
                },
                {
                  "value": "15.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:15:00.000-04:00"
                },
                {
                  "value": "15.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:30:00.000-04:00"
                },
                {
                  "value": "15.23",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:45:00.000-04:00"
                },
                {
                  "value": "15.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:00:00.000-04:00"
                },
                {
                  "value": "15.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:15:00.000-04:00"
                },
                {
                  "value": "15.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:30:00.000-04:00"
                },
                {
                  "value": "15.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:45:00.000-04:00"
                },
                {
                  "value": "14.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:00:00.000-04:00"
                },
                {
                  "value": "14.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:15:00.000-04:00"
                },
                {
                  "value": "14.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:30:00.000-04:00"
                },
                {
                  "value": "14.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:45:00.000-04:00"
                },
                {
                  "value": "14.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:00:00.000-04:00"
                },
                {
                  "value": "14.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:15:00.000-04:00"
                },
                {
                  "value": "14.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:30:00.000-04:00"
                },
                {
                  "value": "14.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:45:00.000-04:00"
                },
                {
                  "value": "14.61",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:00:00.000-04:00"
                },
                {
                  "value": "14.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:15:00.000-04:00"
                },
                {
                  "value": "14.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:30:00.000-04:00"
                },
                {
                  "value": "14.42",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:45:00.000-04:00"
                },
                {
                  "value": "14.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:00:00.000-04:00"
                },
                {
                  "value": "14.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:15:00.000-04:00"
                },
                {
                  "value": "14.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:30:00.000-04:00"
                },
                {
                  "value": "14.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:45:00.000-04:00"
                },
                {
                  "value": "14.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:00:00.000-04:00"
                },
                {
                  "value": "14.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:15:00.000-04:00"
                },
                {
                  "value": "14.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:30:00.000-04:00"
                },
                {
                  "value": "14.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:45:00.000-04:00"
                },
                {
                  "value": "14.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:00:00.000-04:00"
                },
                {
                  "value": "13.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:15:00.000-04:00"
                },
                {
                  "value": "13.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:30:00.000-04:00"
                },
                {
                  "value": "13.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:45:00.000-04:00"
                },
                {
                  "value": "13.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:00:00.000-04:00"
                },
                {
                  "value": "13.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:15:00.000-04:00"
                },
                {
                  "value": "13.77",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:30:00.000-04:00"
                },
                {
                  "value": "13.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:45:00.000-04:00"
                },
                {
                  "value": "13.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:00:00.000-04:00"
                },
                {
                  "value": "13.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:15:00.000-04:00"
                },
                {
                  "value": "13.62",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:30:00.000-04:00"
                },
                {
                  "value": "13.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:45:00.000-04:00"
                },
                {
                  "value": "13.54",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:00:00.000-04:00"
                },
                {
                  "value": "13.51",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:15:00.000-04:00"
                },
                {
                  "value": "13.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:30:00.000-04:00"
                },
                {
                  "value": "13.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:45:00.000-04:00"
                },
                {
                  "value": "13.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:00:00.000-04:00"
                },
                {
                  "value": "13.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:15:00.000-04:00"
                },
                {
                  "value": "13.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:30:00.000-04:00"
                },
                {
                  "value": "13.26",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:45:00.000-04:00"
                },
                {
                  "value": "13.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:00:00.000-04:00"
                },
                {
                  "value": "13.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:15:00.000-04:00"
                },
                {
                  "value": "13.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:30:00.000-04:00"
                },
                {
                  "value": "13.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:45:00.000-04:00"
                },
                {
                  "value": "13.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:00:00.000-04:00"
                },
                {
                  "value": "13.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:15:00.000-04:00"
                },
                {
                  "value": "12.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:30:00.000-04:00"
                },
                {
                  "value": "12.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:45:00.000-04:00"
                },
                {
                  "value": "12.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:00:00.000-04:00"
                },
                {
                  "value": "12.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:15:00.000-04:00"
                },
                {
                  "value": "12.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:30:00.000-04:00"
                },
                {
                  "value": "12.78",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:45:00.000-04:00"
                },
                {
                  "value": "12.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:00:00.000-04:00"
                },
                {
                  "value": "12.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:15:00.000-04:00"
                },
                {
                  "value": "12.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:30:00.000-04:00"
                },
                {
                  "value": "12.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:45:00.000-04:00"
                },
                {
                  "value": "12.61",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:00:00.000-04:00"
                },
                {
                  "value": "12.57",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:15:00.000-04:00"
                },
                {
                  "value": "12.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:30:00.000-04:00"
                },
                {
                  "value": "12.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:45:00.000-04:00"
                },
                {
                  "value": "12.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:00:00.000-04:00"
                },
                {
                  "value": "12.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:15:00.000-04:00"
                },
                {
                  "value": "12.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:30:00.000-04:00"
                },
                {
                  "value": "12.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:45:00.000-04:00"
                },
                {
                  "value": "12.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:00:00.000-04:00"
                },
                {
                  "value": "12.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:15:00.000-04:00"
                },
                {
                  "value": "12.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:30:00.000-04:00"
                },
                {
                  "value": "12.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:45:00.000-04:00"
                },
                {
                  "value": "12.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:00:00.000-04:00"
                },
                {
                  "value": "12.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:15:00.000-04:00"
                },
                {
                  "value": "12.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:30:00.000-04:00"
                },
                {
                  "value": "12.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:45:00.000-04:00"
                },
                {
                  "value": "12.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:00:00.000-04:00"
                },
                {
                  "value": "11.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:15:00.000-04:00"
                },
                {
                  "value": "11.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:30:00.000-04:00"
                },
                {
                  "value": "11.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:45:00.000-04:00"
                },
                {
                  "value": "11.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:00:00.000-04:00"
                },
                {
                  "value": "11.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:15:00.000-04:00"
                },
                {
                  "value": "11.77",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:30:00.000-04:00"
                },
                {
                  "value": "11.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:45:00.000-04:00"
                },
                {
                  "value": "11.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:00:00.000-04:00"
                },
                {
                  "value": "11.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:15:00.000-04:00"
                },
                {
                  "value": "11.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:30:00.000-04:00"
                },
                {
                  "value": "11.55",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:45:00.000-04:00"
                },
                {
                  "value": "11.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:00:00.000-04:00"
                },
                {
                  "value": "11.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:15:00.000-04:00"
                },
                {
                  "value": "11.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:30:00.000-04:00"
                },
                {
                  "value": "11.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:45:00.000-04:00"
                },
                {
                  "value": "11.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:00:00.000-04:00"
                },
                {
                  "value": "11.32",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:15:00.000-04:00"
                },
                {
                  "value": "11.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:30:00.000-04:00"
                },
                {
                  "value": "11.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:45:00.000-04:00"
                },
                {
                  "value": "11.26",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:00:00.000-04:00"
                },
                {
                  "value": "11.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:15:00.000-04:00"
                },
                {
                  "value": "11.23",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:30:00.000-04:00"
                },
                {
                  "value": "11.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:45:00.000-04:00"
                },
                {
                  "value": "11.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:00:00.000-04:00"
                },
                {
                  "value": "11.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:15:00.000-04:00"
                },
                {
                  "value": "7.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:45:00.000-04:00"
                },
                {
                  "value": "7.55",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:00:00.000-04:00"
                },
                {
                  "value": "7.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:15:00.000-04:00"
                },
                {
                  "value": "7.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:30:00.000-04:00"
                },
                {
                  "value": "7.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:45:00.000-04:00"
                },
                {
                  "value": "7.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:00:00.000-04:00"
                },
                {
                  "value": "7.42",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:15:00.000-04:00"
                },
                {
                  "value": "7.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:30:00.000-04:00"
                },
                {
                  "value": "7.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:45:00.000-04:00"
                },
                {
                  "value": "7.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:00:00.000-04:00"
                },
                {
                  "value": "7.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:15:00.000-04:00"
                },
                {
                  "value": "7.27",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:30:00.000-04:00"
                },
                {
                  "value": "7.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:45:00.000-04:00"
                },
                {
                  "value": "7.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:00:00.000-04:00"
                },
                {
                  "value": "7.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:15:00.000-04:00"
                },
                {
                  "value": "7.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:30:00.000-04:00"
                },
                {
                  "value": "7.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:45:00.000-04:00"
                },
                {
                  "value": "7.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:00:00.000-04:00"
                },
                {
                  "value": "7.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:15:00.000-04:00"
                },
                {
                  "value": "7.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:30:00.000-04:00"
                },
                {
                  "value": "7.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:45:00.000-04:00"
                },
                {
                  "value": "7.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:00:00.000-04:00"
                },
                {
                  "value": "6.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:15:00.000-04:00"
                },
                {
                  "value": "6.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:30:00.000-04:00"
                },
                {
                  "value": "6.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:45:00.000-04:00"
                },
                {
                  "value": "6.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:00:00.000-04:00"
                },
                {
                  "value": "6.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:15:00.000-04:00"
                },
                {
                  "value": "6.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:30:00.000-04:00"
                },
                {
                  "value": "6.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:45:00.000-04:00"
                },
                {
                  "value": "6.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:00:00.000-04:00"
                },
                {
                  "value": "6.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:15:00.000-04:00"
                },
                {
                  "value": "6.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:30:00.000-04:00"
                },
                {
                  "value": "6.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:45:00.000-04:00"
                },
                {
                  "value": "6.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:00:00.000-04:00"
                },
                {
                  "value": "6.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:15:00.000-04:00"
                },
                {
                  "value": "6.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:30:00.000-04:00"
                },
                {
                  "value": "6.65",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:45:00.000-04:00"
                },
                {
                  "value": "6.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:00:00.000-04:00"
                },
                {
                  "value": "6.61",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:15:00.000-04:00"
                },
                {
                  "value": "6.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:30:00.000-04:00"
                },
                {
                  "value": "6.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:45:00.000-04:00"
                },
                {
                  "value": "6.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:00:00.000-04:00"
                },
                {
                  "value": "6.54",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:15:00.000-04:00"
                },
                {
                  "value": "6.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:30:00.000-04:00"
                },
                {
                  "value": "6.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:45:00.000-04:00"
                },
                {
                  "value": "6.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:00:00.000-04:00"
                },
                {
                  "value": "6.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:15:00.000-04:00"
                },
                {
                  "value": "6.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:30:00.000-04:00"
                },
                {
                  "value": "6.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:45:00.000-04:00"
                },
                {
                  "value": "6.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:00:00.000-04:00"
                },
                {
                  "value": "6.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:15:00.000-04:00"
                },
                {
                  "value": "6.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:30:00.000-04:00"
                },
                {
                  "value": "6.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:45:00.000-04:00"
                },
                {
                  "value": "6.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:00:00.000-04:00"
                },
                {
                  "value": "6.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:15:00.000-04:00"
                },
                {
                  "value": "6.32",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:30:00.000-04:00"
                },
                {
                  "value": "6.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:45:00.000-04:00"
                }
              ],
              "qualifier": [
                {
                  "qualifierCode": "P",
                  "qualifierDescription": "Provisional data subject to revision.",
                  "qualifierID": 0,
                  "network": "NWIS",
                  "vocabulary": "uv_rmk_cd"
                }
              ],
              "qualityControlLevel": [],
              "method": [
                {
                  "methodDescription": "",
                  "methodID": 90208
                }
              ],
              "source": [],
              "offset": [],
              "sample": [],
              "censorCode": []
            }
          ],
          "name": "USGS:03453500:00065:00000"
        },
        {
          "sourceInfo": {
            "siteName": "FRENCH BROAD RIVER AT HOT SPRINGS, NC",
            "siteCode": [
              {
                "value": "03454500",
                "network": "NWIS",
                "agencyCode": "USGS"
              }
            ],
            "timeZoneInfo": {
              "defaultTimeZone": {
                "zoneOffset": "-05:00",
                "zoneAbbreviation": "EST"
              },
              "daylightSavingsTimeZone": {
                "zoneOffset": "-04:00",
                "zoneAbbreviation": "EDT"
              },
              "siteUsesDaylightSavingsTime": true
            },
            "geoLocation": {
              "geogLocation": {
                "srs": "EPSG:4326",
                "latitude": 35.88991667,
                "longitude": -82.821
              },
              "localSiteXY": []
            },
            "note": [],
            "siteType": [],
            "siteProperty": [
              {
                "value": "ST",
                "name": "siteTypeCd"
              },
              {
                "value": "06010105",
                "name": "hucCd"
              },
              {
                "value": "37",
                "name": "stateCd"
              },
              {
                "value": "37115",
                "name": "countyCd"
              }
            ]
          },
          "variable": {
            "variableCode": [
              {
                "value": "00060",
                "network": "NWIS",
                "vocabulary": "NWIS:UnitValues",
                "variableID": 45807197,
                "default": true
              }
            ],
            "variableName": "Streamflow, ft&#179;/s",
            "variableDescription": "Discharge, cubic feet per second",
            "valueType": "Derived Value",
            "unit": {
              "unitCode": "ft3/s"
            },
            "options": {
              "option": [
                {
                  "name": "Statistic",
                  "optionCode": "00000"
                }
              ]
            },
            "note": [],
            "noDataValue": -999999,
            "variableProperty": [],
            "oid": "45807197"
          },
          "values": [
            {
              "value": [
                {
                  "value": "1260",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:00:00.000-04:00"
                },
                {
                  "value": "1350",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:15:00.000-04:00"
                },
                {
                  "value": "1390",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:30:00.000-04:00"
                },
                {
                  "value": "1430",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:45:00.000-04:00"
                },
                {
                  "value": "1430",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:00:00.000-04:00"
                },
                {
                  "value": "1460",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:15:00.000-04:00"
                },
                {
                  "value": "1460",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:30:00.000-04:00"
                },
                {
                  "value": "1460",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:45:00.000-04:00"
                },
                {
                  "value": "1460",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:00:00.000-04:00"
                },
                {
                  "value": "1430",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:15:00.000-04:00"
                },
                {
                  "value": "1430",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:30:00.000-04:00"
                },
                {
                  "value": "1410",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:45:00.000-04:00"
                },
                {
                  "value": "1390",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:00:00.000-04:00"
                },
                {
                  "value": "1370",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:15:00.000-04:00"
                },
                {
                  "value": "1350",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:30:00.000-04:00"
                },
                {
                  "value": "1320",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:45:00.000-04:00"
                },
                {
                  "value": "1320",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:00:00.000-04:00"
                },
                {
                  "value": "1320",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:15:00.000-04:00"
                },
                {
                  "value": "1350",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:30:00.000-04:00"
                },
                {
                  "value": "1350",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:45:00.000-04:00"
                },
                {
                  "value": "1350",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:00:00.000-04:00"
                },
                {
                  "value": "1370",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:15:00.000-04:00"
                },
                {
                  "value": "1370",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:30:00.000-04:00"
                },
                {
                  "value": "1390",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:45:00.000-04:00"
                },
                {
                  "value": "1390",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:00:00.000-04:00"
                },
                {
                  "value": "1430",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:15:00.000-04:00"
                },
                {
                  "value": "1460",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:30:00.000-04:00"
                },
                {
                  "value": "1480",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:45:00.000-04:00"
                },
                {
                  "value": "1530",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:00:00.000-04:00"
                },
                {
                  "value": "1530",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:15:00.000-04:00"
                },
                {
                  "value": "1550",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:30:00.000-04:00"
                },
                {
                  "value": "1570",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:45:00.000-04:00"
                },
                {
                  "value": "1570",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:00:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:15:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:30:00.000-04:00"
                },
                {
                  "value": "1600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:45:00.000-04:00"
                },
                {
                  "value": "1650",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:00:00.000-04:00"
                },
                {
                  "value": "1730",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:15:00.000-04:00"
                },
                {
                  "value": "1830",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:30:00.000-04:00"
                },
                {
                  "value": "1920",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:45:00.000-04:00"
                },
                {
                  "value": "1970",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:00:00.000-04:00"
                },
                {
                  "value": "2030",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:15:00.000-04:00"
                },
                {
                  "value": "2060",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:30:00.000-04:00"
                },
                {
                  "value": "2060",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:45:00.000-04:00"
                },
                {
                  "value": "2030",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:00:00.000-04:00"
                },
                {
                  "value": "2030",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:15:00.000-04:00"
                },
                {
                  "value": "1970",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:30:00.000-04:00"
                },
                {
                  "value": "1940",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:45:00.000-04:00"
                },
                {
                  "value": "1920",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:00:00.000-04:00"
                },
                {
                  "value": "1920",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:15:00.000-04:00"
                },
                {
                  "value": "1890",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:30:00.000-04:00"
                },
                {
                  "value": "1890",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:45:00.000-04:00"
                },
                {
                  "value": "1830",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:00:00.000-04:00"
                },
                {
                  "value": "1830",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:15:00.000-04:00"
                },
                {
                  "value": "1830",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:30:00.000-04:00"
                },
                {
                  "value": "1810",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:45:00.000-04:00"
                },
                {
                  "value": "1780",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:00:00.000-04:00"
                },
                {
                  "value": "1730",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:15:00.000-04:00"
                },
                {
                  "value": "1730",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:30:00.000-04:00"
                },
                {
                  "value": "1730",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:45:00.000-04:00"
                },
                {
                  "value": "1730",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:00:00.000-04:00"
                },
                {
                  "value": "1700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:15:00.000-04:00"
                },
                {
                  "value": "1700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:30:00.000-04:00"
                },
                {
                  "value": "1700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:45:00.000-04:00"
                },
                {
                  "value": "1670",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:00:00.000-04:00"
                },
                {
                  "value": "1670",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:15:00.000-04:00"
                },
                {
                  "value": "1650",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:30:00.000-04:00"
                },
                {
                  "value": "1650",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:45:00.000-04:00"
                },
                {
                  "value": "1670",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:00:00.000-04:00"
                },
                {
                  "value": "1670",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:15:00.000-04:00"
                },
                {
                  "value": "1700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:30:00.000-04:00"
                },
                {
                  "value": "1700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:45:00.000-04:00"
                },
                {
                  "value": "1700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:00:00.000-04:00"
                },
                {
                  "value": "1750",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:15:00.000-04:00"
                },
                {
                  "value": "1750",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:30:00.000-04:00"
                },
                {
                  "value": "1750",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:45:00.000-04:00"
                },
                {
                  "value": "1780",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:00:00.000-04:00"
                },
                {
                  "value": "1810",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:15:00.000-04:00"
                },
                {
                  "value": "1810",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:30:00.000-04:00"
                },
                {
                  "value": "1810",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:45:00.000-04:00"
                },
                {
                  "value": "1810",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:00:00.000-04:00"
                },
                {
                  "value": "1860",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:15:00.000-04:00"
                },
                {
                  "value": "1860",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:30:00.000-04:00"
                },
                {
                  "value": "1920",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:45:00.000-04:00"
                },
                {
                  "value": "1940",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:00:00.000-04:00"
                },
                {
                  "value": "2060",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:15:00.000-04:00"
                },
                {
                  "value": "2090",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:30:00.000-04:00"
                },
                {
                  "value": "2150",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:45:00.000-04:00"
                },
                {
                  "value": "2150",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:00:00.000-04:00"
                },
                {
                  "value": "2220",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:15:00.000-04:00"
                },
                {
                  "value": "2280",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:30:00.000-04:00"
                },
                {
                  "value": "2450",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:45:00.000-04:00"
                },
                {
                  "value": "2590",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:00:00.000-04:00"
                },
                {
                  "value": "2620",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:15:00.000-04:00"
                },
                {
                  "value": "3670",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:30:00.000-04:00"
                },
                {
                  "value": "4570",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:45:00.000-04:00"
                },
                {
                  "value": "4850",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:00:00.000-04:00"
                },
                {
                  "value": "5190",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:15:00.000-04:00"
                },
                {
                  "value": "5200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:30:00.000-04:00"
                },
                {
                  "value": "5180",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:45:00.000-04:00"
                },
                {
                  "value": "5060",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:00:00.000-04:00"
                },
                {
                  "value": "5080",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:15:00.000-04:00"
                },
                {
                  "value": "5090",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:30:00.000-04:00"
                },
                {
                  "value": "5270",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:45:00.000-04:00"
                },
                {
                  "value": "5200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:00:00.000-04:00"
                },
                {
                  "value": "5770",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:15:00.000-04:00"
                },
                {
                  "value": "5920",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:30:00.000-04:00"
                },
                {
                  "value": "6210",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:45:00.000-04:00"
                },
                {
                  "value": "6270",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:00:00.000-04:00"
                },
                {
                  "value": "6380",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:15:00.000-04:00"
                },
                {
                  "value": "6400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:30:00.000-04:00"
                },
                {
                  "value": "6750",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:45:00.000-04:00"
                },
                {
                  "value": "6570",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:00:00.000-04:00"
                },
                {
                  "value": "6730",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:15:00.000-04:00"
                },
                {
                  "value": "6700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:30:00.000-04:00"
                },
                {
                  "value": "7020",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:45:00.000-04:00"
                },
                {
                  "value": "7130",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:00:00.000-04:00"
                },
                {
                  "value": "7520",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:15:00.000-04:00"
                },
                {
                  "value": "7750",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:30:00.000-04:00"
                },
                {
                  "value": "7990",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:45:00.000-04:00"
                },
                {
                  "value": "8400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:00:00.000-04:00"
                },
                {
                  "value": "9620",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:15:00.000-04:00"
                },
                {
                  "value": "11200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:30:00.000-04:00"
                },
                {
                  "value": "13400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:45:00.000-04:00"
                },
                {
                  "value": "15100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:00:00.000-04:00"
                },
                {
                  "value": "16800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:15:00.000-04:00"
                },
                {
                  "value": "17700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:30:00.000-04:00"
                },
                {
                  "value": "18300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:45:00.000-04:00"
                },
                {
                  "value": "18900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:00:00.000-04:00"
                },
                {
                  "value": "19600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:15:00.000-04:00"
                },
                {
                  "value": "20400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:30:00.000-04:00"
                },
                {
                  "value": "21100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:45:00.000-04:00"
                },
                {
                  "value": "21300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:00:00.000-04:00"
                },
                {
                  "value": "21300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:15:00.000-04:00"
                },
                {
                  "value": "21600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:30:00.000-04:00"
                },
                {
                  "value": "21700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:45:00.000-04:00"
                },
                {
                  "value": "21900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:00:00.000-04:00"
                },
                {
                  "value": "22100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:15:00.000-04:00"
                },
                {
                  "value": "22700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:30:00.000-04:00"
                },
                {
                  "value": "23400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:45:00.000-04:00"
                },
                {
                  "value": "23700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:00:00.000-04:00"
                },
                {
                  "value": "24500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:15:00.000-04:00"
                },
                {
                  "value": "25600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:30:00.000-04:00"
                },
                {
                  "value": "26500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:45:00.000-04:00"
                },
                {
                  "value": "27300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:00:00.000-04:00"
                },
                {
                  "value": "28400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:15:00.000-04:00"
                },
                {
                  "value": "29300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:30:00.000-04:00"
                },
                {
                  "value": "30100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:45:00.000-04:00"
                },
                {
                  "value": "31200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:00:00.000-04:00"
                },
                {
                  "value": "31800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:15:00.000-04:00"
                },
                {
                  "value": "32200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:30:00.000-04:00"
                },
                {
                  "value": "33000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:45:00.000-04:00"
                },
                {
                  "value": "33400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:00:00.000-04:00"
                },
                {
                  "value": "33200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:15:00.000-04:00"
                },
                {
                  "value": "32900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:30:00.000-04:00"
                },
                {
                  "value": "32900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:45:00.000-04:00"
                },
                {
                  "value": "32400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:00:00.000-04:00"
                },
                {
                  "value": "32600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:15:00.000-04:00"
                },
                {
                  "value": "32000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:30:00.000-04:00"
                },
                {
                  "value": "32000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:45:00.000-04:00"
                },
                {
                  "value": "31800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:00:00.000-04:00"
                },
                {
                  "value": "31700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:15:00.000-04:00"
                },
                {
                  "value": "31300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:30:00.000-04:00"
                },
                {
                  "value": "31100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:45:00.000-04:00"
                },
                {
                  "value": "31400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:00:00.000-04:00"
                },
                {
                  "value": "31100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:15:00.000-04:00"
                },
                {
                  "value": "31000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:30:00.000-04:00"
                },
                {
                  "value": "30500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:45:00.000-04:00"
                },
                {
                  "value": "30300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:00:00.000-04:00"
                },
                {
                  "value": "30400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:15:00.000-04:00"
                },
                {
                  "value": "30400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:30:00.000-04:00"
                },
                {
                  "value": "30300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:45:00.000-04:00"
                },
                {
                  "value": "30300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:00:00.000-04:00"
                },
                {
                  "value": "30300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:15:00.000-04:00"
                },
                {
                  "value": "30300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:30:00.000-04:00"
                },
                {
                  "value": "30500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:45:00.000-04:00"
                },
                {
                  "value": "30600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:00:00.000-04:00"
                },
                {
                  "value": "30800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:15:00.000-04:00"
                },
                {
                  "value": "30900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:30:00.000-04:00"
                },
                {
                  "value": "31400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:45:00.000-04:00"
                },
                {
                  "value": "32100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:00:00.000-04:00"
                },
                {
                  "value": "32000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:15:00.000-04:00"
                },
                {
                  "value": "32700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:30:00.000-04:00"
                },
                {
                  "value": "33000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:45:00.000-04:00"
                },
                {
                  "value": "33500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:00:00.000-04:00"
                },
                {
                  "value": "33700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:15:00.000-04:00"
                },
                {
                  "value": "34100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:30:00.000-04:00"
                },
                {
                  "value": "34300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:45:00.000-04:00"
                },
                {
                  "value": "34600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:00:00.000-04:00"
                },
                {
                  "value": "35100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:15:00.000-04:00"
                },
                {
                  "value": "35400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:30:00.000-04:00"
                },
                {
                  "value": "35700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:45:00.000-04:00"
                },
                {
                  "value": "36200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:00:00.000-04:00"
                },
                {
                  "value": "36500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:15:00.000-04:00"
                },
                {
                  "value": "36900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:30:00.000-04:00"
                },
                {
                  "value": "37500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:45:00.000-04:00"
                },
                {
                  "value": "38100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:00:00.000-04:00"
                },
                {
                  "value": "38500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:15:00.000-04:00"
                },
                {
                  "value": "39100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:30:00.000-04:00"
                },
                {
                  "value": "39600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:45:00.000-04:00"
                },
                {
                  "value": "40300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:00:00.000-04:00"
                },
                {
                  "value": "41300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:15:00.000-04:00"
                },
                {
                  "value": "41600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:30:00.000-04:00"
                },
                {
                  "value": "42700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:45:00.000-04:00"
                },
                {
                  "value": "43100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:00:00.000-04:00"
                },
                {
                  "value": "43900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:15:00.000-04:00"
                },
                {
                  "value": "44600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:30:00.000-04:00"
                },
                {
                  "value": "45700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:45:00.000-04:00"
                },
                {
                  "value": "46300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:00:00.000-04:00"
                },
                {
                  "value": "47100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:15:00.000-04:00"
                },
                {
                  "value": "47700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:30:00.000-04:00"
                },
                {
                  "value": "48500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:45:00.000-04:00"
                },
                {
                  "value": "49500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:00:00.000-04:00"
                },
                {
                  "value": "50400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:15:00.000-04:00"
                },
                {
                  "value": "50600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:30:00.000-04:00"
                },
                {
                  "value": "51600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:45:00.000-04:00"
                },
                {
                  "value": "51900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:00:00.000-04:00"
                },
                {
                  "value": "52600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:15:00.000-04:00"
                },
                {
                  "value": "53000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:30:00.000-04:00"
                },
                {
                  "value": "53600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:45:00.000-04:00"
                },
                {
                  "value": "54400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:00:00.000-04:00"
                },
                {
                  "value": "55200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:15:00.000-04:00"
                },
                {
                  "value": "56200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:30:00.000-04:00"
                },
                {
                  "value": "57100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:45:00.000-04:00"
                },
                {
                  "value": "57700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:00:00.000-04:00"
                },
                {
                  "value": "58100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:15:00.000-04:00"
                },
                {
                  "value": "59200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:30:00.000-04:00"
                },
                {
                  "value": "60900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:45:00.000-04:00"
                },
                {
                  "value": "61800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:00:00.000-04:00"
                },
                {
                  "value": "63700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:15:00.000-04:00"
                },
                {
                  "value": "64900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:30:00.000-04:00"
                },
                {
                  "value": "66500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:45:00.000-04:00"
                },
                {
                  "value": "68800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:00:00.000-04:00"
                },
                {
                  "value": "71200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:15:00.000-04:00"
                },
                {
                  "value": "73100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:30:00.000-04:00"
                },
                {
                  "value": "75900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:45:00.000-04:00"
                },
                {
                  "value": "78300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:00:00.000-04:00"
                },
                {
                  "value": "80800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:15:00.000-04:00"
                },
                {
                  "value": "83700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:30:00.000-04:00"
                },
                {
                  "value": "86700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:45:00.000-04:00"
                },
                {
                  "value": "90000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:00:00.000-04:00"
                },
                {
                  "value": "94100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:15:00.000-04:00"
                },
                {
                  "value": "96700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:30:00.000-04:00"
                },
                {
                  "value": "100000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:45:00.000-04:00"
                },
                {
                  "value": "103000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:00:00.000-04:00"
                },
                {
                  "value": "106000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:15:00.000-04:00"
                },
                {
                  "value": "109000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:30:00.000-04:00"
                },
                {
                  "value": "112000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:45:00.000-04:00"
                },
                {
                  "value": "114000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:00:00.000-04:00"
                },
                {
                  "value": "118000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:15:00.000-04:00"
                },
                {
                  "value": "122000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:30:00.000-04:00"
                },
                {
                  "value": "124000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:45:00.000-04:00"
                },
                {
                  "value": "128000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:00:00.000-04:00"
                },
                {
                  "value": "130000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:15:00.000-04:00"
                },
                {
                  "value": "132000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:30:00.000-04:00"
                },
                {
                  "value": "133000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:45:00.000-04:00"
                },
                {
                  "value": "133000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:00:00.000-04:00"
                },
                {
                  "value": "130000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:15:00.000-04:00"
                },
                {
                  "value": "129000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:30:00.000-04:00"
                },
                {
                  "value": "126000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:45:00.000-04:00"
                },
                {
                  "value": "124000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:00:00.000-04:00"
                },
                {
                  "value": "122000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:15:00.000-04:00"
                },
                {
                  "value": "120000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:30:00.000-04:00"
                },
                {
                  "value": "120000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:45:00.000-04:00"
                },
                {
                  "value": "120000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:00:00.000-04:00"
                },
                {
                  "value": "119000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:15:00.000-04:00"
                },
                {
                  "value": "118000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:30:00.000-04:00"
                },
                {
                  "value": "119000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:45:00.000-04:00"
                },
                {
                  "value": "119000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:00:00.000-04:00"
                },
                {
                  "value": "120000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:15:00.000-04:00"
                },
                {
                  "value": "122000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:30:00.000-04:00"
                },
                {
                  "value": "123000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:45:00.000-04:00"
                },
                {
                  "value": "124000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:00:00.000-04:00"
                },
                {
                  "value": "125000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:15:00.000-04:00"
                },
                {
                  "value": "125000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:30:00.000-04:00"
                },
                {
                  "value": "126000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:45:00.000-04:00"
                },
                {
                  "value": "126000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:00:00.000-04:00"
                },
                {
                  "value": "124000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:15:00.000-04:00"
                },
                {
                  "value": "125000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:30:00.000-04:00"
                },
                {
                  "value": "123000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:45:00.000-04:00"
                },
                {
                  "value": "123000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:00:00.000-04:00"
                },
                {
                  "value": "122000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:15:00.000-04:00"
                },
                {
                  "value": "121000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:30:00.000-04:00"
                },
                {
                  "value": "120000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:45:00.000-04:00"
                },
                {
                  "value": "119000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:00:00.000-04:00"
                },
                {
                  "value": "117000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:15:00.000-04:00"
                },
                {
                  "value": "118000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:30:00.000-04:00"
                },
                {
                  "value": "117000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:45:00.000-04:00"
                },
                {
                  "value": "114000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:00:00.000-04:00"
                },
                {
                  "value": "113000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:15:00.000-04:00"
                },
                {
                  "value": "113000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:30:00.000-04:00"
                },
                {
                  "value": "111000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:45:00.000-04:00"
                },
                {
                  "value": "110000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:00:00.000-04:00"
                },
                {
                  "value": "109000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:15:00.000-04:00"
                },
                {
                  "value": "107000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:30:00.000-04:00"
                },
                {
                  "value": "107000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:45:00.000-04:00"
                },
                {
                  "value": "106000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:00:00.000-04:00"
                },
                {
                  "value": "104000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:15:00.000-04:00"
                },
                {
                  "value": "103000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:30:00.000-04:00"
                },
                {
                  "value": "103000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:45:00.000-04:00"
                },
                {
                  "value": "102000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:00:00.000-04:00"
                },
                {
                  "value": "101000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:15:00.000-04:00"
                },
                {
                  "value": "100000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:30:00.000-04:00"
                },
                {
                  "value": "99200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:45:00.000-04:00"
                },
                {
                  "value": "98400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:00:00.000-04:00"
                },
                {
                  "value": "97700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:15:00.000-04:00"
                },
                {
                  "value": "96500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:30:00.000-04:00"
                },
                {
                  "value": "96500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:45:00.000-04:00"
                },
                {
                  "value": "95500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:00:00.000-04:00"
                },
                {
                  "value": "94700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:15:00.000-04:00"
                },
                {
                  "value": "93800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:30:00.000-04:00"
                },
                {
                  "value": "93600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:45:00.000-04:00"
                },
                {
                  "value": "92100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:00:00.000-04:00"
                },
                {
                  "value": "92300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:15:00.000-04:00"
                },
                {
                  "value": "91800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:30:00.000-04:00"
                },
                {
                  "value": "91300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:45:00.000-04:00"
                },
                {
                  "value": "89800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:00:00.000-04:00"
                },
                {
                  "value": "89500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:15:00.000-04:00"
                },
                {
                  "value": "88600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:30:00.000-04:00"
                },
                {
                  "value": "88600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:45:00.000-04:00"
                },
                {
                  "value": "87100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:00:00.000-04:00"
                },
                {
                  "value": "86600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:15:00.000-04:00"
                },
                {
                  "value": "85600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:30:00.000-04:00"
                },
                {
                  "value": "85100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:45:00.000-04:00"
                },
                {
                  "value": "84700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:00:00.000-04:00"
                },
                {
                  "value": "83800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:15:00.000-04:00"
                },
                {
                  "value": "82800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:30:00.000-04:00"
                },
                {
                  "value": "82500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:45:00.000-04:00"
                },
                {
                  "value": "82700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:00:00.000-04:00"
                },
                {
                  "value": "81800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:15:00.000-04:00"
                },
                {
                  "value": "81500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:30:00.000-04:00"
                },
                {
                  "value": "80700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:45:00.000-04:00"
                },
                {
                  "value": "79600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:00:00.000-04:00"
                },
                {
                  "value": "79100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:15:00.000-04:00"
                },
                {
                  "value": "79100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:30:00.000-04:00"
                },
                {
                  "value": "78200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:45:00.000-04:00"
                },
                {
                  "value": "78200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:00:00.000-04:00"
                },
                {
                  "value": "76600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:15:00.000-04:00"
                },
                {
                  "value": "76600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:30:00.000-04:00"
                },
                {
                  "value": "76300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:45:00.000-04:00"
                },
                {
                  "value": "75000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:00:00.000-04:00"
                },
                {
                  "value": "75000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:15:00.000-04:00"
                },
                {
                  "value": "74700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:30:00.000-04:00"
                },
                {
                  "value": "73700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:45:00.000-04:00"
                },
                {
                  "value": "73100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:00:00.000-04:00"
                },
                {
                  "value": "73200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:15:00.000-04:00"
                },
                {
                  "value": "72200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:30:00.000-04:00"
                },
                {
                  "value": "71200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:45:00.000-04:00"
                },
                {
                  "value": "71400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:00:00.000-04:00"
                },
                {
                  "value": "70700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:15:00.000-04:00"
                },
                {
                  "value": "70200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:30:00.000-04:00"
                },
                {
                  "value": "69700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:45:00.000-04:00"
                },
                {
                  "value": "69200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:00:00.000-04:00"
                },
                {
                  "value": "68500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:15:00.000-04:00"
                },
                {
                  "value": "68700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:30:00.000-04:00"
                },
                {
                  "value": "68100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:45:00.000-04:00"
                },
                {
                  "value": "67700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:00:00.000-04:00"
                },
                {
                  "value": "66600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:15:00.000-04:00"
                },
                {
                  "value": "66400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:30:00.000-04:00"
                },
                {
                  "value": "66600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:45:00.000-04:00"
                },
                {
                  "value": "65700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:00:00.000-04:00"
                },
                {
                  "value": "65300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:15:00.000-04:00"
                },
                {
                  "value": "64800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:30:00.000-04:00"
                },
                {
                  "value": "64100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:45:00.000-04:00"
                },
                {
                  "value": "63800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:00:00.000-04:00"
                },
                {
                  "value": "63600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:15:00.000-04:00"
                },
                {
                  "value": "63100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:30:00.000-04:00"
                },
                {
                  "value": "62700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:45:00.000-04:00"
                },
                {
                  "value": "62200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:00:00.000-04:00"
                },
                {
                  "value": "61900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:15:00.000-04:00"
                },
                {
                  "value": "61200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:30:00.000-04:00"
                },
                {
                  "value": "60400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:45:00.000-04:00"
                },
                {
                  "value": "60700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:00:00.000-04:00"
                },
                {
                  "value": "60100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:15:00.000-04:00"
                },
                {
                  "value": "59700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:30:00.000-04:00"
                },
                {
                  "value": "59700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:45:00.000-04:00"
                },
                {
                  "value": "59300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:00:00.000-04:00"
                },
                {
                  "value": "58900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:15:00.000-04:00"
                },
                {
                  "value": "58600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:30:00.000-04:00"
                },
                {
                  "value": "58100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:45:00.000-04:00"
                },
                {
                  "value": "57700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:00:00.000-04:00"
                },
                {
                  "value": "57300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:15:00.000-04:00"
                },
                {
                  "value": "57200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:30:00.000-04:00"
                },
                {
                  "value": "55700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:45:00.000-04:00"
                },
                {
                  "value": "55800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:00:00.000-04:00"
                },
                {
                  "value": "56000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:15:00.000-04:00"
                },
                {
                  "value": "54700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:30:00.000-04:00"
                },
                {
                  "value": "54500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:45:00.000-04:00"
                },
                {
                  "value": "54700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:00:00.000-04:00"
                },
                {
                  "value": "54300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:15:00.000-04:00"
                },
                {
                  "value": "53700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:30:00.000-04:00"
                },
                {
                  "value": "53200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:45:00.000-04:00"
                },
                {
                  "value": "53200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:00:00.000-04:00"
                },
                {
                  "value": "53000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:15:00.000-04:00"
                },
                {
                  "value": "51700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:30:00.000-04:00"
                },
                {
                  "value": "51900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:45:00.000-04:00"
                },
                {
                  "value": "51400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:00:00.000-04:00"
                },
                {
                  "value": "51300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:15:00.000-04:00"
                },
                {
                  "value": "50900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:30:00.000-04:00"
                },
                {
                  "value": "50500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:45:00.000-04:00"
                },
                {
                  "value": "50100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:00:00.000-04:00"
                },
                {
                  "value": "49800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:15:00.000-04:00"
                },
                {
                  "value": "49600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:30:00.000-04:00"
                },
                {
                  "value": "49200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:45:00.000-04:00"
                },
                {
                  "value": "49000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:00:00.000-04:00"
                },
                {
                  "value": "48700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:15:00.000-04:00"
                },
                {
                  "value": "47900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:30:00.000-04:00"
                },
                {
                  "value": "47900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:45:00.000-04:00"
                },
                {
                  "value": "47700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:00:00.000-04:00"
                },
                {
                  "value": "47100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:15:00.000-04:00"
                },
                {
                  "value": "46700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:30:00.000-04:00"
                },
                {
                  "value": "46300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:45:00.000-04:00"
                },
                {
                  "value": "46200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:00:00.000-04:00"
                },
                {
                  "value": "45900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:15:00.000-04:00"
                },
                {
                  "value": "45900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:30:00.000-04:00"
                },
                {
                  "value": "45500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:45:00.000-04:00"
                },
                {
                  "value": "44900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:00:00.000-04:00"
                },
                {
                  "value": "44500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:15:00.000-04:00"
                },
                {
                  "value": "44200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:30:00.000-04:00"
                },
                {
                  "value": "44000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:45:00.000-04:00"
                },
                {
                  "value": "43600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:00:00.000-04:00"
                },
                {
                  "value": "43200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:15:00.000-04:00"
                },
                {
                  "value": "42500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:30:00.000-04:00"
                },
                {
                  "value": "42600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:45:00.000-04:00"
                },
                {
                  "value": "42500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:00:00.000-04:00"
                },
                {
                  "value": "42200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:15:00.000-04:00"
                },
                {
                  "value": "41800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:30:00.000-04:00"
                },
                {
                  "value": "41700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:45:00.000-04:00"
                },
                {
                  "value": "41100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:00:00.000-04:00"
                },
                {
                  "value": "40900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:15:00.000-04:00"
                },
                {
                  "value": "40500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:30:00.000-04:00"
                },
                {
                  "value": "40100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:45:00.000-04:00"
                },
                {
                  "value": "40100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:00:00.000-04:00"
                },
                {
                  "value": "39400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:15:00.000-04:00"
                },
                {
                  "value": "39600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:30:00.000-04:00"
                },
                {
                  "value": "39200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:45:00.000-04:00"
                },
                {
                  "value": "39000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:00:00.000-04:00"
                },
                {
                  "value": "38400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:15:00.000-04:00"
                },
                {
                  "value": "38400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:30:00.000-04:00"
                },
                {
                  "value": "38300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:45:00.000-04:00"
                },
                {
                  "value": "37900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:00:00.000-04:00"
                },
                {
                  "value": "37600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:15:00.000-04:00"
                },
                {
                  "value": "37500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:30:00.000-04:00"
                },
                {
                  "value": "37200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:45:00.000-04:00"
                },
                {
                  "value": "36500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:00:00.000-04:00"
                },
                {
                  "value": "36600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:15:00.000-04:00"
                },
                {
                  "value": "36200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:30:00.000-04:00"
                },
                {
                  "value": "36000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:45:00.000-04:00"
                },
                {
                  "value": "35600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:00:00.000-04:00"
                },
                {
                  "value": "35500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:15:00.000-04:00"
                },
                {
                  "value": "34900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:30:00.000-04:00"
                },
                {
                  "value": "35100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:45:00.000-04:00"
                },
                {
                  "value": "34600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:00:00.000-04:00"
                },
                {
                  "value": "34200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:15:00.000-04:00"
                },
                {
                  "value": "34000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:30:00.000-04:00"
                },
                {
                  "value": "34200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:45:00.000-04:00"
                },
                {
                  "value": "33700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:00:00.000-04:00"
                },
                {
                  "value": "33600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:15:00.000-04:00"
                },
                {
                  "value": "33300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:30:00.000-04:00"
                },
                {
                  "value": "32900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:45:00.000-04:00"
                },
                {
                  "value": "32800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:00:00.000-04:00"
                },
                {
                  "value": "32300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:15:00.000-04:00"
                },
                {
                  "value": "32100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:30:00.000-04:00"
                },
                {
                  "value": "31800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:45:00.000-04:00"
                },
                {
                  "value": "31900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:00:00.000-04:00"
                },
                {
                  "value": "31700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:15:00.000-04:00"
                },
                {
                  "value": "31200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:30:00.000-04:00"
                },
                {
                  "value": "31100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:45:00.000-04:00"
                },
                {
                  "value": "30700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:00:00.000-04:00"
                },
                {
                  "value": "30800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:15:00.000-04:00"
                },
                {
                  "value": "30300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:30:00.000-04:00"
                },
                {
                  "value": "30100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:45:00.000-04:00"
                },
                {
                  "value": "30000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:00:00.000-04:00"
                },
                {
                  "value": "29900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:15:00.000-04:00"
                },
                {
                  "value": "29400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:30:00.000-04:00"
                },
                {
                  "value": "29700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:45:00.000-04:00"
                },
                {
                  "value": "29100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:00:00.000-04:00"
                },
                {
                  "value": "29100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:15:00.000-04:00"
                },
                {
                  "value": "28800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:30:00.000-04:00"
                },
                {
                  "value": "28600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:45:00.000-04:00"
                },
                {
                  "value": "28400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:00:00.000-04:00"
                },
                {
                  "value": "28300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:15:00.000-04:00"
                },
                {
                  "value": "27900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:30:00.000-04:00"
                },
                {
                  "value": "28100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:45:00.000-04:00"
                },
                {
                  "value": "27500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:00:00.000-04:00"
                },
                {
                  "value": "27400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:15:00.000-04:00"
                },
                {
                  "value": "27300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:30:00.000-04:00"
                },
                {
                  "value": "27100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:45:00.000-04:00"
                },
                {
                  "value": "26800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:00:00.000-04:00"
                },
                {
                  "value": "27100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:15:00.000-04:00"
                },
                {
                  "value": "26700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:30:00.000-04:00"
                },
                {
                  "value": "26300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:45:00.000-04:00"
                },
                {
                  "value": "26100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:00:00.000-04:00"
                },
                {
                  "value": "25900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:15:00.000-04:00"
                },
                {
                  "value": "25700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:30:00.000-04:00"
                },
                {
                  "value": "25700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:45:00.000-04:00"
                },
                {
                  "value": "25500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:00:00.000-04:00"
                },
                {
                  "value": "25300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:15:00.000-04:00"
                },
                {
                  "value": "24900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:30:00.000-04:00"
                },
                {
                  "value": "24800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:45:00.000-04:00"
                },
                {
                  "value": "24900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:00:00.000-04:00"
                },
                {
                  "value": "24700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:15:00.000-04:00"
                },
                {
                  "value": "24300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:30:00.000-04:00"
                },
                {
                  "value": "24200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:45:00.000-04:00"
                },
                {
                  "value": "24200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:00:00.000-04:00"
                },
                {
                  "value": "24100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:15:00.000-04:00"
                },
                {
                  "value": "23800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:30:00.000-04:00"
                },
                {
                  "value": "23900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:45:00.000-04:00"
                },
                {
                  "value": "23500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:00:00.000-04:00"
                },
                {
                  "value": "23400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:15:00.000-04:00"
                },
                {
                  "value": "23400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:30:00.000-04:00"
                },
                {
                  "value": "22900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:45:00.000-04:00"
                },
                {
                  "value": "23100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:00:00.000-04:00"
                },
                {
                  "value": "22800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:15:00.000-04:00"
                },
                {
                  "value": "22600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:30:00.000-04:00"
                },
                {
                  "value": "22500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:45:00.000-04:00"
                },
                {
                  "value": "22300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:00:00.000-04:00"
                },
                {
                  "value": "22100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:15:00.000-04:00"
                },
                {
                  "value": "22200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:30:00.000-04:00"
                },
                {
                  "value": "22100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:45:00.000-04:00"
                },
                {
                  "value": "21900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:00:00.000-04:00"
                },
                {
                  "value": "21400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:15:00.000-04:00"
                },
                {
                  "value": "21700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:30:00.000-04:00"
                },
                {
                  "value": "21500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:45:00.000-04:00"
                },
                {
                  "value": "21400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:00:00.000-04:00"
                },
                {
                  "value": "21300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:15:00.000-04:00"
                },
                {
                  "value": "20900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:30:00.000-04:00"
                },
                {
                  "value": "20900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:45:00.000-04:00"
                },
                {
                  "value": "20700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:00:00.000-04:00"
                },
                {
                  "value": "20900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:15:00.000-04:00"
                },
                {
                  "value": "20700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:30:00.000-04:00"
                },
                {
                  "value": "20400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:45:00.000-04:00"
                },
                {
                  "value": "20200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:00:00.000-04:00"
                },
                {
                  "value": "20200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:15:00.000-04:00"
                },
                {
                  "value": "20200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:30:00.000-04:00"
                },
                {
                  "value": "20000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:45:00.000-04:00"
                },
                {
                  "value": "19600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:00:00.000-04:00"
                },
                {
                  "value": "19500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:15:00.000-04:00"
                },
                {
                  "value": "19400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:30:00.000-04:00"
                },
                {
                  "value": "19300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:45:00.000-04:00"
                },
                {
                  "value": "19300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:00:00.000-04:00"
                },
                {
                  "value": "19000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:15:00.000-04:00"
                },
                {
                  "value": "19000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:30:00.000-04:00"
                },
                {
                  "value": "18900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:45:00.000-04:00"
                },
                {
                  "value": "19000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:00:00.000-04:00"
                },
                {
                  "value": "18800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:15:00.000-04:00"
                },
                {
                  "value": "18500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:30:00.000-04:00"
                },
                {
                  "value": "18600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:45:00.000-04:00"
                },
                {
                  "value": "18400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:00:00.000-04:00"
                },
                {
                  "value": "18200",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:15:00.000-04:00"
                },
                {
                  "value": "18300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:30:00.000-04:00"
                },
                {
                  "value": "18100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:45:00.000-04:00"
                },
                {
                  "value": "17900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:00:00.000-04:00"
                },
                {
                  "value": "17800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:15:00.000-04:00"
                },
                {
                  "value": "17800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:30:00.000-04:00"
                },
                {
                  "value": "17800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:45:00.000-04:00"
                },
                {
                  "value": "17400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:00:00.000-04:00"
                },
                {
                  "value": "17700",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:15:00.000-04:00"
                },
                {
                  "value": "17500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:30:00.000-04:00"
                },
                {
                  "value": "17300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:45:00.000-04:00"
                },
                {
                  "value": "17400",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:00:00.000-04:00"
                },
                {
                  "value": "17100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:15:00.000-04:00"
                },
                {
                  "value": "17000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:30:00.000-04:00"
                },
                {
                  "value": "17000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:45:00.000-04:00"
                },
                {
                  "value": "17100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:00:00.000-04:00"
                },
                {
                  "value": "17100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:15:00.000-04:00"
                },
                {
                  "value": "16800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:30:00.000-04:00"
                },
                {
                  "value": "16600",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:45:00.000-04:00"
                },
                {
                  "value": "16300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:00:00.000-04:00"
                },
                {
                  "value": "16100",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:15:00.000-04:00"
                },
                {
                  "value": "16500",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:30:00.000-04:00"
                },
                {
                  "value": "16000",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:45:00.000-04:00"
                },
                {
                  "value": "16300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:00:00.000-04:00"
                },
                {
                  "value": "16300",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:15:00.000-04:00"
                },
                {
                  "value": "15800",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:30:00.000-04:00"
                },
                {
                  "value": "15900",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:45:00.000-04:00"
                }
              ],
              "qualifier": [
                {
                  "qualifierCode": "P",
                  "qualifierDescription": "Provisional data subject to revision.",
                  "qualifierID": 0,
                  "network": "NWIS",
                  "vocabulary": "uv_rmk_cd"
                }
              ],
              "qualityControlLevel": [],
              "method": [
                {
                  "methodDescription": "",
                  "methodID": 90211
                }
              ],
              "source": [],
              "offset": [],
              "sample": [],
              "censorCode": []
            }
          ],
          "name": "USGS:03454500:00060:00000"
        },
        {
          "sourceInfo": {
            "siteName": "FRENCH BROAD RIVER AT HOT SPRINGS, NC",
            "siteCode": [
              {
                "value": "03454500",
                "network": "NWIS",
                "agencyCode": "USGS"
              }
            ],
            "timeZoneInfo": {
              "defaultTimeZone": {
                "zoneOffset": "-05:00",
                "zoneAbbreviation": "EST"
              },
              "daylightSavingsTimeZone": {
                "zoneOffset": "-04:00",
                "zoneAbbreviation": "EDT"
              },
              "siteUsesDaylightSavingsTime": true
            },
            "geoLocation": {
              "geogLocation": {
                "srs": "EPSG:4326",
                "latitude": 35.88991667,
                "longitude": -82.821
              },
              "localSiteXY": []
            },
            "note": [],
            "siteType": [],
            "siteProperty": [
              {
                "value": "ST",
                "name": "siteTypeCd"
              },
              {
                "value": "06010105",
                "name": "hucCd"
              },
              {
                "value": "37",
                "name": "stateCd"
              },
              {
                "value": "37115",
                "name": "countyCd"
              }
            ]
          },
          "variable": {
            "variableCode": [
              {
                "value": "00065",
                "network": "NWIS",
                "vocabulary": "NWIS:UnitValues",
                "variableID": 45807202,
                "default": true
              }
            ],
            "variableName": "Gage height, ft",
            "variableDescription": "Gage height, feet",
            "valueType": "Derived Value",
            "unit": {
              "unitCode": "ft"
            },
            "options": {
              "option": [
                {
                  "name": "Statistic",
                  "optionCode": "00000"
                }
              ]
            },
            "note": [],
            "noDataValue": -999999,
            "variableProperty": [],
            "oid": "45807202"
          },
          "values": [
            {
              "value": [
                {
                  "value": "2.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:00:00.000-04:00"
                },
                {
                  "value": "2.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:15:00.000-04:00"
                },
                {
                  "value": "2.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:30:00.000-04:00"
                },
                {
                  "value": "2.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T00:45:00.000-04:00"
                },
                {
                  "value": "2.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:00:00.000-04:00"
                },
                {
                  "value": "2.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:15:00.000-04:00"
                },
                {
                  "value": "2.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:30:00.000-04:00"
                },
                {
                  "value": "2.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T01:45:00.000-04:00"
                },
                {
                  "value": "2.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:00:00.000-04:00"
                },
                {
                  "value": "2.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:15:00.000-04:00"
                },
                {
                  "value": "2.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:30:00.000-04:00"
                },
                {
                  "value": "2.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T02:45:00.000-04:00"
                },
                {
                  "value": "2.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:00:00.000-04:00"
                },
                {
                  "value": "2.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:15:00.000-04:00"
                },
                {
                  "value": "2.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:30:00.000-04:00"
                },
                {
                  "value": "2.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T03:45:00.000-04:00"
                },
                {
                  "value": "2.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:00:00.000-04:00"
                },
                {
                  "value": "2.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:15:00.000-04:00"
                },
                {
                  "value": "2.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:30:00.000-04:00"
                },
                {
                  "value": "2.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T04:45:00.000-04:00"
                },
                {
                  "value": "2.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:00:00.000-04:00"
                },
                {
                  "value": "2.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:15:00.000-04:00"
                },
                {
                  "value": "2.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:30:00.000-04:00"
                },
                {
                  "value": "2.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T05:45:00.000-04:00"
                },
                {
                  "value": "2.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:00:00.000-04:00"
                },
                {
                  "value": "2.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:15:00.000-04:00"
                },
                {
                  "value": "2.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:30:00.000-04:00"
                },
                {
                  "value": "2.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T06:45:00.000-04:00"
                },
                {
                  "value": "3.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:00:00.000-04:00"
                },
                {
                  "value": "3.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:15:00.000-04:00"
                },
                {
                  "value": "3.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:30:00.000-04:00"
                },
                {
                  "value": "3.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T07:45:00.000-04:00"
                },
                {
                  "value": "3.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:00:00.000-04:00"
                },
                {
                  "value": "3.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:15:00.000-04:00"
                },
                {
                  "value": "3.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:30:00.000-04:00"
                },
                {
                  "value": "3.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T08:45:00.000-04:00"
                },
                {
                  "value": "3.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:00:00.000-04:00"
                },
                {
                  "value": "3.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:15:00.000-04:00"
                },
                {
                  "value": "3.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:30:00.000-04:00"
                },
                {
                  "value": "3.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T09:45:00.000-04:00"
                },
                {
                  "value": "3.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:00:00.000-04:00"
                },
                {
                  "value": "3.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:15:00.000-04:00"
                },
                {
                  "value": "3.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:30:00.000-04:00"
                },
                {
                  "value": "3.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T10:45:00.000-04:00"
                },
                {
                  "value": "3.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:00:00.000-04:00"
                },
                {
                  "value": "3.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:15:00.000-04:00"
                },
                {
                  "value": "3.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:30:00.000-04:00"
                },
                {
                  "value": "3.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T11:45:00.000-04:00"
                },
                {
                  "value": "3.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:00:00.000-04:00"
                },
                {
                  "value": "3.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:15:00.000-04:00"
                },
                {
                  "value": "3.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:30:00.000-04:00"
                },
                {
                  "value": "3.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T12:45:00.000-04:00"
                },
                {
                  "value": "3.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:00:00.000-04:00"
                },
                {
                  "value": "3.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:15:00.000-04:00"
                },
                {
                  "value": "3.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:30:00.000-04:00"
                },
                {
                  "value": "3.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T13:45:00.000-04:00"
                },
                {
                  "value": "3.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:00:00.000-04:00"
                },
                {
                  "value": "3.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:15:00.000-04:00"
                },
                {
                  "value": "3.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:30:00.000-04:00"
                },
                {
                  "value": "3.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T14:45:00.000-04:00"
                },
                {
                  "value": "3.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:00:00.000-04:00"
                },
                {
                  "value": "3.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:15:00.000-04:00"
                },
                {
                  "value": "3.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:30:00.000-04:00"
                },
                {
                  "value": "3.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T15:45:00.000-04:00"
                },
                {
                  "value": "3.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:00:00.000-04:00"
                },
                {
                  "value": "3.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:15:00.000-04:00"
                },
                {
                  "value": "3.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:30:00.000-04:00"
                },
                {
                  "value": "3.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T16:45:00.000-04:00"
                },
                {
                  "value": "3.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:00:00.000-04:00"
                },
                {
                  "value": "3.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:15:00.000-04:00"
                },
                {
                  "value": "3.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:30:00.000-04:00"
                },
                {
                  "value": "3.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T17:45:00.000-04:00"
                },
                {
                  "value": "3.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:00:00.000-04:00"
                },
                {
                  "value": "3.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:15:00.000-04:00"
                },
                {
                  "value": "3.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:30:00.000-04:00"
                },
                {
                  "value": "3.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T18:45:00.000-04:00"
                },
                {
                  "value": "3.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:00:00.000-04:00"
                },
                {
                  "value": "3.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:15:00.000-04:00"
                },
                {
                  "value": "3.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:30:00.000-04:00"
                },
                {
                  "value": "3.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T19:45:00.000-04:00"
                },
                {
                  "value": "3.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:00:00.000-04:00"
                },
                {
                  "value": "3.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:15:00.000-04:00"
                },
                {
                  "value": "3.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:30:00.000-04:00"
                },
                {
                  "value": "3.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T20:45:00.000-04:00"
                },
                {
                  "value": "3.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:00:00.000-04:00"
                },
                {
                  "value": "3.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:15:00.000-04:00"
                },
                {
                  "value": "3.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:30:00.000-04:00"
                },
                {
                  "value": "3.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T21:45:00.000-04:00"
                },
                {
                  "value": "3.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:00:00.000-04:00"
                },
                {
                  "value": "3.26",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:15:00.000-04:00"
                },
                {
                  "value": "3.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:30:00.000-04:00"
                },
                {
                  "value": "3.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T22:45:00.000-04:00"
                },
                {
                  "value": "3.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:00:00.000-04:00"
                },
                {
                  "value": "3.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:15:00.000-04:00"
                },
                {
                  "value": "3.63",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:30:00.000-04:00"
                },
                {
                  "value": "3.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-25T23:45:00.000-04:00"
                },
                {
                  "value": "3.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:00:00.000-04:00"
                },
                {
                  "value": "3.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:15:00.000-04:00"
                },
                {
                  "value": "4.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:30:00.000-04:00"
                },
                {
                  "value": "3.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T00:45:00.000-04:00"
                },
                {
                  "value": "3.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:00:00.000-04:00"
                },
                {
                  "value": "3.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:15:00.000-04:00"
                },
                {
                  "value": "3.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:30:00.000-04:00"
                },
                {
                  "value": "4.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T01:45:00.000-04:00"
                },
                {
                  "value": "3.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:00:00.000-04:00"
                },
                {
                  "value": "4.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:15:00.000-04:00"
                },
                {
                  "value": "4.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:30:00.000-04:00"
                },
                {
                  "value": "4.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T02:45:00.000-04:00"
                },
                {
                  "value": "4.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:00:00.000-04:00"
                },
                {
                  "value": "4.26",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:15:00.000-04:00"
                },
                {
                  "value": "4.26",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:30:00.000-04:00"
                },
                {
                  "value": "4.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T03:45:00.000-04:00"
                },
                {
                  "value": "4.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:00:00.000-04:00"
                },
                {
                  "value": "4.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:15:00.000-04:00"
                },
                {
                  "value": "4.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:30:00.000-04:00"
                },
                {
                  "value": "4.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T04:45:00.000-04:00"
                },
                {
                  "value": "4.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:00:00.000-04:00"
                },
                {
                  "value": "4.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:15:00.000-04:00"
                },
                {
                  "value": "4.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:30:00.000-04:00"
                },
                {
                  "value": "4.57",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T05:45:00.000-04:00"
                },
                {
                  "value": "4.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:00:00.000-04:00"
                },
                {
                  "value": "4.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:15:00.000-04:00"
                },
                {
                  "value": "5.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:30:00.000-04:00"
                },
                {
                  "value": "5.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T06:45:00.000-04:00"
                },
                {
                  "value": "5.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:00:00.000-04:00"
                },
                {
                  "value": "5.78",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:15:00.000-04:00"
                },
                {
                  "value": "5.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:30:00.000-04:00"
                },
                {
                  "value": "6.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T07:45:00.000-04:00"
                },
                {
                  "value": "6.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:00:00.000-04:00"
                },
                {
                  "value": "6.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:15:00.000-04:00"
                },
                {
                  "value": "6.32",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:30:00.000-04:00"
                },
                {
                  "value": "6.42",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T08:45:00.000-04:00"
                },
                {
                  "value": "6.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:00:00.000-04:00"
                },
                {
                  "value": "6.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:15:00.000-04:00"
                },
                {
                  "value": "6.51",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:30:00.000-04:00"
                },
                {
                  "value": "6.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T09:45:00.000-04:00"
                },
                {
                  "value": "6.57",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:00:00.000-04:00"
                },
                {
                  "value": "6.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:15:00.000-04:00"
                },
                {
                  "value": "6.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:30:00.000-04:00"
                },
                {
                  "value": "6.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T10:45:00.000-04:00"
                },
                {
                  "value": "6.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:00:00.000-04:00"
                },
                {
                  "value": "7.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:15:00.000-04:00"
                },
                {
                  "value": "7.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:30:00.000-04:00"
                },
                {
                  "value": "7.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T11:45:00.000-04:00"
                },
                {
                  "value": "7.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:00:00.000-04:00"
                },
                {
                  "value": "7.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:15:00.000-04:00"
                },
                {
                  "value": "7.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:30:00.000-04:00"
                },
                {
                  "value": "8.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T12:45:00.000-04:00"
                },
                {
                  "value": "8.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:00:00.000-04:00"
                },
                {
                  "value": "8.32",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:15:00.000-04:00"
                },
                {
                  "value": "8.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:30:00.000-04:00"
                },
                {
                  "value": "8.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T13:45:00.000-04:00"
                },
                {
                  "value": "8.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:00:00.000-04:00"
                },
                {
                  "value": "8.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:15:00.000-04:00"
                },
                {
                  "value": "8.51",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:30:00.000-04:00"
                },
                {
                  "value": "8.51",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T14:45:00.000-04:00"
                },
                {
                  "value": "8.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:00:00.000-04:00"
                },
                {
                  "value": "8.47",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:15:00.000-04:00"
                },
                {
                  "value": "8.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:30:00.000-04:00"
                },
                {
                  "value": "8.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T15:45:00.000-04:00"
                },
                {
                  "value": "8.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:00:00.000-04:00"
                },
                {
                  "value": "8.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:15:00.000-04:00"
                },
                {
                  "value": "8.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:30:00.000-04:00"
                },
                {
                  "value": "8.21",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T16:45:00.000-04:00"
                },
                {
                  "value": "8.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:00:00.000-04:00"
                },
                {
                  "value": "8.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:15:00.000-04:00"
                },
                {
                  "value": "8.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:30:00.000-04:00"
                },
                {
                  "value": "8.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T17:45:00.000-04:00"
                },
                {
                  "value": "8.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:00:00.000-04:00"
                },
                {
                  "value": "8.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:15:00.000-04:00"
                },
                {
                  "value": "8.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:30:00.000-04:00"
                },
                {
                  "value": "8.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T18:45:00.000-04:00"
                },
                {
                  "value": "8.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:00:00.000-04:00"
                },
                {
                  "value": "8.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:15:00.000-04:00"
                },
                {
                  "value": "8.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:30:00.000-04:00"
                },
                {
                  "value": "8.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T19:45:00.000-04:00"
                },
                {
                  "value": "8.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:00:00.000-04:00"
                },
                {
                  "value": "8.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:15:00.000-04:00"
                },
                {
                  "value": "8.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:30:00.000-04:00"
                },
                {
                  "value": "8.26",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T20:45:00.000-04:00"
                },
                {
                  "value": "8.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:00:00.000-04:00"
                },
                {
                  "value": "8.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:15:00.000-04:00"
                },
                {
                  "value": "8.47",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:30:00.000-04:00"
                },
                {
                  "value": "8.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T21:45:00.000-04:00"
                },
                {
                  "value": "8.62",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:00:00.000-04:00"
                },
                {
                  "value": "8.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:15:00.000-04:00"
                },
                {
                  "value": "8.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:30:00.000-04:00"
                },
                {
                  "value": "8.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T22:45:00.000-04:00"
                },
                {
                  "value": "8.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:00:00.000-04:00"
                },
                {
                  "value": "8.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:15:00.000-04:00"
                },
                {
                  "value": "8.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:30:00.000-04:00"
                },
                {
                  "value": "8.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-26T23:45:00.000-04:00"
                },
                {
                  "value": "9.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:00:00.000-04:00"
                },
                {
                  "value": "9.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:15:00.000-04:00"
                },
                {
                  "value": "9.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:30:00.000-04:00"
                },
                {
                  "value": "9.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T00:45:00.000-04:00"
                },
                {
                  "value": "9.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:00:00.000-04:00"
                },
                {
                  "value": "9.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:15:00.000-04:00"
                },
                {
                  "value": "9.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:30:00.000-04:00"
                },
                {
                  "value": "9.63",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T01:45:00.000-04:00"
                },
                {
                  "value": "9.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:00:00.000-04:00"
                },
                {
                  "value": "9.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:15:00.000-04:00"
                },
                {
                  "value": "9.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:30:00.000-04:00"
                },
                {
                  "value": "10.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T02:45:00.000-04:00"
                },
                {
                  "value": "10.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:00:00.000-04:00"
                },
                {
                  "value": "10.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:15:00.000-04:00"
                },
                {
                  "value": "10.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:30:00.000-04:00"
                },
                {
                  "value": "10.63",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T03:45:00.000-04:00"
                },
                {
                  "value": "10.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:00:00.000-04:00"
                },
                {
                  "value": "10.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:15:00.000-04:00"
                },
                {
                  "value": "10.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:30:00.000-04:00"
                },
                {
                  "value": "11.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T04:45:00.000-04:00"
                },
                {
                  "value": "11.23",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:00:00.000-04:00"
                },
                {
                  "value": "11.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:15:00.000-04:00"
                },
                {
                  "value": "11.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:30:00.000-04:00"
                },
                {
                  "value": "11.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T05:45:00.000-04:00"
                },
                {
                  "value": "11.61",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:00:00.000-04:00"
                },
                {
                  "value": "11.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:15:00.000-04:00"
                },
                {
                  "value": "11.77",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:30:00.000-04:00"
                },
                {
                  "value": "11.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T06:45:00.000-04:00"
                },
                {
                  "value": "12.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:00:00.000-04:00"
                },
                {
                  "value": "12.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:15:00.000-04:00"
                },
                {
                  "value": "12.27",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:30:00.000-04:00"
                },
                {
                  "value": "12.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T07:45:00.000-04:00"
                },
                {
                  "value": "12.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:00:00.000-04:00"
                },
                {
                  "value": "12.55",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:15:00.000-04:00"
                },
                {
                  "value": "12.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:30:00.000-04:00"
                },
                {
                  "value": "12.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T08:45:00.000-04:00"
                },
                {
                  "value": "13.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:00:00.000-04:00"
                },
                {
                  "value": "13.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:15:00.000-04:00"
                },
                {
                  "value": "13.55",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:30:00.000-04:00"
                },
                {
                  "value": "13.77",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T09:45:00.000-04:00"
                },
                {
                  "value": "14.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:00:00.000-04:00"
                },
                {
                  "value": "14.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:15:00.000-04:00"
                },
                {
                  "value": "14.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:30:00.000-04:00"
                },
                {
                  "value": "15.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T10:45:00.000-04:00"
                },
                {
                  "value": "15.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:00:00.000-04:00"
                },
                {
                  "value": "15.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:15:00.000-04:00"
                },
                {
                  "value": "16.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:30:00.000-04:00"
                },
                {
                  "value": "16.54",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T11:45:00.000-04:00"
                },
                {
                  "value": "16.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:00:00.000-04:00"
                },
                {
                  "value": "17.51",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:15:00.000-04:00"
                },
                {
                  "value": "17.83",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:30:00.000-04:00"
                },
                {
                  "value": "18.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T12:45:00.000-04:00"
                },
                {
                  "value": "18.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:00:00.000-04:00"
                },
                {
                  "value": "19.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:15:00.000-04:00"
                },
                {
                  "value": "19.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:30:00.000-04:00"
                },
                {
                  "value": "19.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T13:45:00.000-04:00"
                },
                {
                  "value": "19.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:00:00.000-04:00"
                },
                {
                  "value": "20.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:15:00.000-04:00"
                },
                {
                  "value": "20.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:30:00.000-04:00"
                },
                {
                  "value": "21.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T14:45:00.000-04:00"
                },
                {
                  "value": "21.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:00:00.000-04:00"
                },
                {
                  "value": "21.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:15:00.000-04:00"
                },
                {
                  "value": "22.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:30:00.000-04:00"
                },
                {
                  "value": "22.27",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T15:45:00.000-04:00"
                },
                {
                  "value": "22.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:00:00.000-04:00"
                },
                {
                  "value": "21.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:15:00.000-04:00"
                },
                {
                  "value": "21.77",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:30:00.000-04:00"
                },
                {
                  "value": "21.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T16:45:00.000-04:00"
                },
                {
                  "value": "21.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:00:00.000-04:00"
                },
                {
                  "value": "20.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:15:00.000-04:00"
                },
                {
                  "value": "20.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:30:00.000-04:00"
                },
                {
                  "value": "20.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T17:45:00.000-04:00"
                },
                {
                  "value": "20.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:00:00.000-04:00"
                },
                {
                  "value": "20.62",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:15:00.000-04:00"
                },
                {
                  "value": "20.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:30:00.000-04:00"
                },
                {
                  "value": "20.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T18:45:00.000-04:00"
                },
                {
                  "value": "20.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:00:00.000-04:00"
                },
                {
                  "value": "20.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:15:00.000-04:00"
                },
                {
                  "value": "20.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:30:00.000-04:00"
                },
                {
                  "value": "21.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T19:45:00.000-04:00"
                },
                {
                  "value": "21.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:00:00.000-04:00"
                },
                {
                  "value": "21.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:15:00.000-04:00"
                },
                {
                  "value": "21.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:30:00.000-04:00"
                },
                {
                  "value": "21.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T20:45:00.000-04:00"
                },
                {
                  "value": "21.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:00:00.000-04:00"
                },
                {
                  "value": "21.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:15:00.000-04:00"
                },
                {
                  "value": "21.26",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:30:00.000-04:00"
                },
                {
                  "value": "21.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T21:45:00.000-04:00"
                },
                {
                  "value": "21.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:00:00.000-04:00"
                },
                {
                  "value": "21.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:15:00.000-04:00"
                },
                {
                  "value": "20.80",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:30:00.000-04:00"
                },
                {
                  "value": "20.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T22:45:00.000-04:00"
                },
                {
                  "value": "20.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:00:00.000-04:00"
                },
                {
                  "value": "20.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:15:00.000-04:00"
                },
                {
                  "value": "20.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:30:00.000-04:00"
                },
                {
                  "value": "20.37",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-27T23:45:00.000-04:00"
                },
                {
                  "value": "20.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:00:00.000-04:00"
                },
                {
                  "value": "19.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:15:00.000-04:00"
                },
                {
                  "value": "19.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:30:00.000-04:00"
                },
                {
                  "value": "19.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T00:45:00.000-04:00"
                },
                {
                  "value": "19.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:00:00.000-04:00"
                },
                {
                  "value": "19.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:15:00.000-04:00"
                },
                {
                  "value": "19.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:30:00.000-04:00"
                },
                {
                  "value": "19.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T01:45:00.000-04:00"
                },
                {
                  "value": "19.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:00:00.000-04:00"
                },
                {
                  "value": "18.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:15:00.000-04:00"
                },
                {
                  "value": "18.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:30:00.000-04:00"
                },
                {
                  "value": "18.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T02:45:00.000-04:00"
                },
                {
                  "value": "18.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:00:00.000-04:00"
                },
                {
                  "value": "18.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:15:00.000-04:00"
                },
                {
                  "value": "18.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:30:00.000-04:00"
                },
                {
                  "value": "18.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T03:45:00.000-04:00"
                },
                {
                  "value": "18.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:00:00.000-04:00"
                },
                {
                  "value": "17.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:15:00.000-04:00"
                },
                {
                  "value": "17.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:30:00.000-04:00"
                },
                {
                  "value": "17.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T04:45:00.000-04:00"
                },
                {
                  "value": "17.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:00:00.000-04:00"
                },
                {
                  "value": "17.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:15:00.000-04:00"
                },
                {
                  "value": "17.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:30:00.000-04:00"
                },
                {
                  "value": "17.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T05:45:00.000-04:00"
                },
                {
                  "value": "17.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:00:00.000-04:00"
                },
                {
                  "value": "17.27",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:15:00.000-04:00"
                },
                {
                  "value": "17.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:30:00.000-04:00"
                },
                {
                  "value": "17.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T06:45:00.000-04:00"
                },
                {
                  "value": "16.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:00:00.000-04:00"
                },
                {
                  "value": "16.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:15:00.000-04:00"
                },
                {
                  "value": "16.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:30:00.000-04:00"
                },
                {
                  "value": "16.80",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T07:45:00.000-04:00"
                },
                {
                  "value": "16.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:00:00.000-04:00"
                },
                {
                  "value": "16.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:15:00.000-04:00"
                },
                {
                  "value": "16.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:30:00.000-04:00"
                },
                {
                  "value": "16.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T08:45:00.000-04:00"
                },
                {
                  "value": "16.27",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:00:00.000-04:00"
                },
                {
                  "value": "16.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:15:00.000-04:00"
                },
                {
                  "value": "16.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:30:00.000-04:00"
                },
                {
                  "value": "15.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T09:45:00.000-04:00"
                },
                {
                  "value": "16.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:00:00.000-04:00"
                },
                {
                  "value": "15.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:15:00.000-04:00"
                },
                {
                  "value": "15.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:30:00.000-04:00"
                },
                {
                  "value": "15.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T10:45:00.000-04:00"
                },
                {
                  "value": "15.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:00:00.000-04:00"
                },
                {
                  "value": "15.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:15:00.000-04:00"
                },
                {
                  "value": "15.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:30:00.000-04:00"
                },
                {
                  "value": "15.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T11:45:00.000-04:00"
                },
                {
                  "value": "15.40",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:00:00.000-04:00"
                },
                {
                  "value": "15.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:15:00.000-04:00"
                },
                {
                  "value": "15.18",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:30:00.000-04:00"
                },
                {
                  "value": "15.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T12:45:00.000-04:00"
                },
                {
                  "value": "14.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:00:00.000-04:00"
                },
                {
                  "value": "14.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:15:00.000-04:00"
                },
                {
                  "value": "14.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:30:00.000-04:00"
                },
                {
                  "value": "14.78",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T13:45:00.000-04:00"
                },
                {
                  "value": "14.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:00:00.000-04:00"
                },
                {
                  "value": "14.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:15:00.000-04:00"
                },
                {
                  "value": "14.57",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:30:00.000-04:00"
                },
                {
                  "value": "14.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T14:45:00.000-04:00"
                },
                {
                  "value": "14.47",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:00:00.000-04:00"
                },
                {
                  "value": "14.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:15:00.000-04:00"
                },
                {
                  "value": "14.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:30:00.000-04:00"
                },
                {
                  "value": "14.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T15:45:00.000-04:00"
                },
                {
                  "value": "14.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:00:00.000-04:00"
                },
                {
                  "value": "14.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:15:00.000-04:00"
                },
                {
                  "value": "14.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:30:00.000-04:00"
                },
                {
                  "value": "14.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T16:45:00.000-04:00"
                },
                {
                  "value": "13.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:00:00.000-04:00"
                },
                {
                  "value": "13.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:15:00.000-04:00"
                },
                {
                  "value": "13.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:30:00.000-04:00"
                },
                {
                  "value": "13.78",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T17:45:00.000-04:00"
                },
                {
                  "value": "13.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:00:00.000-04:00"
                },
                {
                  "value": "13.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:15:00.000-04:00"
                },
                {
                  "value": "13.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:30:00.000-04:00"
                },
                {
                  "value": "13.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T18:45:00.000-04:00"
                },
                {
                  "value": "13.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:00:00.000-04:00"
                },
                {
                  "value": "13.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:15:00.000-04:00"
                },
                {
                  "value": "13.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:30:00.000-04:00"
                },
                {
                  "value": "13.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T19:45:00.000-04:00"
                },
                {
                  "value": "13.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:00:00.000-04:00"
                },
                {
                  "value": "13.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:15:00.000-04:00"
                },
                {
                  "value": "13.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:30:00.000-04:00"
                },
                {
                  "value": "12.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T20:45:00.000-04:00"
                },
                {
                  "value": "12.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:00:00.000-04:00"
                },
                {
                  "value": "12.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:15:00.000-04:00"
                },
                {
                  "value": "12.78",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:30:00.000-04:00"
                },
                {
                  "value": "12.78",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T21:45:00.000-04:00"
                },
                {
                  "value": "12.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:00:00.000-04:00"
                },
                {
                  "value": "12.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:15:00.000-04:00"
                },
                {
                  "value": "12.62",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:30:00.000-04:00"
                },
                {
                  "value": "12.54",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T22:45:00.000-04:00"
                },
                {
                  "value": "12.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:00:00.000-04:00"
                },
                {
                  "value": "12.42",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:15:00.000-04:00"
                },
                {
                  "value": "12.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:30:00.000-04:00"
                },
                {
                  "value": "12.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-28T23:45:00.000-04:00"
                },
                {
                  "value": "12.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:00:00.000-04:00"
                },
                {
                  "value": "12.23",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:15:00.000-04:00"
                },
                {
                  "value": "12.03",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:30:00.000-04:00"
                },
                {
                  "value": "12.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T00:45:00.000-04:00"
                },
                {
                  "value": "12.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:00:00.000-04:00"
                },
                {
                  "value": "11.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:15:00.000-04:00"
                },
                {
                  "value": "11.88",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:30:00.000-04:00"
                },
                {
                  "value": "11.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T01:45:00.000-04:00"
                },
                {
                  "value": "11.80",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:00:00.000-04:00"
                },
                {
                  "value": "11.78",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:15:00.000-04:00"
                },
                {
                  "value": "11.58",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:30:00.000-04:00"
                },
                {
                  "value": "11.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T02:45:00.000-04:00"
                },
                {
                  "value": "11.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:00:00.000-04:00"
                },
                {
                  "value": "11.51",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:15:00.000-04:00"
                },
                {
                  "value": "11.45",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:30:00.000-04:00"
                },
                {
                  "value": "11.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T03:45:00.000-04:00"
                },
                {
                  "value": "11.33",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:00:00.000-04:00"
                },
                {
                  "value": "11.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:15:00.000-04:00"
                },
                {
                  "value": "11.25",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:30:00.000-04:00"
                },
                {
                  "value": "11.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T04:45:00.000-04:00"
                },
                {
                  "value": "11.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:00:00.000-04:00"
                },
                {
                  "value": "11.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:15:00.000-04:00"
                },
                {
                  "value": "10.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:30:00.000-04:00"
                },
                {
                  "value": "10.99",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T05:45:00.000-04:00"
                },
                {
                  "value": "10.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:00:00.000-04:00"
                },
                {
                  "value": "10.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:15:00.000-04:00"
                },
                {
                  "value": "10.80",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:30:00.000-04:00"
                },
                {
                  "value": "10.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T06:45:00.000-04:00"
                },
                {
                  "value": "10.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:00:00.000-04:00"
                },
                {
                  "value": "10.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:15:00.000-04:00"
                },
                {
                  "value": "10.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:30:00.000-04:00"
                },
                {
                  "value": "10.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T07:45:00.000-04:00"
                },
                {
                  "value": "10.50",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:00:00.000-04:00"
                },
                {
                  "value": "10.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:15:00.000-04:00"
                },
                {
                  "value": "10.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:30:00.000-04:00"
                },
                {
                  "value": "10.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T08:45:00.000-04:00"
                },
                {
                  "value": "10.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:00:00.000-04:00"
                },
                {
                  "value": "10.23",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:15:00.000-04:00"
                },
                {
                  "value": "10.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:30:00.000-04:00"
                },
                {
                  "value": "10.13",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T09:45:00.000-04:00"
                },
                {
                  "value": "10.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:00:00.000-04:00"
                },
                {
                  "value": "10.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:15:00.000-04:00"
                },
                {
                  "value": "10.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:30:00.000-04:00"
                },
                {
                  "value": "9.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T10:45:00.000-04:00"
                },
                {
                  "value": "9.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:00:00.000-04:00"
                },
                {
                  "value": "9.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:15:00.000-04:00"
                },
                {
                  "value": "9.78",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:30:00.000-04:00"
                },
                {
                  "value": "9.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T11:45:00.000-04:00"
                },
                {
                  "value": "9.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:00:00.000-04:00"
                },
                {
                  "value": "9.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:15:00.000-04:00"
                },
                {
                  "value": "9.63",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:30:00.000-04:00"
                },
                {
                  "value": "9.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T12:45:00.000-04:00"
                },
                {
                  "value": "9.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:00:00.000-04:00"
                },
                {
                  "value": "9.43",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:15:00.000-04:00"
                },
                {
                  "value": "9.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:30:00.000-04:00"
                },
                {
                  "value": "9.42",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T13:45:00.000-04:00"
                },
                {
                  "value": "9.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:00:00.000-04:00"
                },
                {
                  "value": "9.30",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:15:00.000-04:00"
                },
                {
                  "value": "9.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:30:00.000-04:00"
                },
                {
                  "value": "9.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T14:45:00.000-04:00"
                },
                {
                  "value": "9.12",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:00:00.000-04:00"
                },
                {
                  "value": "9.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:15:00.000-04:00"
                },
                {
                  "value": "9.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:30:00.000-04:00"
                },
                {
                  "value": "9.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T15:45:00.000-04:00"
                },
                {
                  "value": "8.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:00:00.000-04:00"
                },
                {
                  "value": "8.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:15:00.000-04:00"
                },
                {
                  "value": "8.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:30:00.000-04:00"
                },
                {
                  "value": "8.89",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T16:45:00.000-04:00"
                },
                {
                  "value": "8.80",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:00:00.000-04:00"
                },
                {
                  "value": "8.74",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:15:00.000-04:00"
                },
                {
                  "value": "8.70",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:30:00.000-04:00"
                },
                {
                  "value": "8.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T17:45:00.000-04:00"
                },
                {
                  "value": "8.65",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:00:00.000-04:00"
                },
                {
                  "value": "8.63",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:15:00.000-04:00"
                },
                {
                  "value": "8.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:30:00.000-04:00"
                },
                {
                  "value": "8.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T18:45:00.000-04:00"
                },
                {
                  "value": "8.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:00:00.000-04:00"
                },
                {
                  "value": "8.42",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:15:00.000-04:00"
                },
                {
                  "value": "8.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:30:00.000-04:00"
                },
                {
                  "value": "8.32",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T19:45:00.000-04:00"
                },
                {
                  "value": "8.34",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:00:00.000-04:00"
                },
                {
                  "value": "8.31",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:15:00.000-04:00"
                },
                {
                  "value": "8.22",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:30:00.000-04:00"
                },
                {
                  "value": "8.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T20:45:00.000-04:00"
                },
                {
                  "value": "8.14",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:00:00.000-04:00"
                },
                {
                  "value": "8.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:15:00.000-04:00"
                },
                {
                  "value": "8.07",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:30:00.000-04:00"
                },
                {
                  "value": "8.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T21:45:00.000-04:00"
                },
                {
                  "value": "8.01",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:00:00.000-04:00"
                },
                {
                  "value": "8.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:15:00.000-04:00"
                },
                {
                  "value": "7.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:30:00.000-04:00"
                },
                {
                  "value": "7.95",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T22:45:00.000-04:00"
                },
                {
                  "value": "7.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:00:00.000-04:00"
                },
                {
                  "value": "7.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:15:00.000-04:00"
                },
                {
                  "value": "7.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:30:00.000-04:00"
                },
                {
                  "value": "7.76",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-29T23:45:00.000-04:00"
                },
                {
                  "value": "7.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:00:00.000-04:00"
                },
                {
                  "value": "7.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:15:00.000-04:00"
                },
                {
                  "value": "7.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:30:00.000-04:00"
                },
                {
                  "value": "7.67",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T00:45:00.000-04:00"
                },
                {
                  "value": "7.57",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:00:00.000-04:00"
                },
                {
                  "value": "7.55",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:15:00.000-04:00"
                },
                {
                  "value": "7.53",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:30:00.000-04:00"
                },
                {
                  "value": "7.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T01:45:00.000-04:00"
                },
                {
                  "value": "7.44",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:00:00.000-04:00"
                },
                {
                  "value": "7.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:15:00.000-04:00"
                },
                {
                  "value": "7.41",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:30:00.000-04:00"
                },
                {
                  "value": "7.35",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T02:45:00.000-04:00"
                },
                {
                  "value": "7.31",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:00:00.000-04:00"
                },
                {
                  "value": "7.27",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:15:00.000-04:00"
                },
                {
                  "value": "7.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:30:00.000-04:00"
                },
                {
                  "value": "7.24",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T03:45:00.000-04:00"
                },
                {
                  "value": "7.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:00:00.000-04:00"
                },
                {
                  "value": "7.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:15:00.000-04:00"
                },
                {
                  "value": "7.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:30:00.000-04:00"
                },
                {
                  "value": "7.06",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T04:45:00.000-04:00"
                },
                {
                  "value": "7.09",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:00:00.000-04:00"
                },
                {
                  "value": "7.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:15:00.000-04:00"
                },
                {
                  "value": "6.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:30:00.000-04:00"
                },
                {
                  "value": "6.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T05:45:00.000-04:00"
                },
                {
                  "value": "6.96",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:00:00.000-04:00"
                },
                {
                  "value": "6.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:15:00.000-04:00"
                },
                {
                  "value": "6.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:30:00.000-04:00"
                },
                {
                  "value": "6.91",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T06:45:00.000-04:00"
                },
                {
                  "value": "6.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:00:00.000-04:00"
                },
                {
                  "value": "6.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:15:00.000-04:00"
                },
                {
                  "value": "6.82",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:30:00.000-04:00"
                },
                {
                  "value": "6.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T07:45:00.000-04:00"
                },
                {
                  "value": "6.77",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:00:00.000-04:00"
                },
                {
                  "value": "6.72",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:15:00.000-04:00"
                },
                {
                  "value": "6.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:30:00.000-04:00"
                },
                {
                  "value": "6.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T08:45:00.000-04:00"
                },
                {
                  "value": "6.64",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:00:00.000-04:00"
                },
                {
                  "value": "6.60",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:15:00.000-04:00"
                },
                {
                  "value": "6.61",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:30:00.000-04:00"
                },
                {
                  "value": "6.59",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T09:45:00.000-04:00"
                },
                {
                  "value": "6.56",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:00:00.000-04:00"
                },
                {
                  "value": "6.48",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:15:00.000-04:00"
                },
                {
                  "value": "6.52",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:30:00.000-04:00"
                },
                {
                  "value": "6.49",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T10:45:00.000-04:00"
                },
                {
                  "value": "6.47",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:00:00.000-04:00"
                },
                {
                  "value": "6.46",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:15:00.000-04:00"
                },
                {
                  "value": "6.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:30:00.000-04:00"
                },
                {
                  "value": "6.39",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T11:45:00.000-04:00"
                },
                {
                  "value": "6.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:00:00.000-04:00"
                },
                {
                  "value": "6.38",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:15:00.000-04:00"
                },
                {
                  "value": "6.36",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:30:00.000-04:00"
                },
                {
                  "value": "6.31",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T12:45:00.000-04:00"
                },
                {
                  "value": "6.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:00:00.000-04:00"
                },
                {
                  "value": "6.28",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:15:00.000-04:00"
                },
                {
                  "value": "6.29",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:30:00.000-04:00"
                },
                {
                  "value": "6.26",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T13:45:00.000-04:00"
                },
                {
                  "value": "6.20",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:00:00.000-04:00"
                },
                {
                  "value": "6.19",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:15:00.000-04:00"
                },
                {
                  "value": "6.17",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:30:00.000-04:00"
                },
                {
                  "value": "6.16",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T14:45:00.000-04:00"
                },
                {
                  "value": "6.15",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:00:00.000-04:00"
                },
                {
                  "value": "6.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:15:00.000-04:00"
                },
                {
                  "value": "6.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:30:00.000-04:00"
                },
                {
                  "value": "6.10",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T15:45:00.000-04:00"
                },
                {
                  "value": "6.11",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:00:00.000-04:00"
                },
                {
                  "value": "6.08",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:15:00.000-04:00"
                },
                {
                  "value": "6.04",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:30:00.000-04:00"
                },
                {
                  "value": "6.05",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T16:45:00.000-04:00"
                },
                {
                  "value": "6.02",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:00:00.000-04:00"
                },
                {
                  "value": "5.98",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:15:00.000-04:00"
                },
                {
                  "value": "6.00",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:30:00.000-04:00"
                },
                {
                  "value": "5.97",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T17:45:00.000-04:00"
                },
                {
                  "value": "5.94",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:00:00.000-04:00"
                },
                {
                  "value": "5.92",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:15:00.000-04:00"
                },
                {
                  "value": "5.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:30:00.000-04:00"
                },
                {
                  "value": "5.93",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T18:45:00.000-04:00"
                },
                {
                  "value": "5.86",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:00:00.000-04:00"
                },
                {
                  "value": "5.90",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:15:00.000-04:00"
                },
                {
                  "value": "5.87",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:30:00.000-04:00"
                },
                {
                  "value": "5.84",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T19:45:00.000-04:00"
                },
                {
                  "value": "5.85",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:00:00.000-04:00"
                },
                {
                  "value": "5.81",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:15:00.000-04:00"
                },
                {
                  "value": "5.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:30:00.000-04:00"
                },
                {
                  "value": "5.79",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T20:45:00.000-04:00"
                },
                {
                  "value": "5.80",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:00:00.000-04:00"
                },
                {
                  "value": "5.80",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:15:00.000-04:00"
                },
                {
                  "value": "5.77",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:30:00.000-04:00"
                },
                {
                  "value": "5.75",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T21:45:00.000-04:00"
                },
                {
                  "value": "5.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:00:00.000-04:00"
                },
                {
                  "value": "5.69",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:15:00.000-04:00"
                },
                {
                  "value": "5.73",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:30:00.000-04:00"
                },
                {
                  "value": "5.68",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T22:45:00.000-04:00"
                },
                {
                  "value": "5.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:00:00.000-04:00"
                },
                {
                  "value": "5.71",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:15:00.000-04:00"
                },
                {
                  "value": "5.65",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:30:00.000-04:00"
                },
                {
                  "value": "5.66",
                  "qualifiers": [
                    "P"
                  ],
                  "dateTime": "2024-09-30T23:45:00.000-04:00"
                }
              ],
              "qualifier": [
                {
                  "qualifierCode": "P",
                  "qualifierDescription": "Provisional data subject to revision.",
                  "qualifierID": 0,
                  "network": "NWIS",
                  "vocabulary": "uv_rmk_cd"
                }
              ],
              "qualityControlLevel": [],
              "method": [
                {
                  "methodDescription": "",
                  "methodID": 90212
                }
              ],
              "source": [],
              "offset": [],
              "sample": [],
              "censorCode": []
            }
          ],
          "name": "USGS:03454500:00065:00000"
        }
      ]
    },
    "nil": false,
    "globalScope": true,
    "typeSubstituted": false
  }