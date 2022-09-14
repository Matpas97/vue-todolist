// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)



// Vue

var app = new Vue(
    {
        el: '#root',
        data: {
            toDoText:'',
            todos: [
        
        {
            text: 'andare al teatro',
            done: true,
        },

        {
            text:'andare al cinema',
            done: false,
        },

        {
            text:' mettere la crema solare',
            done: false,
        },

       {    text:' scattare una foto alla sabbia',
            done: false,
        },

        {
            text:"tuffarsi dall' alto",
            done:true,
        },

        {
            text:" camminare in riva al mare",
            done: true,
        },
    ]
},
        methods:{
            removeToDo(todoindex) {
                console.log(todoindex);
                this.todos.splice(todoindex,1);
            },
            
           addNewToDoText() {
                if(this.toDoText.length > 0) {
                    const newTodo = {
                        text: this.toDoText,
                        done: false,
                    }
                    this.todos.push(newTodo);
                    // svuoto la input
                    this.toDoText = '';
                }
            }, 

            }

    }

    
    );