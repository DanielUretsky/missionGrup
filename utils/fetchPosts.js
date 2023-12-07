export const fetchPosts = async () => {
    const posts = new Promise((res) => {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
       
        xhr.onload = function() {
            const response = JSON.parse(this.responseText);
            res(response);
        }

        xhr.send();
    });
    return posts;
}