require.config({
    baseUrl: "../js",
    urlArgs: "cb=" + Math.random(),
 
    paths: {
        // Libraries.
        jquery: "lib/jquery",
        underscore: "lib/lodash",
        backbone: "lib/backbone",
        marionette: "lib/backbone.marionette",
        // Marionette's extra dependencies
        "backbone.babysitter": "lib/backbone.babysitter",
        "backbone.eventbinder": "lib/backbone.eventbinder",
        "backbone.wreqr": "lib/backbone.wreqr",
        // RequireJS Plugins
        tpl: "lib/require.tpl",
        // jQuery Plugins
        bootstrap: "lib/bootstrap",
 
        // Jasmine Testing: Folder Aliases
        spec: "../test/spec",
        helpers: "../test/helpers"
    },
 
    shim: {
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
 
        "bootstrap": ["jquery"]
    }
});
 
require([], function(){
    var jasmineEnv = jasmine.getEnv();
    var htmlReporter = new jasmine.HtmlReporter();
 
    jasmineEnv.addReporter(htmlReporter);
 
    // Add links to the spec files here
    var specs = [];
    specs.push("spec/example_spec");
 
    // Execute specs
    require(specs, function(){
        jasmineEnv.execute();
    });
});