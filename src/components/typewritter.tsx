import { useState, useEffect } from "react";

type properties = {
    currentTypingSpeed: number,
    typingSpeed: number,
    deletingSpeed: number,
    isDeleting: boolean,
    iteration: number,
    text: string,
    message: string
}

export default function TypeWritter(props: { input:string[], typingSpeed?:number, deletingSpeed?:number }) {
    const [messages, setMessages] = useState<string[] | undefined>(props.input !== null ? props.input : []);
    const [typeProperties, setTypeProperties] = useState<properties | undefined>({
        currentTypingSpeed: props.typingSpeed !== null ? props.typingSpeed : 120,
        typingSpeed: props.typingSpeed !== null ? props.typingSpeed : 120,
        deletingSpeed: props.deletingSpeed !== null ? props.deletingSpeed : 40,
        isDeleting: false,
        iteration: 0,
        text: "",
        message: ""
    })

    function getCurrentText(currentState:properties) {
        return currentState.isDeleting
            ? currentState.message.substring(0, currentState.text.length - 1)
            : currentState.message.substring(0, currentState.text.length + 1);
    }
    
    function getMessage(currentState:properties, data:string[]) {
        return data[currentState.iteration % data.length];
    }
    
    function getTypingSpeed(currentState:properties) {
        return currentState.isDeleting
            ? typeProperties.deletingSpeed
            : typeProperties.typingSpeed;
    }

    useEffect(() => {
        let timer;
        const handleType = () => {
            setTypeProperties(current => ({
                ...current,
                text: getCurrentText(current),
                currentTypingSpeed: getTypingSpeed(current)
            }));
            timer = setTimeout(handleType, typeProperties.currentTypingSpeed);
        };
        handleType();
        return () => clearTimeout(timer);
    }, [typeProperties.isDeleting]);

    useEffect(() => {
        if (!typeProperties.isDeleting && typeProperties.text === typeProperties.message) {
            setTimeout(() => {
                setTypeProperties(current => ({
                    ...current,
                    isDeleting: true
                }));
            }, 500);
        } else if (typeProperties.isDeleting && typeProperties.text === "") {
            setTypeProperties(current => ({
                ...current,
                isDeleting: false,
                iteration: current.iteration + 1,
                message: getMessage(current, messages)
            }));
        }
    }, [typeProperties.text, typeProperties.message, typeProperties.isDeleting, messages]);

    return(
        <span>{typeProperties.text}</span>
    );
}