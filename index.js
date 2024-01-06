const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express()
const PORT = 8000;

// //Routes...
// app.get("/api/users", (req, res) => {
//     return res.json(users);
// })

//HTML document rendering...(server site generate page)
app.get("/users", (req, res) => {
    const HTML = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
})

//dynamic path parameters...
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(a => a.id = id)
    return res.json(user);
})

//post , patch, delete.. TODO stage
app.post("/api/users", (req, res) => {
    return res.json({ status: "pendding" });
})
app.patch("/api/users/:id", (req, res) => {
    return res.json({ status: "pendding" });
})
app.delete("/api/users", (req, res) => {
    return res.json({ status: "pendding" });
})


// all in one....
app.route("/api/users/:id").get((req, res) => {
    return res.json(users);
}).patch((req, res) => {
    return res.json({ status: "pendding" });
}).delete((req, res) => {
    return res.json({ status: "pendding" });
})


app.listen(PORT, () => console.log(`server stated at post :${PORT}`))