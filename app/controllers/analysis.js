import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AnalysisController extends Controller {
  tableheading = 'Dummy Table';
  @action
  showMyName(fruitName) {
    alert(fruitName);
  }
}
