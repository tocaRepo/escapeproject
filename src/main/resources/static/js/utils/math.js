
function GetSign(value){
    return value > 0 ? '+' : '';
  }
  // calculate average for subarray
  function avg(array, qualifier) {
  
    var sum = 0, count = 0, val;
    for (var i in array) {
      val = array[i];
      if (!qualifier || qualifier(val)) {
        sum += val;
        count++;
      }
    }
  
    return sum / count;
  };
  /**
    * returns an array with moving average of the input array
    * @param array - the input array
    * @param count - the number of elements to include in the moving average calculation
    * @param qualifier - an optional function that will be called on each 
    *  value to determine whether it should be used
    */
  function movingAvg(array, count, qualifier) {
  
  
  
    var result = [], val;
  
    // pad beginning of result with null values
    for (var i = 0; i < count - 1; i++)
      result.push(null);
  
    // calculate average for each subarray and add to result
    for (var i = 0, len = array.length - count; i <= len; i++) {
  
      val = avg(array.slice(i, i + count), qualifier);
      if (isNaN(val))
        result.push(null);
      else
        result.push(val);
    }
  
    return result;
  }
  
  
  
  function calculateAverageEsncBurned(arrayData) {
    var sum = 0;
    var count = 0;
    for (var item of arrayData) {
      if (count != arrayData.length - 1) {
        sum += Number(item.metric.esnc_burned_24hrs);
        count++;
      }
    }
    var average = Math.floor(sum / arrayData.length - 1);
    return average
  }
  
  function calculateAverageEssenceSupplyDifference(arrayData) {
    var sum = 0;
  
    for (let i = 1; i < arrayData.length; i++) {
      var supply = arrayData[i].metric.esnc_sum - arrayData[i - 1].metric.esnc_sum;
      sum += Number(supply);
    }
    var average = Math.floor(sum / arrayData.length);
    return average
  }
  function calculateAverageTilesPurchasedDifference(arrayData) {
    var sum = 0;
  
    for (let i = 1; i < arrayData.length; i++) {
      var supply = arrayData[i].metric.tiles_purchased - arrayData[i - 1].metric.tiles_purchased;
      sum += Number(supply);
    }
    var average = Math.floor(sum / arrayData.length);
    return average
  }
  
  function calculateAverageBidRejectedDifference(arrayData) {
    var sum = 0;
  
    for (let i = 1; i < arrayData.length; i++) {
      var supply = arrayData[i].metric.bids_rejected - arrayData[i - 1].metric.bids_rejected;
      sum += Number(supply);
    }
    var average = Math.floor(sum / arrayData.length);
    return average
  }
  
  function calculateAverageTotalBidsMadeDifference(arrayData) {
    var sum = 0;
  
    for (let i = 1; i < arrayData.length; i++) {
      var supply = arrayData[i].metric.bids_made - arrayData[i - 1].metric.bids_made;
      sum += Number(supply);
    }
    var average = Math.floor(sum / arrayData.length);
    return average
  }
  
  
  function GetSupplyChangeDaily(arrayData) {
    var supplychangedaily = [];
    for (let i = 1; i < arrayData.length; i++) {
      var supply = arrayData[i] - arrayData[i - 1];
      supplychangedaily.push(Number(supply));
    }
    return supplychangedaily;
  
  }
  