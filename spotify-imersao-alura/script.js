  const searchInput = document.getElementById('search-input');
  const resultsArtists = document.getElementById('result-artists');
  const resultPlaylists = document.getElementById('result-playlists');

  function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
      .then(response => response.json())
      .then(result => displayResults(result));
  }

  function displayResults(results) {
    resultPlaylists.classList.add('hidden');
    resultsArtists.innerHTML = ''; // Limpar resultados anteriores

    results.forEach(element => {
      const artistName = document.createElement('p');
      artistName.innerText = element.name;

      const artistImage = document.createElement('img');
      artistImage.src = element.urling;

      const artistContainer = document.createElement('div');
      artistContainer.appendChild(artistName);
      artistContainer.appendChild(artistImage);

      resultsArtists.appendChild(artistContainer);
    });

    resultsArtists.classList.remove('hidden');
  }

  document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
      resultPlaylists.classList.add('hidden');
      resultsArtists.classList.remove('hidden');
      return;
    }

    requestApi(searchTerm);
  });
