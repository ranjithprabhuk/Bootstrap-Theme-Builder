/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 24 Dec 2015
    Description : Controller to handle main application
    
    Change Log
    s.no      date    author     description     
 ===========================================================*/

app.controller("appCtrl", ['$rootScope', '$scope', '$state', '$location', 'Flash','appSettings',
function ($rootScope, $scope, $state, $location, Flash,appSettings) {

    var vm = this;
    vm.childIndex = 0;
    vm.scssVariables = [
        {
            Id: 1,
            Heading: "Base Colors",
            PanelStyle: "primary",
            Params: [

        {
            Label: "Gray Base",
            Name: "$gray-base",
            Value: "#000",
            Type: 1
        },
        {
            Label: "Primary Color",
            Name: "$brand-primary",
            Value: "#428bca",
            Type: 1
        },
        {
            Label: "Success Color",
            Name: "$brand-success",
            Value: "#5cb85c",
            Type: 1
        },
        {
            Label: "Info Color",
            Name: "$brand-info",
            Value: "#5bc0de",
            Type: 1
        },
        {
            Label: "Warning Color",
            Name: "$brand-warning",
            Value: "#f0ad4e",
            Type: 1
        },
        {
            Label: "Danger Color",
            Name: "$brand-danger",
            Value: "#d9534f",
            Type: 1
        },
        {
            Label: "Body Background",
            Name: "$body-bg",
            Value: "#fff",
            Type: 1
        },
        {
            Label: "Text Color",
            Name: "$text-color",
            Value: "#333",
            Type: 1,
        }
            ]
        },
        {
            Id: 2,
            PanelStyle: "success",
            Heading: "Hyperlink Styles",
            Params: [

        {
            Label: "Hyperlink Text Color",
            Name: "$link-color",
            Value: "#428bca",
            Type: 1
        },
        {
            Label: "Link Hover Color",
            Name: "$link-hover-color",
            Value: "#222",
            Type: 1
        },
        {
            Label: "Link Hover Decoration",
            Name: "$link-hover-decoration",
            Value: "underline",
            Values: ['underline', 'overline', 'none', 'line-through'],
            Type: 2
        }
            ]
        },
        {
            Id: 3,
            PanelStyle: "info",
            Heading: "Font Styles",
            Params: [
                    {
                        Label: "Base Font Size",
                        Name: "$font-size-base",
                        Value: "14px",
                        Values: ['10px', '12px', '14px', '16px', '18px', '20px', '22px'],
                        Type: 2
                    },
                    {
                        Label: "Line Height Base",
                        Name: "$line-height-base",
                        Value: "1.428571429",
                        Values: ['1', '1.1', '1.2', '1.3', '1.4', '1.428571429', '1.5', '1.6', '1.7', '1.8', '1.9', '2'],
                        Type: 2
                    },
                    {
                        Label: "Heading Font Weight",
                        Name: "$headings-font-weight",
                        Value: "500",
                        Values: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
                        Type: 2
                    },
                    {
                        Label: "Heading Line Height Base",
                        Name: "$headings-line-height",
                        Value: "1.1",
                        Values: ['1', '1.1', '1.2', '1.3', '1.4', '1.428571429', '1.5', '1.6', '1.7', '1.8', '1.9', '2'],
                        Type: 2
                    }
            ]
        },
        {
            Id: 4,
            PanelStyle: "danger",
            Heading: "Vertical & Horizontal Padding (Recommended not to change)",
            Params: [
                    {
                        Label: "Vertical Padding Base",
                        Name: "$padding-base-vertical",
                        Value: "6px",
                        Values: ['5px', '6px', '7px', '8px', '9px', '10px'],
                        Type: 2
                    },
                    {
                        Label: "Horizontal Padding Base",
                        Name: "$padding-base-horizontal",
                        Value: "12px",
                        Values: ['8px', '9px', '10px', '11px', '12px', '13px','14px'],
                        Type: 2
                    }
            ]
        },
        {
            Id: 5,
            PanelStyle: "warning",
            Heading: "Border Radius",
            Params: [
                   {
                       Label: "Border Radius Base",
                       Name: "$border-radius-base",
                       Value: "4px",
                       Values: ['0px', '1px', '2px', '3px', '4px', '5px', '6px', '7px', '8px', '9px', '10px', '11px', '12px'],
                       Type: 2
                   },
                   {
                       Label: "Border Radius Large",
                       Name: "$border-radius-large",
                       Value: "6px",
                       Values: ['0px', '1px', '2px', '3px', '4px', '5px', '6px', '7px', '8px', '9px', '10px', '11px', '12px'],
                       Type: 2
                   },
                    {
                        Label: "Border Radius Small",
                        Name: "$border-radius-small",
                        Value: "3px",
                        Values: ['0px', '1px', '2px', '3px', '4px', '5px', '6px', '7px', '8px', '9px', '10px', '11px', '12px'],
                        Type: 2
                    },
            ]
        },
        {
            Id: 6,
            PanelStyle: "primary",
            Heading: "Caret Base",
            Params: [
                   {
                       Label: "Caret Width Base",
                       Name: "$caret-width-base",
                       Value: "4px",
                       Values: ['3px', '4px', '5px', '6px', '7px', '8px', '9px', '10px'],
                       Type: 2
                   },
                   {
                       Label: "Caret Width Large",
                       Name: "$caret-width-large",
                       Value: "5px",
                       Values: ['4px', '5px', '6px', '7px', '8px', '9px', '10px', '11px', '12px'],
                       Type: 2
                   }
            ]
        },
        {
            Id: 7,
            PanelStyle: "success",
            Heading: "Table",
            Params: [
                    {
                        Label: "Table Background",
                        Name: "$table-bg",
                        Value: "#fff",
                        Type: 1
                    },
                   {
                       Label: "Table Background Accent",
                       Name: "$table-bg-accent",
                       Value: "#f9f9f9",
                       Type: 1
                   },
                   {
                       Label: "Table Background Hover",
                       Name: "$table-bg-hover",
                       Value: "#f5f5f5",
                       Type: 1
                   },
                   {
                       Label: "Table Border Color",
                       Name: "$table-border-color",
                       Value: "#ddd",
                       Type: 1
                   },
                   {
                       Label: "Table Cell Padding",
                       Name: "$table-cell-padding",
                       Value: "8px",
                       Values: ['5px','6px', '7px', '8px', '9px', '10px','11px','12px'],
                       Type: 2
                   },
                   {
                       Label: "Table Condensed Cell Padding",
                       Name: "$table-condensed-cell-padding",
                       Value: "5px",
                       Values: ['4px', '5px', '6px', '7px', '8px', '9px', '10px'],
                       Type: 2
                   }
            ]
        },
        {
            Id: 8,
            PanelStyle: "warning",
            Heading: "Button Styles",
            Params: [
                    {
                        Label: "Button Font Weight",
                        Name: "$btn-font-weight",
                        Value: "normal",
                        Values: ['normal','100', '200', '300', '400', '500', '600', '700', '800', '900','bold'],
                        Type: 2
                    },
                    {
                        Label: "Default Button Text Color",
                        Name: "$btn-default-color",
                        Value: "#333",
                        Type: 1
                    },
                   {
                       Label: "Default Button Background",
                       Name: "$btn-default-bg",
                       Value: "#fff",
                       Type: 1
                   },
                   {
                       Label: "Default Button Border",
                       Name: "$btn-default-border",
                       Value: "#ccc",
                       Type: 1
                   },
                   {
                       Label: "Primary Button Text Color",
                       Name: "$btn-primary-color",
                       Value: "#fff",
                       Type: 1
                   },
                   {
                       Label: "Success Button Text Color",
                       Name: "$btn-success-color",
                       Value: "#fff",
                       Type: 1
                   },
                   {
                       Label: "Info Button Text Color",
                       Name: "$btn-info-color",
                       Value: "#fff",
                       Type: 1
                   },
                   {
                       Label: "Warning Button Text Color",
                       Name: "$btn-warning-color",
                       Value: "#fff",
                       Type: 1
                   },
                   {
                       Label: "Danger Button Text Color",
                       Name: "$btn-danger-color",
                       Value: "#fff",
                       Type: 1
                   }
            ]
        },
        {
            Id: 9,
            PanelStyle: "info",
            Heading: "Input Styles",
            Params: [
                    {
                        Label: "Input Background Color",
                        Name: "$input-bg",
                        Value: "#fff",
                        Type: 1
                    },
                    {
                        Label: "Input Border Color",
                        Name: "$input-border",
                        Value: "#ccc",
                        Type: 1
                    },
                   {
                       Label: "Input Border Focus",
                       Name: "$input-border-focus",
                       Value: "#66afe9",
                       Type: 1
                   },
                   {
                       Label: "Inpuit Placeholder Color",
                       Name: "$input-color-placeholder",
                       Value: "#999",
                       Type: 1
                   },
                   {
                       Label: "Legend Border Color",
                       Name: "$legend-border-color",
                       Value: "#e5e5e5",
                       Type: 1
                   }
            ]
        },
        {
            Id: 10,
            PanelStyle: "primary",
            Heading: "Dropdown Styles",
            Params: [
                    {
                        Label: "Dropdown Background Color",
                        Name: "$dropdown-bg",
                        Value: "#fff",
                        Type: 1
                    },
                    {
                        Label: "Dropdown Border",
                        Name: "$dropdown-border",
                        Value: "#ccc",
                        Type: 1
                    },
                   {
                       Label: "Dropdown fallback Border",
                       Name: "$dropdown-fallback-border",
                       Value: "#ccc",
                       Type: 1
                   },
                   {
                       Label: "Dropdown Divider Background",
                       Name: "$dropdown-divider-bg",
                       Value: "#e5e5e5",
                       Type: 1
                   },
                   {
                       Label: "Dropdown Link Hover Background",
                       Name: "$dropdown-link-hover-bg",
                       Value: "#f5f5f5",
                       Type: 1
                   },
                   {
                       Label: "Dropdown Caret Color",
                       Name: "$dropdown-caret-color",
                       Value: "#000",
                       Type: 1
                   }
            ]
        },
        {
            Id: 11,
            PanelStyle: "danger",
            Heading: "Screen Size (Recommended not to change)",
            Params: [
                    {
                        Label: "Extra Small Screen",
                        Name: "$screen-xs",
                        Value: "480px",
                        Type: 3
                    },
                    {
                        Label: "Small Screen",
                        Name: "$screen-sm",
                        Value: "768px",
                        Type: 3
                    },
                    {
                        Label: "Medium Screen",
                        Name: "$screen-md",
                        Value: "992px",
                        Type: 3
                    },
                    {
                        Label: "Large Screen",
                        Name: "$screen-lg",
                        Value: "1200px",
                        Type: 3
                    }
            ]
        },
        {
            Id: 12,
            PanelStyle: "info",
            Heading: "Navigation Bar Styles",
            Params: [
                    {
                        Label: "Nav Bar Height",
                        Name: "$navbar-height",
                        Value: "50px",
                        Type: 3
                    },
                    {
                        Label: "Nav Bar Default Text Color",
                        Name: "$navbar-default-color",
                        Value: "#777",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Default Bg Color",
                        Name: "$navbar-default-bg",
                        Value: "#f8f8f8",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Default Link Color",
                        Name: "$navbar-default-link-color",
                        Value: "#777",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Default Link Hover Text Color",
                        Name: "$navbar-default-link-hover-color",
                        Value: "#333",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Default Link Active",
                        Name: "$navbar-default-link-active-color",
                        Value: "#777",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Default Link Disabled Color",
                        Name: "$navbar-default-link-disabled-color",
                        Value: "#333",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Default Toggle Hover",
                        Name: "$navbar-default-toggle-hover-bg",
                        Value: "#ddd",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Default Toggle Bg",
                        Name: "$navbar-default-toggle-icon-bar-bg",
                        Value: "#888",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Default Toggle Border Color",
                        Name: "$navbar-default-toggle-border-color",
                        Value: "#ddd",
                        Type: 1
                    },
            ]
        },
        {
            Id: 13,
            PanelStyle: "warning",
            Heading: "Navigation Bar Inverse Styles",
            Params: [
                    {
                        Label: "Nav Bar Inverse Bg",
                        Name: "$navbar-inverse-bg",
                        Value: "#222",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Inverse Link Hover Text Color",
                        Name: "$navbar-inverse-link-hover-color",
                        Value: "#fff",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Inverse Link Disabled Color",
                        Name: "$navbar-inverse-link-disabled-color",
                        Value: "#444",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Inverse Brand Hover Color",
                        Name: "$navbar-inverse-brand-hover-color",
                        Value: "#fff",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Inverse Toggle Hover",
                        Name: "$navbar-inverse-toggle-hover-bg",
                        Value: "#333",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Inverse Toggle Bg",
                        Name: "$navbar-inverse-toggle-icon-bar-bg",
                        Value: "#fff",
                        Type: 1
                    },
                    {
                        Label: "Nav Bar Default Toggle Border Color",
                        Name: "$navbar-inverse-toggle-border-color",
                        Value: "#333",
                        Type: 1
                    },
            ]
        },
         {
             Id:14 ,
             PanelStyle: "success",
             Heading: "Nav Tabs",
             Params: [
                     {
                         Label: "Nav Tabs Border Color",
                         Name: "$nav-tabs-border-color",
                         Value: "#ddd",
                         Type: 1
                     },
                     {
                         Label: "Nav Tabs Active Link Hover Border Color",
                         Name: "$nav-tabs-active-link-hover-border-color",
                         Value: "#ddd",
                         Type: 1
                     },
                     {
                         Label: "Nav Tabs Justified Link Hover Border Color",
                         Name: "$nav-tabs-justified-link-border-color",
                         Value: "#ddd",
                         Type: 1
                     }
             ]
         },
         {
             Id: 15,
             PanelStyle: "danger",
             Heading: "Pagination",
             Params: [
                     {
                         Label: "Pagination Background",
                         Name: "$pagination-bg",
                         Value: "#fff",
                         Type: 1
                     },
                     {
                         Label: "Pagination Border",
                         Name: "$pagination-border",
                         Value: "#ddd",
                         Type: 1
                     },
                     {
                         Label: "Pagination Hover Border",
                         Name: "$pagination-hover-border",
                         Value: "#ddd",
                         Type: 1
                     },
                     {
                         Label: "Pagination Active Color",
                         Name: "$pagination-active-color",
                         Value: "#fff",
                         Type: 1
                     },
                     {
                         Label: "Pagination Disabled Background",
                         Name: "$pagination-disabled-bg",
                         Value: "#fff",
                         Type: 1
                     },
                     {
                         Label: "Pagination Disabled Border",
                         Name: "$pagination-disabled-border",
                         Value: "#ddd",
                         Type: 1
                     },
                     {
                         Label: "Pager Border Radius",
                         Name: "$pager-border-radius",
                         Value: "15px",
                         Values:["0px","1px","2px","3px","4px","5px","6px","7px","8px","9px","10px","11px","12px","13px","14px","15px"],
                         Type: 2
                     }
             ]
         },
         {
             Id: 15,
             PanelStyle: "primary",
             Heading: "State",
             Params: [
                     {
                         Label: "State Succeess Text",
                         Name: "$state-success-text",
                         Value: "#3c763d",
                         Type: 1
                     },
                     {
                         Label: "State Success Background",
                         Name: "$state-success-bg",
                         Value: "#dff0d8",
                         Type: 1
                     },
                     {
                         Label: "State Info Text",
                         Name: "$state-info-text",
                         Value: "#31708f",
                         Type: 1
                     },
                     {
                         Label: "State Info Background",
                         Name: "$state-info-bg",
                         Value: "#d9edf7",
                         Type: 1
                     },
                     {
                         Label: "State Warning Text",
                         Name: "$state-warning-text",
                         Value: "#8a6d3b",
                         Type: 1
                     },
                     {
                         Label: "State Warning Background",
                         Name: "$state-warning-bg",
                         Value: "#fcf8e3",
                         Type: 1
                     },
                     {
                         Label: "State Danger Text",
                         Name: "$state-danger-text",
                         Value: "#a94442",
                         Type: 1
                     },
                     {
                         Label: "State Danger Background",
                         Name: "$state-danger-bg",
                         Value: "#f2dede",
                         Type: 1
                     },
             ]
         },
         {
             Id: 16,
             PanelStyle: "success",
             Heading: "Tool Tip",
             Params: [
                     {
                         Label: "Tool Tip Max Width",
                         Name: "$tooltip-max-width",
                         Value: "200px",
                         Type: 3
                     },
                     {
                         Label: "Tool Tip Text Color",
                         Name: "$tooltip-color",
                         Value: "#fff",
                         Type: 1
                     },
                     {
                         Label: "Tool Tip Background",
                         Name: "$tooltip-bg",
                         Value: "#000",
                         Type: 1
                     },
                     {
                         Label: "Tool Tip Opacity",
                         Name: "$tooltip-opacity",
                         Value: ".9",
                         Values:[".1",".2",".3",".4",".5",".6",".7",".8",".9","1"],
                         Type: 2
                     },
                     {
                         Label: "Tool Tip Arrow Width",
                         Name: "$tooltip-arrow-width",
                         Value: "5px",
                         Values:["0px","1px","2px","3px","4px","5px","6px","7px","8px","9px","10px","11px","12px","13px","14px","15px"],
                         Type: 1
                     }
             ]
         },
         {
             Id: 17,
             PanelStyle: "info",
             Heading: "Pop Over",
             Params: [
                     {
                         Label: "Pop Over Background",
                         Name: "$popover-bg",
                         Value: "#fff",
                         Type: 1
                     },
                     {
                         Label: "Pop Over Max Width",
                         Name: "$popover-max-width",
                         Value: "276px",
                         Type: 3
                     },
                     {
                         Label: "Popover Border Color",
                         Name: "$popover-border-color",
                         Value: "#eee",
                         Type: 1
                     },
                     {
                         Label: "Popover Fallback Border Color",
                         Name: "$popover-fallback-border-color",
                         Value: "#ccc",
                         Type: 1
                     },
                     {
                         Label: "Popover Arrow Width",
                         Name: "$popover-arrow-width",
                         Value: "10px",
                         Values:["5px","6px","7px","8px","9px","10px","11px","12px","13px","14px","15px"],
                         Type: 1
                     },
             ]
         },
          {
              Id: 18,
              PanelStyle: "warning",
              Heading: "Label",
              Params: [
                      {
                          Label: "Label Text Color",
                          Name: "$label-color",
                          Value: "#fff",
                          Type: 1
                      },
                      {
                          Label: "label Text Hover Color",
                          Name: "$label-link-hover-color",
                          Value: "#fff",
                          Type: 1
                      }
              ]
          },
          {
              Id: 19,
              PanelStyle: "danger",
              Heading: "Modal",
              Params: [
                      {
                          Label: "Modal Content Background",
                          Name: "$modal-content-bg",
                          Value: "#fff",
                          Type: 1
                      },
                      {
                          Label: "Modal Content Border Color",
                          Name: "$modal-content-border-color",
                          Value: "#eee",
                          Type: 1
                      },
                      {
                          Label: "Modal Content Fallback Border Color",
                          Name: "$modal-content-fallback-border-color",
                          Value: "#999",
                          Type: 1
                      },
                      {
                          Label: "Modal backdrop Background",
                          Name: "$modal-backdrop-bg",
                          Value: "#000",
                          Type: 1
                      },
                      {
                          Label: "Modal Header Border Color",
                          Name: "$modal-header-border-color",
                          Value: "#e5e5e5",
                          Type: 1
                      },
                      {
                          Label: "Modal backdrop Opacity",
                          Name: "$modal-backdrop-opacity",
                          Value: ".5",
                          Values:['.1','.2','.3','.4','.5','.6','.7','.8','.9','1'],
                          Type: 2
                      },
                      {
                          Label: "Modal Inner Padding",
                          Name: "$modal-inner-padding",
                          Value: "15px",
                          Type: 3
                      },
                      {
                          Label: "Modal Title Padding",
                          Name: "$modal-title-padding",
                          Value: "15px",
                          Type: 3
                      },
                      {
                          Label: "Modal Large Size",
                          Name: "$modal-lg",
                          Value: "900px",
                          Type: 3
                      },
                      {
                          Label: "Modal Medium Size",
                          Name: "$modal-md",
                          Value: "600px",
                          Type: 3
                      },
                      {
                          Label: "Modal Small Size",
                          Name: "$modal-sm",
                          Value: "300px",
                          Type: 3
                      }
              ]
          },
           {
               Id: 20,
               PanelStyle: "primary",
               Heading: "Progress Bar",
               Params: [
                       {
                           Label: "Progress Bar Background",
                           Name: "$progress-bg",
                           Value: "#f5f5f5",
                           Type: 1
                       },
                       {
                           Label: "Progress Bar Text Color",
                           Name: "$progress-bar-color",
                           Value: "#fff",
                           Type: 1
                       }
               ]
           },
           {
               Id: 21,
               PanelStyle: "success",
               Heading: "List",
               Params: [
                       {
                           Label: "List Group Background",
                           Name: "$list-group-bg",
                           Value: "#fff",
                           Type: 1
                       },
                       {
                           Label: "List Group Border",
                           Name: "$list-group-border",
                           Value: "#ddd",
                           Type: 1
                       },
                       {
                           Label: "List Group Hover Background",
                           Name: "$list-group-hover-bg",
                           Value: "#f5f5f5",
                           Type: 1
                       },
                       {
                           Label: "List Group Link Color",
                           Name: "$list-group-link-color",
                           Value: "#555",
                           Type: 1
                       },
                       {
                           Label: "List Group Link Heading Color",
                           Name: "$list-group-link-heading-color",
                           Value: "#333",
                           Type: 1
                       }
               ]
           },
           {
               Id: 22,
               PanelStyle: "info",
               Heading: "Panel",
               Params: [
                       {
                           Label: "Panel Background",
                           Name: "$panel-bg",
                           Value: "#fff",
                           Type: 1
                       },
                       {
                           Label: "Panel Inner Border Color",
                           Name: "$panel-inner-border",
                           Value: "#ddd",
                           Type: 1
                       },
                       {
                           Label: "Panel Footer Background",
                           Name: "$panel-footer-bg",
                           Value: "#f5f5f5",
                           Type: 1
                       },
                       {
                           Label: "Panel Default Border",
                           Name: "$panel-default-border",
                           Value: "#ddd",
                           Type: 1
                       },
                       {
                           Label: "Panel Default Heading Background",
                           Name: "$panel-default-heading-bg",
                           Value: "#f5f5f5",
                           Type: 1
                       },
                       {
                           Label: "Panel Primary Text",
                           Name: "$panel-primary-text",
                           Value: "#fff",
                           Type: 1
                       }
               ]
           },
           {
               Id: 23,
               PanelStyle: "danger",
               Heading: "Thumbnail",
               Params: [
                       {
                           Label: "Thumbnail Padding",
                           Name: "$thumbnail-padding",
                           Value: "4px",
                           Values: ["1px","2px","3px","4px","5px", "6px", "7px", "8px", "9px", "10px", "11px", "12px", "13px", "14px", "15px"],
                           Type: 2
                       },
                       {
                           Label: "Thumbnail Border Color",
                           Name: "$thumbnail-border",
                           Value: "#ddd",
                           Type: 1
                       },
                       {
                           Label: "Thumbnail Caption Padding",
                           Name: "$thumbnail-caption-padding",
                           Value: "9px",
                           Values: ["1px", "2px", "3px", "4px", "5px", "6px", "7px", "8px", "9px", "10px", "11px", "12px", "13px", "14px", "15px"],
                           Type: 2
                       }
               ]
           },
           {
               Id: 24,
               PanelStyle: "warning",
               Heading: "Well",
               Params: [
                       {
                           Label: "Well Background Color",
                           Name: "$well-bg",
                           Value: "#f5f5f5",
                           Type: 1
                       }
               ]
           },
            {
                Id: 25,
                PanelStyle: "primary",
                Heading: "Badge",
                Params: [
                        {
                            Label: "Badge Color",
                            Name: "$badge-color",
                            Value: "#fff",
                            Type: 1
                        },
                        {
                            Label: "Badge Link Hover Color",
                            Name: "$badge-link-hover-color",
                            Value: "#fff",
                            Type: 1
                        },
                        {
                            Label: "Badge Active Background",
                            Name: "$badge-active-bg",
                            Value: "#fff",
                            Type: 1
                        },
                        {
                            Label: "Badge Font Weight",
                            Name: "$badge-font-weight",
                            Value: "bold",
                            Values:['normal','100','200','300','400','500','600','700','800','900','bold'],
                            Type: 2
                        },
                        {
                            Label: "Badge Line Height",
                            Name: "$badge-line-height",
                            Value: "1",
                            Values: ['1', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8'],
                            Type: 2
                        },
                        {
                            Label: "Badge Border Radius",
                            Name: "$badge-border-radius",
                            Value: "9px",
                            Values: ["1px", "2px", "3px", "4px", "5px", "6px", "7px", "8px", "9px", "10px", "11px", "12px", "13px", "14px", "15px"],
                            Type: 2
                        }
                ]
            },
            {
                Id: 26,
                PanelStyle: "success",
                Heading: "Breadcrumb",
                Params: [
                        {
                            Label: "Breadcrumb Background",
                            Name: "$breadcrumb-bg",
                            Value: "#f5f5f5",
                            Type: 1
                        },
                        {
                            Label: "Breadcrumb Text Color",
                            Name: "$breadcrumb-color",
                            Value: "#ccc",
                            Type: 1
                        },
                        {
                            Label: "Breadcrumb Padding Vertical",
                            Name: "$breadcrumb-padding-vertical",
                            Value: "8px",
                            Values: ["4px", "5px", "6px", "7px", "8px", "9px", "10px", "11px", "12px", "13px", "14px", "15px"],
                            Type: 2
                        },
                        {
                            Label: "Breadcrumb Padding Horizontal",
                            Name: "$breadcrumb-padding-horizontal",
                            Value: "15px",
                            Values: ["8px", "9px", "10px", "11px", "12px", "13px", "14px", "15px","16px","17px","18px","19px","20px"],
                            Type: 2
                        }
                ]
            },
            {
                Id: 27,
                PanelStyle: "info",
                Heading: "Carousel",
                Params: [
                        {
                            Label: "Carousel Control Color",
                            Name: "$carousel-control-color",
                            Value: "#fff",
                            Type: 1
                        },
                        {
                            Label: "Carousel Control Width",
                            Name: "$carousel-control-width",
                            Value: "15%",
                            Type: 3
                        },
                        {
                            Label: "Carousel Control Opacity",
                            Name: "$carousel-control-opacity",
                            Value: ".5",
                            Values: ['.1', '.2', '.3', '.4', '.5', '.6', '.7', '.8', '.9', '1'],
                            Type: 2
                        },
                        {
                            Label: "Carousel Control Font Size",
                            Name: "$carousel-control-font-size",
                            Value: "20px",
                            Type: 3
                        },
                        {
                            Label: "Carousel Indicator Active Background",
                            Name: "$carousel-indicator-active-bg",
                            Value: "#fff",
                            Type: 1
                        },
                        {
                            Label: "Carousel Indicator Border Color",
                            Name: "$carousel-indicator-border-color",
                            Value: "#fff",
                            Type: 1
                        },
                        {
                            Label: "Carousel Caption Color",
                            Name: "$carousel-caption-color",
                            Value: "#fff",
                            Type: 1
                        }
                ]
            },
            {
                Id: 28,
                PanelStyle: "warning",
                Heading: "Close",
                Params: [
                        {
                            Label: "Close Font Weight",
                            Name: "$close-font-weight",
                            Value: "bold",
                            Values: ['100', '200', '300', '400', '500', '600', '700', '800', '900', 'bold'],
                            Type: 2
                        },
                        {
                            Label: "Close Color",
                            Name: "$close-color",
                            Value: "#000",
                            Type: 1
                        }
                ]
            },
            {
                Id: 29,
                PanelStyle: "danger",
                Heading: "Code",
                Params: [
                        {
                            Label: "Code Color",
                            Name: "$code-color",
                            Value: "#c7254e",
                            Type: 1
                        },
                        {
                            Label: "Code Background",
                            Name: "$code-bg",
                            Value: "#f9f2f4",
                            Type: 1
                        }
                ]
            },
            {
                Id: 30,
                PanelStyle: "primary",
                Heading: "Kbd",
                Params: [
                        {
                            Label: "Kbd Color",
                            Name: "$kbd-color",
                            Value: "#fff",
                            Type: 1
                        },
                        {
                            Label: "Kbd Background",
                            Name: "$kbd-bg",
                            Value: "#333",
                            Type: 1
                        }
                ]
            },
            {
                Id: 31,
                PanelStyle: "success",
                Heading: "Pre",
                Params: [
                        {
                            Label: "Pre Background",
                            Name: "$pre-bg",
                            Value: "#f5f5f5",
                            Type: 1
                        },
                        {
                            Label: "Pre Border Color",
                            Name: "$pre-border-color",
                            Value: "#ccc",
                            Type: 1
                        },
                        {
                            Label: "Pre Scrollable Max Height",
                            Name: "$pre-scrollable-max-height",
                            Value: "340px",
                            Type: 3
                        }
                ]
            },
            {
                Id: 32,
                PanelStyle: "info",
                Heading: "Component",
                Params: [
                        {
                            Label: "Component Active Color",
                            Name: "$component-active-color",
                            Value: "#fff",
                            Type: 1
                        },
                        {
                            Label: "Component Active Background",
                            Name: "$component-active-bg",
                            Value: "#428bca",
                            Type: 1
                        },
                        {
                            Label: "Component Offset Horizontal",
                            Name: "$component-offset-horizontal",
                            Value: "180px",
                            Type: 3
                        }
                ]
            }
    ];

    //make a copy of scss variables to reset on reset button click
    vm.resetValue = angular.copy(vm.scssVariables);

    //method to reset the changes done in variables in DOM
    vm.reset = function () {
        vm.scssVariables = angular.copy(vm.resetValue);
    };

    var mainVariable = '$bootstrap-sass-asset-helper: false !default;\r\n$gray-darker:            lighten($gray-base, 13.5%) !default; \r\n$gray-dark:              lighten($gray-base, 20%) !default; \r\n$gray:                   lighten($gray-base, 33.5%) !default;\r\n$gray-light:             lighten($gray-base, 46.7%) !default;\r\n$gray-lighter:           lighten($gray-base, 93.5%) !default;\r\n$font-family-sans-serif:  \"Helvetica Neue\", Helvetica, Arial, sans-serif !default;\r\n$font-family-serif:       Georgia, \"Times New Roman\", Times, serif !default;\r\n$font-family-monospace:   Menlo, Monaco, Consolas, \"Courier New\", monospace !default;\r\n$font-family-base:        $font-family-sans-serif !default;\r\n$font-size-large:         ceil(($font-size-base * 1.25)) !default;\r\n$font-size-small:         ceil(($font-size-base * 0.85)) !default;\r\n$font-size-h1:            floor(($font-size-base * 2.6)) !default;\r\n$font-size-h2:            floor(($font-size-base * 2.15)) !default;\r\n$font-size-h3:            ceil(($font-size-base * 1.7)) !default;\r\n$font-size-h4:            ceil(($font-size-base * 1.25)) !default;\r\n$font-size-h5:            $font-size-base !default;\r\n$font-size-h6:            ceil(($font-size-base * 0.85)) !default;\r\n$line-height-computed:    floor(($font-size-base * $line-height-base)) !default;\r\n$headings-font-family:    inherit !default;\r\n$headings-color:          inherit !default;\r\n$icon-font-path: if($bootstrap-sass-asset-helper, \"bootstrap\/\", \"..\/fonts\/bootstrap\/\") !default;\r\n$icon-font-name:          \"glyphicons-halflings-regular\" !default;\r\n$icon-font-svg-id:        \"glyphicons_halflingsregular\" !default;\r\n$padding-large-vertical:   ($padding-base-vertical + 4) !default;\r\n$padding-large-horizontal: ($padding-base-horizontal + 4) !default;\r\n$padding-small-vertical:   ($padding-base-vertical - 1) !default;\r\n$padding-small-horizontal: ($padding-base-horizontal -2) !default;\r\n$padding-xs-vertical:      ($padding-base-vertical - 4) !default;\r\n$padding-xs-horizontal:    ($padding-base-horizontal -7) !default;\r\n$line-height-large:         ($line-height-base - 1) !default;\r\n$line-height-small:         ($line-height-base + 1) !default;\r\n$table-bg-active:               $table-bg-hover !default;\r\n$btn-primary-bg:                 $brand-primary !default;\r\n$btn-primary-border:             darken($btn-primary-bg, 5%) !default;\r\n$btn-success-bg:                 $brand-success !default;\r\n$btn-success-border:             darken($btn-success-bg, 5%) !default;\r\n$btn-info-bg:                    $brand-info !default;\r\n$btn-info-border:                darken($btn-info-bg, 5%) !default;\r\n$btn-warning-bg:                 $brand-warning !default;\r\n$btn-warning-border:             darken($btn-warning-bg, 5%) !default;\r\n$btn-danger-bg:                  $brand-danger !default;\r\n$btn-danger-border:              darken($btn-danger-bg, 5%) !default;\r\n$btn-link-disabled-color:        $gray-light !default;\r\n$btn-border-radius-base:         $border-radius-base !default;\r\n$btn-border-radius-large:        $border-radius-large !default;\r\n$btn-border-radius-small:        $border-radius-small !default;\r\n$input-bg-disabled:              $gray-lighter !default;\r\n$input-color:                    $gray !default;\r\n$input-border-radius:            $border-radius-base !default;\r\n$input-border-radius-large:      $border-radius-large !default;\r\n$input-border-radius-small:      $border-radius-small !default;\r\n$input-height-base:              ($line-height-computed + ($padding-base-vertical * 2) + 2) !default;\r\n$input-height-large:             (ceil($font-size-large * $line-height-large) + ($padding-large-vertical * 2) + 2) !default;\r\n$input-height-small:             (floor($font-size-small * $line-height-small) + ($padding-small-vertical * 2) + 2) !default;\r\n$form-group-margin-bottom:       15px !default;\r\n$legend-color:                   $gray-dark !default;\r\n$input-group-addon-bg:           $gray-lighter !default;\r\n$input-group-addon-border-color: $input-border !default;    \r\n$cursor-disabled:                not-allowed !default;\r\n$dropdown-link-color:            $gray-dark !default;\r\n$dropdown-link-hover-color:      darken($gray-dark, 5%) !default;\r\n$dropdown-link-active-color:     $component-active-color !default;\r\n$dropdown-link-active-bg:        $component-active-bg !default;\r\n$dropdown-link-disabled-color:   $gray-light !default;\r\n$dropdown-header-color:          $gray-light !default;\r\n$zindex-navbar:            1000 !default;\r\n$zindex-dropdown:          1000 !default;\r\n$zindex-popover:           1060 !default;\r\n$zindex-tooltip:           1070 !default;\r\n$zindex-navbar-fixed:      1030 !default;\r\n$zindex-modal-background:  1040 !default;\r\n$zindex-modal:             1050 !default;\r\n$screen-xs-min:              $screen-xs !default;\r\n$screen-phone:               $screen-xs-min !default;\r\n$screen-sm-min:              $screen-sm !default;\r\n$screen-tablet:              $screen-sm-min !default;\r\n$screen-md-min:              $screen-md !default;\r\n$screen-desktop:             $screen-md-min !default;\r\n$screen-lg-min:              $screen-lg !default;\r\n$screen-lg-desktop:          $screen-lg-min !default;\r\n$screen-xs-max:              ($screen-sm-min - 1) !default;\r\n$screen-sm-max:              ($screen-md-min - 1) !default;\r\n$screen-md-max:              ($screen-lg-min - 1) !default;\r\n$grid-columns:              12 !default;\r\n$grid-gutter-width:         30px !default;\r\n$grid-float-breakpoint:     $screen-sm-min !default;\r\n$grid-float-breakpoint-max: ($grid-float-breakpoint - 1) !default;\r\n$container-tablet:             (720px + $grid-gutter-width) !default;\r\n$container-sm:                 $container-tablet !default;\r\n$container-desktop:            (940px + $grid-gutter-width) !default;\r\n$container-md:                 $container-desktop !default;\r\n$container-large-desktop:      (1140px + $grid-gutter-width) !default;\r\n$container-lg:                 $container-large-desktop !default;\r\n$navbar-margin-bottom:             $line-height-computed !default;\r\n$navbar-border-radius:             $border-radius-base !default;\r\n$navbar-padding-horizontal:        floor(($grid-gutter-width \/ 2)) !default;\r\n$navbar-padding-vertical:          (($navbar-height - $line-height-computed) \/ 2) !default;\r\n$navbar-collapse-max-height:       340px !default;\r\n$navbar-default-border:            darken($navbar-default-bg, 6.5%) !default;\r\n$navbar-default-link-hover-bg:             transparent !default;\r\n$navbar-default-link-active-bg:            darken($navbar-default-bg, 6.5%) !default;\r\n$navbar-default-link-disabled-bg:          transparent !default;\r\n$navbar-default-brand-color:               $navbar-default-link-color !default;\r\n$navbar-default-brand-hover-color:         darken($navbar-default-brand-color, 10%) !default;\r\n$navbar-default-brand-hover-bg:            transparent !default;\r\n$navbar-inverse-color:                      lighten($gray-light, 15%) !default;\r\n$navbar-inverse-border:                     darken($navbar-inverse-bg, 10%) !default;\r\n$navbar-inverse-link-color:                 lighten($gray-light, 15%) !default;\r\n$navbar-inverse-link-hover-bg:              transparent !default;\r\n$navbar-inverse-link-active-color:          $navbar-inverse-link-hover-color !default;\r\n$navbar-inverse-link-active-bg:             darken($navbar-inverse-bg, 10%) !default;\r\n$navbar-inverse-link-disabled-bg:           transparent !default;\r\n$navbar-inverse-brand-color:                $navbar-inverse-link-color !default;\r\n$navbar-inverse-brand-hover-bg:             transparent !default;\r\n$nav-link-padding:                          10px 15px !default;\r\n$nav-link-hover-bg:                         $gray-lighter !default;\r\n$nav-disabled-link-color:                   $gray-light !default;\r\n$nav-disabled-link-hover-color:             $gray-light !default;\r\n$nav-tabs-link-hover-border-color:          $gray-lighter !default;\r\n$nav-tabs-active-link-hover-bg:             $body-bg !default;\r\n$nav-tabs-active-link-hover-color:          $gray !default;\r\n$nav-tabs-justified-active-link-border-color:     $body-bg !default;\r\n$nav-pills-border-radius:                   $border-radius-base !default;\r\n$nav-pills-active-link-hover-bg:            $component-active-bg !default;\r\n$nav-pills-active-link-hover-color:         $component-active-color !default;\r\n$pagination-color:                     $link-color !default;\r\n\r\n$pagination-hover-color:               $link-hover-color !default;\r\n$pagination-hover-bg:                  $gray-lighter !default;\r\n\r\n\r\n\r\n$pagination-active-bg:                 $brand-primary !default;\r\n$pagination-active-border:             $brand-primary !default;\r\n\r\n$pagination-disabled-color:            $gray-light !default;\r\n\r\n\r\n$pager-bg:                             $pagination-bg !default;\r\n$pager-border:                         $pagination-border !default;\r\n\r\n\r\n$pager-hover-bg:                       $pagination-hover-bg !default;\r\n\r\n$pager-active-bg:                      $pagination-active-bg !default;\r\n$pager-active-color:                   $pagination-active-color !default;\r\n\r\n$pager-disabled-color:                 $pagination-disabled-color !default;\r\n\r\n$jumbotron-padding:              30px !default;\r\n$jumbotron-color:                inherit !default;\r\n$jumbotron-bg:                   $gray-lighter !default;\r\n$jumbotron-heading-color:        inherit !default;\r\n$jumbotron-font-size:            ceil(($font-size-base * 1.5)) !default;\r\n$jumbotron-heading-font-size:    ceil(($font-size-base * 4.5)) !default;\r\n$state-success-border:           darken(adjust-hue($state-success-bg, -10), 5%) !default;\r\n$state-info-border:              darken(adjust-hue($state-info-bg, -10), 7%) !default;\r\n$state-warning-border:           darken(adjust-hue($state-warning-bg, -10), 5%) !default;\r\n$state-danger-border:            darken(adjust-hue($state-danger-bg, -10), 5%) !default;\r\n$tooltip-arrow-color:         $tooltip-bg !default;\r\n$popover-title-bg:                    darken($popover-bg, 3%) !default;\r\n$popover-arrow-color:                 $popover-bg !default;\r\n$popover-arrow-outer-width:           ($popover-arrow-width + 1) !default;\r\n$popover-arrow-outer-color:           fade_in($popover-border-color, 0.05) !default;\r\n$popover-arrow-outer-fallback-color:  darken($popover-fallback-border-color, 20%) !default;\r\n$label-default-bg:            $gray-light !default;\r\n$label-primary-bg:            $brand-primary !default;\r\n$label-success-bg:            $brand-success !default;\r\n$label-info-bg:               $brand-info !default;\r\n$label-warning-bg:            $brand-warning !default;\r\n$label-danger-bg:             $brand-danger !default;\r\n$modal-title-line-height:     $line-height-base !default;\r\n$modal-footer-border-color:   $modal-header-border-color !default;\r\n$modal-lg:                    900px !default;\r\n$modal-md:                    600px !default;\r\n$modal-sm:                    300px !default;\r\n$alert-padding:               15px !default;\r\n$alert-border-radius:         $border-radius-base !default;\r\n$alert-link-font-weight:      bold !default;\r\n$alert-success-bg:            $state-success-bg !default;\r\n$alert-success-text:          $state-success-text !default;\r\n$alert-success-border:        $state-success-border !default;\r\n$alert-info-bg:               $state-info-bg !default;\r\n$alert-info-text:             $state-info-text !default;\r\n$alert-info-border:           $state-info-border !default;\r\n$alert-warning-bg:            $state-warning-bg !default;\r\n$alert-warning-text:          $state-warning-text !default;\r\n$alert-warning-border:        $state-warning-border !default;\r\n$alert-danger-bg:             $state-danger-bg !default;\r\n$alert-danger-text:           $state-danger-text !default;\r\n$alert-danger-border:         $state-danger-border !default;\r\n$progress-border-radius:      $border-radius-base !default;\r\n$progress-bar-bg:             $brand-primary !default;\r\n$progress-bar-success-bg:     $brand-success !default;\r\n$progress-bar-warning-bg:     $brand-warning !default;\r\n$progress-bar-danger-bg:      $brand-danger !default;\r\n$progress-bar-info-bg:        $brand-info !default;\r\n$list-group-border-radius:      $border-radius-base !default;\r\n$list-group-active-color:       $component-active-color !default;\r\n$list-group-active-bg:          $component-active-bg !default;\r\n$list-group-active-border:      $list-group-active-bg !default;\r\n$list-group-active-text-color:  lighten($list-group-active-bg, 40%) !default;\r\n$list-group-disabled-color:      $gray-light !default;\r\n$list-group-disabled-bg:         $gray-lighter !default;\r\n$list-group-disabled-text-color: $list-group-disabled-color !default;\r\n$list-group-link-hover-color:   $list-group-link-color !default;\r\n$panel-body-padding:          15px !default;\r\n$panel-heading-padding:       10px 15px !default;\r\n$panel-footer-padding:        $panel-heading-padding !default;\r\n$panel-border-radius:         $border-radius-base !default;\r\n$panel-default-text:          $gray-dark !default;\r\n$panel-primary-border:        $brand-primary !default;\r\n$panel-primary-heading-bg:    $brand-primary !default;\r\n$panel-success-text:          $state-success-text !default;\r\n$panel-success-border:        $state-success-border !default;\r\n$panel-success-heading-bg:    $state-success-bg !default;\r\n$panel-info-text:             $state-info-text !default;\r\n$panel-info-border:           $state-info-border !default;\r\n$panel-info-heading-bg:       $state-info-bg !default;\r\n$panel-warning-text:          $state-warning-text !default;\r\n$panel-warning-border:        $state-warning-border !default;\r\n$panel-warning-heading-bg:    $state-warning-bg !default;\r\n$panel-danger-text:           $state-danger-text !default;\r\n$panel-danger-border:         $state-danger-border !default;\r\n$panel-danger-heading-bg:     $state-danger-bg !default;\r\n$thumbnail-bg:                $body-bg !default;\r\n$thumbnail-border-radius:     $border-radius-base !default;\r\n$thumbnail-caption-color:     $text-color !default;\r\n$well-border:                 darken($well-bg, 7%) !default;\r\n$badge-bg:                    $gray-light !default;\r\n$badge-active-color:          $link-color !default;\r\n$breadcrumb-active-color:       $gray-light !default;\r\n$breadcrumb-separator:          \"\/\" !default;\r\n$carousel-text-shadow:                        0 1px 2px rgba(0,0,0,.6) !default;\r\n$close-text-shadow:           0 1px 0 #fff !default;\r\n$pre-color:                   $gray-dark !default;\r\n$text-muted:                  $gray-light !default;\r\n$abbr-border-color:           $gray-light !default;\r\n$headings-small-color:        $gray-light !default;\r\n$blockquote-small-color:      $gray-light !default;\r\n$blockquote-font-size:        ($font-size-base * 1.25) !default;\r\n$blockquote-border-color:     $gray-lighter !default;\r\n$page-header-border-color:    $gray-lighter !default;\r\n$dl-horizontal-offset:        $component-offset-horizontal !default;\r\n$dl-horizontal-breakpoint:    $grid-float-breakpoint !default;\r\n$hr-border:                   $gray-lighter !default;';

    //call this method when download css buton is clicked
    vm.buildCSS = function () {

        //start the loadr icon
        $('#Loader').addClass('loading-icon');

        //initialize Saas
        var sass = new Sass();
        var style = "";

        //build the variable.scss file
        for (var i = 0; i < vm.scssVariables.length; i++) {
            for (var j = 0; j < vm.scssVariables[i].Params.length; j++) {
                style += vm.scssVariables[i].Params[j].Name + ':' + vm.scssVariables[i].Params[j].Value + '! default; \n';
            }
        }
        style += mainVariable;
        scssJson.bootstrap[38].content = style;

        //write a SCSS File
        function writeScssFile(file, path) {
            for (var i = 0; i < file.length; i++) {
              //  if(file[i].fileName=='')
                sass.writeFile(path + file[i].fileName + '.scss', file[i].content, function () {
                    console.log('wrote>>');
                });
            }
        };

        //Write the Mixin Files
        writeScssFile(scssJson.mixins, scssJson.mixinsPath);

        //Write the Bootstrap Files
        writeScssFile(scssJson.bootstrap, scssJson.bootstrapPath);


        //write the main boostrap file
        sass.writeFile(scssJson.mainFile.fileName + '.scss', scssJson.mainFile.content, function () {
            console.log('main fileeeee');
        });

        //start compiling the SCSS Files
        sass.compileFile("_bootstrap.scss", function callback(content) {
            console.log(content);
            $('#Loader').removeClass('loading-icon');
            var encodedString = btoa(content.text);
            $("#download-trigger").attr({
                download: "bootstrap.css",
                href: "data:text/css;base64," + encodedString
            });
            //trigger a click
            document.getElementById('download-trigger').click();
        });
    };

    console.log('getting in to the app controller');

}]);
