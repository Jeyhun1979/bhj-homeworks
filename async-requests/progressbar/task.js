document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('file');
    formData.append("file", fileInput.files[0]);

    const xhr = new XMLHttpRequest();
    const progress = document.getElementById('progress');

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload", true);

    xhr.upload.addEventListener("progress", function (e) {
        if (e.lengthComputable) {
            const percent = (e.loaded / e.total) * 100;
            progress.value = percent;
        }
    });

    xhr.onload = function () {
        if (xhr.status === 200) {
            alert("Файл успешно загружен!");
        } else {
            alert("Ошибка загрузки файла.");
        }
    };

    xhr.onerror = function () {
        alert("Произошла ошибка при загрузке файла.");
    };
    
    xhr.send(formData);
});
