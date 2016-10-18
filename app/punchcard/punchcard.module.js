"use strict";

var angular = require("angular");

global.Highcharts = require("highcharts");
require("highcharts-more")(Highcharts);
require("highcharts-ng");

require("../commit-list/commit-list.module");


angular.module("gstats.punchcard", ["highcharts-ng", "gstats.commit-list"])
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'punchcard',
            url: '/punchcard',
            component: "punchcard"
        });
    });


require("./punchcard.service");
require("./punchcard.controller");
require("./punchcard.component");