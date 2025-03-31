function getImageUrls() {
    // i give you an object, you give me an img url
    const newArray = statuses.map(wlater => wlater.image_url);
    newArray = newArray.filter(imgUrl => imgUrl !== undefined)
    return newArray;
}

const urls = getImageUrls();
console.log(urls);

// node *name of js file name* in bash

