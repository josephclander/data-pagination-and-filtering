/**
 * Treehouse Techdegree:
 * FSJS Project 2 - Data Pagination and Filtering
 */

/**
 * create and append 9 list items to ul in document
 * @param {array} list
 * @param {number} page
 */
function showPage(list, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  const ul = document.querySelector('.student-list');
  ul.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    const student = list[i];
    // check the student is in the page range
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

/**
 * create list of buttons updating active selection
 * @param {array} list
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
  // give active class to first button element
  ul.firstElementChild.firstElementChild.className = 'active';
  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const button = e.target;
      const selectedPage = button.textContent;
      const listItems = ul.children;
      for (let li of listItems) {
        // select button element
        li.firstElementChild.className = '';
      }
      button.className = 'active';
      showPage(data, selectedPage);
    }
  });
}

showPage(data, 1);
addPagination(data);
