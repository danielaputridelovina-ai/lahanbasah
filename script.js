// ======================================
// ARRAY OF OBJECTS
// Data perjalanan karier
// ======================================

const careerData = [

    {
        nomor: "01",
        judul: "Awal Perjalanan",
        deskripsi:
            "Perjalanan seorang artis dapat dimulai dari minat, latihan, dan keberanian menunjukkan kemampuan kepada publik."
    },

    {
        nomor: "02",
        judul: "Pengembangan Karya",
        deskripsi:
            "Konsistensi dalam berkarya membantu membangun karakter, pengalaman, dan identitas seorang artis."
    },

    {
        nomor: "03",
        judul: "Berinteraksi dengan Penggemar",
        deskripsi:
            "Media digital dapat digunakan untuk berbagi aktivitas, karya, dan berkomunikasi dengan penggemar."
    }

];


// ======================================
// MANIPULASI DOM
// Menampilkan data karier
// ======================================

const careerList =
    document.getElementById("careerList");


if (careerList) {

    careerData.forEach((item) => {

        const article =
            document.createElement("article");

        article.className =
            "career-item";


        article.innerHTML = `

            <h3>
                ${item.nomor}.
                ${item.judul}
            </h3>

            <p>
                ${item.deskripsi}
            </p>

        `;


        careerList.appendChild(article);

    });

}


// ======================================
// MODE GELAP
// EVENT CLICK
// ======================================

const modeButton =
    document.getElementById("modeButton");


if (modeButton) {

    modeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );


            // Percabangan if/else

            if (
                document.body.classList.contains(
                    "dark"
                )
            ) {

                modeButton.textContent =
                    "Mode Terang";

            } else {

                modeButton.textContent =
                    "Mode Gelap";

            }

        }
    );

}


// ======================================
// FORM KOMENTAR
// EVENT SUBMIT
// ======================================

const commentForm =
    document.getElementById("commentForm");


if (commentForm) {

    commentForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const nama =
                document.getElementById(
                    "nama"
                ).value.trim();


            const komentar =
                document.getElementById(
                    "komentar"
                ).value.trim();


            const result =
                document.getElementById(
                    "commentResult"
                );


            // Percabangan

            if (
                nama === "" ||
                komentar === ""
            ) {

                result.textContent =
                    "Nama dan komentar harus diisi.";

                return;

            }


            // Menampilkan hasil
            // secara dinamis

            result.innerHTML = `

                <strong>
                    Terima kasih, ${nama}!
                </strong>

                <br>

                Komentar Anda:
                "${komentar}"

            `;


            // Mengosongkan form

            commentForm.reset();

        }
    );

}