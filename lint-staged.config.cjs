module.exports = {
    "*.{js,ts,vue,less,css}": [
        "eslint --ext .js,.vue --ignore-path .gitignore --fix src",
        "prettier --write",
        "stylelint \"./**/*.{css,less,vue,html}\" --fix"
    ]
}
