document.getElementById('depositBtn').addEventListener('click', function() {
    let balance = parseFloat(document.getElementById('balance').textContent.replace('$', ''));
    let depositAmount = parseFloat(prompt('Enter deposit amount:'));
    if (!isNaN(depositAmount)) {
      balance += depositAmount;
      document.getElementById('balance').textContent = '$' + balance.toFixed(2);
      document.getElementById('transactions').innerHTML += '<li>Deposit: $' + depositAmount.toFixed(2) + '</li>';
    }
  });
  
  document.getElementById('withdrawBtn').addEventListener('click', function() {
    let balance = parseFloat(document.getElementById('balance').textContent.replace('$', ''));
    let withdrawAmount = parseFloat(prompt('Enter withdrawal amount:'));
    if (!isNaN(withdrawAmount) && withdrawAmount <= balance) {
      balance -= withdrawAmount;
      document.getElementById('balance').textContent = '$' + balance.toFixed(2);
      document.getElementById('transactions').innerHTML += '<li>Withdrawal: $' + withdrawAmount.toFixed(2) + '</li>';
    } else {
      alert('Insufficient balance!');
    }
  });
  let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}
searchBtn.onclick = function(){
    sidebar.classList.toggle("active");
}

