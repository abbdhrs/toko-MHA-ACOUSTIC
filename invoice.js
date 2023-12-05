const namaPelanggan = JSON.parse(sessionStorage.getItem('namaPelanggan'));
const alamatPengiriman = JSON.parse(sessionStorage.getItem('alamatPengirim'));
const email = JSON.parse(sessionStorage.getItem('email'));
const telepon = JSON.parse(sessionStorage.getItem('telepon'));
let ongkir = JSON.parse(sessionStorage.getItem('ongkir'));
const bank = JSON.parse(sessionStorage.getItem('bank'));

let rekeningInfo;
let namaBank;

switch (bank) {
    case 'bca':
        namaBank = 'bank BCA';
        rekeningInfo = 'Bank BCA 238 080 156 4';
        break;
    case 'bni':
        namaBank = 'Bank BNI';
        rekeningInfo = 'Bank BNI 9871 2776 143';
        break;
    case 'mandiri':
        namaBank = 'Bank Mandiri';
        rekeningInfo = 'Bank Mandiri : 231 412 138 753 2';
        break;
    case 'bri':
        namaBank = 'Bank BRI';
        rekeningInfo = 'Bank BRI: 0069-01-876521-56-8';
        break;
    default:
        namaBank = 'Lainnya';
        rekeningInfo = 'Bank Lain : Nomor Rekening Lain';
}

const norek = JSON.parse(sessionStorage.getItem('norek'));
const namaRekening = JSON.parse(sessionStorage.getItem('namaRekening'));
const cabang = JSON.parse(sessionStorage.getItem('cabang'));
// Menampilkan data di elemen HTML
console.log(namaPelanggan + alamatPengiriman);
document.getElementById('invoice-nama').textContent = namaPelanggan;
document.getElementById('invoice-alamat').textContent = alamatPengiriman;
document.getElementById('invoice-email').textContent = email;
document.getElementById('invoice-telepon').textContent = telepon;
document.getElementById('invoice-rekening').textContent = rekeningInfo;
document.getElementById('invoice-bank').textContent = namaBank;
document.getElementById('invoice-rek').textContent = norek;
document.getElementById('invoice-pengirim').textContent = namaRekening;
document.getElementById('invoice-cabang').textContent = cabang;
document.getElementById('invoice-ongkir').textContent = `${ongkir.toLocaleString("id-ID")}`;
// Menampilkan Produk dari Keranjang Belanja
// Ambil daftar belanja dari Session Storage
const keranjangBelanja = JSON.parse(sessionStorage.getItem('keranjangBelanja'));

// Tampilkan daftar belanja pada halaman
const daftarKeranjang = document.getElementById('daftar-keranjang'); // di sini 
const totalBelanjanya = document.getElementById('total-belanjanya'); // di sini juga
let totalBelanja = 0;

keranjangBelanja.forEach((produk) => {
    const itemProduk = document.createElement('tr');
    const jumlahHarga = produk.jumlah * produk.harga;
    itemProduk.innerHTML = `
<td style='text-align: left; background-color: #FFF;
color: #000;'>${produk.nama}</td>
<td style='text-align: center; background-color: #fff;
color: #000;'>${produk.jumlah}</td>
<td style='text-align: right; background-color: #fff;
color: #000;'>Rp${produk.harga.toLocaleString("id-ID")}</td>
<td style='text-align: right; background-color: #fff;
color: #000;'>Rp${jumlahHarga.toLocaleString("id-ID")}</td>`;

    daftarKeranjang.appendChild(itemProduk);  //di sini
    totalBelanja += (produk.jumlah * produk.harga);
});

totalBelanjanya.textContent = `Rp${totalBelanja.toLocaleString("id-ID")}`;
const totalBayar = totalBelanja + Number(ongkir.toLocaleString("id-ID"));

console.log(typeof (Number(ongkir.toLocaleString("id-ID"))));
console.log(typeof (totalBelanja.toLocaleString("id-ID")));
console.log(typeof (totalBayar.toLocaleString("id-ID")));  //di sini

document.getElementById('invoice-total').textContent = `Rp${totalBayar.toLocaleString("id-ID")}`;
document.getElementById('total-bayar').textContent = `Rp${totalBayar.toLocaleString("id-ID")}`; //di sini


function cetakInvoice(cetakke) {
    var printContents = document.getElementById('cetakke').innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();
}

function selesai(){
    window.location.href="index.html";
}