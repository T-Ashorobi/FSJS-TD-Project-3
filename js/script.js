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
const defaultJsPuns = shirtColors.querySelector('option:nth-child(2)');
console.log(defaultJsPuns);
const defaultLoveJs = shirtColors.querySelector('option:nth-child(5)');
console.log(defaultLoveJs);


//show specific colors shirt list
// const heartJs = shirtColors.querySelectorAll('option:nth-child(3n)');
// console.log(heartJs);


//grab design ID
const design = document.getElementById('design');
// console.log(design);

//grab the hints
const nameHint = document.querySelector('.name-hint');
// console.log(nameHint);
const emailHint = document.querySelector('.email-hint');
// console.log(emailHint); 
const activitiesHint = document.querySelector('.activities-hint');
// console.log(activitiesHint);
const ccHint = document.querySelector('.cc-hint');
// console.log(ccHint);
const zipHint = document.querySelector('.zip-hint');
// console.log(zipHint);
const cvvHint = document.querySelector('.cvv-hint');
// console.log(cvvHint);

//grab fieldset
const inputActivities = document.querySelectorAll('#activities input');
console.log('activities to input', inputActivities);
const activitiesBox = document.getElementById('activities-box');
// console.log(activitiesBox);
const activities = document.getElementById('activities');
// console.log(activities);
const activityLegend = document.querySelector('.activities legend');
// console.log(activityLegend);
let act = document.querySelector('.activities-cost');
// console.log(act);
let totalCost = 0;


// grab payment ID
const payment = document.getElementById('payment');
console.log(payment);
const selectMethod = payment.querySelector('option:nth-child(2)');
const creditCard = document.getElementById('credit-card');
console.log(creditCard);
const paypal = document.querySelector('#paypal');
console.log(paypal);
const bitcoin = document.querySelector('#bitcoin');
console.log(bitcoin);

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

//Below what is commented out under was the issue. The className was overriding the classes that were there before. For the other elements being validated there wasn't an issue but for the Activities section it would "shrink" as @sradms0 said. The shirnk was a result of the reassignment of the class attribute, so meaning that class css was not connecting which resulted in the breakdown of the styiling, and thus the basic looking HTML structure. 

// Also one thing I must keep in mind now is if a breakdown like this happens I should always keep an eye out on that specific element to see if there are any changes like this. The change in class or reassignment of it maybe the issue. 

//This video helped me understand classList and its methods of classList.add and classList.remove. https://www.youtube.com/watch?v=FKQkx-wGexo

function validationPass(element) {
  // element.parentElement.className = 'valid';
  element.parentElement.classList.add('valid');
  element.parentElement.classList.remove('not-valid');
  element.parentElement.lastElementChild.hidden = true;
}

function validationFail(element) {
  //element.parentElement.className = 'not-valid';
  element.parentElement.classList.add('not-valid');
  element.parentElement.classList.remove('valid');
  element.parentElement.lastElementChild.hidden = false;

}


//Now this makes sense below. The four loop is there to iterate through all the <input> that contain the checkbox type. The thing is that the checkbox does get the "focus" but you dont see it much so we move it up to the <label> which will have more of a pop. To do this with all of the <input> we need to loop through them all and add the "focus" event. IF the [i] is equal to the e.target then we'll add the class name of "focus" to the parentNode which is the <label>.
//To add the "blur" event I was having issue trying to get this to work. I knew initially the structure will be similar to what I wrote for the "focus" event to run, but it wasn't working and I didnt understand why. I was going down a rabbit hole not knowing what I was doing was correct or not. With the aid of a student in class I was able to figure it out. What I always thought was that when you attach an eventListner it needed to be a parent container and in this case I thought it was the 'activites' variable. But in actuality if I switch out the 'activites' variable for the "inputActivities[i]" it works better because were listening for changes with each individual node list. Thus why we needed the For Loop. So what i wrote before attaching the eventListner to the activities does not take into account each individual input. So I learned something new. 

// This video explains what "focus" and "blur" is: https://www.youtube.com/watch?v=AdaomMXmpYg

