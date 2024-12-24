document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const query = document.getElementById('searchInput').value.toLowerCase().trim();

    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

    const pages = isHomePage
        ? [
              { title: 'Home', url: 'index.html', keywords: ['home', 'paradigm', 'pet care'] },
              { title: 'Cats', url: 'pages/cats.html', keywords: ['cats', 'kittens', 'feline'] },
              { title: 'Dogs', url: 'pages/dogs.html', keywords: ['dogs', 'puppies', 'canine'] },
              { title: 'Birds', url: 'pages/birds.html', keywords: ['birds', 'avian', 'parrot'] },
              { title: 'Fish', url: 'pages/fish.html', keywords: ['fish', 'aquarium', 'marine', 'saltwater', 'freshwater'] },
              { title: 'Small Animals', url: 'pages/small-animals.html', keywords: ['hamsters', 'guinea pigs', 'gerbils', 'chinchillas', 'small pets'] }
          ]
        : [
              { title: 'Home', url: '../index.html', keywords: ['home', 'paradigm', 'pet care'] },
              { title: 'Cats', url: 'cats.html', keywords: ['cats', 'kittens', 'cat'] },
              { title: 'Dogs', url: 'dogs.html', keywords: ['dogs', 'puppies', 'k9'] },
              { title: 'Birds', url: 'birds.html', keywords: ['birds', 'feather', 'parrot'] },
              { title: 'Fish', url: 'fish.html', keywords: ['fish', 'aquarium', 'marine', 'saltwater', 'freshwater'] },
              { title: 'Small Animals', url: 'small-animals.html', keywords: ['hamsters', 'guinea pigs', 'gerbils', 'chinchillas', 'small pets', 'snakes'] }
          ];

    const match = pages.find(page =>
        page.title.toLowerCase().includes(query) || page.keywords.some(keyword => keyword.includes(query))
    );

    if (match) {
        window.location.href = match.url;
    } else {
        alert('No results found for your search. Please try another keyword.');
    }
});
