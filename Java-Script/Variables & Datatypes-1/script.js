  //var key word is fun scoped
  // only if used in fun so only can used in fun
  function age() {
      var age = 25;
      console.log(age);
  }
  age();
  //  can redeclear
  var age = 10;
  var age = 60;
  console.log(age);

  // let blocked scoped
  function value() {
      let val = 10;
      console.log(val);
  }
  value();
  console.log(val);
  console.log(val);

  // cannot reassign
  let a = 10;
  let a = 20;

  //java-script is dynamically typed langue like

  let a = 10;
  a = "Moiz";
  a = true;
  console.log(a);

  // const vatiable 
  const b = 28;
  console.log(b);
  b = 20; // not possible