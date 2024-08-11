// Definisi class Siswa
class Siswa {
    constructor(nama, kelas, nilaiUjian, nilaiRataUjian, naikKelas, ranking) {
        this.nama = nama;
        this.kelas = kelas;
        this.nilaiUjian = nilaiUjian;
        this.nilaiRataUjian = nilaiRataUjian;
        this.naikKelas = naikKelas;
        this.ranking = ranking;
    }
}

// Data rapor sekolah
const dataRaporSekolah = [
    new Siswa("John", "10A", { matematika: 90, ipa: 90, ips: 50, bahasa: 70, komputer: 100 }, 0, true, 0),
    new Siswa("Budi", "10A", { matematika: 20, ipa: 60, ips: 50, bahasa: 80, komputer: 90 }, 0, true, 0),
    // Tambahkan data siswa lainnya sesuai kebutuhan
];

// Fungsi untuk mencari nilai mapel tertentu di atas nilai tertentu
function searchNilaiMapel(array, mapel, nilai) {
    return array.filter(siswa => siswa.nilaiUjian[mapel] > nilai);
}

// Menggunakan fungsi searchNilaiMapel
const topNilaiIpa = searchNilaiMapel(dataRaporSekolah, 'ipa', 75);
console.log("Siswa dengan nilai IPA di atas 75:");
console.log(topNilaiIpa);

// Mengurutkan data siswa berdasarkan nama
const sortedDataRapor = dataRaporSekolah.sort((a, b) => a.nama.localeCompare(b.nama));
console.log("Data siswa yang diurutkan berdasarkan nama:");
console.log(sortedDataRapor);
