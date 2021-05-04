export const eventBusService = { on, emit, setNoteTxt }

function on(eventName, listener) {
    const callListener = ({ detail }) => {
        listener(detail)
    }

    window.addEventListener(eventName, callListener)

    return () => {
        window.removeEventListener(eventName, callListener)
    }
}

function emit(eventName, data) {
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }))
}
