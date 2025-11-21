const detailBox = document.getElementById("detail");

const skillDetail = {
    ethical: {
        title: "Ethical Hacking",
        text: `Mempraktikkan teknik peretasan secara etis untuk memahami bagaimana serangan
        bekerja dan bagaimana cara memperkuat pertahanan sistem. Fokus pada identifikasi
        celah keamanan dan cara mitigasinya tanpa merusak sistem.`
    },
    ctf: {
        title: "CTF (Capture The Flag)",
        text: `Sering mengikuti dan mempelajari berbagai jenis CTF untuk meningkatkan kemampuan
        eksploitasi, analisis sistem, dan pemecahan masalah. Terbiasa mencari FLAG pada kategori
        seperti web exploitation, cryptography, forensic, hingga network analysis.`
    },
    pentest: {
        title: "Pentesting",
        text: `Menguasai tahapan pengujian keamanan: reconnaissance, scanning, exploitation,
        privilege escalation hingga reporting. Menganalisis kerentanan dan memberikan rekomendasi
        perbaikan sistem.`
    },
    nmap: {
        title: "Nmap",
        text: `Berpengalaman menggunakan Nmap untuk memetakan jaringan, mendeteksi port dan
        service terbuka, fingerprinting sistem, hingga menemukan celah keamanan potensial.`
    },
    wireshark: {
        title: "Wireshark",
        text: `Mampu membaca dan menganalisis paket jaringan untuk troubleshooting,
        investigasi aktivitas mencurigakan, dan memahami pola komunikasi dalam jaringan.`
    },
    networking: {
        title: "Networking",
        text: `Berpengalaman dengan perangkat jaringan seperti router dan switch (Cisco).
        Memahami konsep VLAN, routing, subnetting, DNS, DHCP, keamanan jaringan dasar, dan
        konfigurasi perangkat.`
    },
    linux: {
        title: "Linux & Security Tools",
        text: `Menggunakan Kali Linux sebagai sistem utama untuk analisis keamanan, termasuk
        tools seperti Metasploit, Nmap, Wireshark, Nikto, SQLmap, dan Burp Suite.`
    }
};

function openSkill(key) {
    detailBox.style.display = "block";
    detailBox.innerHTML = `
        <h3>${skillDetail[key].title}</h3>
        <p>${skillDetail[key].text}</p>
    `;

    window.location.href = "#detail";  
}
