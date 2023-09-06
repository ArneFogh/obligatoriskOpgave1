document.getElementById('fetchButton').addEventListener('click', function () {
    fetchDropboxContents();
});

function fetchDropboxContents() {
    const accessToken = 'Fjernet...';
    const folderPath = '/Homework';

    fetch('https://api.dropboxapi.com/2/files/list_folder', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            path: folderPath,
            recursive: false,
            include_media_info: false,
            include_deleted: false,
            include_has_explicit_shared_members: false,
            include_mounted_folders: true,
        }),
    })
        .then(response => response.json())
        .then(data => {
        })
        .catch(error => {
            console.error('Fejl ved hentning af data fra Dropbox:', error);
        });
}

function displayDropboxContents(data) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; // Ryd tidligere resultater

    if (data.entries && data.entries.length > 0) {
        const fileList = document.createElement('ul');
        data.entries.forEach(entry => {
            const listItem = document.createElement('li');
            listItem.textContent = entry.name;
            fileList.appendChild(listItem);
        });
        resultContainer.appendChild(fileList);
    } else {
        resultContainer.textContent = 'Ingen filer eller mapper fundet i mappen.';
    }
}



