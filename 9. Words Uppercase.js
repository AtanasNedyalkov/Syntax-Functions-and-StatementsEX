function text (inputText)
{
    let formattedText =  inputText.match(/\w+/g).join(", ").toUpperCase();
    console.log(formattedText)
}
text('Hi, how are you?')