/* setting "focus" and "blur" on activities section to make more accessible. */
for (let i = 0; i < inputActivities.length; i++) {
  inputActivities[i].addEventListener('focus', e => {
    const eTarget = e.target;
    if (inputActivities[i] === eTarget) {
      inputActivities[i].parentNode.className = 'focus';
    }
  });

  inputActivities[i].addEventListener('blur', e => {
    // const eTag = e.target;
    const eTarget = e.target;
    if (inputActivities[i] === eTarget) {
      inputActivities[i].parentNode.classList.remove("focus");
      // eTarget.parentNode.classList.remove('focus');
    }
  })

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
  const targ = e.target.value;
  const dataT = shirtColors.querySelectorAll('option');
  console.log(dataT);
  shirtColors.disabled = false;

  //Below I needed to create this to have a default behavior once a design is selected. I had an issue where if I selected a design then chose a color and then decided to switch my design the original color I chose does not automatically update. Now when I choose a design I gave it a default color, and if I switch designs it'll automatically switch to the other designs default color.  
  if (targ === 'js puns') {
    defaultJsPuns.selected = true;
  } else if (targ === 'heart js') {
    defaultLoveJs.selected = true;
  }

  for (let i = 0; i < dataT.length; i++) {
    const dataTheme = dataT[i].dataset.theme;
    console.log(dataTheme);

    if (targ === dataTheme) {
      dataT[i].hidden = false;
    } else {
      dataT[i].hidden = true;
    }

    // This section took a long time for me to understand. I decided to refer to the walkthough for this portion and from what I understood I wrote the code written below. Now when I read this its more clear. If true then the options the [i] is on isn't hidden, else the other set of [i] is hidden. 
  }



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
// payment.addEventListener('change', (e) => {
//   target = e.target.value;
//   console.log(target);
//   if (target === 'paypal') {
//     paypal.hidden = false;
//     creditCard.hidden = true;
//     bitcoin.hidden = true;
//     // console.log("paypal check works")
//   } else if (target === 'bitcoin') {
//     bitcoin.hidden = false;
//     creditCard.hidden = true;
//     paypal.hidden = true;
//     // console.log("bitcoin test works")
//   } else if (target === 'credit-card') {
//     creditCard.hidden = false;
//     paypal.hidden = true;
//     bitcoin.hidden = true;
//     // console.log('credit-card check works')
//   }
// })

payment.addEventListener('change', (e) => {
  target = e.target.value;
  console.log(target);
  if (target === 'paypal') {
    paypal.hidden = false;
    paypal.disabled = false;
    creditCard.hidden = true;
    creditCard.disabled = true;
    bitcoin.hidden = true;
    bitcoin.disabled = true;
    // console.log("paypal check works")
  } else if (target === 'bitcoin') {
    bitcoin.hidden = false;
    bitcoin.disabled = false;
    creditCard.hidden = true;
    creditCard.disabled = true;
    paypal.hidden = true;
    paypal.disabled = true;
    // console.log("bitcoin test works")
  } else if (target === 'credit-card') {
    creditCard.hidden = false;
    creditCard.disabled = false;
    paypal.hidden = true;
    paypal.disabled = true;
    bitcoin.hidden = true;
    bitcoin.disabled = true;
    // console.log('credit-card check works')
  }
})

// Form Validation
// The nameValidator will check if at least the first name is filled out and or the box isnt left blank. 
const nameValidator = () => {
  const nameValue = name.value;
  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]?$/.test(nameValue);
  console.log('The value for nameIsValid is:', nameIsValid);
  // alert("Please input a valid First name.");

  if (nameIsValid) {
    validationPass(name);
    nameHint.style.display = 'none';
  } else {
    validationFail(name);
    nameHint.style.display = 'block';
  }
  return nameIsValid;
}

const emailValidator = () => {
  const emailValue = email.value;
  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
  console.log("The value for emailIsValid is:", emailIsValid);
  // alert("Please input a valid email address.");

  if (emailIsValid) {
    validationPass(email);
    emailHint.style.display = 'none';
  } else {
    validationFail(email);
    emailHint.style.display = 'block';
  }

  return emailIsValid;
}

