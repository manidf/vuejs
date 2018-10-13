console.log('app started')

const html = marked('***BOld** *Italic* [link](http://themwebs.me)')

new Vue({
    el: '#notebook',
    data() {
        return {
            content: localStorage.getItem('content') || 'You can write in **markdown**',
            notes: JSON.parse(localStorage.getItem('notes')) || [],
            items: [],
            selectedId: localStorage.getItem('selected-id') || null
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
        notes: {
            // We need this to watch each note's properties inside the array
            handler: 'saveNotes',
            deep: true
        },
        content: {
            // Watching content data property
            handler: 'saveNote',
            immediate: true
        },
        selectedId(val) {
            localStorage.setItem('selected-id', val)
        }
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
        },
        saveNotes() {
            // convert to JSON before storing
            localStorage.setItem('notes', JSON.stringify(this.notes))
            console.log('Notes saved!', new Date())
        }
    }
})

console.log('restored note:', localStorage.getItem('content'))