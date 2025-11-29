function openSkill(skill) {
    const detail = document.getElementById("detail");

    const descriptions = {
        ethical: "Memahami metode peretasan secara etis untuk melindungi sistem dari serangan dan memperkuat keamanan.",
        ctf: "Sering bermain CTF untuk melatih kemampuan exploit, cryptography, forensic, network analysis, dan menemukan FLAG.",
        pentest: "Melakukan penetration testing mulai dari reconnaissance, scanning, exploitation hingga reporting untuk menemukan celah keamanan.",
        nmap: "Menguasai Nmap untuk scanning jaringan, deteksi port/service, serta identifikasi kerentanan.",
        wireshark: "Menganalisis paket jaringan untuk investigasi aktivitas mencurigakan dan troubleshooting jaringan.",
        networking: "Menguasai jaringan, routing, VLAN, subnetting, konfigurasi router & switch (Cisco) dan keamanan jaringan.",
        linux: "Terbiasa menggunakan Kali Linux serta tools keamanan seperti Metasploit, Burp Suite, Wireshark, dll."
    };

    detail.innerHTML = `<h3>${skill.toUpperCase()}</h3><p>${descriptions[skill]}</p>`;
}
