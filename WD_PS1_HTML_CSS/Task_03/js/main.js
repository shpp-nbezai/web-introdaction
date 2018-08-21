getYear();

function getYear() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth().toString().padStart ( 2, '0' );
    let day = date.getDate().toString().padStart ( 2, '0' );
    document.getElementById('year-span').innerHTML = year.toString();
    document.getElementById('date-span').innerHTML = day + "/" + month;
}