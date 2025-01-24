const POST_URL = "https://jsonplaceholder.typicode.com/posts/1";
const USER_URL = "https://jsonplaceholder.typicode.com/users/1";
const COMMENT_URL = "https://jsonplaceholder.typicode.com/comments/1";

const myFetchUrls = (url) => {
    return fetch(url)
        .then((data) => {
            data.json();
            console.log(data.json());
        })
        .catch((error) => console.log(error));
};

const postCall = myFetchUrls(POST_URL);
console.log(postCall.then((data) => {
    console.log(data);
}));