window.onload = () => {
  let searchIcon = document.getElementsByClassName('searchicon')[0];
  console.log(searchIcon);
  const popup = () => {
    alert('hello');
  }
  
  let feed = document.getElementsByClassName('midContainer')[0];
  
  for (let i = 0; i < 15; i += 1) {
    let newDiv = document.createElement('div');
    newDiv.style.fontSize = '20px';
    newDiv.style.backgroundColor = 'white';
    newDiv.style.width = '100%';
    newDiv.style.height = '150px';
    newDiv.style.borderColor = 'black';
    newDiv.style.borderRadius = '5px';
    newDiv.style.margin = '5px';
    newDiv.innerText = `Social Media Post #${i + 1}`;
    feed.appendChild(newDiv);
  }
  
  searchIcon.onclick = popup;
  
  $(window).scroll(() => {
    $('.leftContainer').css({
      'margin-top': $(window).scrollTop() + 'px'
    });
  });
  $(window).scroll(() => {
    $('.rightContainer').css({
      'margin-top': $(window).scrollTop() + 'px'
    });
  });
}

