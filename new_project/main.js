// Function to add a new customer to the table
function addCustomer(customerName, roomNumber, checkInDate, checkOutDate, orderDetails) {
  const customerTableBody = document.getElementById("customer-table-body");
  const newRow = customerTableBody.insertRow();
  newRow.innerHTML = `
    <td>${customerName}</td>
    <td>${roomNumber}</td>
    <td>${checkInDate}</td>
    <td>${checkOutDate}</td>
    <td>${orderDetails}</td>
    <td><button onclick="deleteCustomer(this)">Delete</button></td>
  `;
}

// Function to delete a customer from the table
function deleteCustomer(button) {
  const rowToDelete = button.parentElement.parentElement;
  rowToDelete.remove();
}

// Event listener for adding a customer
const addCustomerForm = document.getElementById("add-customer-form");
addCustomerForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const customerName = document.getElementById("customer-name").value;
  const roomNumber = document.getElementById("room-number").value;
  const checkInDate = document.getElementById("check-in-date").value;
  const checkOutDate = document.getElementById("check-out-date").value;
  const orderDetails = document.getElementById("order-details").value;
  addCustomer(customerName, roomNumber, checkInDate, checkOutDate, orderDetails);
  addCustomerForm.reset();
});
// Function to add a new customer to the table
function addCustomer(customerName, roomNumber, checkInDate, checkOutDate, orderDetails) {
  const customerTableBody = document.getElementById("customer-table-body");
  const newRow = customerTableBody.insertRow();
  newRow.innerHTML = `
    <td>${customerName}</td>
    <td>${roomNumber}</td>
    <td>${checkInDate}</td>
    <td>${checkOutDate}</td>
    <td>${orderDetails}</td>
    <td><button onclick="deleteCustomer(this)">Delete</button></td>
  `;
}

// Function to delete a customer from the table
function deleteCustomer(button) {
  const rowToDelete = button.parentElement.parentElement;
  rowToDelete.remove();
}

// Event listener for adding a customer

