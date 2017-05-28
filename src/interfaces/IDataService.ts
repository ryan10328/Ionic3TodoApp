export interface IDataService {
    getTodo();
    addTodo(todo: any);
    deleteTodo(todo: any);
    toggleTodo(todo: any);
    searchTodos(searchQuery: string);
}

export abstract class BaseDataService {
    abstract getTodo();
    abstract addTodo(todo: any);
    abstract deleteTodo(todo: any);
    abstract toggleTodo(todo: any);
    abstract searchTodos(searchQuery: string);
}