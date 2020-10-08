export const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]



export const stringToFormData = stringData => {

    const arrayData = stringData.split(" ");
    
    let formData = []
    arrayData.forEach(element => {
        formData = [...formData, { value: element, label: element }]
    });
    return formData
}

export const formDataToString = formData => {

    let cleanArrayData = []
    formData.forEach(element => {

        cleanArrayData = [...cleanArrayData, element.value]

        const res = cleanArrayData.join(' ')

    })
    return cleanArrayData.join(' ')
}