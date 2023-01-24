import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class AnalysisRoute extends Route {
  @service store;

  model() {
    let fruit = this.store.findAll('fruit');
    return fruit;
  }
}
