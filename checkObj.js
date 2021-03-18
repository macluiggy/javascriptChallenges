function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return 'Not found'
    }
    // Only change code above this line
  }

  obj = {
      'hello': 'hola'
  }
  console.log(checkObj(obj, 'hello'));