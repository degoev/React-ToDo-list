
let CreateTodoItem = (label) => {
     return (
         {
             label,
             id: `${label}${+(new Date())}`,
             important: false,
             done: false
         }
     );
 };

const showByFilter = (items, filter) => {
     switch (filter) {
         case 'all':
             return items;
         case 'active':
             return items.filter((item) => !item.done);

         case 'done':
             return items.filter((item) => item.done);

         default:
             return items;
     }
 };

const search = (items, value) => {
     if (value === '') {
         return items;
     }
     return items.filter((item) => {
         return item.label.indexOf(value) > -1;
     });
 };

const toggleUpdate = (state, id, taskState) => {
     let todoData = state.todoData.slice();
     let index = todoData.findIndex((item) => item.id === id);
     let item = JSON.parse(JSON.stringify(todoData[index]));
     item[taskState] = !item[taskState];
     return {
          ...state,
          todoData: [...todoData.slice(0, index), item, ...todoData.slice(index + 1)]
      };
};

const deleteItem = (state, id) => {
     let arr = state.todoData.slice();
     let index = arr.findIndex((item) => item.id === id);
     arr.splice(index, 1);
     return {
          ...state,
          todoData: arr
     };
};

const addItem = (state, label) => {
         let arr = state.todoData.slice();
         return {
              ...state,
             todoData: [...arr, CreateTodoItem(label)]
         };
 };
 
 let init = CreateTodoItem('ваша первая задача.');

 let initialState = {
     todoData: [
          init
      ],
      visibleItems: [
          init
      ],
      term: '',
      filter: 'all',
      error: false
};


const reducer = (state = initialState, action) => {
     switch(action.type){
          case "TOGGLED_DONE":
               return toggleUpdate(state, action.payload, "done");

          case "TOGGLED_IMPORTANT":
               return toggleUpdate(state, action.payload, "important");

          case "FILTER_CLICKED":
               return {
                    ...state,
                    visibleItems: showByFilter(state.todoData, action.payload),
                    filter: action.payload
               };

          case "TYPED_IN_SEARCH_INPUT":
               return {
                    ...state,
                    visibleItems: search(state.todoData, action.payload)
               };

          case "ITEM_DELETED":
               return deleteItem(state, action.payload);

          case "ITEM_ADDED":
               return addItem(state, action.payload);
          
          case "ERROR":
               return {
                    ...state,
                    error: action.payload
               };
     
          default:
               return state;

     }
};

export default reducer;
