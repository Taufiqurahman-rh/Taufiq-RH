// Data Deskripsi Skill
const skillDescriptions = {
  ctf: `
    <h3>CTF (Capture The Flag)</h3>
    <p>
      Aktif mengikuti dan mempelajari berbagai jenis CTF untuk meningkatkan kemampuan eksploitasi,
      analisis sistem, dan pemecahan masalah. Terbiasa menemukan <b>FLAG</b> pada kategori seperti
      <b>web exploitation, cryptography, forensic, reverse engineering,</b> dan <b>network analysis</b>.
    </p>
  `,

  pentest: `
    <h3>Pentest (Penetration Testing)</h3>
    <p>
      Menguasai proses pengujian keamanan sistem mulai dari <b>reconnaissance, scanning, enumeration,
      exploitation, privilege escalation, hingga reporting</b>. Berfokus mencari kerentanan dan menguji
      seberapa kuat pertahanan sistem.
    </p>
  `,

  ethical: `
    <h3>Ethical Hacking</h3>
    <p>
      Mempraktikkan teknik peretasan secara etis untuk memahami bagaimana serangan bekerja
      dan bagaimana memperkuat sistem dari ancaman dunia nyata. Berkomitmen pada prinsip legal dan etika.
    </p>
  `,

  nmap: `
    <h3>Nmap</h3>
    <p>
      Berpengalaman menggunakan <b>Nmap</b> untuk melakukan pemetaan jaringan, mendeteksi port dan service terbuka,
      version scanning, OS fingerprinting, serta mengidentifikasi celah keamanan tingkat awal.
    </p>
  `,

  wireshark: `
    <h3>Wireshark</h3>
    <p>
      Mampu melakukan analisis paket jaringan untuk troubleshooting, investigasi aktivitas mencurigakan,
      memahami pola komunikasi, dan mengungkap indikasi serangan menggunakan teknik deep packet inspection.
    </p>
  `,

  networking: `
    <h3>Networking (Cisco / Mikrotik)</h3>
    <p>
      Mampu mengkonfigurasi router & switch, VLAN, routing static/dynamic, subnetting, firewall basic,
      hingga keamanan jaringan dasar. Memahami struktur jaringan dan manajemen perangkat real environment.
    </p>
  `,

  linux: `
    <h3>Kali Linux & Security Tools</h3>
    <p>
      Terbiasa menggunakan <b>Kali Linux</b> sebagai sistem utama untuk analisis keamanan,
      termasuk tools seperti <b>Burp Suite, Metasploit, Nmap, Wireshark, SQLmap, Hydra, Aircrack-ng</b> dan lainnya.
    </p>
  `
};

// Event klik pada skill
const buttons = document.querySelectorAll(".skill");
const detailArea = document.getElementById("skillDetail");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-key");
    detailArea.innerHTML = skillDescriptions[key] || "Deskripsi tidak ditemukan.";
  });
});

// Mode terang / gelap
const btnMode = document.getElementById("btnMode");
btnMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnMode.textContent = document.body.classList.contains("dark") ? "🌙" : "🌤";
});

// Set tahun otomatis footer
document.getElementById("year").textContent = new Date().getFullYear();
