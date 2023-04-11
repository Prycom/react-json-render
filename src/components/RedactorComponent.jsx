import Component from "./Component";

const testProps = {
    'formName': 'Карточка сотрудника',
    'innerComponents': [
        {
            'componentName': 'ColListComponent',
            'props': {
                'innerComponents': [
                    {
                        'componentName': 'RowListComponent',
                        'props': {
                            'innerComponents': [
                                {
                                    'componentName': 'InputComponent',
                                    'props': {
                                        'labelText': 'Имя',
                                        'placeholder': 'Имя'
                                    }
                                },
                                {
                                    'componentName': 'InputComponent',
                                    'props': {
                                        'labelText': 'Фамилия',
                                        'placeholder': 'Фамилия'
                                    }
                                },
                                {
                                    'componentName': 'InputComponent',
                                    'props': {
                                        'labelText': 'Отчество',
                                        'placeholder': 'Отчество'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        'componentName': 'RowListComponent',
                        'props': {
                            'innerComponents': [
                                {
                                    'componentName': 'SelectComponent',
                                    'props': {
                                        'options': ['Ну пока я не сделал мультиселект'],
                                        'labelText': 'Multiselect'
                                    }
                                },
                                {
                                    'componentName': 'SelectComponent',
                                    'props': {
                                        'urlToData': 'http://localhost:5000/select',
                                        'labelText': 'Выберите пол'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        'componentName': 'RowListComponent',
                        'props': {
                            'innerComponents': [
                                {
                                    'componentName': 'TextAreaComponent',
                                    'props': {
                                        'labelText': 'Характеристика сотрудника',
                                        'placeholder': 'Описание'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        'componentName': 'RowListComponent',
                        'props': {
                            'innerComponents': [
                                {
                                    'componentName': 'ButtonComponent',
                                    'props': {
                                        'buttonText': 'Отправить'
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
}

function RedactorComponent() {
    return (  
        <div className="flex flex-row h-screen w-screen bg-gray-300">
            <div className="componentsLibrary w-1/4 bg-gray-100">
                <h1>Библиотека компонентов</h1>
            </div>
            <div className="templateRedactor flex flex-col justify-around items-center w-1/2 bg-gray-200 px-4 py-4">
                <Component componentName={'SberForm'} props={testProps} />
            </div>
            <div className="templateProps flex flex-col w-1/4 bg-gray-100">
                <div className="elementProps h-1/2 bg-slate-300">
                    <h1>Свойства элемента</h1>
                </div>
                <div className="layoutScheme h-1/2 bg-slate-400">
                    <h1>Схема формы</h1>
                </div>
            </div>
        </div>
    );
}

export default RedactorComponent;