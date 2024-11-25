document.getElementById('upload-photo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('image-preview');
    const message = document.getElementById('upload-message');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.style.display = 'none'; 
    }
});


document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('upload-photo');
    const message = document.getElementById('upload-message');


    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        message.textContent = `Picture uploaded successfully: ${fileName}`;
        message.style.color = 'green';
        message.textContent = 'Please select a picture to upload.';
        message.style.color = 'red';
    }

    document.getElementById('uploadForm').reset();
    document.getElementById('image-preview').style.display = 'none'; 
});