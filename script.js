const experienceDict = {
    "Student Data Analyst": "In this position I will be analyzing...",
    "Financial Aid Student Assistant": "In this position I work on various projects...",
    "Student Researcher": "During my time in this research role I...",
    "Pioneers in Engineering (PiE)": "A student-run non-profit organization on...",
    "Google Developer Student Club (GDSC)": "A student run organization on campus that..."
};

const experienceHoverDict = {
    "Student Data Analyst": "In this position I will be analyzing and visualizing different types of data to infer useful information for the finance department of the Haas School of Business. I also work on updating their main website.",
    "Financial Aid Student Assistant": "In this position I work on various projects related to data analysis and management, as well as managing the website for the Financial Aid office of the Haas School of Business.",
    "Student Researcher": "During my time in this research role I designed and trained a GPT model to fit the daily needs of project managers from things like team management to the fruition of ideas.",
    "Pioneers in Engineering (PiE)": "A student-run non-profit organization on campus that is devoted to teaching high school students about coding and robotics through fun and interesting competitions between multiple schools. I am a Project Manager for the software team called Shepherd, our responsibilities can include the scoreboard, moving parts on the field, buttons, sensors, pressure plates, etc. as well as the software for creating and hosting the matches.",
    "Google Developer Student Club (GDSC)": "A student run organization on campus that aims to teach programming foundations to students through workshops and lectures, out main mission is to expand outreach of Computer Science to those who are interested in getting started in CS. I am a member of the leadership team and help to run the organization and manage outreach efforts, as well as helping run workshops and lectures."
};

const experienceItems = document.querySelectorAll(".experience-list-item");
console.log(experienceItems);

for (let i=0; i<experienceItems.length; i++) {
    experienceItems[i].addEventListener('mouseover', function() {
        const paragraph = experienceItems[i].querySelector("p");
        const header = experienceItems[i].querySelector("h2");
        paragraph.innerHTML = experienceHoverDict[header.innerHTML];
    })
    experienceItems[i].addEventListener('mouseout', function() {
        const paragraph = experienceItems[i].querySelector("p");
        const header = experienceItems[i].querySelector("h2");
        paragraph.innerHTML = experienceDict[header.innerHTML];
    })
}




// function expandExperienceCard() {
//     header = document.get
// }