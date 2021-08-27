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
//What i want to do here is to see the event listener listen for a change from the design drop down. Create a variable for e.target.value and a variable for the data-theme. Create an if statement where if the target.value matches the selected design option then i'll create a statement within the code block, else if it matches the other design value then the other code block will run. 
design.addEventListener('change', (e) => {
  // console.log(event.target.value);
  const targ = e.target.value;
  const dataT = shirtColors.querySelectorAll('option');
  const designOpt = design.querySelectorAll('option');
  const designOptAtr = designOpt.querySelectorAll('[dataTheme=js puns]');
  console.log(designOptAtr);
  console.log(designOpt);
  // console.log(dataT);
  // console.log(dataT.dataset.theme);
  // if (targ === ) {

  // }
})
