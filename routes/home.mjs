// Home Page

function getHome (req, res) {
  res.view('home/home')
}

export default function (app, opts, done) {
  // Home
  app.get('/home', getHome)

  done()
}
