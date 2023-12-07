import { fetchPosts } from "../utils/fetchPosts.js";

//get data from localStorage 
const loggedUser = localStorage.getItem("loggedUser");

//redirect user to login if localStorage doesn't exist
// if(!loggedUser) {
//     window.location.href = "../pages/login.html";
// }

//get posts from async fetchPosts function 
let posts = await fetchPosts();

const postsDiv = document.getElementById("posts");
console.log(posts);

//create posts form api
function showPosts(postsArr) {
    postsDiv.innerHTML = "";

    for(let x in postsArr) {
        const postObj = postsArr[x];

        const postDiv = document.createElement("div");
        const postDivTitle = document.createElement("div");
        const postBodyDiv = document.createElement("div");
        const postIdSpan = document.createElement("span");
        const postImg = document.createElement("img");

       // const skeletonContainer = document.createElement("div");
        const skeletonTitle = document.createElement("div");
        const skeletonBody = document.createElement("div");
        

        const postDivTitleParagraph = document.createElement("p");
        
        postDiv.classList.add("post");
        postDivTitle.classList.add("post__title");
        postBodyDiv.classList.add("post__body");
        postIdSpan.classList.add("post-id");
        postImg.classList.add("points");
        
        postDivTitleParagraph.classList.add("post__title--text");

        postImg.src = "../assets/icons/points.png";
        
        postDivTitleParagraph.textContent = postObj.title;
        postBodyDiv.textContent = postObj.body;
        postIdSpan.textContent = `Post id: ${postObj.id}`;

        postDivTitle.append(postDivTitleParagraph);
        postDiv.append(postDivTitle);
        postDiv.append(postBodyDiv);
        postDiv.append(postIdSpan);
        postDiv.append(postImg);

        postsDiv.append(postDiv);
    }
}

showPosts(posts);