const activitiesValidator = () => {
  const activitiesValidatorIsValid = totalCost > 0;
  console.log("the value of activitiesValidatorIsValid is:", activitiesValidatorIsValid);
  // alert("Please select at least one activity.");

  //Passing in "activities" in "validationPass" the red border bleeds into Exp Date, Exp Year and the caution sign is in the top right corner of the screen? 

  // Using 'activities' erases or pushed the button out of frame when at least one activity is selected. And also when the classList is adjusted to not override the original class the Caution sign is still at the very top of the screen, so this tells me that the "activities" is not the best choice. I get also why now the "caution" signal is all the way up top because in the function were looking for the parent element, so the signal is all the way at the top because it told to go to the parent element. 
  // if (activitiesValidatorIsValid) {
  //   validationPass(activities);
  //   activitiesHint.style.display = 'none';
  // } else {
  //   validationFail(activities);
  //   activitiesHint.style.display = 'block';
  // }

  // I prefer to use activitesBox
  // if (activitiesValidatorIsValid) {
  //   validationPass(activitiesBox);
  // } else {
  //   validationFail(activitiesBox);
  // }

  if (activitiesValidatorIsValid) {
    validationPass(activityLegend);
    activitiesHint.style.display = 'none';
  } else {
    validationFail(activityLegend);
    activitiesHint.style.display = 'block';
  }

  return activitiesValidatorIsValid;
  //I think this was the issue. I would fill all of the information but the page wouldn't send. I accidently commented off "return activitiesValidatorIsValid" so the value could not be returned and used. Now that I uncommented it when all the information is in and I submit the page goes into that crash thing. 
}

const ccValidator = () => {
  const ccValue = cc.value;
  const ccIsValid = /^\d{13,16}$/.test(ccValue);
  console.log('The value for ccIsValid is:', ccIsValid);
  // alert("Please enter a valid 13 to 16 digit credit card number.");

  if (ccIsValid) {
    validationPass(cc);
    ccHint.style.display = 'none';
  } else {
    validationFail(cc);
    ccHint.style.display = 'block';
  }

  return ccIsValid;
}

const zipValidator = () => {
  const zipValue = zip.value;
  const zipIsValid = /^\d{5}$/.test(zipValue);
  console.log('The value for zipIsValid is:', zipIsValid);
  // alert("Please enter a valid 5 digit zip code.");

  if (zipIsValid) {
    validationPass(zip);
    zipHint.style.display = 'none';
  } else {
    validationFail(zip);
    zipHint.style.display = 'block';
  }

  return zipIsValid;
}

const cvvValidator = () => {
  const cvvValue = cvv.value;
  const cvvIsValid = /^\d{3}$/.test(cvvValue);
  console.log('The Value for cvvIsValid is:', cvvIsValid);
  // alert("Please input a 3 digit CVV code found on the back of your Credit Card.")

  if (cvvIsValid) {
    validationPass(cvv);
    cvvHint.style.display = 'none';
  } else {
    validationFail(cvv);
    cvvHint.style.display = 'block';
  }

  return cvvIsValid;
}

//A great video explaning the method of "preventDefault": https://www.youtube.com/watch?v=3SNyh57XSIA

//Submit information section

form.addEventListener('submit', e => {
  // e.preventDefault();
  // nameValidator();
  // emailValidator();
  // const nameVar = name.value;
  // console.log(nameVar);
  // const testVal = nameValidator();
  // console.log(testVal);
  const target = e.target;
  console.log(target);
  // const payByCC = !document.getElementById('credit-card').hasAttribute('hidden');

  if (!nameValidator()) {
    e.preventDefault();
    console.log("the nameValidator IF statement works");
  }

  if (!emailValidator()) {
    e.preventDefault();
    console.log("The emailValidator IF statement works");
  }

  if (!activitiesValidator()) {
    e.preventDefault();
    console.log("The activitiesValidator IF statement works.");
  }

  // if (target === 'credit-card') {
  // I was having an issue where if I chose another form of payment besides credit card the form wouldnt submit because the the credit card field was not filled out. Over time I thought more and more about it and it made sense why this happens. The way my submit form is written each time I hit the submit button it will check each if statement listed. The CVV, ZIP and CC# are always checked even though I didnt choose the credit card payment. To alleviate this I needed to create another level of code to further specify if when the CVV, ZIP and CC# should be checked. Initially the code i wrote above did not make sense. Since this is a "submit" event handler, using e.target is completly different than when I use that method in a "change" or other types of handlers. So what I wrote below if the payment value is equal to the string credit-card then whats written in the code block will run. 
  if (document.getElementById('payment').value === 'credit-card') {
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
  }
  // }
});

// I tried creating two submit because my credit card section is messing up. I thought if i single out the credit card portion It would fix the problem but it didnt. WHen the first half of the form is filled correctly and the credit card section isn't, the form still sends. It makes sense since the first half is correct. 

