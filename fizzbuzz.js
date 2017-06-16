function getResultArray(number) { 
    let result =[];
    for(var i=1; i<=number; i++) {
    result.push(i);
  }
  return result;
};

function getFizzBuzz(result) {
  for (var j=0; j<result.length; j++) {
    if(result[j] % 15 === 0) {
     result[j] = 'fizzbuzz';
   } if (result[j] % 5 === 0) {
     result[j] = 'buzz';
   } if (result[j] % 3 === 0) {
     result[j] = 'fizz';
   }
  }
  return result;
}

function renderFizzBuzz(array) {
  var result = '';
  var template; 
  
  for (var x=0; x<array.length; x++) {
    var uniqueClass = '';
    if (array[x] === 'fizzbuzz') {
      uniqueClass = 'fizzbuzz';
    }
    if (array[x] === 'buzz') {
      uniqueClass = 'buzz';
    }
    if (array[x] === 'fizz') {
      uniqueClass = 'fizz';
    }
    template = (
      `<div class="fizz-buzz-item ${uniqueClass}">
        <span>${array[x]}</span>
      </div>`
    );
    result += template;
  }
  $('.js-results').append(result);
}



$('input[type=submit]').click(function (event) {
  let number = $('#number-choice').val();
  console.log(number);
  let result = getResultArray(number);
  let fizzBuzzArray = getFizzBuzz(result);
  renderFizzBuzz(fizzBuzzArray);
});