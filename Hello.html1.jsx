<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selamat Ulang Tahun, Muhammad Alfan!</title>
    <!-- Link ke CDN Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="birthday-container text-center">
        <!-- Foto Ulang Tahun -->
        <div class="photo-section">
            <img src="img/apan 2.jpg" alt="Foto Muhammad Alfan" class="profile-photo rounded-circle">
        </div>
        
        <!-- Nama dan Pesan Ucapan -->
        <div class="message-section mt-4">
          <h2 class="fw-normal">Hari ini, 13 Oktober 2024</h2>
            <h1 class="fw-bold">Selamat Ulang Tahun!</h1>
            <h2 class="fw-light">Muhammad Alfan Ersianov Firdaus Sukandar</h2>
        
        </div>
<style>
    body {/* Background dengan gradient pastel */
body {
    background: linear-gradient(135deg, #ffd1a9, #a4f4dc);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-family: 'Helvetica Neue', sans-serif;
}

/* Container untuk keseluruhan kartu ulang tahun */
.birthday-container {
    background-color: #9ec2eb;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(59, 134, 69, 0.1);
    max-width: 1500px;
}

/* Gaya untuk foto profil */
.profile-photo {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
}

/* Kejutan pesan (hidden) */
.hidden {
    display: none;
}
}
</style>
        <!-- Tombol Kejutan -->
        <button id="surpriseButton" class="btn btn-primary mt-3">Open Your Surprise!!</button>
            
    </button>
        <!-- Pesan Kejutan Tersembunyi -->
        <div id="surpriseMessage" class="hidden mt-4">
            <h3>🎉 Kejutan Khusus! 🎉</h3>
            <p>Terima kasih banyak telah datang dikehidupan nasa inii yaaa. Semoga ulang tahunmu hari ini selalu dipenuhi dengan tawa dan kebahagiaan . i Lovee uu acumm sayangg! 😘</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
