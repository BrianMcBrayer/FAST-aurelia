import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'FAST-Aurelia';
      config.map([
        { route: ['', 'home'], moduleId: 'home', nav: true, title: 'Home'},
        { route: ['multibind'], moduleId: 'multibind', nav: true, title: 'Multibind'},
        { route: ['multibind/multibind100'], moduleId: 'multibind100', nav: true, title: 'Multibind100'},
        { route: ['multibind/multibind500'], moduleId: 'multibind500', nav: true, title: 'Multibind500'},
        { route: ['multibind/multibind1000'], moduleId: 'multibind1000', nav: true, title: 'Multibind1000'},
        { route: ['multibind/multibind5000'], moduleId: 'multibind5000', nav: true, title: 'Multibind5000'},
        { route: ['multibind/multibind10000'], moduleId: 'multibind10000', nav: true, title: 'Multibind10000'},
      ]);
    });
  }
}
