const urlAPi = 'https://jsonplaceholder.typicode.com/comments?_limit=10_page=1';

emails = []

const getEmails = async () => {
  const response = await fetch(urlAPi)
  
  response.json()
    .then(values => {
      values.map(items => emails.push(items.email))
    });
}

getEmails();
console.log(emails)