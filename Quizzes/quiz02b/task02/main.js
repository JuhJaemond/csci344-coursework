const ENDPOINT_WIKIPEDIA = "https://en.wikipedia.org/api/rest_v1/page/summary";

async function getWikipediaArticle(searchTerm) {
    const url = `${ENDPOINT_WIKIPEDIA}?term=${searchTerm}`;
    try {
        const response = await fetch(url);
        if(!response.ok) throw new error(`HTTPS error! Staus: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }

}

// takes searchTerm as an argument 
// return data obj that contains wiki info pertaining to search
//  should query https://en.wikipedia.org/api/rest_v1/page/summary/<some_search_term> 



function dataToHTML(wikiArticle) {
 return `
    <section>

    </section>
     `
}



// Uncomment these functions when you're ready to test:
testGetWikipediaArticles(); // Part A
// testDisplayArticles(); // Part B





// Please do not modify the testGetWikipediaArticles() function
async function testGetWikipediaArticles() {
    const western = await getWikipediaArticle("Western Carolina University");
    const unca = await getWikipediaArticle("UNC Asheville");
    const app = await getWikipediaArticle("Appalachian State");
    const charlotte = await getWikipediaArticle("UNC Charlotte");
    console.log(western);
    console.log(unca);
    console.log(app);
    console.log(charlotte);
    return [western, unca, app, charlotte];
}

// Please do not modify the testDisplayArticles() function
async function testDisplayArticles() {
    const container = document.querySelector("#wiki-previews");
    const pages = await testGetWikipediaArticles();
    pages.forEach((page) => {
        container.insertAdjacentHTML("beforeend", dataToHTML(page));
    });
}
