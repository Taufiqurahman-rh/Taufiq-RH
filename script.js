// script.js — interaksi skill + small UI tweaks
document.addEventListener('DOMContentLoaded', () => {
  // skill descriptions (pakai kata-kata kamu)
  const skills = {
    ctf: {
      title: "CTF (Capture The Flag)",
      text: "Sering bermain dan mempelajari berbagai jenis CTF untuk meningkatkan kemampuan eksploitasi, analisis sistem, dan pemecahan masalah. Terbiasa menemukan FLAG pada kategori web exploitation, cryptography, forensic, maupun network analysis."
    },
    pentest: {
      title: "Pentest (Penetration Testing)",
      text: "Menguasai proses pengujian keamanan sistem mulai dari reconnaissance, scanning, exploitation, hingga reporting untuk mengidentifikasi dan menilai kerentanan."
    },
    ethical: {
      title: "Ethical Hacking",
      text: "Mempraktikkan teknik peretasan secara etis untuk memahami bagaimana serangan bekerja dan bagaimana memperkuat pertahanan sistem dari ancaman."
    },
    nmap: {
      title: "Nmap",
      text: "Berpengalaman menggunakan Nmap untuk memetakan jaringan, mendeteksi port dan service terbuka, serta mengidentifikasi potensi celah keamanan."
    },
    wireshark: {
      title: "Wireshark",
      text: "Mampu melakukan analisis paket jaringan untuk troubleshooting, investigasi aktivitas mencurigakan, dan memahami pola komunikasi di dalam jaringan."
    },
    networking: {
      title: "Networking (Cisco, dll)",
      text: "Mampu mengkonfigurasi perangkat jaringan seperti router dan switch (Cisco), memahami konsep VLAN, routing, subnetting, hingga keamanan jaringan dasar."
    },
    linux: {
      title: "Kali Linux & Security Tools",
      text: "Terbiasa menggunakan Kali Linux sebagai sistem utama untuk analisis keamanan, termasuk tools seperti Metasploit, Nmap, Wireshark, dan Burp Suite."
    }
  };

  // handle skill clicks
  const skillEls = document.querySelectorAll('.skill');
  const detailArea = document.getElementById('skillDetail');

  function showDetail(key) {
    const data = skills[key];
    if (!data) return;
    detailArea.innerHTML = `
      <div class="detail-card">
        <h2>${data.title}</h2>
        <p>${data.text}</p>
        <p><strong>Kenapa saya tertarik:</strong> Saya percaya pemahaman mendalam terhadap teknik serangan membantu membangun pertahanan yang lebih kuat — pendekatan learning-by-doing melalui CTF dan lab praktis.</p>
      </div>
    `;
    // fokus ke detail + smooth
    detailArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  skillEls.forEach(el => {
    el.addEventListener('click', () => {
      const key = el.getAttribute('data-key');
      showDetail(key);
      // active visual
      skillEls.forEach(s => s.classList.remove('active'));
      el.classList.add('active');
    });
  });

  // set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // theme toggle
  const btnMode = document.getElementById('btnMode');
  btnMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnMode.textContent = document.body.classList.contains('dark') ? '🌙' : '🌤';
  });

  // keyboard: tekan 1..7 untuk open skill cepat (opsional)
  const keys = ['ctf','pentest','ethical','nmap','wireshark','networking','linux'];
  window.addEventListener('keydown', (e) => {
    if (e.key >= '1' && e.key <= '7') {
      const idx = parseInt(e.key,10) - 1;
      const k = keys[idx];
      if (k) {
        const el = document.querySelector(`.skill[data-key="${k}"]`);
        if (el) el.click();
      }
    }
  });
});
