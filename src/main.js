import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {ComputedObservationAdapter, ObjectObservationAdapter} from 'aurelia-framework';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.debug);

export function configure(aurelia) {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator()

  aurelia.container.registerSingleton(ObjectObservationAdapter, ComputedObservationAdapter);

  aurelia.start().then(a => a.setRoot('app', document.body));
}
