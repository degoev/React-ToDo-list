const toggledDone = (id) => {
     return {
          type: "TOGGLED_DONE",
          payload: {id, taskState: "done"}
     };
};

const toggledImportant = (id) => {
     return { 
          type: "TOGGLED_IMPORTANT",
          payload: {id, taskState: "important"}
     };
};

const filterClicked = (filter) => {
     return {
          type: "FILTER_CLICKED",
          payload: filter
     };
};

const typedInSearch = (value) => {
     return {
          type: "TYPED_IN_SEARCH_INPUT",
          payload: value
     };
};

const addItem = (value) => {
     return {
          type: "ITEM_ADDED",
          payload: value
     };
};

const deleteItem = (id) => {
     return {
          type: "ITEM_DELETED",
          payload: id
     };
};

const throwError = (err) => {
     return {
          type: "ERROR",
          payload: err
     };
};

export { toggledDone, 
     toggledImportant, 
     filterClicked, 
     typedInSearch, 
     addItem, deleteItem, throwError  };
