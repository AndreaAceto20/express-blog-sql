const posts = require("../data/postsData")

function index(req, res) {
    // errore di prova
    // throw new Error("Errore di test");
    res.json(posts);
}

function show(req, res) {
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);
    if (!post) {

        res.status(404);

        return res.json({
            error: "Non trovato",
            message: "Post non trovato"
        }
        )
    }
    res.json(post);
}

function store(req, res) {
    // const id = parseInt(req.params.id);
    // res.send("creazione nuovo post");

    // seleziono l'ultimo post dell'array
    const ultimoPost = posts[posts.length - 1];

    // prendo l'id
    const idUltimoPost = ultimoPost.id;

    // creo id per il nuovo post
    const nuovoId = idUltimoPost + 1;

    // creo nuovo post
    const nuovoPost = {
        id: nuovoId,
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        img: req.body.img,
        tags: req.body.tags,
    };

    posts.push(nuovoPost);

    console.log(posts);

    res.status(201);
    res.json(nuovoPost);

}

function update(req, res) {
    // res.send("modifica completa del post numero " + req.params.id)
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {

        res.status(404);

        return res.json({
            error: "Non trovato",
            message: "Post non trovato"
        }
        )
    }
    post.titolo = req.body.titolo;
    post.contenuto = req.body.contenuto;
    post.img = req.body.img;
    post.tags = req.body.tags;

    res.json(posts);


}

function modify(req, res) {
    // res.send("modifica parziale del post numero " + req.params.id);
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {

        res.status(404);

        return res.json({
            error: "Non trovato",
            message: "Post non trovato"
        }
        )
    }
    // versione estesa
    // if (req.body.titolo) {
    //     post.titolo = req.body.titolo
    // } else {
    //     post.titolo = post.titolo
    // }

    //versione compatta 
    req.body.titolo ? post.titolo = req.body.titolo : post.titolo = post.titolo;
    req.body.contenuto ? post.contenuto = req.body.contenuto : post.contenuto = post.contenuto;
    req.body.img ? post.img = req.body.img : post.img = post.img;
    req.body.tags ? post.tags = req.body.tags : post.tags = post.tags;
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {

        res.status(404);

        return res.json({
            error: "Non trovato",
            message: "Post non trovato"
        }
        )
    }

    posts.splice(posts.indexOf(post), 1)

    res.sendStatus(204)
    console.log(posts);


}


module.exports = { index, show, store, update, modify, destroy };