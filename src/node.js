// Ensure the payload is an array of 16 elements
if (!Array.isArray(msg.payload) || msg.payload.length !== 16) {
    node.error("Payload is not a list of 16 elements");
    return null;
}

// Create an array of messages for each output
let outputs = msg.payload.map((element, index) => {
    let dividedValue = element / 10;
    return { payload: dividedValue, topic: element_${index + 1} };
});

// Return the messages to each output
return outputs;
