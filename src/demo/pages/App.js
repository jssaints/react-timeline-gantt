import React, { Component } from "react";
import TimeLine from "libs/TimeLine";
import Generator from "./Generator";
import "./App.css";

const config = {
  header: {
    top: {
      style: { backgroundColor: "#fff", color: "#555555", fontSize: 14, borderBottom: "1px solid #00000020", height: 30 },
    },
    bottom: {
      style: { background: "#fff", fontSize: 14, color: "#555555", borderBottom: "1px solid #00000020", height: 30 },
    },
  },
  taskList: {
    title: {
      label: "Projects",
      style: {
        backgroundColor: "#fff", borderBottom: "solid 1px #dee2e6",
        color: "#555555", textAlign: "left", justifyContent: "left", padding: "0 0.75rem", height: 60
      },
    },
    task: {
      style: {
        backgroundColor: "#fff",
        color: "#555555", textAlign: "left", fontSize: 14, padding: "0 0.75rem", borderBottom: "solid 1px rgba(0,0,0,0.05)"
      },
    },
    verticalSeparator: {
      style: { backgroundColor: "#fff", borderRight: "solid 1px rgba(0,0,0,0.05)" },
      grip: {
        style: { backgroundColor: "#f47564" },
      },
    },
  },
  dataViewPort: {
    rows: {
      style: {
        backgroundColor: "white",
        borderBottom: "solid 1px rgba(0,0,0,0.05)",
      },
    },
    task: {
      showLabel: true,
    },
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    let result = [
      {
        "color": "#3fbfc1",
        "end": "2020-03-29T12:00:00.000Z",
        "id": 46,
        "name": "#46: test",
        "start": "2020-03-26T00:00:00.000Z",
        "task": {
          "id": 46,
          "created_at": "2020-03-25T14:34:52.391164",
          "updated_at": "2020-03-27T07:16:51.757309",
          "user_id": 1,
          "start_date": "2020-03-26T00:00:00",
          "due_date": "2020-03-29T00:00:00",
          "name": "test",
          "key": "FSK-37",
          "description": "{\"blocks\":[{\"key\":\"ctvf6\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": 2,
          "position": 46,
          "workflow_form_id": 1,
          "front_fields": {
            
          },
          "app_count": {
            "watchers_count": "1"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 1,
            "list_name": "Product Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 2,
            "name": "Facebook Scrum",
            "key": "FSK",
            "project_users": [
              {
                "id": 11,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 10,
                "project_role_id": 1,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 9,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 8,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 4,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 3,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 2,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            
          ],
          "sub_tasks": [
            {
              "id": 53,
              "name": "task 2",
              "due_date": null,
              "task_users": [
                
              ],
              "__typename": "tasks"
            },
            {
              "id": 52,
              "name": "task 1",
              "due_date": null,
              "task_users": [
                
              ],
              "__typename": "tasks"
            }
          ],
          "__typename": "tasks"
        },
        "task_users": [
          
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#f0134d",
        "end": "2020-03-09T18:30:00.000Z",
        "id": 40,
        "name": "#40: First Issue\n",
        "start": "2020-03-24T18:30:00.000Z",
        "task": {
          "id": 40,
          "created_at": "2020-03-25T07:15:47.56428",
          "updated_at": "2020-03-26T06:51:52.910762",
          "user_id": 2,
          "start_date": "2020-03-24T18:30:00",
          "due_date": "2020-03-09T18:30:00",
          "name": "First Issue\n",
          "key": "test-4",
          "description": "{\"blocks\":[{\"key\":\"649fn\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": null,
          "position": 40,
          "workflow_form_id": 1,
          "front_fields": {
            
          },
          "app_count": {
            "votes_count": "2",
            "watchers_count": "2"
          },
          "user": {
            "id": 2,
            "name": "Board+User1",
            "md5_email": "9215cafee1c207b6de1f936841095bd4",
            "profile_picture_path": null,
            "is_online": 2,
            "__typename": "users"
          },
          "workflow_form": {
            "id": 1,
            "list_name": "Product Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": null,
          "task_users": [
            
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 2,
        "username": "Board+User1"
      },
      {
        "color": "#5f6caf",
        "end": "2020-03-27T06:30:00.000Z",
        "id": 39,
        "name": "#39: test  card\n",
        "start": "2020-03-29T18:30:00.000Z",
        "task": {
          "id": 39,
          "created_at": "2020-03-25T06:32:54.504413",
          "updated_at": "2020-03-27T05:32:46.845209",
          "user_id": 1,
          "start_date": "2020-03-29T18:30:00",
          "due_date": "2020-03-27T06:30:00",
          "name": "test  card\n",
          "key": "test-3",
          "description": "{\"blocks\":[{\"key\":\"3tkf6\",\"text\":\"bot\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": null,
          "position": 39,
          "workflow_form_id": 1,
          "front_fields": {
            "versions": 235
          },
          "app_count": {
            "votes_count": "2",
            "watchers_count": "2"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 1,
            "list_name": "Product Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": null,
          "task_users": [
            
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#f0134d",
        "end": "2020-03-15T18:30:00.000Z",
        "id": 34,
        "name": "#34: ticket 1",
        "start": "2020-03-23T18:30:00.000Z",
        "task": {
          "id": 34,
          "created_at": "2020-03-24T10:18:19.462129",
          "updated_at": "2020-03-26T06:51:52.910762",
          "user_id": 1,
          "start_date": "2020-03-23T18:30:00",
          "due_date": "2020-03-15T18:30:00",
          "name": "ticket 1",
          "key": "test-1",
          "description": "{\"blocks\":[{\"key\":\"7dunp\",\"text\":\"te stibotte stibotbotn\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":18,\"length\":3,\"key\":0}],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"/mention\",\"mutability\":\"SEGMENTED\",\"data\":{\"mention\":{\"name\":\"bot\"}}}}}",
          "project_id": null,
          "position": 34,
          "workflow_form_id": 1,
          "front_fields": {
            "components": 236
          },
          "app_count": {
            "votes_count": "1",
            "watchers_count": "12",
            "checklists_count": "4",
            "checklists_completed_count": "1"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 1,
            "list_name": "Product Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": null,
          "task_users": [
            {
              "id": 16,
              "user_id": 7,
              "user": {
                "id": 7,
                "name": "Board+User6",
                "md5_email": "7bb34eb654d7d30dc6c60f6db0036a17",
                "profile_picture_path": null,
                "is_online": 2,
                "__typename": "users"
              },
              "project_role_id": 2,
              "project_role": {
                "name": "Helper",
                "__typename": "project_roles"
              },
              "__typename": "task_users"
            },
            {
              "id": 17,
              "user_id": 1,
              "user": {
                "id": 1,
                "name": "Admin",
                "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
                "profile_picture_path": "UserAvatar/default-admin-user.png",
                "is_online": 1,
                "__typename": "users"
              },
              "project_role_id": 1,
              "project_role": {
                "name": "Maintainer",
                "__typename": "project_roles"
              },
              "__typename": "task_users"
            }
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          {
            "id": 16,
            "user_id": 7,
            "user": {
              "id": 7,
              "name": "Board+User6",
              "md5_email": "7bb34eb654d7d30dc6c60f6db0036a17",
              "profile_picture_path": null,
              "is_online": 2,
              "__typename": "users"
            },
            "project_role_id": 2,
            "project_role": {
              "name": "Helper",
              "__typename": "project_roles"
            },
            "__typename": "task_users"
          },
          {
            "id": 17,
            "user_id": 1,
            "user": {
              "id": 1,
              "name": "Admin",
              "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
              "profile_picture_path": "UserAvatar/default-admin-user.png",
              "is_online": 1,
              "__typename": "users"
            },
            "project_role_id": 1,
            "project_role": {
              "name": "Maintainer",
              "__typename": "project_roles"
            },
            "__typename": "task_users"
          }
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#f0134d",
        "end": "2020-03-20T00:00:00.000Z",
        "id": 32,
        "name": "#32: test",
        "start": "2020-03-20T07:06:38.486Z",
        "task": {
          "id": 32,
          "created_at": "2020-03-20T12:36:38.486646",
          "updated_at": "2020-03-20T12:36:38.751399",
          "user_id": 1,
          "start_date": null,
          "due_date": "2020-03-20T00:00:00",
          "name": "test",
          "key": "FSK-28",
          "description": null,
          "project_id": 2,
          "position": 32,
          "workflow_form_id": 1,
          "front_fields": null,
          "app_count": null,
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 1,
            "list_name": "Product Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 2,
            "name": "Facebook Scrum",
            "key": "FSK",
            "project_users": [
              {
                "id": 11,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 10,
                "project_role_id": 1,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 9,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 8,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 4,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 3,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 2,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            {
              "id": 11,
              "user_id": 1,
              "user": {
                "id": 1,
                "name": "Admin",
                "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
                "profile_picture_path": "UserAvatar/default-admin-user.png",
                "is_online": 1,
                "__typename": "users"
              },
              "project_role_id": 3,
              "project_role": {
                "name": "Reporter",
                "__typename": "project_roles"
              },
              "__typename": "task_users"
            }
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          {
            "id": 11,
            "user_id": 1,
            "user": {
              "id": 1,
              "name": "Admin",
              "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
              "profile_picture_path": "UserAvatar/default-admin-user.png",
              "is_online": 1,
              "__typename": "users"
            },
            "project_role_id": 3,
            "project_role": {
              "name": "Reporter",
              "__typename": "project_roles"
            },
            "__typename": "task_users"
          }
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#f0134d",
        "end": "2020-03-25T18:30:00.000Z",
        "id": 31,
        "name": "#31: Task added\n",
        "start": "2020-03-19T20:30:00.000Z",
        "task": {
          "id": 31,
          "created_at": "2020-03-19T14:28:36.081352",
          "updated_at": "2020-03-20T12:52:07.354407",
          "user_id": 1,
          "start_date": "2020-03-19T20:30:00",
          "due_date": "2020-03-25T18:30:00",
          "name": "Task added\n",
          "key": "FSK-27",
          "description": "{\"blocks\":[{\"key\":\"chpjn\",\"text\":\"Description\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":11,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": 2,
          "position": 31,
          "workflow_form_id": 1,
          "front_fields": {
            "versions": 12,
            "color_name": "#bb2c2c",
            "components": 23,
            "story_points": 10,
            "resolution_id": "choice2"
          },
          "app_count": {
            "votes_count": "1",
            "watchers_count": "1"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 1,
            "list_name": "Product Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 2,
            "name": "Facebook Scrum",
            "key": "FSK",
            "project_users": [
              {
                "id": 11,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 10,
                "project_role_id": 1,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 9,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 8,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 4,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 3,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 2,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#3fbfc1",
        "end": "2020-04-08T09:00:00.000Z",
        "id": 29,
        "name": "#29: timeline task2",
        "start": "2020-04-06T08:30:00.000Z",
        "task": {
          "id": 29,
          "created_at": "2020-03-19T09:29:43.909219",
          "updated_at": "2020-03-27T05:33:05.808068",
          "user_id": 1,
          "start_date": "2020-04-06T08:30:00",
          "due_date": "2020-04-08T09:00:00",
          "name": "timeline task2",
          "key": "FSK-25",
          "description": null,
          "project_id": 2,
          "position": 29,
          "workflow_form_id": 1,
          "front_fields": null,
          "app_count": null,
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 1,
            "list_name": "Product Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 2,
            "name": "Facebook Scrum",
            "key": "FSK",
            "project_users": [
              {
                "id": 11,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 10,
                "project_role_id": 1,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 9,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 8,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 4,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 3,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 2,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#3fbfc1",
        "end": "2020-04-02T08:30:00.000Z",
        "id": 28,
        "name": "#28: timeline task",
        "start": "2020-03-31T19:30:00.000Z",
        "task": {
          "id": 28,
          "created_at": "2020-03-19T09:28:45.276556",
          "updated_at": "2020-03-24T12:26:39.016319",
          "user_id": 1,
          "start_date": "2020-03-31T19:30:00",
          "due_date": "2020-04-02T08:30:00",
          "name": "timeline task",
          "key": "FSK-24",
          "description": "{\"blocks\":[{\"key\":\"c7kq2\",\"text\":\"bot\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": 2,
          "position": 28,
          "workflow_form_id": 1,
          "front_fields": {
            "time_remaining": 20
          },
          "app_count": {
            "watchers_count": "7",
            "checklists_count": "1",
            "checklists_completed_count": "1"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 1,
            "list_name": "Product Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 2,
            "name": "Facebook Scrum",
            "key": "FSK",
            "project_users": [
              {
                "id": 11,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 10,
                "project_role_id": 1,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 9,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 8,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 4,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 3,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 2,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#f0134d",
        "end": "2020-03-06T00:00:00.000Z",
        "id": 27,
        "name": "#27: Calendar task one",
        "start": "2020-03-05T00:00:00.000Z",
        "task": {
          "id": 27,
          "created_at": "2020-03-19T09:27:34.097612",
          "updated_at": "2020-03-24T12:30:17.471915",
          "user_id": 1,
          "start_date": "2020-03-05T00:00:00",
          "due_date": "2020-03-06T00:00:00",
          "name": "Calendar task one",
          "key": "FSK-23",
          "description": "{\"blocks\":[{\"key\":\"98gpo\",\"text\":\"updated\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": 2,
          "position": 27,
          "workflow_form_id": 1,
          "front_fields": {
            "color_name": "#e94646",
            "label_id_cache": [
              {
                "id": 155,
                "meta_key": "label_id",
                "foreign_id": 27,
                "meta_value": {
                  "label": "tw",
                  "value": "tw",
                  "__isNew__": true
                }
              },
              {
                "id": 152,
                "meta_key": "label_id",
                "foreign_id": 27,
                "meta_value": {
                  "label": "one",
                  "value": "one",
                  "__isNew__": true
                }
              }
            ]
          },
          "app_count": {
            "label_id_count": "2",
            "watchers_count": "16",
            "checklists_count": "10",
            "checklists_completed_count": "0"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 1,
            "list_name": "Product Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 2,
            "name": "Facebook Scrum",
            "key": "FSK",
            "project_users": [
              {
                "id": 11,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 10,
                "project_role_id": 1,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 9,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 8,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 4,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 3,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 2,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            {
              "id": 14,
              "user_id": 2,
              "user": {
                "id": 2,
                "name": "Board+User1",
                "md5_email": "9215cafee1c207b6de1f936841095bd4",
                "profile_picture_path": null,
                "is_online": 2,
                "__typename": "users"
              },
              "project_role_id": 1,
              "project_role": {
                "name": "Maintainer",
                "__typename": "project_roles"
              },
              "__typename": "task_users"
            },
            {
              "id": 15,
              "user_id": 1,
              "user": {
                "id": 1,
                "name": "Admin",
                "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
                "profile_picture_path": "UserAvatar/default-admin-user.png",
                "is_online": 1,
                "__typename": "users"
              },
              "project_role_id": 1,
              "project_role": {
                "name": "Maintainer",
                "__typename": "project_roles"
              },
              "__typename": "task_users"
            }
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          {
            "id": 14,
            "user_id": 2,
            "user": {
              "id": 2,
              "name": "Board+User1",
              "md5_email": "9215cafee1c207b6de1f936841095bd4",
              "profile_picture_path": null,
              "is_online": 2,
              "__typename": "users"
            },
            "project_role_id": 1,
            "project_role": {
              "name": "Maintainer",
              "__typename": "project_roles"
            },
            "__typename": "task_users"
          },
          {
            "id": 15,
            "user_id": 1,
            "user": {
              "id": 1,
              "name": "Admin",
              "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
              "profile_picture_path": "UserAvatar/default-admin-user.png",
              "is_online": 1,
              "__typename": "users"
            },
            "project_role_id": 1,
            "project_role": {
              "name": "Maintainer",
              "__typename": "project_roles"
            },
            "__typename": "task_users"
          }
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#f0134d",
        "end": "2020-03-06T00:00:00.000Z",
        "id": 26,
        "name": "#26: Calendar Tafks",
        "start": "2020-03-07T00:00:00.000Z",
        "task": {
          "id": 26,
          "created_at": "2020-03-19T09:26:57.839306",
          "updated_at": "2020-03-24T12:14:28.753738",
          "user_id": 1,
          "start_date": "2020-03-07T00:00:00",
          "due_date": "2020-03-06T00:00:00",
          "name": "Calendar Tafks",
          "key": "FSK-22",
          "description": "{\"blocks\":[{\"key\":\"dhmhm\",\"text\":\"test\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": 2,
          "position": 26,
          "workflow_form_id": 1,
          "front_fields": {
            
          },
          "app_count": {
            "votes_count": "1",
            "watchers_count": "4"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 1,
            "list_name": "Product Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 2,
            "name": "Facebook Scrum",
            "key": "FSK",
            "project_users": [
              {
                "id": 11,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 10,
                "project_role_id": 1,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 9,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 8,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 4,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 3,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 2,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            {
              "id": 13,
              "user_id": 2,
              "user": {
                "id": 2,
                "name": "Board+User1",
                "md5_email": "9215cafee1c207b6de1f936841095bd4",
                "profile_picture_path": null,
                "is_online": 2,
                "__typename": "users"
              },
              "project_role_id": 1,
              "project_role": {
                "name": "Maintainer",
                "__typename": "project_roles"
              },
              "__typename": "task_users"
            }
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          {
            "id": 13,
            "user_id": 2,
            "user": {
              "id": 2,
              "name": "Board+User1",
              "md5_email": "9215cafee1c207b6de1f936841095bd4",
              "profile_picture_path": null,
              "is_online": 2,
              "__typename": "users"
            },
            "project_role_id": 1,
            "project_role": {
              "name": "Maintainer",
              "__typename": "project_roles"
            },
            "__typename": "task_users"
          }
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#f0134d",
        "end": "2020-03-11T00:00:00.000Z",
        "id": 25,
        "name": "#25: sub2",
        "start": "2020-03-11T00:00:00.000Z",
        "task": {
          "id": 25,
          "created_at": "2020-03-19T09:19:34.421164",
          "updated_at": "2020-03-19T09:24:21.038478",
          "user_id": 1,
          "start_date": "2020-03-11T00:00:00",
          "due_date": "2020-03-11T00:00:00",
          "name": "sub2",
          "key": "FSK-21",
          "description": "{\"blocks\":[{\"key\":\"15b2\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": 2,
          "position": 25,
          "workflow_form_id": 2,
          "front_fields": {
            
          },
          "app_count": {
            "votes_count": "1",
            "watchers_count": "1"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 2,
            "list_name": "Sprint Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 2,
            "name": "Facebook Scrum",
            "key": "FSK",
            "project_users": [
              {
                "id": 11,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 10,
                "project_role_id": 1,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 9,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 8,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 4,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 3,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 2,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#f0134d",
        "end": "2020-03-19T09:30:00.000Z",
        "id": 22,
        "name": "#22: Design Problem\n",
        "start": "2020-03-13T09:00:00.000Z",
        "task": {
          "id": 22,
          "created_at": "2020-03-18T11:10:50.599821",
          "updated_at": "2020-03-20T12:35:44.404761",
          "user_id": 1,
          "start_date": "2020-03-13T09:00:00",
          "due_date": "2020-03-19T09:30:00",
          "name": "Design Problem\n",
          "key": "FSK-18",
          "description": "{\"blocks\":[{\"key\":\"9k87\",\"text\":\"Description\",\"type\":\"header-four\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":11,\"style\":\"BOLD\"},{\"offset\":0,\"length\":11,\"style\":\"ITALIC\"},{\"offset\":0,\"length\":11,\"style\":\"UNDERLINE\"},{\"offset\":0,\"length\":11,\"style\":\"CODE\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": 2,
          "position": 22,
          "workflow_form_id": 2,
          "front_fields": {
            "versions": 12,
            "color_name": "#7ed321",
            "components": 23,
            "priority_id": "choice1",
            "story_points": 11,
            "label_id_cache": [
              {
                "id": 120,
                "meta_key": "label_id",
                "foreign_id": 22,
                "meta_value": {
                  "label": "two",
                  "value": "two",
                  "__isNew__": true
                }
              },
              {
                "id": 119,
                "meta_key": "label_id",
                "foreign_id": 22,
                "meta_value": {
                  "label": "pne",
                  "value": "pne",
                  "__isNew__": true
                }
              }
            ],
            "time_remaining": 10,
            "original_estimate": 22
          },
          "app_count": {
            "votes_count": "1",
            "label_id_count": "2",
            "watchers_count": "1",
            "checklists_count": "1",
            "time_tracking_count": "1",
            "checklists_completed_count": "0"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 2,
            "list_name": "Sprint Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 2,
            "name": "Facebook Scrum",
            "key": "FSK",
            "project_users": [
              {
                "id": 11,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 10,
                "project_role_id": 1,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 9,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 8,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 4,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 3,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 2,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            {
              "id": 10,
              "user_id": 2,
              "user": {
                "id": 2,
                "name": "Board+User1",
                "md5_email": "9215cafee1c207b6de1f936841095bd4",
                "profile_picture_path": null,
                "is_online": 2,
                "__typename": "users"
              },
              "project_role_id": 1,
              "project_role": {
                "name": "Maintainer",
                "__typename": "project_roles"
              },
              "__typename": "task_users"
            }
          ],
          "sub_tasks": [
            {
              "id": 25,
              "name": "sub2",
              "due_date": "2020-03-11T00:00:00",
              "task_users": [
                
              ],
              "__typename": "tasks"
            },
            {
              "id": 24,
              "name": "sub1",
              "due_date": null,
              "task_users": [
                
              ],
              "__typename": "tasks"
            }
          ],
          "__typename": "tasks"
        },
        "task_users": [
          {
            "id": 10,
            "user_id": 2,
            "user": {
              "id": 2,
              "name": "Board+User1",
              "md5_email": "9215cafee1c207b6de1f936841095bd4",
              "profile_picture_path": null,
              "is_online": 2,
              "__typename": "users"
            },
            "project_role_id": 1,
            "project_role": {
              "name": "Maintainer",
              "__typename": "project_roles"
            },
            "__typename": "task_users"
          }
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#3fbfc1",
        "end": "2020-03-29T00:54:00.000Z",
        "id": 20,
        "name": "#20: Time Problem task",
        "start": "2020-03-26T23:24:00.000Z",
        "task": {
          "id": 20,
          "created_at": "2020-03-18T09:19:07.25529",
          "updated_at": "2020-03-27T05:33:26.74319",
          "user_id": 1,
          "start_date": "2020-03-26T23:24:00",
          "due_date": "2020-03-29T00:54:00",
          "name": "Time Problem task",
          "key": "FSK-16",
          "description": "{\"blocks\":[{\"key\":\"5hgha\",\"text\":\"Board+User 1\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": 2,
          "position": 20,
          "workflow_form_id": 2,
          "front_fields": {
            
          },
          "app_count": {
            "watchers_count": "2",
            "checklists_count": "2",
            "checklists_completed_count": "0"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 2,
            "list_name": "Sprint Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 2,
            "name": "Facebook Scrum",
            "key": "FSK",
            "project_users": [
              {
                "id": 11,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 10,
                "project_role_id": 1,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 9,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 8,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 4,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 3,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 2,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            {
              "id": 6,
              "user_id": 2,
              "user": {
                "id": 2,
                "name": "Board+User1",
                "md5_email": "9215cafee1c207b6de1f936841095bd4",
                "profile_picture_path": null,
                "is_online": 2,
                "__typename": "users"
              },
              "project_role_id": 3,
              "project_role": {
                "name": "Reporter",
                "__typename": "project_roles"
              },
              "__typename": "task_users"
            },
            {
              "id": 7,
              "user_id": 1,
              "user": {
                "id": 1,
                "name": "Admin",
                "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
                "profile_picture_path": "UserAvatar/default-admin-user.png",
                "is_online": 1,
                "__typename": "users"
              },
              "project_role_id": 3,
              "project_role": {
                "name": "Reporter",
                "__typename": "project_roles"
              },
              "__typename": "task_users"
            }
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          {
            "id": 6,
            "user_id": 2,
            "user": {
              "id": 2,
              "name": "Board+User1",
              "md5_email": "9215cafee1c207b6de1f936841095bd4",
              "profile_picture_path": null,
              "is_online": 2,
              "__typename": "users"
            },
            "project_role_id": 3,
            "project_role": {
              "name": "Reporter",
              "__typename": "project_roles"
            },
            "__typename": "task_users"
          },
          {
            "id": 7,
            "user_id": 1,
            "user": {
              "id": 1,
              "name": "Admin",
              "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
              "profile_picture_path": "UserAvatar/default-admin-user.png",
              "is_online": 1,
              "__typename": "users"
            },
            "project_role_id": 3,
            "project_role": {
              "name": "Reporter",
              "__typename": "project_roles"
            },
            "__typename": "task_users"
          }
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#f0134d",
        "end": "2020-03-18T00:00:00.000Z",
        "id": 19,
        "name": "#19: Nearby friends optionn",
        "start": "2020-03-16T00:00:00.000Z",
        "task": {
          "id": 19,
          "created_at": "2020-03-18T09:05:35.358527",
          "updated_at": "2020-03-24T12:39:10.426406",
          "user_id": 1,
          "start_date": "2020-03-16T00:00:00",
          "due_date": "2020-03-18T00:00:00",
          "name": "Nearby friends optionn",
          "key": "FSK-15",
          "description": "{\"blocks\":[{\"key\":\"88dme\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": 2,
          "position": 19,
          "workflow_form_id": 3,
          "front_fields": {
            
          },
          "app_count": {
            "watchers_count": "8",
            "checklists_count": "4",
            "checklists_completed_count": "0"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 3,
            "list_name": "Doing",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 2,
            "name": "Facebook Scrum",
            "key": "FSK",
            "project_users": [
              {
                "id": 11,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 10,
                "project_role_id": 1,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 9,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 8,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 4,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 3,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 2,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#f0134d",
        "end": "2020-03-20T09:00:00.000Z",
        "id": 15,
        "name": "#15: 1",
        "start": "2020-03-19T08:30:00.000Z",
        "task": {
          "id": 15,
          "created_at": "2020-03-18T08:45:45.200299",
          "updated_at": "2020-03-24T12:56:16.327998",
          "user_id": 1,
          "start_date": "2020-03-19T08:30:00",
          "due_date": "2020-03-20T09:00:00",
          "name": "1",
          "key": "FSK-11",
          "description": "{\"blocks\":[{\"key\":\"878nj\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": 2,
          "position": 15,
          "workflow_form_id": 3,
          "front_fields": {
            
          },
          "app_count": {
            "votes_count": "2",
            "watchers_count": "3",
            "checklists_count": "1",
            "checklists_completed_count": "0"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 3,
            "list_name": "Doing",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 2,
            "name": "Facebook Scrum",
            "key": "FSK",
            "project_users": [
              {
                "id": 11,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 10,
                "project_role_id": 1,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 9,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 8,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 4,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 3,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 2,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            {
              "id": 12,
              "user_id": 1,
              "user": {
                "id": 1,
                "name": "Admin",
                "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
                "profile_picture_path": "UserAvatar/default-admin-user.png",
                "is_online": 1,
                "__typename": "users"
              },
              "project_role_id": 3,
              "project_role": {
                "name": "Reporter",
                "__typename": "project_roles"
              },
              "__typename": "task_users"
            }
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          {
            "id": 12,
            "user_id": 1,
            "user": {
              "id": 1,
              "name": "Admin",
              "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
              "profile_picture_path": "UserAvatar/default-admin-user.png",
              "is_online": 1,
              "__typename": "users"
            },
            "project_role_id": 3,
            "project_role": {
              "name": "Reporter",
              "__typename": "project_roles"
            },
            "__typename": "task_users"
          }
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#f0134d",
        "end": "2020-03-18T04:54:00.000Z",
        "id": 5,
        "name": "#5: User personalized options",
        "start": "2020-03-19T04:54:00.000Z",
        "task": {
          "id": 5,
          "created_at": "2020-03-16T13:31:53.018135",
          "updated_at": "2020-03-27T05:33:58.619462",
          "user_id": 1,
          "start_date": "2020-03-19T04:54:00",
          "due_date": "2020-03-18T04:54:00",
          "name": "User personalized options",
          "key": "FSK-1",
          "description": "{\"blocks\":[{\"key\":\"dpb70\",\"text\":\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s sample terst value ad fad fs af ad fa fsa fs af asf a fad sfs af af asd fas f asf asf as fsa fd f fsda\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":11,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": 2,
          "position": 5,
          "workflow_form_id": 2,
          "front_fields": {
            "versions": 12,
            "color_name": "#417505",
            "components": 23,
            "priority_id": "choice2",
            "story_points": 13,
            "resolution_id": "choice2",
            "label_id_cache": [
              {
                "id": 11,
                "meta_key": "label_id",
                "foreign_id": 5,
                "meta_value": {
                  "label": "suggestion",
                  "value": "suggestion",
                  "__isNew__": true
                }
              },
              {
                "id": 10,
                "meta_key": "label_id",
                "foreign_id": 5,
                "meta_value": {
                  "label": "design",
                  "value": "design",
                  "__isNew__": true
                }
              },
              {
                "id": 9,
                "meta_key": "label_id",
                "foreign_id": 5,
                "meta_value": {
                  "label": "bug",
                  "value": "bug",
                  "__isNew__": true
                }
              }
            ],
            "time_remaining": 102,
            "original_estimate": 200
          },
          "app_count": {
            "votes_count": "1",
            "label_id_count": "3",
            "watchers_count": "1",
            "checklists_count": "56",
            "time_tracking_count": "1",
            "checklists_completed_count": "4"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 2,
            "list_name": "Sprint Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 2,
            "name": "Facebook Scrum",
            "key": "FSK",
            "project_users": [
              {
                "id": 11,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 10,
                "project_role_id": 1,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 9,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 8,
                "project_role_id": 3,
                "user_id": 2,
                "__typename": "project_users"
              },
              {
                "id": 4,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 3,
                "project_role_id": 3,
                "user_id": 1,
                "__typename": "project_users"
              },
              {
                "id": 2,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            {
              "id": 3,
              "user_id": 1,
              "user": {
                "id": 1,
                "name": "Admin",
                "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
                "profile_picture_path": "UserAvatar/default-admin-user.png",
                "is_online": 1,
                "__typename": "users"
              },
              "project_role_id": 3,
              "project_role": {
                "name": "Reporter",
                "__typename": "project_roles"
              },
              "__typename": "task_users"
            }
          ],
          "sub_tasks": [
            {
              "id": 15,
              "name": "1",
              "due_date": "2020-03-20T09:00:00",
              "task_users": [
                {
                  "id": 12,
                  "user_id": 1,
                  "user": {
                    "id": 1,
                    "name": "Admin",
                    "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
                    "profile_picture_path": "UserAvatar/default-admin-user.png",
                    "is_online": 1,
                    "__typename": "users"
                  },
                  "project_role_id": 3,
                  "project_role": {
                    "name": "Reporter",
                    "__typename": "project_roles"
                  },
                  "__typename": "task_users"
                }
              ],
              "__typename": "tasks"
            }
          ],
          "__typename": "tasks"
        },
        "task_users": [
          {
            "id": 3,
            "user_id": 1,
            "user": {
              "id": 1,
              "name": "Admin",
              "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
              "profile_picture_path": "UserAvatar/default-admin-user.png",
              "is_online": 1,
              "__typename": "users"
            },
            "project_role_id": 3,
            "project_role": {
              "name": "Reporter",
              "__typename": "project_roles"
            },
            "__typename": "task_users"
          }
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      },
      {
        "color": "#3fbfc1",
        "end": "2020-07-03T18:30:00.000Z",
        "id": 1,
        "name": "#1: Issue 1",
        "start": "2020-03-17T18:30:00.000Z",
        "task": {
          "id": 1,
          "created_at": "2020-03-16T11:11:58.572754",
          "updated_at": "2020-03-18T13:07:53.862228",
          "user_id": 1,
          "start_date": "2020-03-17T18:30:00",
          "due_date": "2020-07-03T18:30:00",
          "name": "Issue 1",
          "key": "RCP-1",
          "description": "{\"blocks\":[{\"key\":\"4ta72\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "project_id": 1,
          "position": 1,
          "workflow_form_id": 1,
          "front_fields": {
            "color_name": "#d0021b"
          },
          "app_count": {
            "votes_count": "1",
            "watchers_count": "1",
            "checklists_count": "2",
            "checklists_completed_count": "0"
          },
          "user": {
            "id": 1,
            "name": "Admin",
            "md5_email": "80c9cd1000ff1cefc6f8da87ffa963e6",
            "profile_picture_path": "UserAvatar/default-admin-user.png",
            "is_online": "1",
            "__typename": "users"
          },
          "workflow_form": {
            "id": 1,
            "list_name": "Product Backlog",
            "override_schema": null,
            "workflow": {
              "xstate_json": {
                "node_state": {
                  "edges": [
                    {
                      "id": "75fed15c",
                      "index": 4,
                      "label": "Product Backlog2Sprint Backlog",
                      "source": "f8f3302f",
                      "target": "6f8f881f",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "0b39daac",
                      "index": 5,
                      "label": "Sprint Backlog2Doing",
                      "source": "6f8f881f",
                      "target": "a44e71e3",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "89850c0e",
                      "index": 6,
                      "label": "Doing2Done",
                      "source": "a44e71e3",
                      "target": "b7363f7a",
                      "sourceAnchor": 9,
                      "targetAnchor": 2
                    },
                    {
                      "id": "a523cccd",
                      "index": 8,
                      "label": "Done2completed",
                      "source": "b7363f7a",
                      "target": "7ff8a1d0",
                      "sourceAnchor": 13,
                      "targetAnchor": 14
                    }
                  ],
                  "nodes": [
                    {
                      "x": 417.25,
                      "y": 69,
                      "id": "f8f3302f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 0,
                      "label": "Product Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": true,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": true
                    },
                    {
                      "x": 420.25,
                      "y": 170,
                      "id": "6f8f881f",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 1,
                      "label": "Sprint Backlog",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 419.25,
                      "y": 286,
                      "id": "a44e71e3",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 2,
                      "label": "Doing",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 420.25,
                      "y": 404,
                      "id": "b7363f7a",
                      "size": "170*34",
                      "type": "node",
                      "final": true,
                      "index": 3,
                      "label": "Done",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    },
                    {
                      "x": 680.156,
                      "y": 285.5,
                      "id": "7ff8a1d0",
                      "size": "170*34",
                      "type": "node",
                      "final": false,
                      "index": 7,
                      "label": "completed",
                      "shape": "state",
                      "onExit": [
                        
                      ],
                      "initial": false,
                      "onEntry": [
                        
                      ],
                      "allowTaskCreate": false
                    }
                  ],
                  "groups": [
                    
                  ]
                },
                "machine_state": {
                  "final": "Done",
                  "states": {
                    "Done": {
                      "id": "b7363f7a",
                      "on": {
                        "Done2completed": "completed"
                      }
                    },
                    "Doing": {
                      "id": "a44e71e3",
                      "on": {
                        "Doing2Done": "Done"
                      }
                    },
                    "completed": {
                      "id": "7ff8a1d0"
                    },
                    "Sprint Backlog": {
                      "id": "6f8f881f",
                      "on": {
                        "Sprint Backlog2Doing": "Doing"
                      }
                    },
                    "Product Backlog": {
                      "id": "f8f3302f",
                      "on": {
                        "Product Backlog2Sprint Backlog": "Sprint Backlog"
                      }
                    }
                  },
                  "initial": "Product Backlog"
                }
              },
              "kanban_card_layout_json": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      
                    },
                    "votes": {
                      
                    },
                    "due_date": {
                      
                    },
                    "label_id": {
                      
                    },
                    "versions": {
                      
                    },
                    "watchers": {
                      
                    },
                    "checklists": {
                      
                    },
                    "color_name": {
                      
                    },
                    "components": {
                      
                    },
                    "start_date": {
                      
                    },
                    "cover_image": {
                      
                    },
                    "priority_id": {
                      
                    },
                    "resolution_id": {
                      
                    },
                    "time_tracking": {
                      
                    },
                    "assigned_users": {
                      
                    },
                    "time_remaining": {
                      
                    },
                    "workflow_form_id": {
                      
                    },
                    "original_estimate": {
                      
                    }
                  }
                },
                "uiSchema": {
                  "ui:layout": [
                    {
                      "cid": "row1-1584353066531",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531",
                          "properties": [
                            {
                              "label_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-3",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-3",
                          "properties": [
                            {
                              "cover_image": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-4",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-4",
                          "properties": [
                            {
                              "name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584353066533",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533",
                          "properties": [
                            {
                              "checklists": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-2",
                          "properties": [
                            {
                              "votes": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584353066533-3",
                          "properties": [
                            {
                              "watchers": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584353066533",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584353066533",
                          "properties": [
                            {
                              "start_date": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584353066533",
                          "properties": [
                            {
                              "due_date": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584362411543",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584362411543",
                          "properties": [
                            {
                              "versions": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584362411543",
                          "properties": [
                            {
                              "components": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245",
                          "properties": [
                            {
                              "workflow_form_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row2-1584365054245-2",
                      "collayouts": [
                        {
                          "md": "6",
                          "cid": "col2-6-1584365054245-2",
                          "properties": [
                            {
                              "priority_id": 12
                            }
                          ]
                        },
                        {
                          "md": "6",
                          "cid": "col2-61584365054245-2",
                          "properties": [
                            {
                              "resolution_id": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row3-1584365054246",
                      "collayouts": [
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246",
                          "properties": [
                            {
                              "time_tracking": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-2",
                          "properties": [
                            {
                              "time_remaining": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col3-4-1584365054246-3",
                          "properties": [
                            {
                              "original_estimate": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row1-1584353066531-2",
                      "collayouts": [
                        {
                          "md": "12",
                          "cid": "col1-1584353066531-2",
                          "properties": [
                            {
                              "color_name": 12
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "cid": "row5-1584353066535",
                      "collayouts": [
                        {
                          "md": "8",
                          "cid": "col5-8-1584353066535",
                          "properties": [
                            {
                              "assigned_users": 12
                            }
                          ]
                        },
                        {
                          "md": "4",
                          "cid": "col5-4-1584353066535",
                          "properties": [
                            {
                              "id": 12
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "classNames": "focus-input-border mb-0"
                },
                "permission": {
                  
                }
              },
              "workflow_form_base_schema": {
                "schema": {
                  "type": "object",
                  "required": [
                    
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "title": "Name"
                    },
                    "votes": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Voters"
                    },
                    "due_date": {
                      "type": "string",
                      "title": "Due Date"
                    },
                    "label_id": {
                      "type": "array",
                      "title": "Labels",
                      "options": [
                        
                      ]
                    },
                    "versions": {
                      "type": "number",
                      "title": "Fix Versions"
                    },
                    "watchers": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "is_voted": {
                            "type": "boolean",
                            "title": "Voted?",
                            "default": true
                          }
                        }
                      },
                      "title": "Watchers"
                    },
                    "checklists": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "name"
                        ],
                        "properties": {
                          "name": {
                            "type": "string",
                            "title": "Title"
                          },
                          "is_completed": {
                            "type": "boolean",
                            "title": "Done?",
                            "default": false,
                            "hideLabel": true
                          }
                        }
                      },
                      "title": "Checklists"
                    },
                    "color_name": {
                      "type": "string",
                      "title": "Color"
                    },
                    "components": {
                      "type": "number",
                      "title": "Components"
                    },
                    "start_date": {
                      "type": "string",
                      "title": "Start Date"
                    },
                    "attachments": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "image": {
                            "type": "string",
                            "format": "UploadWidget"
                          }
                        }
                      },
                      "title": "Attachments"
                    },
                    "description": {
                      "type": "string",
                      "title": "Description"
                    },
                    "priority_id": {
                      "type": "string",
                      "title": "Priorities",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "story_points": {
                      "type": "number",
                      "title": "Story points"
                    },
                    "assigned_user": {
                      "type": "array",
                      "title": "Assignees",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "resolution_id": {
                      "type": "string",
                      "title": "Resolutions",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "time_tracking": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "start_date",
                          "time_spent",
                          "description"
                        ],
                        "properties": {
                          "start_date": {
                            "type": "string",
                            "title": "Date Started"
                          },
                          "time_spent": {
                            "type": "number",
                            "title": "Time Spent"
                          },
                          "description": {
                            "type": "string",
                            "title": "Description"
                          }
                        }
                      },
                      "title": "Time Tracking"
                    },
                    "time_remaining": {
                      "type": "number",
                      "title": "Time Remaining"
                    },
                    "workflow_form_id": {
                      "type": "number",
                      "title": "Status",
                      "options": [
                        {
                          "label": "choice1",
                          "value": "choice1"
                        },
                        {
                          "label": "choice2",
                          "value": "choice2"
                        }
                      ]
                    },
                    "original_estimate": {
                      "type": "number",
                      "title": "Original Estimate"
                    }
                  }
                },
                "uiSchema": {
                  "name": {
                    "ui:placeholder": ""
                  },
                  "votes": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Vote",
                      "Unvote"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "due_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": " No due date"
                  },
                  "label_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": true,
                    "ui:customCreatable": true,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": true
                  },
                  "ui:field": "layout",
                  "versions": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "versions",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "watchers": {
                    "ui:options": {
                      "display": false
                    },
                    "ui:NameField": [
                      "Watch",
                      "Watched"
                    ],
                    "ui:ArrayFieldTemplate": "VoteArrayFieldTemplate"
                  },
                  "ui:layout": [
                    {
                      "md": "8",
                      "cid": "col5-8-1584352907718",
                      "properties": [
                        {
                          "name": 12
                        },
                        {
                          "description": 12
                        },
                        {
                          "checklists": 12
                        },
                        {
                          "attachments": 12
                        },
                        {
                          "versions": 12
                        },
                        {
                          "components": 12
                        },
                        {
                          "time_tracking": 12
                        },
                        {
                          "time_remaining": 12
                        },
                        {
                          "original_estimate": 12
                        }
                      ]
                    },
                    {
                      "md": "4",
                      "cid": "col5-4-1584352907718",
                      "properties": [
                        {
                          "workflow_form_id": 12
                        },
                        {
                          "assigned_user": 12
                        },
                        {
                          "color_name": 12
                        },
                        {
                          "label_id": 12
                        },
                        {
                          "start_date": 12
                        },
                        {
                          "due_date": 12
                        },
                        {
                          "votes": 12
                        },
                        {
                          "watchers": 12
                        },
                        {
                          "story_points": 12
                        },
                        {
                          "resolution_id": 12
                        },
                        {
                          "priority_id": 12
                        }
                      ]
                    }
                  ],
                  "checklists": {
                    "items": {
                      "name": {
                        "ui:options": {
                          "label": false
                        }
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "is_completed": 1
                            },
                            {
                              "name": 11
                            }
                          ]
                        }
                      ]
                    },
                    "ui:field": "ChecklistArrayField",
                    "ui:options": {
                      "label": false,
                      "orderable": false
                    }
                  },
                  "classNames": "focus-input-border mb-0",
                  "color_name": {
                    "ui:widget": "ColorWidget"
                  },
                  "components": {
                    "options": {
                      "meta": "projects",
                      "meta_key": "components",
                      "meta_label": "name",
                      "meta_value": "id"
                    },
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false
                  },
                  "start_date": {
                    "ui:widget": "DateTimeWidget",
                    "ui:placeholder": "No start date"
                  },
                  "attachments": {
                    "ui:options": {
                      "showURL": "/img/restyav2/326x202,sc",
                      "uploadURL": "http://192.168.1.227:8085/companion",
                      "uploadPath": "CardAttachment"
                    },
                    "ui:ArrayFieldTemplate": "ImageArrayFieldTemplate"
                  },
                  "description": {
                    "ui:widget": "EditorWidget",
                    "ui:placeholder": ""
                  },
                  "priority_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "story_points": {
                    "ui:placeholder": "None"
                  },
                  "assigned_user": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Unassigned",
                    "ui:customMultiple": true,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": true,
                    "ui:customLabelColor": false
                  },
                  "resolution_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "None",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "time_tracking": {
                    "items": {
                      "id": {
                        "ui:widget": "hidden"
                      },
                      "user_id": {
                        "ui:widget": "hidden"
                      },
                      "end_date": {
                        "ui:widget": "DateWidget"
                      },
                      "ui:field": "layout",
                      "ui:layout": [
                        {
                          "md": 12,
                          "properties": [
                            {
                              "start_date": 6
                            },
                            {
                              "time_spent": 6
                            }
                          ]
                        },
                        {
                          "md": 12,
                          "properties": [
                            {
                              "description": 12
                            }
                          ]
                        }
                      ],
                      "start_date": {
                        "ui:widget": "DateWidget"
                      },
                      "description": {
                        "ui:widget": "textarea"
                      }
                    },
                    "ui:options": {
                      "orderable": false
                    },
                    "ui:ArrayAddText": "Log Time"
                  },
                  "time_remaining": {
                    "ui:placeholder": ""
                  },
                  "workflow_form_id": {
                    "ui:field": "ReactSelectField",
                    "ui:placeholder": "Please Select",
                    "ui:customMultiple": false,
                    "ui:customCreatable": false,
                    "ui:customLabelIcon": false,
                    "ui:customLabelColor": false
                  },
                  "original_estimate": {
                    "ui:placeholder": ""
                  }
                },
                "permission": {
                  "Guest": {
                    "0": [
                      "checklists"
                    ],
                    "3": [
                      "taskEditBasicDetailSchema",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Helper": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Reporter": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  },
                  "Maintainer": {
                    "3": [
                      "taskEditBasicDetailSchema",
                      "checklists",
                      "attachments",
                      "versions",
                      "components",
                      "time_tracking",
                      "story_points",
                      "workflow_form_id",
                      "assigned_user",
                      "colors",
                      "label_id",
                      "start_date",
                      "due_date",
                      "votes",
                      "watchers",
                      "resolutions",
                      "priorities"
                    ]
                  }
                }
              },
              "workflow_forms": [
                {
                  "id": 1,
                  "list_name": "Product Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 7,
                  "list_name": "completed",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 2,
                  "list_name": "Sprint Backlog",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 3,
                  "list_name": "Doing",
                  "__typename": "workflow_forms"
                },
                {
                  "id": 4,
                  "list_name": "Done",
                  "__typename": "workflow_forms"
                }
              ],
              "__typename": "workflows"
            },
            "__typename": "workflow_forms"
          },
          "outward_tasks": [
            
          ],
          "project": {
            "id": 1,
            "name": "Restya Core",
            "key": "RCP",
            "project_users": [
              {
                "id": 1,
                "project_role_id": 1,
                "user_id": 1,
                "__typename": "project_users"
              }
            ],
            "__typename": "projects"
          },
          "task_users": [
            
          ],
          "sub_tasks": [
            
          ],
          "__typename": "tasks"
        },
        "task_users": [
          
        ],
        "user_avatar": "/static/img/user1.jpeg",
        "user_id": 1,
        "username": "Admin"
      }
    ]/*  Generator.generateData() */;
    this.data = result;
    this.state = {
      itemheight: 64,
      data: result,
      selectedItem: null,
      timelineMode: "month",
      links: result.links,
      nonEditableName: false
    };
  }

  handleDayWidth = e => {
    this.setState({ daysWidth: parseInt(e.target.value) });
  };

  handleItemHeight = e => {
    this.setState({ itemheight: parseInt(e.target.value) });
  };

  onHorizonChange = (start, end) => {
    let result = this.data.filter(item => {
      return (
        (item.start < start && item.end > end) ||
        (item.start > start && item.start < end) ||
        (item.end > start && item.end < end)
      );
    });
    console.log("Calculating ");
    // this.setState({ data: result });
  };

  onSelectItem = item => {
    console.log(`Select Item ${item}`);
    this.setState({ selectedItem: item });
  };
  onClickItem = item => {
    console.log("clickevent", item);
  };

  onUpdateTask = (item, props) => {
    item.start = props.start;
    item.end = props.end;
    this.setState({ data: [...this.state.data] });
    console.log(props);
  };

  onCreateLink = item => {
    let newLink = Generator.createLink(item.start, item.end);
    this.setState({ links: [...this.state.links, newLink] });
    console.log(`Update Item ${item}`);
  };

  getbuttonStyle(value) {
    return this.state.timelineMode == value
      ? { backgroundColor: "grey", boder: "solid 1px #223344" }
      : {};
  }

  modeChange = value => {
    this.setState({ timelineMode: value });
  };

  genID() {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-4" +
      S4().substr(0, 3) +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    ).toLowerCase();
  }

  getRandomDate() {
    let result = new Date();
    result.setDate(result.getDate() + Math.random() * 10);
    return result;
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  addTask = () => {
    let newTask = {
      id: this.state.data.length + 1,
      start: new Date(),
      end: this.getRandomDate(),
      name: "New Task",
      color: this.getRandomColor()
    };
    this.setState({ data: [newTask, ...this.state.data] });
  };

  delete = () => {
    console.log("On delete");
    if (this.state.selectedItem) {
      let index = this.state.links.indexOf(this.state.selectedItem);
      if (index > -1) {
        this.state.links.splice(index, 1);
        this.setState({ links: [...this.state.links] });
      }
      index = this.state.data.indexOf(this.state.selectedItem);
      if (index > -1) {
        this.state.data.splice(index, 1);
        this.setState({ data: [...this.state.data] });
      }
    }
  };

  render() {
    return (
      <div>
      <div className="nav-container">
      <div className="mode-container-title">Full Demo</div>
      <div className="operation-button-container">
        <div className="operation-button-container">
          <div className="mode-button" onClick={this.addTask}>
            <svg height={30} width={30} viewBox="0 0 48 48">
              <path
                fill="silver"
                d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"
              />
            </svg>
          </div>
          <div className="mode-button" onClick={this.delete}>
            <svg height={30} width={30} viewBox="0 0 48 48">
              <path
                fill="silver"
                d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22H14v-4h20v4z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mode-container">
        <div
          className="mode-container-item mode-container-item-left"
          onClick={e => this.modeChange("day")}
          style={this.getbuttonStyle("day")}
        >
          Day
        </div>
        <div
          className="mode-container-item"
          onClick={e => this.modeChange("week")}
          style={this.getbuttonStyle("week")}
        >
          Week
        </div>
        <div
          className="mode-container-item"
          onClick={e => this.modeChange("month")}
          style={this.getbuttonStyle("month")}
        >
          Month
        </div>
        <div
          className="mode-container-item mode-container-item-right"
          onClick={e => this.modeChange("year")}
          style={this.getbuttonStyle("year")}
        >
          Year
        </div>
        <div
          className="mode-container-item mode-container-item-editable-toggle"
          style={{ marginLeft: "20px" }}
          onClick={() => {
            this.setState({
              nonEditableName: !this.state.nonEditableName
            });
          }}
        >
          {this.state.nonEditableName ? "Enable" : "Disable"} name edition
        </div>
      </div>
    </div>
        <div className="time-line-container col-xs-12" style={{ flex: "1 1 auto", height: "calc(100vh - 12.6rem)" }}>
        {<TimeLine
            config={config}
            data={this.state.data}
            links={this.state.links}
            // onHorizonChange={this.onHorizonChange}
            // onSelectItem={this.onSelectItem}
            groupByArrayField="task_users"
            userImageSize={40}
            locale={"en"}
            userImagePath="user.profile_picture_path"
            UsernamePath="user.name"
            onClickItem={this.onClickItem}
            onUpdateTask={this.onUpdateTask}
            onCreateLink={this.onCreateLink}
            mode={this.state.timelineMode}
            itemheight={this.state.itemheight}
            // selectedItem={this.state.selectedItem}
            nonEditableName={this.state.nonEditableName}
          />}
          {/* { <TimeLine
          config={config}
          groupByID="user_id"
          groupByName="user.name"
          groupByType="Array"
          groupByArrayField="task_users"
          userImagePath="user.profile_picture_path"
          UsernamePath="user.name"
          userImageSize={40}
          data={this.state.data}
          mode={this.state.timelineMode}
          onUpdateTask={this.onUpdateTask}
          onCreateLink={this.onCreateLink}
          itemheight={this.state.itemheight}
          nonEditableName={true}
        />} */}
        </div>
        </div>
    );
  }
}

export default App;
