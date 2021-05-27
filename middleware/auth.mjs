// Auth MIddlware to validate sessions

function sessionValid (req, res, next) {
  const userId = req.signedCookies.user_id
  if (userId) {
    next()
  } else {
    res.redirect('/login')
  }
}

const auth = {
  sessionValid: sessionValid
}

export default auth
