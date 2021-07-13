function xyz() {
  var innerVariable = 10;

  function increase() {
    innerVariable++
    console.log(innerVariable)
  }
  return increase
}

var fn = xyz()
fn()