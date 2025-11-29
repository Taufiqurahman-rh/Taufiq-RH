document.addEventListener("DOMContentLoaded", () => {

  // ======================= SKILL DESCRIPTIONS =========================
  const skills = {
    ctf: {
      title: "CTF (Capture The Flag)",
      text:
        "Saya sering bermain dan mempelajari berbagai kategori CTF seperti Web Exploitation, Cryptography, Forensic, hingga Network Security. Bermain CTF membantu saya memahami bagaimana kerentanan bekerja dan cara menemukan FLAG melalui teknik eksploitasi dan analisis sistem."
    },
    pentest: {
      title: "Pentest (Penetration Testing)",
      text:
        "Berpengalaman melakukan pengujian keamanan untuk mengidentifikasi celah sistem melalui tahapan reconnaissance, scanning, exploitation, dan reporting untuk menemukan serta menilai tingkat risiko pada sistem."
    },
    ethical: {
      title: "Ethical Hacking",
      text:
        "Menerapkan teknik hacking secara legal dan etis untuk meningkatkan keamanan sistem. Memahami bagaimana serangan bekerja agar dapat membuat pertahanan yang lebih kuat dan efektif."
    },
    nmap: {
      title: "Nmap",
      text:
        "Menggunakan Nmap untuk scanning jaringan, service enumeration, hingga deteksi kerentanan awal melalui informasi port dan sistem yang terbuka."
    },
    wireshark: {
      title: "Wireshark",
      text:
        "Menganalisa traffic jaringan untuk mendeteksi aktivitas mencurigakan, troubleshooting koneksi, dan memahami pola komunikasi dalam jaringan."
    },
    networking: {
      title: "Networking (Cisco, Mikrotik, dll)",
      text:
        "Mampu mengkonfigurasi jaringan, router, switch, firewall, memahami VLAN, subnetting, routing protocol, dan teknik pengamanan jaringan dasar."
    },
    linux: {
      title: "Kali Linux & Security Tools",
      text:
        "Terbiasa menggunakan Kali Linux dan berbagai tools seperti Metasploit, Burp Suite, Nmap, Hydra, John The Ripper, dan Wireshark untuk analisis keamanan sistem."
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
        <p><strong>Alasan saya tertarik bidang ini:</strong> Karena memahami cara kerja serangan dan celah keamanan adalah fondasi penting untuk membangun sistem yang kuat dan aman.</p>
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

  // ======================== DARK MODE ================================
  const btnMode = document.getElementById("btnMode");
  btnMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnMode.textContent = document.body.classList.contains("dark") ? "🌙" : "🌤";
  });

});
