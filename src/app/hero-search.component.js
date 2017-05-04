"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var hero_search_service_1 = require("./hero-search.service");
var rxjs_1 = require('rxjs');
require('rxjs/add/observable/of');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
var HeroSearchComponent = (function () {
    function HeroSearchComponent(heroSearchService, router) {
        this.heroSearchService = heroSearchService;
        this.router = router;
        this.searchTerms = new rxjs_1.Subject();
    }
    HeroSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this.heroSearchService.search(term) : rxjs_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return rxjs_1.Observable.of([]);
        });
    };
    HeroSearchComponent.prototype.gotoDetail = function (hero) {
        console.log('gotoDetail');
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    HeroSearchComponent = __decorate([
        core_1.Component({
            selector: 'hero-search',
            templateUrl: './hero-search.component.html',
            styleUrls: ['./hero-search.component.css'],
            providers: [hero_search_service_1.HeroSearchService]
        })
    ], HeroSearchComponent);
    return HeroSearchComponent;
}());
exports.HeroSearchComponent = HeroSearchComponent;
//# sourceMappingURL=hero-search.component.js.map