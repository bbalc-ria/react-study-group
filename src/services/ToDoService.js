class ToDoService {

    IsUnique(item, items) {
        if (item.title) {

            var existingName = items.find((toDoItem) => {
                return toDoItem.title.toLowerCase() === item.title.toLowerCase();
            });

            if (!existingName) {
                return true;
            }
        }

        return false;
    }

    GenerateNextId(toDoItems) {
        var items = [...toDoItems];
        items.sort((first, second) => (first.id < second.id) ? -1 : 1);

        if (items.length === 0) {
            return 1;
        }
        else {
            return items[items.length - 1].id + 1;
        }
    }
};

export default ToDoService;