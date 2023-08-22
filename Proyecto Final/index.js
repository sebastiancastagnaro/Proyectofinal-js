const albumForm = document.getElementById('album-form');
const albumTitleInput = document.getElementById('album-title');
const albumsList = document.getElementById('albums-list');

// Función para agregar un álbum a la lista
function addAlbumToList(albumTitle) {
    const albumItem = document.createElement('div');
    albumItem.classList.add('mb-2');
    albumItem.textContent = albumTitle;
    albumsList.appendChild(albumItem);
}

// Manejador de evento para el envío del formulario
albumForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const albumTitle = albumTitleInput.value;
    if (albumTitle.trim() !== '') {
        addAlbumToList(albumTitle);
        albumTitleInput.value = '';
    }
});

// Cargar álbumes guardados en el localStorage y mostrarlos
document.addEventListener('DOMContentLoaded', function () {
    const savedAlbums = JSON.parse(localStorage.getItem('albums')) || [];
    savedAlbums.forEach(function (album) {
        addAlbumToList(album);
    });
});
