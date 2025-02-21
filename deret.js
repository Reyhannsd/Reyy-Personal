// Fungsi untuk menghitung deret aritmatika
function calculateArithmaticSequence() {
    let a = parseFloat(document.getElementById("firstTerm").value);
    let d = parseFloat(document.getElementById("difference").value);
    let n = parseInt(document.getElementById("numberOfTerms").value);

    if (isNaN(a) || isNaN(d) || isNaN(n) || n <= 0) {
        document.getElementById("arithmaticResult").innerText = "Masukkan nilai yang valid!";
        return;
    }

    // Rumus jumlah deret aritmatika: S_n = n/2 * (2a + (n - 1) * d)
    let sum = (n / 2) * (2 * a + (n - 1) * d);
    document.getElementById("arithmaticResult").innerText = `Jumlah deret Aritmatika: ${sum}`;
}

// Fungsi untuk menghitung deret geometri
function calculateGeometricSequence() {
    let a = parseFloat(document.getElementById("firstTermGeo").value);
    let r = parseFloat(document.getElementById("ratio").value);
    let n = parseInt(document.getElementById("numberOfTermsGeo").value);

    if (isNaN(a) || isNaN(r) || isNaN(n) || n <= 0) {
        document.getElementById("geometricResult").innerText = "Masukkan nilai yang valid!";
        return;
    }

    // Rumus jumlah deret geometri: S_n = a * (1 - r^n) / (1 - r) jika r != 1
    let sum;
    if (r === 1) {
        sum = a * n;
        document.getElementById("geometricResult").innerText = `Jumlah deret Geometri (r=1): ${sum}`;
    } else {
        sum = a * (1 - Math.pow(r, n)) / (1 - r);
        document.getElementById("geometricResult").innerText = `Jumlah deret Geometri: ${sum}`;
    }
}