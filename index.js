class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length 
  }

  add(item) {
  this.items.push(item);
  this.items.sort(function(a, b){
  return a-b;
})
return this.length++;
  }

  get(pos) {
      if (this.items[pos] === undefined) {
        throw new Error('OutOfBounds');
      }
      return this.items[pos];
  }
    
  
  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      // console.log(this)
      let sortedList = this.items.sort(function (a, b){
        return b - a ;
      })
      return sortedList[0]
    // } 
  }
}


  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let sortedList = this.items.sort(function (a, b){
        return a - b ;
      })
      return sortedList[0]
    
  }
  }

  sum() {
    if (this.length === 0) { 
    return 0;
    }
    let sumArr = this.items.reduce(function(total, num){
        return total + num
      })
      return sumArr;
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    let sumArr = this.items.reduce(function(total, num){
      return total + num
    })
  return sumArr / this.length;
}
}


module.exports = SortedList;
