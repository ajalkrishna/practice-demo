import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AnalysisController extends Controller {
  tableheading = 'Fruit Table';
  @tracked fruitName;
  @tracked price;
  @tracked quantity;

  @tracked fruitData = [
    {
      name: 'Mango',
      qty: 100,
      price: 10,
    },
    {
      name: 'Orange',
      qty: 300,
      price: 20,
    },
    {
      name: 'Grapes',
      qty: 500,
      price: 30,
    },
  ];

  @action
  showMyName(fruitName) {
    alert(fruitName);
  }

  @action
  submitEntry(e){
    e.preventDefault();
    console.log(this.fruitData);
    let fruitObj = {
      name:this.fruitName,
      qty:Number(this.quantity),
      price:Number(this.price)
    }
    let newArray = this.fruitData;
    newArray.push(fruitObj);
    this.fruitData=newArray;
    
  }

}
