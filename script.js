document.addEventListener("DOMContentLoaded", () => {

  // ======================= SKILL DESCRIPTIONS =========================
  const skills = {
    ctf: {
      title: "CTF (Capture The Flag)",
      text:
        "Sering bermain dan mempelajari berbagai jenis CTF untuk meningkatkan kemampuan eksploitasi, analisis sistem, dan pemecahan masalah. Terbiasa menemukan FLAG pada kategori web exploitation, cryptography, forensic, maupun network analysis."
    },
    pentest: {
      title: "Pentest (Penetration Testing)",
      text:
        "Menguasai proses pengujian keamanan sistem mulai dari reconnaissance, scanning, exploitation, hingga reporting untuk mengidentifikasi dan menilai kerentanan."
    },
    ethical: {
      title: "Ethical Hacking",
      text:
        "Mempraktikkan teknik peretasan secara etis untuk memahami bagaimana serangan bekerja dan bagaimana memperkuat pertahanan sistem dari ancaman."
    },
    nmap: {
      title: "Nmap",
      text:
        "Berpengalaman menggunakan Nmap untuk memetakan jaringan, mendeteksi port dan service terbuka, serta mengidentifikasi potensi celah keamanan."
    },
    wireshark: {
      title: "Wireshark",
      text:
        "Mampu melakukan analisis paket jaringan untuk troubleshooting, investigasi aktivitas mencurigakan, dan memahami pola komunikasi di dalam jaringan."
    },
    networking: {
      title: "Networking (Cisco, Mikrotik, dll)",
      text:
        "Mampu mengkonfigurasi perangkat jaringan seperti router dan switch, memahami konsep VLAN, routing, subnetting, hingga keamanan jaringan dasar."
    },
    linux: {
      title: "Kali Linux & Security Tools",
      text:
        "Terbiasa menggunakan Kali Linux sebagai sistem utama untuk analisis keamanan, termasuk tools seperti Metasploit, Nmap, Wireshark, dan Burp Suite."
    }
  };

  // ===================================================================
  const skillButtons = document.querySelectorAll(".skill");
  const detailArea = document.getElementById("skillDetail");

  function showDetail(key) {
    const s = skills[key];
    detailArea.innerHTML = `
      <div class="detail-card">
        <h2>${s.title}</h2>
        <p>${s.text}</p>
        <p><strong>Kenapa saya tertarik:</strong> Karena pemahaman mendalam tentang bagaimana serangan bekerja memberikan fondasi kuat dalam membangun pertahanan yang efektif.</p>
      </div>
    `;
    detailArea.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  skillButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      skillButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.getAttribute("data-key");
      showDetail(key);
    });
  });

  // ======================= FOOTER YEAR AUTO =========================
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ======================= DARK MODE ================================
  const btnMode = document.getElementById("btnMode");
  btnMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnMode.textContent = document.body.classList.contains("dark") ? "🌙" : "🌤";
  });

});
