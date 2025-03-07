// global variables tracking the user's preferences:
let searchTerm = "";
let openOnly = false;

const search = (ev) => {
    ev.preventDefault(); // overrides default button action

    // Set user's preferences (global variables) from the DOM:
    searchTerm = document.querySelector("#search_term").value;
    openOnly = document.querySelector("#is_open").checked;

    // Invoke the show matching courses function
    showMatchingCourses();
};

// Part 1.1a
const isClassFull = (course) => {
    // modify this to accurately apply the filter:
    return true;
};

// Part 1.1b
const doesTermMatch = (course) => {
    // modify this to accurately apply the filter:
    return true;
};

// Part 1.2
const dataToHTML = (course) => {
    // modify this to be more detailed
    let status;
    if (isClassFull(course)) {
        status = '<i class="fa-solid fa-circle-check"></i> Closed'
    } else {
        status = '<i class="fa-solid fa-circle-check"></i> Open'
    }
    const seatsAvailable = course.EnrollmentMax - EnrollmentCurrent;
    if (seatsAvailable < 0) {
        seatsAvailable = 0;
    }
    return `
   <section class="course">
            <h2>${course.Code}: ${course.Title}</h2>
            <p>
                <i class="fa-solid fa-circle-check"></i> 
                ${status}  &bull; ${course.CRN} &bull; Seats Available: 1
            </p>
            <p>
                ${course.Days || "TBD"} &bull; ${course.Location.FullLocation|| "TBD"} &bull; ${course.Hours}
            </p>
            <p>${course.Instructors[0].Name}</p>
        </section>
    `;
};

// Part 2
const showMatchingCourses = () => {
    console.log(`Search term: ${searchTerm}`);
    console.log(`Only show open classes: ${openOnly}`);
    console.log(`Course data:`, courseList);

    // output all of the matching courses to the screen:
    const container = document.querySelector(".courses");
    container.innerHTML = null;
    //filter by search term:
    let matches = courseList.filter(doesTermMatch);

    matches.forEach((course) => {
        // if the class is open, show it:
        const snippet = dataToHTML(course);
        container.insertAdjacentHTML("beforeend", snippet);
    }
    )
};


