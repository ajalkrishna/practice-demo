import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class AnalysisController extends Controller {
  @service store;

  tableheading = 'Fruit Table';
  @tracked fruitName;
  @tracked price;
  @tracked quantity;
  @tracked yetToEdit;

  @action
  showMyName(fruitName) {
    alert(fruitName);
  }

  @action
  async submitEntry(e) {
    e.preventDefault();
    console.log(this.fruitData);
    let fruitObj = {
      name: this.fruitName,
      quantity: Number(this.quantity),
      price: Number(this.price),
    };
    let fruit = await this.store.createRecord('fruit',fruitObj);
    fruit.save();
  }

  @action editFruit(fruit){
    this.yetToEdit = fruit;
    this.fruitName=fruit.name;
    this.price=fruit.price;
    this.quantity=fruit.quantity;
  }
  @action deleteFruit(id){
    let fruit = this.store.peekRecord('fruit',id);
    fruit.deleteRecord();
    fruit.save();

  }

   @action async modifyData(){
    let fruit = await this.store.findRecord('fruit',this.yetToEdit.id);
    fruit.name=this.fruitName;
    fruit.quantity=Number(this.quantity);
    fruit.price=Number(this.price);
    fruit.save();    
  }
}
