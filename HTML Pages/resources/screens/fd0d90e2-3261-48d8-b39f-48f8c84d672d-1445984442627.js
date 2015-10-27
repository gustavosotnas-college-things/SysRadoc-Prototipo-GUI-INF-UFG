jQuery("#simulation")
  .on("click", ".s-fd0d90e2-3261-48d8-b39f-48f8c84d672d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/43a37f2b-6346-49d2-8010-e43d2181004a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/43a37f2b-6346-49d2-8010-e43d2181004a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/43a37f2b-6346-49d2-8010-e43d2181004a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-HIDDEN_Botao_menu_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b83cda5c-53b8-4f6f-b3ae-0eccbb12aedf"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Drop_down_acessibilidade",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Drop_down_acessibilidade",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Drop_down_acessibilidade",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Drop_down_acessibilidade",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_22")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_22": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Drop_down_graduacao",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "isDropDownOpened",
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Drop_down_graduacao",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_22": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f4ebf63c-e254-4e2e-9167-7e690fd5341f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-fd0d90e2-3261-48d8-b39f-48f8c84d672d .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Button_2",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Button_2",
                    "value": "Simular Falha... (5)"
                  },
                  "exectype": "timed",
                  "delay": 1000
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Button_2",
                    "value": "Simular Falha... (4)"
                  },
                  "exectype": "timed",
                  "delay": 1000
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Button_2",
                    "value": "Simular Falha... (3)"
                  },
                  "exectype": "timed",
                  "delay": 1000
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Button_2",
                    "value": "Simular Falha... (2)"
                  },
                  "exectype": "timed",
                  "delay": 1000
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Button_2",
                    "value": "Simular Falha... (1)"
                  },
                  "exectype": "timed",
                  "delay": 1000
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f4ebf63c-e254-4e2e-9167-7e690fd5341f"
                  },
                  "exectype": "timed",
                  "delay": 1000
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-fd0d90e2-3261-48d8-b39f-48f8c84d672d .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_menu_11": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_menu_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_menu_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Texto_botao_12": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Texto_botao_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Texto_botao_12 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_menu_12": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_menu_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_menu_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Texto_botao_13": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Texto_botao_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Texto_botao_13 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_16": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_16": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_16": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Aumentar_fonte_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_19": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Aum_fonte_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Aum_fonte_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Normalizar_fonte_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_18": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Norm_fonte_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Norm_fonte_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Diminuir_fonte_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_17": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Branco_Dim_fonte"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Preto_Dim_fonte"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-fd0d90e2-3261-48d8-b39f-48f8c84d672d .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_12") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_12").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_12") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_menu_11": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_menu_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_menu_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Texto_botao_12": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Texto_botao_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Texto_botao_12 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_13") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_13").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Button_13") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_menu_12": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_menu_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_menu_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Texto_botao_13": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Light,Arial"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Texto_botao_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Texto_botao_13 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Alto_contraste_button") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Alto_contraste_button") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_16": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_16": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_16": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Alto_cont"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Alto_cont"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Aumentar_fonte_button") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Aumentar_fonte_button").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Aumentar_fonte_button") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_19": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_19": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_19": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Aum_fonte_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Aum_fonte_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Normalizar_fonte_button") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Normalizar_fonte_button").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Normalizar_fonte_button") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_18": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_18": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_18": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Norm_fonte_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Norm_fonte_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Diminuir_fonte_button") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Diminuir_fonte_button").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Diminuir_fonte_button") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_17": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_17": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_17": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Preto_Dim_fonte"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Branco_Dim_fonte"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-fd0d90e2-3261-48d8-b39f-48f8c84d672d .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Botao_mouse_over_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_15": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Botao_mouse_over_22") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "isDropDownOpened"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_22": {
                      "attributes": {
                        "opacity": "0.5"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_22": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Botao_mouse_over_22": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Button_2": {
                      "attributes": {
                        "background-color": "#E57373",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E57373",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E57373",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E57373",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E57373",
                        "border-radius": "6px 6px 6px 6px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions": {
                        "width": "Math.max(175 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(37 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-fd0d90e2-3261-48d8-b39f-48f8c84d672d #s-Button_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E57373",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E57373",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E57373",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E57373",
                        "border-radius": "6px 6px 6px 6px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-pie-background": "#E57373",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(175 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(37 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-fd0d90e2-3261-48d8-b39f-48f8c84d672d .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Botao_mouse_over_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Botao_mouse_over_22")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("windowresize", ".s-fd0d90e2-3261-48d8-b39f-48f8c84d672d .windowresize", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Panel_2",
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimWindowHeight"
                        },"64" ]
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });