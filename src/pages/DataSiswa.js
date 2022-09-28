import axios from 'axios';
const app = document.getElementById('app');
/* 
async function getDataSiswa() {
  let allComponent = [];
  let getData = await axios.get(
    'https://vitejs-vite-wvcb5j--3000.local.webcontainer.io/siswa'
  );
  // console.log(getData.data);

  let storeComponent = await getData.data.forEach((e) => {
    // gambar component yg akan di render
    allComponent.push(`
      <div class="card">
        <p> ${e.nama_lengkap} </p>
        <p> ${e.usia} </p>
      </div>
    `);
  });

  // console.info(allComponent);
  return allComponent;
}

export default function DataSiswa() {
  return `
  <div>
    <h1>Data Siswa SMK Bojongkulur </h1>
    
    <div id="cardContainer">
      ${getDataSiswa().then((com) => {
        return com.join('');
      })}
    </div>
  </div>
  
  `; */

// Delete student
window.handleDelete = (id) => {
  axios
    .delete(
      'https://vitejs-vite-ooczrz--3000.local.webcontainer.io/siswa/' + id
    )
    .then((res) => {
      if (res.status == 200) {
        alert('deleted data');
        window.location.reload();
      }
    });
};

// Edit student
window.handleEdit = (data) => {
  app.innerHTML += `
  <div class='modal'>
    <form>
      <div>
        <label for='nama_lengkap'>nama lengkap</label>
        <input type='text' value='${data.nama_lengkap}' id='nama_lengkap' />
      </div>

      <div>
        <label for='usia'>usia</label>
        <input type='text' value='${data.usia}' id='usia' />
      </div>
    </form>
  </div>
  `;
};

export default function DataSiswa() {
  axios
    .get('https://vitejs-vite-ooczrz--3000.local.webcontainer.io/siswa')
    .then((res) => {
      app.innerHTML += '<h1>Data Siswa</h1>';
      res.data.map((e) => {
        app.innerHTML += `
          <div class='card'>
            <h3>${e.nama_lengkap}</h3>
            <p>usia : ${e.usia} th</p>
            <button onclick='handleDelete(${e.id})'>delete</button>
            <button onclick='handleEdit(${JSON.stringify(e)})'>update</button>
          </div>
        `;
      });
      app.innerHTML += '<a href="/">Kembali</a>';
    });
}
