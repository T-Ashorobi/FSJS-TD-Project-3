//set the "name" box to be focused on by default
const name = document.getElementById("name");
const nameFocus = name.focus();
const email = document.getElementById("email");
console.log(email);
const otherJobRole = document.getElementById("other-job-role");
const jobRole = document.getElementById("title");
//set the "other job role" box to be invisible by default.
otherJobRole.style.display = 'none';
//Disable shirt color options as default. 
const shirtColors = document.getElementById('color');
shirtColors.disabled = true;
//grab design ID
const design = document.getElementById('design');
// console.log(design);
//grab fieldset
const inputActivities = document.querySelectorAll('#activities input');
// console.log(inputActivities);
let act = document.querySelector('.activities-cost');
// console.log(act);
let totalCost = 0;
// grab payment ID
const payment = document.getElementById('payment');
const selectMethod = payment.querySelector('option:nth-child(2)');
const creditCard = document.getElementById('credit-card');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');

//grabbing <form>
const form = document.querySelector('form');

paypal.hidden = true;
bitcoin.hidden = true;
selectMethod.selected = true;
// console.log('test line 28', selectMethod);
// console.log(paypal);
// console.log(bitcoin);
// console.log(creditCard);
// console.log('Form grab test', form);
// console.log("test input", inputActivities);



// Listen to for a change in Job Role. If other is picked then "Other Job Role" box should appear for the user to input info. Here is a link to a video that helped me understand this part of the project: https://www.youtube.com/watch?v=kXPr_HvBPqM
jobRole.addEventListener('change', (e) => {
  if (jobRole.value === 'other') {
    otherJobRole.style.display = 'block';
  } else {
    otherJobRole.style.display = 'none';
  }
});

//Listen for a change in the select portion of design
//What i want to do here is to see the event listener listen for a change from the design drop down. Create a variable for e.target.value and a variable for the data-theme. Create an if statement where if the e.target.value matches the selected design option value then i'll create a statement within the code block, else if it matches the other design value then the other code block will run. 
design.addEventListener('change', (e) => {
  // console.log(event.target.value);
  const targ = e.target.value;
  const dataT = shirtColors.querySelectorAll('option');
  // console.log(dataT);
  // const dataT = shirtColors.children;
  // const designOpt = design.querySelectorAll('option');
  // console.log(typeof targ);
  shirtColors.disabled = false;
  // const designOptAtr = designOpt.getAttribute("data-theme");
  // const designOptAtr = designOpt.querySelectorAll('[data-theme="js puns"]');
  // console.log(dataT);
  // console.log(designOptAtr);
  // console.log(designOpt);
  // console.log(dataT.dataset.theme);


  for (let i = 0; i < dataT.length; i++) {
    const dataTheme = dataT[i].dataset.theme;
    // console.log(dataTheme);

    if (targ === dataTheme) {
      dataT[i].hidden = false;
    } else {
      dataT[i].hidden = true;
    }
    // This section took a long time for me to understand. I decided to refer to the walkthough for this portion and from what I understood I wrote the code written below. Now when I read this its more clear. If true then the options the [i] is on isn't hidden, else the other set of [i] is hidden. 

    // if (targ === dataTheme && dataT[i].dataset.theme) {
    //   dataT[i].dataset.theme.hidden = true;
    //   dataTheme.hidden = false;
    //   console.log('if true works')
    // } else if (dataT[i].dataset.theme) {
    //   dataT[i].dataset.theme.hidden = false;
    //   dataTheme.hidden = true;
    //   // console.log("else works")
    // }
  }


  // if (targ === 'heart js') {
  //   console.log('wow the IF statement runs');
  //   shirtColors.disabled = false;
  //   for (let i = 0; i < dataT.length; i++) {
  //     const currentDt = dataT[i].dataset.theme;
  //     // currentDt.dataset.theme
  //     if (targ === currentDt) {
  //       console.log('wow we are in an if to for to if statment!')
  //       // currentDt.dataset.theme.disabled = false;
  //       dataT[i].classList.add('disabled');

  //     }
  //   }
  // }
  // console.log('testing', designOpt.value[1]);
  console.log('Squeaky clean so far');
})

//But designOpt is <option> right? I thought if i refrenced the #design it is grabbing that element right? I logged out "design" to see if it is grabbing the correct element and the <select> pops up which is what i wanted. -- In my mind I see im decending from ID to the <option>'s. SO I cant use the "design" variable which is <select> as a reference to get to the <option> below it? 
// OKAY so designOpt isnt and element it is a nodelist. designOpt was an element then I would be able to use it as a reference to get to other parts of the DOM. Since its a nodelist I am not able to do that. 


//"register for activities section"
document.querySelector('#activities').addEventListener('change', (e) => {
  let clicked = e.target;
  let clickedCost = +clicked.dataset.cost;
  console.log(clickedCost);
  console.log(typeof clickedCost);
  console.log(clicked);

  if (clicked.checked) {
    totalCost += clickedCost;
    // console.log(totalCost);
    act.textContent = `Total: ${totalCost}`;
  } else if (clicked.checked === false) {
    totalCost -= clickedCost;
    // console.log(totalCost);
    act.textContent = `Total: ${totalCost}`;
  }
  // for (let i = 0; i < inputActivities.length; i++) {
  //   const checkboxCost = inputActivities[i].dataset.cost;
  //   if (clickedCost === checkboxCost) {
  //     if (clicked.checked) {

  //     }
  //   }
  // }
})

// Payment Info
payment.addEventListener('change', (e) => {
  target = e.target.value;
  console.log(target);
  if (target === 'paypal') {
    paypal.hidden = false;
    creditCard.hidden = true;
    bitcoin.hidden = true;
    // console.log("paypal check works")
  } else if (target === 'bitcoin') {
    bitcoin.hidden = false;
    creditCard.hidden = true;
    paypal.hidden = true;
    // console.log("bitcoin test works")
  } else if (target === 'credit-card') {
    creditCard.hidden = false;
    paypal.hidden = true;
    bitcoin.hidden = true;
    // console.log('credit-card check works')
  }
})

// Form Validation
const nameValidator = () => {
  const nameValue = name.value;
  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]+?$/.test(nameValue);
  console.log('The value for this is:', nameIsValid);
  return nameIsValid;
}

const emailValidator = () => {
  const emailValue = email.value;
  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
  return emailIsValid;
}


form.addEventListener('submit', (e) => {
  // nameValidator();
  emailValidator();

  if (!nameValidator()) {
    e.preventDefalut();
  }

  if (!emailValidator()) {
    e.preventDefault();
  }
})