//set the "name" box to be focused on by default
const name = document.getElementById("name");
const nameFocus = name.focus();
// reference to email
const email = document.getElementById("email");
// console.log(email);
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
console.log('activities to input', inputActivities);
const activitiesBox = document.getElementById('activities-box');
console.log(activitiesBox);
const activities = document.getElementById('activities');
console.log(activities);
let act = document.querySelector('.activities-cost');
// console.log(act);
let totalCost = 0;

// grab payment ID
const payment = document.getElementById('payment');
const selectMethod = payment.querySelector('option:nth-child(2)');
const creditCard = document.getElementById('credit-card');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');

//Hide paypal and bitcoin if not selected and set Credit Card as initial option.
paypal.hidden = true;
bitcoin.hidden = true;
selectMethod.selected = true;
// console.log('test line 28', selectMethod);
// console.log(paypal);
// console.log(bitcoin);
// console.log(creditCard);
// console.log('Form grab test', form);
// console.log("test input", inputActivities);

//Card #, Zip Code, CVV
const cc = document.getElementById('cc-num');
// console.log(cc);
const zip = document.getElementById('zip');
// console.log(zip);
const cvv = document.getElementById('cvv');
// console.log(cvv);

//grabbing <form>
const form = document.querySelector('form');
// console.log(form);


const activityLabel = document.querySelectorAll('.activities-box label');
console.log(activityLabel);

// validation pass and validation fail
function validationPass(element) {
  element.parentElement.className = 'valid';
  element.parentElement.classList.remove('not-valid');
  element.parentElement.lastElementChild.hidden = true;
}

function validationFail(element) {
  element.parentElement.className = 'not-valid';
  element.parentElement.classList.remove('valid');
  element.parentElement.lastElementChild.hidden = false;
}


//Now this makes sense below. The four loop is there to iterate through all the <input> that contain the checkbox type. The thing is that the checkbox does get the "focus" but you dont see it much so we move it up to the <label> which will have more of a pop. To do this with all of the <input> we need to loop through them all and add the "focus" event. IF the [i] is equal to the e.target then we'll add the class name of "focus" to the parentNode which is the <label>.
//To add the "blur" event I was having issue trying to get this to work. I knew initially the structure will be similar to what I wrote for the "focus" event to run, but it wasn't working and I didnt understand why. I was going down a rabbit hole not knowing what I was doing was correct or not. With the aid of a student in class I was able to figure it out. What I always thought was that when you attach an eventListner it needed to be a parent container and in this case I thought it was the 'activites' variable. But in actuality if I switch out the 'activites' variable for the "inputActivities[i]" it works better because were listening for changes with each individual node list. Thus why we needed the For Loop. So what i wrote before attaching the eventListner to the activities does not take into account each individual input. So I learned something new. 

/* setting "focus" and "blur" on activities section to make more accessible. */
for (let i = 0; i < inputActivities.length; i++) {
  inputActivities[i].addEventListener('focus', e => {
    const eTarget = e.target;
    if (inputActivities[i] === eTarget) {
      inputActivities[i].parentNode.className = 'focus';
    }
  });

  // activities.addEventListener('focus', e => {
  //   const eTarget = e.target;
  //   if (inputActivities[i] === eTarget) {
  //     inputActivities[i].parentNode.className = 'focus';
  //     if (inputActivities[i].parentNode.className === 'focus') {
  //       inputActivities[i].style.backgroundColor = 'red';
  //     }
  //   }
  // }, true);

  inputActivities[i].addEventListener('blur', e => {
    // const eTag = e.target;
    const eTarget = e.target;
    if (inputActivities[i] === eTarget) {
      inputActivities[i].parentNode.classList.remove("focus");
      // eTarget.parentNode.classList.remove('focus');
    }
  })

  // if (inputActivities[i] === eTarget && inputActivities[i].parentNode.className === 'focus')

}


// Listen to for a change in Job Role. If other is picked then "Other Job Role" box should appear for the user to input info. Here is a link to a video that helped me understand this part of the project: https://www.youtube.com/watch?v=kXPr_HvBPqM
jobRole.addEventListener('change', (e) => {
  if (jobRole.value === 'other') {
    otherJobRole.style.display = 'block';
  } else {
    otherJobRole.style.display = 'none';
  }
});

