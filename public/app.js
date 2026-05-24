const fakeEvents = [
  {
    id: 1,
    name: 'Rent',
    type: 'Bill',
    amount: 900,
    due_date: '2026-06-01',
    frequency: 'Monthly',
    active: true,
    notes: 'Test bill'
  },
  {
    id: 2,
    name: 'Paycheck',
    type: 'Paycheck',
    amount: 1850,
    due_date: '2026-06-05',
    frequency: 'Biweekly',
    active: true,
    notes: ''
  }
];

const dateTables = {
    months: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    monthsShort: [
        'Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
}
function renderEvents(events) {
    const tableBody = document.querySelector('#events-table-body');

    tableBody.innerHTML = '';

    for (const event of events) {
        const row = document.createElement('tr');
        var formattedDate = '';
        var dateSplit = event.due_date.split('-');
        var dateMonth = dateTables.monthsShort[parseInt(dateSplit[2])];
        var dateDay = dateSplit[1];
        var dateYear = dateSplit[0];
        formattedDate = `${dateMonth} ${dateDay}, ${dateYear}`;


        row.innerHTML = `
            <td class="left">${event.name}</td>
            <td class="left">${event.type}</td>
            <td class="left">${event.amount}</td>
            <td class="left">${formattedDate}</td>
            <td>${event.frequency}</td>
            <td>${event.active ? 'Yes' : 'No'}</td>
            <td><button>Delete</button></td>
        `;

        tableBody.appendChild(row);
    }
}

renderEvents(fakeEvents);