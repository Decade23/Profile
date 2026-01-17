/* eslint-disable @next/next/no-html-link-for-pages */

export default function Privacy() {
    return (
        <main style={{ fontFamily: "sans-serif", lineHeight: 1.6, padding: 16, maxWidth: 800, margin: "auto" }}>
            <h1 style={{ color: "#1a73e8" }}>Kebijakan Privasi</h1>
            <p>Terakhir diperbarui: 10 Agustus 2025</p>

            <p>
                Askum ("kami") menghargai privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan,
                menggunakan, dan melindungi informasi Anda saat menggunakan aplikasi.
            </p>

            <h2 style={{ color: "#1a73e8" }}>Informasi yang Kami Kumpulkan</h2>
            <ul>
                <li>
                    <strong>Informasi Akun:</strong> Jika Anda mendaftar/login, kami dapat mengumpulkan nama dan alamat email Anda.
                </li>
                <li>
                    <strong>Data Transaksi:</strong> Deskripsi, jumlah, dan jenis transaksi yang Anda simpan di aplikasi.
                </li>
                <li>
                    <strong>Data Perangkat:</strong> Informasi teknis perangkat (model, OS, versi aplikasi) untuk keperluan analitik
                    dan pelaporan bug (Crashlytics).
                </li>
            </ul>

            <h2 style={{ color: "#1a73e8" }}>Penggunaan Informasi</h2>
            <ul>
                <li>Menyediakan dan meningkatkan layanan aplikasi.</li>
                <li>Menganalisis penggunaan aplikasi untuk perbaikan fitur (Firebase Analytics).</li>
                <li>Mendeteksi dan memperbaiki masalah teknis (Firebase Crashlytics).</li>
            </ul>

            <h2 style={{ color: "#1a73e8" }}>Pembagian Data</h2>
            <p>
                Kami dapat membagikan data dengan pihak ketiga terpercaya, seperti Google Firebase, hanya untuk tujuan analitik dan
                perbaikan layanan.
            </p>

            <h2 style={{ color: "#1a73e8" }}>Penyimpanan & Keamanan Data</h2>
            <p>
                Data Anda disimpan dengan langkah keamanan yang wajar dan hanya selama diperlukan untuk tujuan yang dijelaskan di
                sini.
            </p>

            <h2 style={{ color: "#1a73e8" }}>Hak Anda</h2>
            <p>
                Anda berhak mengakses, memperbarui, atau menghapus data Anda. Hubungi kami untuk permintaan ini.
            </p>

            <h2 style={{ color: "#1a73e8" }}>Cara Menghapus Akun</h2>
            <p>
                Jika Anda ingin menghapus akun Askum Anda, kirim permintaan ke{" "}
                <a href="mailto:dedif15@gmail.com">dedif15@gmail.com</a> dengan subjek "Hapus Akun". Tim kami akan
                memproses permintaan Anda dalam waktu maksimal 7 hari kerja, dan semua data yang terkait dengan akun Anda akan
                dihapus secara permanen.
            </p>

            <h2 style={{ color: "#1a73e8" }}>Perubahan Kebijakan</h2>
            <p>
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan dipublikasikan di halaman ini
                atau melalui tautan resmi:{" "}
                <a href="https://dedi.asia/privacy" target="_blank" rel="noopener noreferrer">
                    https://dedi.asia/privacy
                </a>
                .
            </p>

            <h2 style={{ color: "#1a73e8" }}>Kontak</h2>
            <p>
                Jika Anda memiliki pertanyaan, silakan hubungi kami di{" "}
                <a href="mailto:dedif15@gmail.com">dedif15@gmail.com</a>.
            </p>
        </main>
    );
}
