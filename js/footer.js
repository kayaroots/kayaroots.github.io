
function footer () {
  const codingLenguages = ['HTML','CSS', 'JavaScript'];
  

  let foot = document.querySelector('.copyright');
  let result = codingLenguages.join(', ').replace(/, ([^,]*)$/, ' and $1'); // Concatenated and add "and" in the last word.
  foot.innerHTML = `This website has been created with: ${result}.`; //Adding the text in the HTML tag.

}

footer();
