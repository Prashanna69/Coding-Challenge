const display = document.getElementById( 'answer' );
const form = document.getElementById( 'form' );


function toCamelCase (input)
{
    return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

if ( form )
{
    form.addEventListener( 'submit', ( e ) =>
    {
        e.preventDefault()
        const input = document.getElementById( 'input' ).value;
        display.innerHTML = toCamelCase( input );
        document.getElementById( 'input' ).value = '';
    })
}