function requestValidator(args) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if (!(args.method && methods.includes(args.method))) {
        throw new Error('Invalid request header: Invalid Method')
    }
    const regexUri = /^[\w.]+$/;
    if (!(args.uri && (args.uri == '*' || regexUri.test(args.uri)))) {
        throw new Error('Invalid request header: Invalid URI')
    }
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    if (!(args.version && versions.includes(args.version))) {
        throw new Error('Invalid request header: Invalid Version')
    }
    const specialCharacters = /^[^<>\\&'"]*$/;
    if (!(args.hasOwnProperty('message') && (args.message == '' || specialCharacters.test(args.message)))) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return args;
}
console.log(requestValidator({
    method: 'POST',
    uri: 'test.test.com',
    version: 'HTTP/1.1',
    message: ''
}))