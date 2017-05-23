export interface IDataService {
    getTodo();
    addTodo(todo: any);
    deleteTodo(todo: any);
    toggleTodo(todo: any);
    searchTodos(searchQuery: string);
}