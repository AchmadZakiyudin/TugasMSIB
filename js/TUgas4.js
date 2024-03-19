let frm = document.getElementById('pegawai');
let jabatanpilihan = ["Manager", "Asisten Manager", "Staff"];
let pilihJabatan = `<option value=""> Pilih Jabatan -----</option>`;
for (let p in jabatanpilihan){
    pilihJabatan += `<option value="${jabatanpilihan[p]}">${jabatanpilihan[p]}</option>`;
}

frm.jabatan.innerHTML = pilihJabatan;

let statuspilihan = ["Menikah", "Belum Menikah"];
let pilihStatus = `<option value=""> Pilih Status -----</option>`;
for (let p in statuspilihan){
    pilihStatus += `<option value="${statuspilihan[p]}">${statuspilihan[p]}</option>`;
}
frm.status.innerHTML = pilihStatus;

function hitunganGaji(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

    let gajipokok;
    switch(jabatan){
        case 'Manager': gajipokok = 15000000; break;
        case 'Asisten Manager' : gajipokok = 10000000; break;
        case 'Staff' : gajipokok = 5000000; break;
    }

    let tunjanganJabatan = gajipokok * 0.15;
    let bpjs = gajipokok * 0.1;
    let tunjanganKeluarga = (status === "Menikah") ? gajipokok * 0.2 : 0;
    let totalGaji = gajipokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

    swal.fire({
        title: "Detail Gaji Pegawai",
        html: `<table border="1">
        <thead>
            <tr>
                <th>Nama Pegawai</th>
                <th>Jabatan</th>
                <th>Status</th>
                <th>Gaji Pokok</th>
                <th>Tunjangan Jabatan</th>
                <th>BPJS</th>
                <th>Tunjangan Keluarga</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${nama}</td>
                <td>${jabatan}</td>
                <td>${status}</td>
                <td>${gajipokok}</td>
                <td>${tunjanganJabatan}</td>
                <td>${bpjs}</td>
                <td>${tunjanganKeluarga}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="6">totalGaji</td>
                <td>${totalGaji}</td>
            </tr>
        </tfoot>
    </table>`,
    icon: "succes"
    });
}