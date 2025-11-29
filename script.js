function openSkill(skill) {
    const detail = document.getElementById("detail");

    const descriptions = {
        ctf: "CTF (Capture The Flag)\nMengembangkan kemampuan eksploitasi, analisis forensik, dan pemecahan masalah. Terbiasa menemukan FLAG pada kategori Web Exploitation, Cryptography, Forensics, dan Network Analysis.",
        pentest: "Pentesting\nMenguasai proses pengujian keamanan sistem mulai dari reconnaissance, scanning, enumeration, exploitation, sampai reporting.",
        ethical: "Ethical Hacking\nMemahami cara kerja serangan untuk memperkuat sistem dan meningkatkan pertahanan terhadap ancaman.",
        nmap: "Nmap\nMemetakan jaringan, mendeteksi port dan service terbuka, dan menemukan celah keamanan secara efektif.",
        wireshark: "Wireshark\nMenganalisis paket jaringan untuk investigasi aktivitas mencurigakan, troubleshooting, dan monitoring trafik.",
        networking: "Networking\nMenguasai konfigurasi router & switch (Cisco), VLAN, routing, subnetting dan keamanan jaringan dasar.",
        linux: "Kali Linux & Security Tools\nMenggunakan Kali Linux untuk penetration testing menggunakan tool seperti Metasploit, Nmap, Wireshark, dan Burp Suite."
    };

    detail.innerText = descriptions[skill];
    detail.style.display = "block";
    window.location.href = "#detail";
}
