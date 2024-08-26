let address = location.href.split('?')[1]
if (Boolean(address) === false) {
  address = prompt('Enter the email address here!')
}
if (parent.location.href === location.href) {
  location.href = 'mailto:' + address
}
else {
  open('mailto:' + address)
  history.go(-1)
}