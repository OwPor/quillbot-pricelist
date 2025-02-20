const dates = `
May 09, 2025
April 05, 2025
March 17, 2025
April 19, 2025
May 03, 2025
April 03, 2025
March 22, 2025
August 11, 2025
April 06, 2025
March 24, 2025
November 26, 2025
March 08, 2025
September 12, 2025
April 16, 2025
November 07, 2025
October 16, 2025
February 28, 2025
April 10, 2026
June 06, 2025
December 30, 2025
`;

async function fetchCurrentDate() {
    try {
        const response = await fetch('https://www.worldtimeapi.org/api/timezone/Asia/Manila');
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return new Date(data.datetime);
    } catch (error) {
        alert("An error occurred while fetching the current date.");
        location.reload();
    }
}

async function calculatePrices(dates) {
    const rows = dates.trim().split('\n');
    const d = await fetchCurrentDate();
    let results = [];

    rows.forEach(dateStr => {
        const futureDate = new Date(dateStr);
        const timeDiff = futureDate - d;
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

        let price;
        if (daysDiff >= 30) {
            price = (daysDiff * 2.5).toFixed() + ' PHP';
        } else {
            price = 'Negotiate';
        }

        results.push({ date: dateStr, daysDiff: daysDiff, price: price });
    });

    return results;
}

function createTable(data) {
    let tableHTML = '<table><thead><tr><th>Number</th><th>Date</th><th>Days</th><th>Price</th></tr></thead><tbody>';
    let index = 1;
    data.forEach(item => {
        const amountClass = item.price.includes('Negotiate') ? 'negotiate' : '';
        tableHTML += `<tr><td>${index}</td><td>${item.date}</td><td>${item.daysDiff}</td><td class="${amountClass}">${item.price}</td></tr>`;
        index++;
    });

    tableHTML += '</tbody></table>';
    document.getElementById('table-container').innerHTML = tableHTML;
}

async function displayPrices() {
    const priceList = await calculatePrices(dates);
    createTable(priceList);
}

displayPrices();
