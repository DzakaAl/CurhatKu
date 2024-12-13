const express = require('express');

exports.informasi = (req, res) => {
    const data = {
      judul: "Tentang Kesehatan Mental",
      tanggal_diperbarui: "11 November 2021",
      isi: "Kesehatan mental adalah aspek yang penting dalam kehidupan yang sering kali diabaikan. Kesehatan mental yang baik adalah kondisi di mana seseorang merasa damai dan tenang secara emosional. Kondisi ini memungkinkan individu untuk menikmati kehidupan sehari-hari, mengelola stres, dan menjalin hubungan yang sehat dengan orang lain di sekitar mereka. Seseorang yang memiliki kesehatan mental yang baik dapat menghadapi tantangan hidup dengan cara yang konstruktif, memanfaatkan potensi mereka secara maksimal, serta memiliki kemampuan untuk mengatasi tekanan dalam kehidupan sosial maupun pekerjaan. Sebaliknya, gangguan kesehatan mental dapat mengganggu kualitas hidup seseorang, menyebabkan kesulitan dalam menjalani aktivitas sehari-hari, merusak hubungan sosial, dan bahkan menurunkan produktivitas kerja. Beberapa gangguan kesehatan mental yang umum adalah stres, kecemasan (anxiety), dan depresi. Gangguan ini dapat berdampak besar pada fisik, emosi, dan kemampuan seseorang untuk berfungsi secara normal. Oleh karena itu, menjaga kesehatan mental melalui pola hidup sehat, dukungan sosial, dan mencari bantuan profesional sangatlah penting. Selain itu, kesehatan mental juga sangat dipengaruhi oleh faktor eksternal seperti pekerjaan, pendidikan, dan lingkungan sosial. Dengan memperhatikan keseimbangan emosional, pola tidur yang baik, serta kegiatan yang dapat meredakan stres, kita dapat mencegah atau mengurangi gangguan kesehatan mental. Gejala Umum Gangguan Kesehatan Mental: 1. Stres: Perasaan tertekan, kelelahan, dan ketegangan yang berlangsung lama. 2. Kecemasan: Perasaan takut atau khawatir berlebihan yang mengganggu aktivitas sehari-hari. 3. Depresi: Kehilangan minat pada kehidupan, perasaan sedih, dan kesulitan menjalani aktivitas. Pentingnya Kesehatan Mental: Memelihara kesehatan mental adalah kunci untuk menjalani kehidupan yang seimbang dan produktif. Ini mencakup kemampuan untuk merespons tantangan hidup dengan cara yang sehat dan membangun hubungan yang mendukung di sekitar kita."
    };
    res.json(data);
  };

exports.ciri = (req, res) => {
    const data = {
      judul: "Ciri-ciri Gejala Stres, Kecemasan, dan Depresi",
      tanggal_diperbarui: "8 Desember 2024",
      isi: {
        stres: "Stres adalah respons tubuh terhadap tekanan fisik atau emosional yang muncul dalam kehidupan sehari-hari. Gejala stres dapat bervariasi tergantung pada intensitas dan durasi stres tersebut. Berikut adalah beberapa gejala yang sering terjadi pada seseorang yang mengalami stres: - Fisik: Sakit kepala, ketegangan otot, gangguan pencernaan (seperti mual, perut kembung), detak jantung tidak teratur, dan kelelahan fisik. - Emosional: Mudah marah, perasaan cemas, bingung, atau merasa kewalahan dengan tugas yang ada. - Kognitif: Kesulitan berkonsentrasi, membuat keputusan, atau merasa tidak mampu menyelesaikan masalah. - Perilaku: Perubahan kebiasaan tidur (insomnia atau tidur berlebihan), pola makan yang tidak teratur, serta kebiasaan buruk seperti merokok atau minum alkohol untuk mengatasi stres. Stres yang berlangsung lama dapat mempengaruhi kesehatan fisik dan mental secara keseluruhan, sehingga penting untuk mengelola stres secara tepat waktu.",
        kecemasan: "Kecemasan adalah perasaan khawatir atau takut yang berlebihan terhadap situasi atau kejadian yang belum tentu terjadi. Kecemasan yang berlebihan dapat mengganggu kehidupan sehari-hari dan menyebabkan kesulitan dalam menjalani aktivitas normal. Beberapa gejala kecemasan meliputi: - Fisik: Detak jantung cepat atau tidak teratur, berkeringat, sesak napas, atau tremor (gemetar). - Emosional: Perasaan gelisah, takut, atau tidak aman tanpa alasan yang jelas. - Kognitif: Pikiran yang berulang dan cemas tentang masa depan atau situasi yang tidak pasti, perasaan tidak bisa mengendalikan situasi. - Perilaku: Menghindari situasi atau tempat tertentu yang menyebabkan kecemasan, atau kesulitan untuk fokus pada pekerjaan atau kegiatan lainnya. Jika kecemasan terus-menerus muncul, hal ini dapat mengarah pada gangguan kecemasan yang lebih serius, yang mempengaruhi kualitas hidup seseorang.",
        depresi: "Depresi adalah gangguan suasana hati yang ditandai dengan perasaan sedih, hampa, atau tidak berharga yang berlangsung lama. Depresi dapat memengaruhi banyak aspek kehidupan, mulai dari kemampuan untuk bekerja hingga hubungan sosial. Beberapa gejala depresi meliputi: - Fisik: Kehilangan energi atau kelelahan, gangguan tidur (insomnia atau tidur berlebihan), dan penurunan atau peningkatan nafsu makan. - Emosional: Perasaan tidak berharga, kesedihan mendalam, atau perasaan terisolasi dan kesepian. - Kognitif: Kesulitan berkonsentrasi, mengambil keputusan, atau merasa bahwa hidup tidak ada artinya. - Perilaku: Kehilangan minat dalam aktivitas yang biasanya dinikmati, seperti hobi atau kegiatan sosial. Jika depresi tidak segera ditangani, hal ini dapat menyebabkan dampak yang lebih serius, termasuk keinginan untuk bunuh diri. Oleh karena itu, penting untuk segera mencari dukungan dan bantuan medis."
      }
    };
    res.json(data);
  };

