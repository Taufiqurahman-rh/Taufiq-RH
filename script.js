function showDetail(skill) {
    const details = {
        ethical: "<h2>Ethical Hacking</h2><p>Memahami cara kerja serangan dan menerapkannya secara etis untuk meningkatkan keamanan sistem. Berfokus pada menganalisis celah, meningkatkan pertahanan, dan mempelajari teknik serangan modern.</p>",
        ctf: "<h2>CTF (Capture The Flag)</h2><p>Aktif mempelajari CTF untuk meningkatkan kemampuan eksploitasi, pemecahan masalah, analisis kerentanan, forensic, dan network analysis. Terbiasa menemukan FLAG di berbagai kategori.</p>",
        pentest: "<h2>Pentesting</h2><p>Menguasai tahapan pengujian keamanan mulai dari reconnaissance, scanning, exploitation, hingga reporting untuk menilai dan mengevaluasi celah keamanan sistem.</p>",
        nmap: "<h2>Nmap</h2><p>Mampu melakukan pemetaan jaringan, scanning port, pendeteksian service, dan analisis potensi kerentanan menggunakan Network Mapper (Nmap).</p>",
        wireshark: "<h2>Wireshark</h2><p>Mampu menganalisis paket jaringan untuk troubleshooting, investigasi intrusi, dan memahami komunikasi pada level protokol jaringan.</p>",
        networking: "<h2>Networking</h2><p>Mampu mengkonfigurasi router dan switch (Cisco), memahami VLAN, subnetting, routing, dan keamanan jaringan dasar.</p>",
        linux: "<h2>Kali Linux & Security Tools</h2><p>Terbiasa menggunakan Kali Linux dalam operasi keamanan serta tools seperti Metasploit, Burp Suite, Wireshark, dan Nmap.</p>"
    };

    const box = document.getElementById("detail-box");
    box.innerHTML = details[skill];
    box.classList.remove("hidden");
}
