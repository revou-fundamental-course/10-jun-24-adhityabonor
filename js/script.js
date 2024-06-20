// Ini Javascript
// Fungsi untuk konversi Celcius ke Fahrenheit
function convertCelsiusToFahrenheit() {
    var celsius = document.getElementById('inputCelcius').value;
    if (isNaN(celsius) || celsius.trim() === '') {
        document.getElementById('outputFahrenheit').value = "Not Working";
        document.getElementById('formula').value = "Not Working";
        alert('Input Tidak Valid (Periksa kembali input anda)');
        return;
    }
    celsius = parseFloat(celsius);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('outputFahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('formula').value = `(${celsius} °C × 9/5) + 32 = ${fahrenheit.toFixed(2)} °F`;
}

// Fungsi untuk konversi Fahrenheit ke Celcius
function convertFahrenheitToCelsius() {
    var fahrenheit = document.getElementById('outputFahrenheit').value;
    if (isNaN(fahrenheit) || fahrenheit.trim() === '') {
        document.getElementById('inputCelcius').value = "Not Working";
        document.getElementById('formula').value = "Not Working";
        alert('Input Tidak Valid (Periksa kembali input anda)');
        return;
    }
    fahrenheit = parseFloat(fahrenheit);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('inputCelcius').value = celsius.toFixed(2);
    document.getElementById('formula').value = `(${fahrenheit} °F - 32) × 5/9 = ${celsius.toFixed(2)} °C`;
}

// Fungsi untuk mereset nilai semua textbox
function resetValues() {
    document.getElementById('inputCelcius').value = '';
    document.getElementById('outputFahrenheit').value = '';
    document.getElementById('formula').value = '';
}

// Tambahkan event listener ke tombol konversi Celsius ke Fahrenheit
document.getElementById('convertButton').addEventListener('click', convertCelsiusToFahrenheit);

// Tambahkan event listener ke tombol konversi Fahrenheit ke Celsius
document.getElementById('convertReverse').addEventListener('click', convertFahrenheitToCelsius);

// Tambahkan event listener ke tombol reset
document.getElementById('resetButton').addEventListener('click', resetValues);