const color = {
    body: 'blue',
    div: 'cyan',
    span: 'gold',
    p: 'red',
    ul: 'orange',
    ol: 'purple',
    form: 'magenta',
    default: 'grey',
    getColor(tag) {
        return this[tag] ? this[tag] : this.default
    }
}
document.querySelectorAll('.tag').forEach(tag => {
    const tagName = tag.tagName.toLowerCase()

    tag.style.borderColor = color.getColor(tagName)
    if(!tag.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = color.getColor(tagName)
        label.innerHTML = tagName
        tag.insertBefore(label, tag.childNodes[0])
    }
})