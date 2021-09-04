module.exports = {
    get_item__with__two_letter_uuid(source) {
        return source.substr(2, source.length)
    },

    get_item__with__three_letter_uuid(source) {
        return source.substr(3, source.length)
    },

    get_item__with__four_letter_uuid(source) {
        return source.substr(4, source.length)
    },

    get_item__with__five_letter_uuid(source) {
        return source.substr(5, source.length)
    }
}