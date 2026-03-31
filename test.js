class Stack {
    constructor() {
        this.items = []
    }

    // Adiciona um elemento ao topo da pilha
    push(element) {
        this.items.push(element)
    }

    // Remove um elemento do topo da pilha
    pop() {
        return this.items.pop()
    }

    // Exibe no elemento que está no topo
    peek() {
        return this.items[this.items.length - 1]
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.items.length === 0
    }

    // Verifica o tamanho da pilha
    size() {
        return this.items.length
    }

    // Limpa todos a pilha
    clear() {
        this.items = []
    }
}