exports.solusi = (req, res) => {
    const data = {
      judul: "Solusi Mengatasi Stres, Kecemasan, dan Depresi",
      tanggal_diperbarui: "8 Desember 2024",
      isi: {
        stres: "Mengelola stres adalah langkah pertama untuk mengurangi dampaknya terhadap kehidupan sehari-hari. Berikut adalah beberapa solusi untuk mengatasi stres: 1. Identifikasi Penyebab Stres: Cari tahu apa yang menjadi penyebab stres dan tentukan solusi yang paling efektif untuk menghadapinya. 2. Relaksasi: Cobalah teknik pernapasan dalam, meditasi, yoga, atau teknik relaksasi lainnya yang dapat menenangkan tubuh dan pikiran. 3. Olahraga: Aktivitas fisik seperti berjalan kaki, berlari, atau olahraga ringan dapat mengurangi ketegangan dan meningkatkan mood. 4. Tidur yang Cukup: Pastikan Anda mendapatkan cukup tidur, karena kurang tidur dapat memperburuk stres. 5. Dukungan Sosial: Berbicara dengan teman atau keluarga yang dapat memberikan dukungan emosional. Jika stres terus berlanjut dan tidak dapat dikelola, pertimbangkan untuk berbicara dengan seorang profesional untuk mendapatkan dukungan lebih lanjut.",
        kecemasan: "Untuk mengatasi kecemasan, berikut adalah beberapa pendekatan yang bisa diterapkan: 1. Mindfulness: Cobalah untuk fokus pada saat ini dan tidak terlalu khawatir tentang masa depan. Teknik mindfulness dapat membantu menenangkan pikiran. 2. Pernapasan Dalam: Latihan pernapasan dalam dapat membantu mengurangi gejala fisik kecemasan seperti detak jantung cepat. 3. Menghindari Kafein dan Alkohol: Kafein dan alkohol dapat memperburuk kecemasan, jadi penting untuk mengurangi konsumsi keduanya. 4. Jadwal Teratur: Menjaga rutinitas harian yang terstruktur dapat memberikan rasa kontrol dan mengurangi kecemasan. 5. Berkonsultasi dengan Profesional: Jika kecemasan tidak teratasi, berbicaralah dengan seorang psikolog atau psikiater untuk mendapatkan terapi atau pengobatan yang diperlukan.",
        depresi: "Mengatasi depresi membutuhkan pendekatan yang lebih komprehensif dan mendalam. Beberapa solusi untuk mengatasi depresi antara lain: 1. Berbicara dengan Profesional: Konsultasi dengan psikolog atau psikiater sangat penting dalam menangani depresi. Terapi kognitif perilaku (CBT) atau pengobatan bisa menjadi pilihan yang efektif. 2. Tetapkan Tujuan Kecil: Fokus pada pencapaian tujuan kecil setiap hari untuk merasa lebih bermanfaat dan mengurangi perasaan tidak berharga. 3. Aktivitas Fisik: Olahraga ringan seperti berjalan kaki dapat membantu meningkatkan suasana hati dan energi. 4. Dukungan Sosial: Berbicara dengan orang terdekat atau bergabung dengan grup dukungan dapat membantu mengurangi rasa kesepian. 5. Pengobatan: Jika diperlukan, dokter dapat meresepkan antidepresan atau obat lainnya untuk membantu mengatasi gejala depresi."
      }
    };
    res.json(data);
  };