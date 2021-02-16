/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  const ul = document.querySelector('.student-list');
  ul.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    const student = list[i];
    if (i >= startIndex && i < endIndex) {
      let text = `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${student.picture.large} alt="Profile Picture">
               <h3>${student.name.first} ${student.name.last}</h3>
               <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${student.registered.date}</span>
            </div>
         </li>`;
      ul.insertAdjacentHTML('beforeend', text);
    }
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  const numberOfPages = Math.ceil(list.length / 9);
  const ul = document.querySelector('.link-list');
  ul.innerHTML = '';
  for (let i = 0; i < numberOfPages; i++) {
    let li = `<li>
                  <button type="button">${i + 1}</button>
               </li>`;
    ul.insertAdjacentHTML('beforeend', li);
  }
  ul.firstElementChild.className = 'active';
  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const selectedPage = e.target.textContent;
      const selectedLi = e.target.parentNode;
      const listItems = ul.children;
      for (let li of listItems) {
        li.className = '';
      }
      selectedLi.className = 'active';
      showPage(data, selectedPage);
    }
  });
}

// Call functions
showPage(data, 1);
addPagination(data);
