/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 24 Dec 2015
    Description : Controller to handle main application
    
    Change Log
    s.no      date    author     description     
 ===========================================================*/

app.controller("appCtrl", ['$rootScope', '$scope', '$state', '$location', 'Flash','appSettings',
function ($rootScope, $scope, $state, $location, Flash,appSettings) {

    $rootScope.theme = appSettings.theme;
    $rootScope.layout = appSettings.layout;

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


    ];

    //make a copy of scss variables to reset on reset button click
    vm.resetValue = angular.copy(vm.scssVariables);

    //method to reset the changes done in variables in DOM
    vm.reset = function () {
        vm.scssVariables = angular.copy(vm.resetValue);
    };

    var mainVariable = '$bootstrap-sass-asset-helper: false !default;\r\n$gray-darker:            lighten($gray-base, 13.5%) !default; \r\n$gray-dark:              lighten($gray-base, 20%) !default; \r\n$gray:                   lighten($gray-base, 33.5%) !default;\r\n$gray-light:             lighten($gray-base, 46.7%) !default;\r\n$gray-lighter:           lighten($gray-base, 93.5%) !default;\r\n$font-family-sans-serif:  \"Helvetica Neue\", Helvetica, Arial, sans-serif !default;\r\n$font-family-serif:       Georgia, \"Times New Roman\", Times, serif !default;\r\n$font-family-monospace:   Menlo, Monaco, Consolas, \"Courier New\", monospace !default;\r\n$font-family-base:        $font-family-sans-serif !default;\r\n$font-size-large:         ceil(($font-size-base * 1.25)) !default;\r\n$font-size-small:         ceil(($font-size-base * 0.85)) !default;\r\n$font-size-h1:            floor(($font-size-base * 2.6)) !default;\r\n$font-size-h2:            floor(($font-size-base * 2.15)) !default;\r\n$font-size-h3:            ceil(($font-size-base * 1.7)) !default;\r\n$font-size-h4:            ceil(($font-size-base * 1.25)) !default;\r\n$font-size-h5:            $font-size-base !default;\r\n$font-size-h6:            ceil(($font-size-base * 0.85)) !default;\r\n$line-height-computed:    floor(($font-size-base * $line-height-base)) !default;\r\n$headings-font-family:    inherit !default;\r\n$headings-color:          inherit !default; \n $headings-color:          inherit !default;\r\n$icon-font-path: if($bootstrap-sass-asset-helper, \"bootstrap\/\", \"..\/fonts\/bootstrap\/\") !default;\r\n\r\n\r\n$icon-font-name:          \"glyphicons-halflings-regular\" !default;\r\n\r\n$icon-font-svg-id:        \"glyphicons_halflingsregular\" !default;\r\n\r\n\r\n$padding-base-vertical:     6px !default;\r\n$padding-base-horizontal:   12px !default;\r\n\r\n$padding-large-vertical:    10px !default;\r\n$padding-large-horizontal:  16px !default;\r\n\r\n$padding-small-vertical:    5px !default;\r\n$padding-small-horizontal:  10px !default;\r\n\r\n$padding-xs-vertical:       1px !default;\r\n$padding-xs-horizontal:     5px !default;\r\n\r\n$line-height-large:         1.3333333 !default;\r\n$line-height-small:         1.5 !default;\r\n\r\n$border-radius-base:        4px !default;\r\n$border-radius-large:       6px !default;\r\n$border-radius-small:       3px !default;\r\n\r\n$component-active-color:    #fff !default;\r\n\r\n$component-active-bg:       $brand-primary !default;\r\n\r\n\r\n$caret-width-base:          4px !default;\r\n\r\n$caret-width-large:         5px !default;\r\n\r\n\r\n\r\n$table-cell-padding:            8px !default;\r\n\r\n$table-condensed-cell-padding:  5px !default;\r\n\r\n$table-bg:                      transparent !default;\r\n$table-bg-accent:               #f9f9f9 !default;\r\n\r\n$table-bg-hover:                #f5f5f5 !default;\r\n$table-bg-active:               $table-bg-hover !default;\r\n\r\n\r\n$table-border-color:            #ddd !default;\r\n\r\n\r\n$btn-font-weight:                normal !default;\r\n\r\n$btn-default-color:              #333 !default;\r\n$btn-default-bg:                 #fff !default;\r\n$btn-default-border:             #ccc !default;\r\n\r\n$btn-primary-color:              #fff !default;\r\n$btn-primary-bg:                 $brand-primary !default;\r\n$btn-primary-border:             darken($btn-primary-bg, 5%) !default;\r\n\r\n$btn-success-color:              #fff !default;\r\n$btn-success-bg:                 $brand-success !default;\r\n$btn-success-border:             darken($btn-success-bg, 5%) !default;\r\n\r\n$btn-info-color:                 #fff !default;\r\n$btn-info-bg:                    $brand-info !default;\r\n$btn-info-border:                darken($btn-info-bg, 5%) !default;\r\n\r\n$btn-warning-color:              #fff !default;\r\n$btn-warning-bg:                 $brand-warning !default;\r\n$btn-warning-border:             darken($btn-warning-bg, 5%) !default;\r\n\r\n$btn-danger-color:               #fff !default;\r\n$btn-danger-bg:                  $brand-danger !default;\r\n$btn-danger-border:              darken($btn-danger-bg, 5%) !default;\r\n\r\n$btn-link-disabled-color:        $gray-light !default;\r\n\r\n$btn-border-radius-base:         $border-radius-base !default;\r\n$btn-border-radius-large:        $border-radius-large !default;\r\n$btn-border-radius-small:        $border-radius-small !default;\r\n\r\n\r\n\r\n\r\n$input-bg:                       #fff !default;\r\n\r\n$input-bg-disabled:              $gray-lighter !default;\r\n\r\n\r\n$input-color:                    $gray !default;\r\n\r\n$input-border:                   #ccc !default;\r\n\r\n\r\n$input-border-radius:            $border-radius-base !default;\r\n\r\n$input-border-radius-large:      $border-radius-large !default;\r\n\r\n$input-border-radius-small:      $border-radius-small !default;\r\n\r\n\r\n$input-border-focus:             #66afe9 !default;\r\n\r\n\r\n$input-color-placeholder:        #999 !default;\r\n\r\n\r\n$input-height-base:              ($line-height-computed + ($padding-base-vertical * 2) + 2) !default;\r\n\r\n$input-height-large:             (ceil($font-size-large * $line-height-large) + ($padding-large-vertical * 2) + 2) !default;\r\n\r\n$input-height-small:             (floor($font-size-small * $line-height-small) + ($padding-small-vertical * 2) + 2) !default;\r\n\r\n$form-group-margin-bottom:       15px !default;\r\n\r\n$legend-color:                   $gray-dark !default;\r\n$legend-border-color:            #e5e5e5 !default;\r\n\r\n$input-group-addon-bg:           $gray-lighter !default;\r\n\r\n$input-group-addon-border-color: $input-border !default;\r\n\r\n$cursor-disabled:                not-allowed !default;\r\n\r\n\r\n\r\n$dropdown-bg:                    #fff !default;\r\n\r\n$dropdown-border:                rgba(0,0,0,.15) !default;\r\n\r\n$dropdown-fallback-border:       #ccc !default;\r\n\r\n$dropdown-divider-bg:            #e5e5e5 !default;\r\n\r\n\r\n$dropdown-link-color:            $gray-dark !default;\r\n\r\n$dropdown-link-hover-color:      darken($gray-dark, 5%) !default;\r\n\r\n$dropdown-link-hover-bg:         #f5f5f5 !default;\r\n\r\n\r\n$dropdown-link-active-color:     $component-active-color !default;\r\n\r\n$dropdown-link-active-bg:        $component-active-bg !default;\r\n\r\n\r\n$dropdown-link-disabled-color:   $gray-light !default;\r\n\r\n$dropdown-header-color:          $gray-light !default;\r\n\r\n$dropdown-caret-color:           #000 !default;\r\n\r\n$zindex-navbar:            1000 !default;\r\n$zindex-dropdown:          1000 !default;\r\n$zindex-popover:           1060 !default;\r\n$zindex-tooltip:           1070 !default;\r\n$zindex-navbar-fixed:      1030 !default;\r\n$zindex-modal-background:  1040 !default;\r\n$zindex-modal:             1050 !default;\r\n\r\n\r\n\r\n$screen-xs:                  480px !default;\r\n\r\n$screen-xs-min:              $screen-xs !default;\r\n\r\n$screen-phone:               $screen-xs-min !default;\r\n\r\n\r\n\r\n$screen-sm:                  768px !default;\r\n$screen-sm-min:              $screen-sm !default;\r\n$screen-tablet:              $screen-sm-min !default;\r\n\r\n\r\n$screen-md:                  992px !default;\r\n$screen-md-min:              $screen-md !default;\r\n$screen-desktop:             $screen-md-min !default;\r\n\r\n$screen-lg:                  1200px !default;\r\n$screen-lg-min:              $screen-lg !default;\r\n\r\n$screen-lg-desktop:          $screen-lg-min !default;\r\n\r\n$screen-xs-max:              ($screen-sm-min - 1) !default;\r\n$screen-sm-max:              ($screen-md-min - 1) !default;\r\n$screen-md-max:              ($screen-lg-min - 1) !default;\r\n\r\n\r\n\r\n$grid-columns:              12 !default;\r\n\r\n$grid-gutter-width:         30px !default;\r\n\r\n\r\n$grid-float-breakpoint:     $screen-sm-min !default;\r\n\r\n$grid-float-breakpoint-max: ($grid-float-breakpoint - 1) !default;\r\n\r\n$container-tablet:             (720px + $grid-gutter-width) !default;\r\n\r\n\r\n$container-sm:                 $container-tablet !default;\r\n\r\n\r\n$container-desktop:            (940px + $grid-gutter-width) !default;\r\n\r\n$container-md:                 $container-desktop !default;\r\n\r\n\r\n$container-large-desktop:      (1140px + $grid-gutter-width) !default;\r\n\r\n$container-lg:                 $container-large-desktop !default;\r\n\r\n$navbar-height:                    50px !default;\r\n$navbar-margin-bottom:             $line-height-computed !default;\r\n$navbar-border-radius:             $border-radius-base !default;\r\n$navbar-padding-horizontal:        floor(($grid-gutter-width \/ 2)) !default;\r\n$navbar-padding-vertical:          (($navbar-height - $line-height-computed) \/ 2) !default;\r\n$navbar-collapse-max-height:       340px !default;\r\n\r\n$navbar-default-color:             #777 !default;\r\n$navbar-default-bg:                #f8f8f8 !default;\r\n$navbar-default-border:            darken($navbar-default-bg, 6.5%) !default;\r\n\r\n$navbar-default-link-color:                #777 !default;\r\n$navbar-default-link-hover-color:          #333 !default;\r\n$navbar-default-link-hover-bg:             transparent !default;\r\n$navbar-default-link-active-color:         #555 !default;\r\n$navbar-default-link-active-bg:            darken($navbar-default-bg, 6.5%) !default;\r\n$navbar-default-link-disabled-color:       #ccc !default;\r\n$navbar-default-link-disabled-bg:          transparent !default;\r\n\r\n$navbar-default-brand-color:               $navbar-default-link-color !default;\r\n$navbar-default-brand-hover-color:         darken($navbar-default-brand-color, 10%) !default;\r\n$navbar-default-brand-hover-bg:            transparent !default;\r\n\r\n$navbar-default-toggle-hover-bg:           #ddd !default;\r\n$navbar-default-toggle-icon-bar-bg:        #888 !default;\r\n$navbar-default-toggle-border-color:       #ddd !default;\r\n\r\n$navbar-inverse-color:                      lighten($gray-light, 15%) !default;\r\n$navbar-inverse-bg:                         #222 !default;\r\n$navbar-inverse-border:                     darken($navbar-inverse-bg, 10%) !default;\r\n\r\n$navbar-inverse-link-color:                 lighten($gray-light, 15%) !default;\r\n$navbar-inverse-link-hover-color:           #fff !default;\r\n$navbar-inverse-link-hover-bg:              transparent !default;\r\n$navbar-inverse-link-active-color:          $navbar-inverse-link-hover-color !default;\r\n$navbar-inverse-link-active-bg:             darken($navbar-inverse-bg, 10%) !default;\r\n$navbar-inverse-link-disabled-color:        #444 !default;\r\n$navbar-inverse-link-disabled-bg:           transparent !default;\r\n\r\n$navbar-inverse-brand-color:                $navbar-inverse-link-color !default;\r\n$navbar-inverse-brand-hover-color:          #fff !default;\r\n$navbar-inverse-brand-hover-bg:             transparent !default;\r\n\r\n$navbar-inverse-toggle-hover-bg:            #333 !default;\r\n$navbar-inverse-toggle-icon-bar-bg:         #fff !default;\r\n$navbar-inverse-toggle-border-color:        #333 !default;\r\n\r\n$nav-link-padding:                          10px 15px !default;\r\n$nav-link-hover-bg:                         $gray-lighter !default;\r\n\r\n$nav-disabled-link-color:                   $gray-light !default;\r\n$nav-disabled-link-hover-color:             $gray-light !default;\r\n\r\n$nav-tabs-border-color:                     #ddd !default;\r\n\r\n$nav-tabs-link-hover-border-color:          $gray-lighter !default;\r\n\r\n$nav-tabs-active-link-hover-bg:             $body-bg !default;\r\n$nav-tabs-active-link-hover-color:          $gray !default;\r\n$nav-tabs-active-link-hover-border-color:   #ddd !default;\r\n\r\n$nav-tabs-justified-link-border-color:            #ddd !default;\r\n$nav-tabs-justified-active-link-border-color:     $body-bg !default;\r\n\r\n$nav-pills-border-radius:                   $border-radius-base !default;\r\n$nav-pills-active-link-hover-bg:            $component-active-bg !default;\r\n$nav-pills-active-link-hover-color:         $component-active-color !default;\r\n\r\n$pagination-color:                     $link-color !default;\r\n$pagination-bg:                        #fff !default;\r\n$pagination-border:                    #ddd !default;\r\n\r\n$pagination-hover-color:               $link-hover-color !default;\r\n$pagination-hover-bg:                  $gray-lighter !default;\r\n$pagination-hover-border:              #ddd !default;\r\n\r\n$pagination-active-color:              #fff !default;\r\n$pagination-active-bg:                 $brand-primary !default;\r\n$pagination-active-border:             $brand-primary !default;\r\n\r\n$pagination-disabled-color:            $gray-light !default;\r\n$pagination-disabled-bg:               #fff !default;\r\n$pagination-disabled-border:           #ddd !default;\r\n\r\n$pager-bg:                             $pagination-bg !default;\r\n$pager-border:                         $pagination-border !default;\r\n$pager-border-radius:                  15px !default;\r\n\r\n$pager-hover-bg:                       $pagination-hover-bg !default;\r\n\r\n$pager-active-bg:                      $pagination-active-bg !default;\r\n$pager-active-color:                   $pagination-active-color !default;\r\n\r\n$pager-disabled-color:                 $pagination-disabled-color !default;\r\n\r\n$jumbotron-padding:              30px !default;\r\n$jumbotron-color:                inherit !default;\r\n$jumbotron-bg:                   $gray-lighter !default;\r\n$jumbotron-heading-color:        inherit !default;\r\n$jumbotron-font-size:            ceil(($font-size-base * 1.5)) !default;\r\n$jumbotron-heading-font-size:    ceil(($font-size-base * 4.5)) !default;\r\n\r\n$state-success-text:             #3c763d !default;\r\n$state-success-bg:               #dff0d8 !default;\r\n$state-success-border:           darken(adjust-hue($state-success-bg, -10), 5%) !default;\r\n\r\n$state-info-text:                #31708f !default;\r\n$state-info-bg:                  #d9edf7 !default;\r\n$state-info-border:              darken(adjust-hue($state-info-bg, -10), 7%) !default;\r\n\r\n$state-warning-text:             #8a6d3b !default;\r\n$state-warning-bg:               #fcf8e3 !default;\r\n$state-warning-border:           darken(adjust-hue($state-warning-bg, -10), 5%) !default;\r\n\r\n$state-danger-text:              #a94442 !default;\r\n$state-danger-bg:                #f2dede !default;\r\n$state-danger-border:            darken(adjust-hue($state-danger-bg, -10), 5%) !default;\r\n\r\n$tooltip-max-width:           200px !default;\r\n$tooltip-color:               #fff !default;\r\n$tooltip-bg:                  #000 !default;\r\n$tooltip-opacity:             .9 !default;\r\n\r\n$tooltip-arrow-width:         5px !default;\r\n$tooltip-arrow-color:         $tooltip-bg !default;\r\n\r\n$popover-bg:                          #fff !default;\r\n$popover-max-width:                   276px !default;\r\n\r\n$popover-border-color:                rgba(0,0,0,.2) !default;\r\n\r\n$popover-fallback-border-color:       #ccc !default;\r\n\r\n$popover-title-bg:                    darken($popover-bg, 3%) !default;\r\n\r\n\r\n$popover-arrow-width:                 10px !default;\r\n\r\n$popover-arrow-color:                 $popover-bg !default;\r\n\r\n\r\n$popover-arrow-outer-width:           ($popover-arrow-width + 1) !default;\r\n\r\n$popover-arrow-outer-color:           fade_in($popover-border-color, 0.05) !default;\r\n\r\n$popover-arrow-outer-fallback-color:  darken($popover-fallback-border-color, 20%) !default;\r\n\r\n$label-default-bg:            $gray-light !default;\r\n\r\n$label-primary-bg:            $brand-primary !default;\r\n\r\n$label-success-bg:            $brand-success !default;\r\n\r\n$label-info-bg:               $brand-info !default;\r\n\r\n$label-warning-bg:            $brand-warning !default;\r\n\r\n$label-danger-bg:             $brand-danger !default;\r\n\r\n$label-color:                 #fff !default;\r\n\r\n$label-link-hover-color:      #fff !default;\r\n\r\n\r\n$modal-inner-padding:         15px !default;\r\n\r\n\r\n$modal-title-padding:         15px !default;\r\n\r\n$modal-title-line-height:     $line-height-base !default;\r\n\r\n\r\n$modal-content-bg:                             #fff !default;\r\n\r\n$modal-content-border-color:                   rgba(0,0,0,.2) !default;\r\n\r\n$modal-content-fallback-border-color:          #999 !default;\r\n\r\n\r\n$modal-backdrop-bg:           #000 !default;\r\n\r\n$modal-backdrop-opacity:      .5 !default;\r\n\r\n$modal-header-border-color:   #e5e5e5 !default;\r\n\r\n$modal-footer-border-color:   $modal-header-border-color !default;\r\n\r\n$modal-lg:                    900px !default;\r\n$modal-md:                    600px !default;\r\n$modal-sm:                    300px !default;\r\n\r\n$alert-padding:               15px !default;\r\n$alert-border-radius:         $border-radius-base !default;\r\n$alert-link-font-weight:      bold !default;\r\n\r\n$alert-success-bg:            $state-success-bg !default;\r\n$alert-success-text:          $state-success-text !default;\r\n$alert-success-border:        $state-success-border !default;\r\n\r\n$alert-info-bg:               $state-info-bg !default;\r\n$alert-info-text:             $state-info-text !default;\r\n$alert-info-border:           $state-info-border !default;\r\n\r\n$alert-warning-bg:            $state-warning-bg !default;\r\n$alert-warning-text:          $state-warning-text !default;\r\n$alert-warning-border:        $state-warning-border !default;\r\n\r\n$alert-danger-bg:             $state-danger-bg !default;\r\n$alert-danger-text:           $state-danger-text !default;\r\n$alert-danger-border:         $state-danger-border !default;\r\n\r\n\r\n$progress-bg:                 #f5f5f5 !default;\r\n\r\n$progress-bar-color:          #fff !default;\r\n\r\n$progress-border-radius:      $border-radius-base !default;\r\n\r\n\r\n$progress-bar-bg:             $brand-primary !default;\r\n\r\n$progress-bar-success-bg:     $brand-success !default;\r\n\r\n$progress-bar-warning-bg:     $brand-warning !default;\r\n\r\n$progress-bar-danger-bg:      $brand-danger !default;\r\n\r\n$progress-bar-info-bg:        $brand-info !default;\r\n\r\n\r\n$list-group-bg:                 #fff !default;\r\n\r\n$list-group-border:             #ddd !default;\r\n\r\n$list-group-border-radius:      $border-radius-base !default;\r\n\r\n\r\n$list-group-hover-bg:           #f5f5f5 !default;\r\n\r\n$list-group-active-color:       $component-active-color !default;\r\n\r\n$list-group-active-bg:          $component-active-bg !default;\r\n\r\n$list-group-active-border:      $list-group-active-bg !default;\r\n\r\n$list-group-active-text-color:  lighten($list-group-active-bg, 40%) !default;\r\n\r\n\r\n$list-group-disabled-color:      $gray-light !default;\r\n\r\n$list-group-disabled-bg:         $gray-lighter !default;\r\n\r\n$list-group-disabled-text-color: $list-group-disabled-color !default;\r\n\r\n$list-group-link-color:         #555 !default;\r\n$list-group-link-hover-color:   $list-group-link-color !default;\r\n$list-group-link-heading-color: #333 !default;\r\n\r\n$panel-bg:                    #fff !default;\r\n$panel-body-padding:          15px !default;\r\n$panel-heading-padding:       10px 15px !default;\r\n$panel-footer-padding:        $panel-heading-padding !default;\r\n$panel-border-radius:         $border-radius-base !default;\r\n\r\n$panel-inner-border:          #ddd !default;\r\n$panel-footer-bg:             #f5f5f5 !default;\r\n\r\n$panel-default-text:          $gray-dark !default;\r\n$panel-default-border:        #ddd !default;\r\n$panel-default-heading-bg:    #f5f5f5 !default;\r\n\r\n$panel-primary-text:          #fff !default;\r\n$panel-primary-border:        $brand-primary !default;\r\n$panel-primary-heading-bg:    $brand-primary !default;\r\n\r\n$panel-success-text:          $state-success-text !default;\r\n$panel-success-border:        $state-success-border !default;\r\n$panel-success-heading-bg:    $state-success-bg !default;\r\n\r\n$panel-info-text:             $state-info-text !default;\r\n$panel-info-border:           $state-info-border !default;\r\n$panel-info-heading-bg:       $state-info-bg !default;\r\n\r\n$panel-warning-text:          $state-warning-text !default;\r\n$panel-warning-border:        $state-warning-border !default;\r\n$panel-warning-heading-bg:    $state-warning-bg !default;\r\n\r\n$panel-danger-text:           $state-danger-text !default;\r\n$panel-danger-border:         $state-danger-border !default;\r\n$panel-danger-heading-bg:     $state-danger-bg !default;\r\n\r\n$thumbnail-padding:           4px !default;\r\n\r\n$thumbnail-bg:                $body-bg !default;\r\n\r\n$thumbnail-border:            #ddd !default;\r\n\r\n$thumbnail-border-radius:     $border-radius-base !default;\r\n\r\n$thumbnail-caption-color:     $text-color !default;\r\n\r\n$thumbnail-caption-padding:   9px !default;\r\n\r\n\r\n$well-bg:                     #f5f5f5 !default;\r\n$well-border:                 darken($well-bg, 7%) !default;\r\n\r\n\r\n$badge-color:                 #fff !default;\r\n\r\n$badge-link-hover-color:      #fff !default;\r\n$badge-bg:                    $gray-light !default;\r\n\r\n$badge-active-color:          $link-color !default;\r\n\r\n$badge-active-bg:             #fff !default;\r\n\r\n$badge-font-weight:           bold !default;\r\n$badge-line-height:           1 !default;\r\n$badge-border-radius:         10px !default;\r\n\r\n$breadcrumb-padding-vertical:   8px !default;\r\n$breadcrumb-padding-horizontal: 15px !default;\r\n\r\n$breadcrumb-bg:                 #f5f5f5 !default;\r\n\r\n$breadcrumb-color:              #ccc !default;\r\n\r\n$breadcrumb-active-color:       $gray-light !default;\r\n\r\n$breadcrumb-separator:          \"\/\" !default;\r\n\r\n$carousel-text-shadow:                        0 1px 2px rgba(0,0,0,.6) !default;\r\n\r\n$carousel-control-color:                      #fff !default;\r\n$carousel-control-width:                      15% !default;\r\n$carousel-control-opacity:                    .5 !default;\r\n$carousel-control-font-size:                  20px !default;\r\n\r\n$carousel-indicator-active-bg:                #fff !default;\r\n$carousel-indicator-border-color:             #fff !default;\r\n\r\n$carousel-caption-color:                      #fff !default;\r\n\r\n$close-font-weight:           bold !default;\r\n$close-color:                 #000 !default;\r\n$close-text-shadow:           0 1px 0 #fff !default;\r\n\r\n$code-color:                  #c7254e !default;\r\n$code-bg:                     #f9f2f4 !default;\r\n\r\n$kbd-color:                   #fff !default;\r\n$kbd-bg:                      #333 !default;\r\n\r\n$pre-bg:                      #f5f5f5 !default;\r\n$pre-color:                   $gray-dark !default;\r\n$pre-border-color:            #ccc !default;\r\n$pre-scrollable-max-height:   340px !default;\r\n\r\n$component-offset-horizontal: 180px !default;\r\n\r\n$text-muted:                  $gray-light !default;\r\n\r\n$abbr-border-color:           $gray-light !default;\r\n\r\n$headings-small-color:        $gray-light !default;\r\n\r\n$blockquote-small-color:      $gray-light !default;\r\n\r\n$blockquote-font-size:        ($font-size-base * 1.25) !default;\r\n\r\n$blockquote-border-color:     $gray-lighter !default;\r\n\r\n$page-header-border-color:    $gray-lighter !default;\r\n\r\n$dl-horizontal-offset:        $component-offset-horizontal !default;\r\n\r\n$dl-horizontal-breakpoint:    $grid-float-breakpoint !default;\r\n\r\n$hr-border:                   $gray-lighter !default;'

    //call this method when download css buton is clicked
    vm.buildCSS = function () {
        Flash.create('custom', 'Give me 5 seconds, Am Building the Theme for You', 'large-text');
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
            //console.log(content);
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
