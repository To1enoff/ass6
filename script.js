async function searchBooks() {
    const apiKey = 'your_api_key';
    const author = 'Stephen King'; // Change to any author name you want to search for
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = ""; // Clear previous results
    
    try {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${author}&api-key=${apiKey}`);
        const data = await response.json();
        const reviews = data.results;

        if (reviews.length === 0) {
            searchResults.innerHTML = "<p>No reviews found.</p>";
        } else {
            reviews.forEach(review => {
                searchResults.innerHTML += `<p>Title: ${review.book_title}, Review: ${review.summary}</p>`;
            });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        searchResults.innerHTML = "<p>Error fetching data. Please try again later.</p>";
    }
}