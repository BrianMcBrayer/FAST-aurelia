System.register(["aurelia-router"], function (_export) {
  var Router, _createClass, _classCallCheck, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "FAST-Aurelia";
            config.map([{ route: ["", "home"], moduleId: "home", nav: true, title: "Home" }, { route: ["multibind"], moduleId: "multibind", nav: true, title: "Multibind" }, { route: ["multibind/multibind100"], moduleId: "multibind100", nav: true, title: "Multibind100" }, { route: ["multibind/multibind500"], moduleId: "multibind500", nav: true, title: "Multibind500" }, { route: ["multibind/multibind1000"], moduleId: "multibind1000", nav: true, title: "Multibind1000" }, { route: ["multibind/multibind5000"], moduleId: "multibind5000", nav: true, title: "Multibind5000" }, { route: ["multibind/multibind10000"], moduleId: "multibind10000", nav: true, title: "Multibind10000" }]);
          });
        }

        _createClass(App, null, {
          inject: {
            value: function inject() {
              return [Router];
            }
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxpQ0FFRCxHQUFHOzs7O0FBRlIsWUFBTSxrQkFBTixNQUFNOzs7Ozs7Ozs7QUFFRCxTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLE1BQU0sRUFBRTtnQ0FGVCxHQUFHOztBQUdaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztBQUM5QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLEVBQ2xFLEVBQUUsS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUMsRUFDN0UsRUFBRSxLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFDLEVBQ2hHLEVBQUUsS0FBSyxFQUFFLENBQUMsd0JBQXdCLENBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBQyxFQUNoRyxFQUFFLEtBQUssRUFBRSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUMsRUFDbkcsRUFBRSxLQUFLLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFDLEVBQ25HLEVBQUUsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUMsQ0FDdkcsQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDO1NBQ0o7O3FCQWhCVSxHQUFHO0FBQ1AsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEekIsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==