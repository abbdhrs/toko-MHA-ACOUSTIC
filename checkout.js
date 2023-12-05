const keranjangBelanja = JSON.parse(sessionStorage.getItem('keranjangBelanja'));
const daftarKeranjang = document.getElementById('daftar-keranjang');
const totalBelanjanya = document.getElementById('total-belanjanya');
let totalBelanja = 0;

keranjangBelanja.forEach((produk) => {
    const itemProduk = document.createElement('tr');
    const jumlahHarga = produk.jumlah * produk.harga;
    itemProduk.innerHTML = `
<td>${produk.nama}</td>
<td style='text-align: center;'>${produk.jumlah}</td>
<td style='text-align: right;'>Rp ${produk.harga.toLocaleString("id-ID")}</td>
<td style='text-align: right;'>Rp ${jumlahHarga.toLocaleString("id-ID")}</td>
`;
    daftarKeranjang.appendChild(itemProduk);
    totalBelanja += (produk.jumlah * produk.harga)
});
totalBelanjanya.textContent = `Rp ${totalBelanja.toLocaleString("id-ID")}`;

const daftarKeranjangBelanja = document.getElementById('daftar-keranjang-belanja');
const totalbelanjaElem = document.getElementById('total-belanja');
daftarKeranjangBelanja.innerHTML = '';
let total = 0;

keranjangBelanja.forEach((produk) => {
    const item = document.createElement('li');
    item.textContent = `${produk.nama} - ${produk.harga.toLocaleString("id-ID")} - ${produk.jumlah}`;
    daftarKeranjangBelanja.appendChild(item);
    total += (produk.jumlah * produk.harga);
})

totalbelanjaElem.textContent = `${total.toLocaleString("id-ID")}`;

function selesaikanPembayaran() {
    const namaPelanggan = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const rt = document.getElementById('rt').value;
    const rw = document.getElementById('rw').value;
    const desa = document.getElementById('desa').value;
    const kecamatan = document.getElementById('kecamatan').value;
    const kota = document.getElementById('kota').value;
    const kodepos = document.getElementById('kode-pos').value;
    const ongkir = document.getElementById('ongkir').value;
    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;
    const bank = document.getElementById('bank').value;
    const norek = document.getElementById('nomor-rekening').value;
    const namaRekening = document.getElementById('nama-rekening').value;
    const cabang = document.getElementById('cabang').value;




    sessionStorage.setItem('namaPelanggan', JSON.stringify(namaPelanggan));
    sessionStorage.setItem('alamatPengirim', JSON.stringify(alamat + ' Rt: ' + rt + ' Rw: ' + rw + ' Desa: ' + desa + ' Kecamatan: ' + kecamatan + ' Kota/Kab: ' + kota + ' Kodepos: ' + kodepos));
    sessionStorage.setItem('email', JSON.stringify(email));
    sessionStorage.setItem('telepon', JSON.stringify(telepon));
    sessionStorage.setItem('ongkir', JSON.stringify(ongkir));
    sessionStorage.setItem('bank', JSON.stringify(bank));
    sessionStorage.setItem('namaRekening', JSON.stringify(namaRekening));
    sessionStorage.setItem('cabang', JSON.stringify(cabang));
    sessionStorage.setItem('norek', JSON.stringify(norek));
    sessionStorage.setItem('nomor-rekening', JSON.stringify(namaRekening));
}