//Listen for a change in the select portion of design
//What i want to do here is to have the event listener listen for a change from the design drop down. Create a variable for e.target.value and a variable for the data-theme. Create an IF statement where if the e.target.value matches the selected design option value then i'll create a statement within the code block, else if it matches the other design value then the other code block will run. 
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
  // console.log(clickedCost);
  // console.log(typeof clickedCost);
  // console.log(clicked);

  if (clicked.checked) {
    totalCost += clickedCost;
    // console.log(totalCost);
    act.textContent = `Total: ${totalCost}`;
  } else if (clicked.checked === false) {
    totalCost -= clickedCost;
    // console.log(totalCost);
    act.textContent = `Total: ${totalCost}`;
  }
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
  console.log('The value for nameIsValid is:', nameIsValid);
  alert("Please input a valid First name and Last name.");

  if (nameIsValid) {
    validationPass(name);
  } else {
    validationFail(name);
  }

  return nameIsValid;
}

const emailValidator = () => {
  const emailValue = email.value;
  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
  console.log("The value for emailIsValid is:", emailIsValid);
  alert("Please input a valid email address.");

  if (emailIsValid) {
    validationPass(email);
  } else {
    validationFail(email);
  }

  return emailIsValid;
}

const activitiesValidator = () => {
  const activitiesValidatorIsValid = totalCost > 0;
  console.log("the value of activitiesValidatorIsValid is:", activitiesValidatorIsValid);
  alert("Please select at least one activity.");

  // Using passing in "activities" in "validationPass" the red border bleeds into Exp Date, Exp Year and the caution sign is in the top right corner of the screen? 

  if (activitiesValidatorIsValid) {
    validationPass(activities);
  } else {
    validationFail(activities);
  }

  // I prefer to use activitesBox
  // if (activitiesValidatorIsValid) {
  //   validationPass(activitiesBox);
  // } else {
  //   validationFail(activitiesBox);
  // }

  return activitiesValidatorIsValid;

  // for (let i = 0; i < inputActivities.length; i++) {
  //   if (activitiesValidatorIsValid) {
  //     validationPass(i);
  //   } else {
  //     validationFail(i);
  //   }
  // }
}

const ccValidator = () => {
  const ccValue = cc.value;
  const ccIsValid = /^\d{13,16}$/.test(ccValue);
  console.log('The value for ccIsValid is:', ccIsValid);
  alert("Please enter a valid 13 to 16 digit credit card number.");

  if (ccIsValid) {
    validationPass(cc);
  } else {
    validationFail(cc);
  }

  return ccIsValid;
}

const zipValidator = () => {
  const zipValue = zip.value;
  const zipIsValid = /^\d{5}$/.test(zipValue);
  console.log('The value for zipIsValid is:', zipIsValid);
  alert("Please enter a valid 5 digit zip code.");

  if (zipIsValid) {
    validationPass(zip);
  } else {
    validationFail(zip);
  }

  return zipIsValid;
}

const cvvValidator = () => {
  const cvvValue = cvv.value;
  const cvvIsValid = /^\d{3}$/.test(cvvValue);
  console.log('The Value for cvvIsValid is:', cvvIsValid);
  alert("Please input a 3 digit CVV code found on the back of your Credit Card.")

  if (cvvIsValid) {
    validationPass(cvv);
  } else {
    validationFail(cvv);
  }

  return cvvIsValid;
}

//A great video explaning the method of "preventDefault": https://www.youtube.com/watch?v=3SNyh57XSIA

//Submit information section

form.addEventListener('submit', (e) => {
  // e.preventDefault();
  // nameValidator();
  // emailValidator();

  if (!nameValidator()) {
    e.preventDefault();
    console.log("the nameValidator IF statement works");
  }

  if (emailValidator() === false) {
    e.preventDefault();
    console.log("The emailValidator IF statement works");
  }

  if (!activitiesValidator()) {
    e.preventDefault();
    console.log("The activitiesValidator IF statement works.");
  }

  if (!ccValidator()) {
    e.preventDefault();
    console.log("The ccValidator IF statement works.");
  }

  if (!zipValidator()) {
    e.preventDefault();
    console.log("The zipValidator IF statement works.");
  }

  if (!cvvValidator()) {
    e.preventDefault();
    console.log('The cvvValidator IF statement works.');
  }
})

//Listen for change in fieldset to check for focus and blur events. 

// activities.addEventListener('focus', (e) => {
//   const eventTarget = e.target;
//   eventTarget.style.background = 'red';
//   focusTab();
// })