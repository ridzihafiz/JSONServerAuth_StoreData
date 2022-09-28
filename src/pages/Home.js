import axios from 'axios';

window.handleSubmit = function (event) {
  event.preventDefault();

  let nama_lengkap = event.target.nama_lengkap.value;
  let usia = event.target.usia.value;
  let alamat = event.target.alamat.value;
  let wali_murid = event.target.wali_murid.value;

  axios
    .post('https://vitejs-vite-wvcb5j--3000.local.webcontainer.io/siswa', {
      nama_lengkap,
      usia,
      alamat,
      wali_murid,
    })
    .then((res) => {
      console.info(res);
      alert('data successfully inputed');
      window.location.reload();
    })
    .catch((err) => {
      console.info(err);
    });
};

export default function Home() {
  return `
    <div>
      <h1>Pendaftaran Siswa Baru</h1>
      <form onsubmit="handleSubmit(event)">
        <div class="form_group">
          <label for="nama_lengkap">Nama Lengkap</label>
          <input type="text" id="nama_lengkap" required />
        </div>

        <div class="form_group">
          <label for="usia">Usia</label>
          <input type="number" id="usia" required />
        </div>

        <div class="form_group">
          <label for="alamat">Alamat</label>
          <textarea type="text" id="alamat" required> </textarea>
        </div>
        
        <div class="form_group">
          <label for="wali_murid">Wali Murid</label>
          <input type="text" id="wali_murid" required />
        </div>

        <button type="submit">Submit</button>
      </form>

      <a href="/datasiswa">Data Siswa</a>
    </div>
  `;
}
