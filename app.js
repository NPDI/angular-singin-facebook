var App = angular.module('AppDemo', ['ngRoute','socialLogin']);
App.config(function(socialProvider){
    socialProvider.setFbKey({appId: "1824623677799058", apiVersion: "v2.11"});
});
