function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Evgeny User";

document.body.innerHTML = greeter(user);