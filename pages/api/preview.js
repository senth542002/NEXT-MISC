export default function handler(req, res) {

    res.setPreviewData({ user: 'Senthil'})
    res.redirect(req.query.redirect)
}