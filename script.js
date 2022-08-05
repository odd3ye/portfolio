let users = [
    {
        id: 0,
        photo: "https://64.media.tumblr.com/2fcb8844ad62da0427be5c800a4fe023/cdd08bbabb95a36d-24/s540x810/1cee8722191accfd5e9cea07baa2f455f789f15c.jpg",
        username: "odd3ye",
        bio: "Sheeesh",
        fields: ["Editor"],
        edits: [
            //EDIIIIIITS
            "lWbGgPLhCDI",
            "1rgpk_OqfVA",
            "uue0nCuTjoI"
        ]
    },
]

function header(data) {
    document.getElementById("header").innerHTML = data.username + ".zip";
};

function profile(data) {
    const { id, photo, username, bio, fields } = data;
    //PROFILE PHOTO
    document.getElementById("profile-photo").src = photo;
    //username
    document.getElementById("username").innerHTML = username;
    //bio
    document.getElementById("bio").innerHTML = bio;
    //fields
    fields.map(function (val, index) {
        document.getElementById("fields").innerHTML += `<span class="text-muted">${val}</span>`;
    })
};

function content(data) {
    let edits = data.edits;
    edits.map(function (val) {
        document.getElementById("content").innerHTML += `
                <div class="col-md-4 col-sm-6 col-12 my-2">
                <a href="https://www.youtube.com/watch?v=${val}" >
                        <img src="https://img.youtube.com/vi/${val}/0.jpg" style="width: 100%; border: 1.5px solid black;" class="bg-white p-3">
                        </a>
                </div>`
    })
}
header(users[0])
profile(users[0]);
content(users[0]);
