const dates = `
February 12, 2025
October 30, 2024
November 16, 2024
July 25, 2025
April 05, 2025
May 09, 2025
January 19, 2025
November 08, 2024
March 17, 2025
April 19, 2025
October 10, 2025
January 22, 2025
October 20, 2024
December 01, 2024
May 03, 2025
April 17, 2025
March 22, 2025
April 03, 2025
December 30, 2024
August 11, 2025
September 07, 2024
March 24, 2025
May 06, 2025
November 26, 2024
January 06, 2025
January 11, 2025
October 20, 2024
January 04, 2026
March 19, 2025
October 29, 2024
November 09, 2024
November 01, 2024
December 08, 2024
January 08, 2025
October 27, 2024
September 27, 2025
October 31, 2024
September 12, 2025
April 16, 2025
July 15, 2025
February 22, 2025
October 30, 2024
November 07, 2024
October 30, 2024
October 16, 2024
June 06, 2025
`;

function calculatePrices(dates) {
    const rows = dates.trim().split('\n');
    const d = new Date();
    let results = [];

    rows.forEach(dateStr => {
        const futureDate = new Date(dateStr);
        const timeDiff = futureDate - d;
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

        let price;
        if (daysDiff >= 30)
            price = (daysDiff * 2.5).toFixed(2) + ' PHP';
        else
            price = 'Negotiate';

        results.push({ date: dateStr, daysDiff: daysDiff, price: price });
    });

    return results;
}

function createTable(data) {
    let tableHTML = '<table><thead><tr><th>Date</th><th>Days Difference</th><th>Price</th></tr></thead><tbody>';

    data.forEach(item => {
        tableHTML += `<tr><td>${item.date}</td><td>${item.daysDiff}</td><td>${item.price}</td></tr>`;
    });

    tableHTML += '</tbody></table>';
    document.getElementById('table-container').innerHTML = tableHTML;
}

const priceList = calculatePrices(dates);
createTable(priceList);
