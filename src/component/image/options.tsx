/* eslint-disable @typescript-eslint/no-unused-vars */
export const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]



export const stringToFormData = (stringData: string) => {

    const arrayData = stringData.split(" ");

    let formData: any[] = []
    arrayData.forEach(element => {
        formData = [...formData, { value: element, label: element }]
    });
    return formData
    
}

export const formDataToString = (formData: any[]) => {

    let cleanArrayData: any[] = []
    formData.forEach((element: { value: any; }) => {

        cleanArrayData = [...cleanArrayData, element.value]


    })
    return cleanArrayData.join(' ')
}