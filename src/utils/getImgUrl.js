function getImgUrl(name){
    return new URL(`../assets/books/${name}`,import.meta.url)
}
export {getImgUrl}  // export the function to be used in other files