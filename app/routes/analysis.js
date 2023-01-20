import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class AnalysisRoute extends Route {
  dummyArray = [
    {
      first: 1,
      second: 'Apple',
    },
    {
      first: 2,
      second: 'Grape',
    },
    {
      first: 3,
      second: 'Mango',
    },
  ];

  model() {
    // alert("Hi I'm from analysis route model")
    return this.dummyArray;
  }
}
