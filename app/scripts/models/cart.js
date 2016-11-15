import Backbone from 'backbone';
import _ from 'underscore';

export default Backbone.Model.extend({
  defaults: {
  items: [],
  total: 0
},
  addItem(item){
    let newItems = this.get('items').concat(item);
    this.set({'items': newItems, 'total':this.getTotal(newItems)});

  },
  removeItem(index){
    let newItems = _.without(this.get('items'), index);
    this.set({'items': newItems, 'total':this.getTotal(newItems)});
  },
  getTotal(newItems){
    let totalsArr = _.pluck(newItems, 'price');
    let total = totalsArr.reduce(function(a, b){
      return a+b;
    }, 0);
    return total;
  }
});
