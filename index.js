let content=document.getElementById("content")


let data= fetch("https://jsonplaceholder.typicode.com/posts")
.then(data => data.json())
.then(data => {
    let output = "<h2>Posts</h2>";
    data.forEach(post => {
        output += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
    });
    document.getElementById("content").innerHTML = output;
})   

content.innerHTML=data