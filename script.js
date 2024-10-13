const data = `
February 12, 2025 | 120 days | 300.0 PHP
October 30, 2024 | 17 days | Negotiate
November 16, 2024 | 33 days | 82.5 PHP
July 25, 2025 | 282 days | 705.0 PHP
April 05, 2025 | 173 days | 432.5 PHP
May 09, 2025 | 206 days | 515.0 PHP
January 19, 2025 | 96 days | 240.0 PHP
November 08, 2024 | 26 days | 65.0 PHP
March 17, 2025 | 154 days | 385.0 PHP
April 19, 2025 | 186 days | 465.0 PHP
October 10, 2025 | 357 days | 892.5 PHP
January 22, 2025 | 99 days | 247.5 PHP
October 20, 2024 | 7 days | Negotiate
December 01, 2024 | 48 days | 120.0 PHP
May 03, 2025 | 200 days | 500.0 PHP
April 17, 2025 | 184 days | 460.0 PHP
March 22, 2025 | 159 days | 397.5 PHP
April 03, 2025 | 171 days | 427.5 PHP
August 11, 2025 | 299 days | 747.5 PHP
September 07, 2024 | -36 days | Negotiate
March 24, 2025 | 161 days | 402.5 PHP
May 06, 2025 | 203 days | 507.5 PHP
November 26, 2024 | 43 days | 107.5 PHP
January 06, 2025 | 84 days | 210.0 PHP
January 11, 2025 | 89 days | 222.5 PHP
October 20, 2024 | 7 days | Negotiate
October 29, 2024 | 16 days | Negotiate
November 09, 2024 | 27 days | 67.5 PHP
November 01, 2024 | 19 days | Negotiate
December 08, 2024 | 55 days | 137.5 PHP
January 08, 2025 | 86 days | 215.0 PHP
October 27, 2024 | 14 days | Negotiate
September 27, 2025 | 344 days | 860.0 PHP
October 31, 2024 | 18 days | Negotiate
September 12, 2025 | 330 days | 825.0 PHP
April 16, 2025 | 183 days | 457.5 PHP
February 22, 2025 | 129 days | 322.5 PHP
October 30, 2024 | 17 days | Negotiate
November 07, 2024 | 25 days | 62.5 PHP
October 30, 2024 | 17 days | Negotiate
October 16, 2024 | 3 days | Negotiate
June 06, 2025 | 234 days | 585.0 PHP
`;

function createTable(data) {
const rows = data.trim().split('\n');
let tableHTML = '<table><thead><tr><th>Date</th><th>Days</th><th>Amount</th></tr></thead><tbody>';

rows.forEach(row => {
    const [date, days, amount] = row.split('|').map(item => item.trim());
    const amountClass = amount.includes('Negotiate') ? 'negotiate' : '';
    tableHTML += `<tr><td>${date}</td><td>${days}</td><td class="${amountClass}">${amount}</td></tr>`;
});

tableHTML += '</tbody></table>';
document.getElementById('table-container').innerHTML = tableHTML;
}

createTable(data);