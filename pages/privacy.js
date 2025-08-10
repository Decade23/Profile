import Head from "next/head";

export default function Privacy() {
    const updatedAt = "10 Agustus 2025";
    const title = "Kebijakan Privasi - Askum";
    const description =
        "Kebijakan Privasi Askum: penjelasan tentang data yang kami kumpulkan, gunakan, dan bagaimana kami melindunginya.";

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href="https://dedi.asia/privacy" />
                {/* Open Graph / Twitter */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content="https://dedi.asia/privacy" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
            </Head>

            <main>
                <h1>Kebijakan Privasi</h1>
                <p><em>Terakhir diperbarui: {updatedAt}</em></p>

                <p>
                    Askum ("kami") menghargai privasi Anda. Kebijakan ini menjelaskan
                    bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi
                    Anda saat menggunakan aplikasi.
                </p>

                <h2>Informasi yang Kami Kumpulkan</h2>
                <ul>
                    <li>
                        <strong>Informasi Akun:</strong> Jika Anda mendaftar/login, kami
                        dapat mengumpulkan nama dan alamat email Anda.
                    </li>
                    <li>
                        <strong>Data Transaksi:</strong> Deskripsi, jumlah, dan jenis
                        transaksi yang Anda simpan di aplikasi.
                    </li>
                    <li>
                        <strong>Data Perangkat:</strong> Informasi teknis perangkat (model,
                        OS, versi aplikasi) untuk keperluan analitik dan pelaporan bug
                        (Crashlytics).
                    </li>
                </ul>

                <h2>Penggunaan Informasi</h2>
                <ul>
                    <li>Menyediakan dan meningkatkan layanan aplikasi.</li>
                    <li>
                        Menganalisis penggunaan aplikasi untuk perbaikan fitur (Firebase
                        Analytics).
                    </li>
                    <li>
                        Mendeteksi dan memperbaiki masalah teknis (Firebase Crashlytics).
                    </li>
                </ul>

                <h2>Pembagian Data</h2>
                <p>
                    Kami dapat membagikan data dengan pihak ketiga tepercaya, seperti
                    Google Firebase, hanya untuk tujuan analitik dan perbaikan layanan.
                </p>

                <h2>Penyimpanan &amp; Keamanan Data</h2>
                <p>
                    Data Anda disimpan dengan langkah keamanan yang wajar dan hanya
                    selama diperlukan untuk tujuan yang dijelaskan di sini.
                </p>

                <h2>Hak Anda</h2>
                <p>
                    Anda berhak mengakses, memperbarui, atau menghapus data Anda. Hubungi
                    kami untuk permintaan ini.
                </p>

                <h2>Cara Meminta Penghapusan Akun</h2>
                <p>
                    Jika Anda ingin menghapus akun dan seluruh data terkait, silakan
                    kirim permintaan melalui email ke{" "}
                    <a href="mailto:dedif15@gmail.com">dedif15@gmail.com</a> dengan subjek
                    <strong> "Hapus Akun Askum"</strong>.
                    Tim kami akan memproses permintaan Anda maksimal 7 hari kerja dan
                    mengonfirmasi melalui email.
                </p>
                <p>
                    Pastikan Anda menggunakan alamat email yang sama dengan yang terdaftar
                    di aplikasi untuk memverifikasi identitas.
                </p>

                <h2>Perubahan Kebijakan</h2>
                <p>
                    Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
                    Perubahan akan dipublikasikan di halaman ini.
                </p>

                <h2>Kontak</h2>
                <p>
                    Jika Anda memiliki pertanyaan, silakan hubungi kami di{" "}
                    <a href="mailto:dedif15@gmail.com">dedif15@gmail.com</a>.
                </p>
            </main>

            <style jsx>{`
                main {
                    max-width: 820px;
                    margin: 0 auto;
                    padding: 24px 16px 64px;
                    line-height: 1.7;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
                    Arial, sans-serif;
                }
                h1,
                h2 {
                    color: #1a73e8;
                }
                a {
                    color: #1a73e8;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
                ul {
                    padding-left: 20px;
                }
            `}</style>
        </>
    );
}
