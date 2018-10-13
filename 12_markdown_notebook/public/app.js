console.log('app started')

const html = marked('***BOld** *Italic* [link](http://themwebs.me)')

new Vue({
    el: '#notebook',
    data() {
        return {
            content: localStorage.getItem('content') || 'You can write in **markdown**',
            notes: [],
            items: [],
            selectedId: null
        }
    },
    created() {
        // set content to the stored value
        this.content = localStorage.getItem('content') || 'You can write in **markdown**'
    },
    computed: {
        notePreview() {
            // Markdown rendered to HTML
            return this.selectedNote ? marked(this.selectedNote.content) : ''
        },
        addButtonTitle() {
            return this.notes.length + ' note(s) already'
        },
        selectedNote() {
            // return the matching note with selectedId
            return this.notes.find(note => note.id === this.selectedId)
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
        saveNote(val) {
            console.log('saving note: ', this.content)
            localStorage.setItem('content', this.content)
            this.reportOperation('saving', val)
        },
        reportOperation(opName) {
            console.log('The ', opName, ' operation was completed!')
        },
        addNote() {
            const time = Date.now()
            // Default new note
            const note = {
                id: String(time),
                title: 'New note ' + (this.notes.length + 1),
                content: '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
                created: time,
                favorite: false,
            }
            // Add to the list
            this.notes.push(note)
        },
        selectNote(note) {
            this.selectedId = note.id
        }
    }
})

console.log('restored note:', localStorage.getItem('content'))