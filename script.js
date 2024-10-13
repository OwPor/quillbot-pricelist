document.addEventListener('DOMContentLoaded', () => {
    fetch('pricelist.txt')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const tableBody = document.getElementById('priceTable').getElementsByTagName('tbody')[0];

            rows.forEach(row => {
                const columns = row.split('|').map(col => col.trim());
                if (columns.length === 3) {
                    const newRow = tableBody.insertRow();
                    columns.forEach(col => {
                        const newCell = newRow.insertCell();
                        newCell.textContent = col;
                    });
                }
            });
        })
        .catch(error => console.error('Error fetching the price list:', error));
});
