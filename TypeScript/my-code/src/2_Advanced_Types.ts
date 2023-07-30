// 1. type aliases

    // type Employee = {

    //     readonly id: number,
    //     name: string,
    //     retire: (date: Date) => void
    // }

    // let employee: Employee = {
    //     id: 1,
    //     name: 'Mosh',
    //     retire: (date: Date) => {
    //         console.log(date)
    //     }
    // }

// 2. union type

    // function kgToLbs(weight: number | string) {
    //     //narrowing
    //     if (typeof weight === 'number')
    //         return weight * 2.2;
    //     else
    //         return parseInt(weight) * 2.2
    // }

    // kgToLbs(100)
    // kgToLbs('10kg')

// 3. intersection

    // type Draggable = {
    //     drag: () => void
    // }

    // type Resizable = {
    //     resize: () => void
    // }

    // type UIWidget = Draggable & Resizable;

    // let textBox: UIWidget = {
    //     drag: () => {},
    //     resize: () => {}
    // }

// 4. Literal Types

    // type  Quantity = 50 | 100;

    // let quantity: Quantity = 100;

    // type Metric = 'cm' | 'inch'

// 5.  Nullable Types

    // function greet(name: string | null | undefined){
    //     if (name)
    //         console.log(name.toUpperCase())
    //     else
    //         console.log('Hola!')    
    // }

    // greet(null)

// 5.  Nullable Types    