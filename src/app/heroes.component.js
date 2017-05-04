"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.gotoDetails = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype.deleteHero = function (hero) {
        var _this = this;
        this.heroService
            .deleteHero(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
        });
        if (this.selectedHero === hero) {
            this.selectedHero = null;
        }
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            templateUrl: './heroes.component.html',
            styleUrls: ['./app.component.css']
        })
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map