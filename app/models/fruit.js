import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class FruitModel extends Model {
  @attr name;
  @attr quantity;
  @attr price;
  // @attr color;
}
