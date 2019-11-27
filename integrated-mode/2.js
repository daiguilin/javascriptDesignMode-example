const MacroCommand = function () {
    return {
        lists: [],
        add: function (task) {
            this.lists.push(task)
        },
        excute: function () {
            for (let i = 0; i < this.lists[i]; i++) {
                this.lists[i].excute()
            }
        }
    }
}

const command1 = new MacroCommand();

command1.add({
    excute: () => console.log('煮咖啡')

})

const command2 = MacroCommand() // 组合对象

command2.add({
    excute: () => console.log('打开电视')
})

command2.add({
    excute: () => console.log('打开音响')
})

const command3 = MacroCommand()

command3.add({
    excute: () => console.log('打开空调')
})

command3.add({
    excute: () => console.log('打开电脑')
})

const macroCommand = MacroCommand()
macroCommand.add(command1)
macroCommand.add(command2)
macroCommand.add(command3)
console.log(macroCommand, 'macroCommand')
macroCommand.excute()