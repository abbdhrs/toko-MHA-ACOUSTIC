function tampilkanDetailProduk(namaProduk, hargaProduk, detailProduk, gambarProduk) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
     <div class="popup-content">
        <span class="popup-close"
        onclick="tutupPopup()">&times;</span><img src="${gambarProduk}"
       alt="${namaProduk}">
             <h2>${namaProduk}</h2>
             <p class="price">harga: ${hargaProduk}</p>
             <p>${detailProduk}</p>
             <button class="tombol-beli">Beli Sekarang</button>

      </div>
      `;
      // Tambahkan notifikasi/popup kebody
      document.body.appendChild(popup);
}

function tutupPopup() {
  const popup = document.querySelector('.popup');
  if (popup) {
      document.body.removeChild(popup);
  }
}
/*
function filterKategori(kategori) {
  const produk = document.querySelectorAll('#produk');
  for(const produktem of produk) {
      const kategoriProduk = produkItem.getAttribute('data-kategori');
      if(kategori === 'all' || kategori === kategoriProduk) {
          produkItem.style.display = 'block';
      }else {
          produkItem.style.display = 'none';
      }
  }
}
*/

function filterKategori(kategori){
  const produk = document.querySelectorAll('#product');
  for(const produkItem of produk){
      const kategoriProduk = produkItem.getAttribute('data-kategori');
    if(kategori == 'all'|| kategori === kategoriProduk){
      produkItem.style.display = 'block';
    }else{
      produkItem.style.display = 'none';
    }
  }
}

function cariBarang() {
  const inputPencarian = document.getElementById('cariBarang');
  const kataKunci = inputPencarian.value.toLowerCase();
  const produk = document.querySelectorAll('#product');
  for (const produkItem of produk) {
      const namaProduk = produkItem.querySelector('h3').textContent.toLowerCase();
      const deskripsiProduk = produkItem.querySelector('p').textContent.toLowerCase();
      if (namaProduk.includes(kataKunci) || deskripsiProduk.includes(kataKunci)) {
          produkItem.style.display = 'block';
      } else {
          produkItem.style.display = 'none';
      }
  }
}

const keranjang= [];
const totalBelanja= 0;

function tambahkanProdukKeKeranjang(namaProduk, harga) {
  let produkDiTemukan = false;

  for (let i = 0; i < keranjang.length; i++) {
      if (keranjang[i].nama === namaProduk) {
          keranjang[i].jumlah++;
          produkDiTemukan = true;
          break;
      }
  }
  if (!produkDiTemukan) {
      keranjang.push({ nama: namaProduk, harga: harga, jumlah: 1 })
  }
  updateKeranjang()
}

function updateKeranjang(){
  const daftarKeranjang= document.getElementById('daftar-keranjang');
  const totalBelanjaElem= document.getElementById('total-belanja');

  daftarKeranjang.innerHTML = '';
  let total= 0;
  keranjang.forEach((produk) => {
      const item= document.createElement('li');
      item.textContent= `${produk.nama} - Rp ${produk.harga.toLocaleString("id-ID")} - ${produk.jumlah}  `;

      daftarKeranjang.appendChild(item);
      total += (produk.jumlah * produk.harga);
  });

  totalBelanjaElem.textContent = `Rp ${total.toLocaleString("id-ID")}`;
  sessionStorage.setItem('keranjangBelanja', JSON.stringify(keranjang))
}

function checkout(){
  window.location.href="checkout.html";
  //implementasi proses checkout (misalnya, pembayaran dan pengiriman)

  //Anda dapat menambahkan kode sesuai kebutuhan.
}




// Ambil daftar belanja dari session storage
const keranjangBelanja = JSON.parse(sessionStorage.getItem('keranjangBelanja'));

// Tampilkan daftar belanja pada halaman
const daftarKeranjang = document.getElementById('daftar-keranjang');
const totalBelanjanya = document.getElementById('total-belanjanya');

keranjangBelanja.forEach((produk) => {
  const itemProduk = document.createElement('tr');
  itemProduk.innerHTML = `
  <td>${produk.nama}</td>
  <td>${produk.jumlah}</td>
  <td>$${produk.harga}</td>
  <td>$${produk.jumlah * produk.harga}</td>`;
  daftarKeranjang.appendChild(itemProduk);
  totalBelanja += (produk.jumlah * produk.harga);
});
  totalBelanja.textContent = `$${totalBelanja.toFixed(2)}`;

