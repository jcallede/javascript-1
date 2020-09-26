
// Function: Insert blog post number to the <h2> heading:
const setPostNumber = (num) => {
    // This is the element where the number goes:
    const postNumber = document.getElementById('postNumber');

    // We insert the 'clicked number' to the heading tag:
    postNumber.innerHTML = num;
}

// OnSubmit:
const submitForm = (event) => {
    // Prevent default behaviour when submiting our cool form:
    event.preventDefault();

    // This is our cool <form>:
    const coolForm = document.getElementById('coolForm');

    // First, we get all checked checkboxes values:
    const checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
        .map(item => item.value)
        .join(', ');

    // Object with all form values:
    const formValues = {
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastName').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        documentNumber: document.getElementById('documentNumber').value,
        checkboxes: checkboxes.length === 0 ? 'No me gusta el deporte :(' : checkboxes
    }

    // Adding form values to our cool table:
    addRow(formValues);

    // We reset our cool after submit:
    coolForm.reset();
};


// Function: Setting form values to our cool table:
const addRow = (values) => {
    // This is our cool <table>:
    const coolTable = document.getElementById('coolTable');

    // We add an empty <tr> to the last position of our cool table:
    const row = coolTable.insertRow(-1);

    // We convert object values to a new Array:
    const arrValues = Object.values(values);

    // For loop. Inserting cells <td> to the new row <tr> and setting form values:
    for (let i = 0; i < arrValues.length; i++) {
        let cell = row.insertCell(i);
        cell.innerHTML = arrValues[i];
    }

    // Lastly, scrolling down to the table to see the results :)
    coolTable.scrollIntoView({ behavior: 'smooth' });
}
