/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
const sectionEl = document.querySelector(".article__section")
console.log('sectionel', sectionEl);


/*
    This code will only return the third section component
*/
const footerEl = document.querySelector(".article__footer")

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
const smallTextEl = document.querySelector(".smallText")
smallTextEl.classList.remove("smallText")
smallTextEl.classList.add("largeText")

// ====
/*
    This code will return all section components
*/
const sectionEls = document.querySelectorAll(".article__section")
console.log('all the sections', sectionEls );
// sectionEls.classList.add("smallText")

const header = document.querySelector(".article__header")
header.innerHTML += ": Open for Business. Closed to Viruses"


// Lets take this data and access some of it to diplay to our users in the browser.
const nashvilleSoftwareSchool = {
  founded: 2012,
  director: "John Wark",
  instructors: {
      fullTime: ["Jisie", "Brenda", "Steve", "Andy", "Bryan", "Frederika"],
      partTime: ["Zoe", "Nathan"]
  },
  address: "500 Interstate Blvd. S"
}

// Looping over the instructor data so we can represent the instructors names as HTML, in the DOM
let partTime = nashvilleSoftwareSchool.instructors.partTime
for ( let i = 0; i < partTime.length; i++ ) {
  console.log(partTime[i])
  document.querySelector(".part_time_list").innerHTML += `<li>${partTime[i]}</li>`
}

let fullTime = nashvilleSoftwareSchool.instructors.fullTime
for ( let i = 0; i < fullTime.length; i++ ) {
  console.log(fullTime[i])
  document.querySelector(".full_time_list").innerHTML += `<li>${fullTime[i]}</li>`
}
