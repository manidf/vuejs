console.log('app started')

const html = marked('***BOld** *Italic* [link](http://themwebs.me)')

new Vue({
    el: '#notebook',
    data () {
        return {
            content: 'This is a **note** yeah boy!'
        }
    },
    computed: {
        notePreview () {
            return marked(this.content)
        }
    },
    watch: {
        // Watching content data property
        content: {
            handler: 'saveNote'
        },
        immediate: true
    },
    methods: {
        saveNote (val) {
            console.log('saving note: ', this.content)
            localStorage.setItem('content', this.content)
            this.reportOperation('saving')
        },
        reportOperation (opName) {
            console.log('The ', opName, ' operation was completed!')
        }
    }
})

console.log('restored note:', localStorage.getItem('content'))