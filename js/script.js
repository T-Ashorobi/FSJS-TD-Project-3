//set the "name" box to be focused on by default
const nameFocus = document.getElementById("name").focus();
const otherJobRole = document.getElementById("other-job-role");
const jobRole = document.getElementById("title");
//set the "other job role" box to be invisible by default.
otherJobRole.style.display = 'none';
//Disable shirt color options as default. 
const shirtColors = document.getElementById('color');
shirtColors.disabled = true;
//grab design ID
const design = document.getElementById('design');
console.log(design);

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
  console.log(dataT);
  // const dataT = shirtColors.children;
  // const designOpt = design.querySelectorAll('option');
  console.log(typeof targ);
  shirtColors.disabled = false;
  // const designOptAtr = designOpt.getAttribute("data-theme");
  // const designOptAtr = designOpt.querySelectorAll('[data-theme="js puns"]');
  // console.log(dataT);
  // console.log(designOptAtr);
  // console.log(designOpt);
  // console.log(dataT.dataset.theme);


  for (let i = 0; i < dataT.length; i++) {
    const dataTheme = dataT[i].dataset.theme;
    console.log(dataTheme);

    if (targ === dataTheme && dataT[i].dataset.theme) {
      dataT[i].dataset.theme.hidden = true;
      dataTheme.hidden = false;
      console.log('if true works')
    } else if (dataT[i].dataset.theme) {
      dataT[i].dataset.theme.hidden = false;
      dataTheme.hidden = true;
      // console.log("else works")
    }
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