
  //Parameters
  let activeElement = 0;
  const timeChange = 4000;
  
  const bigImageSource = document.querySelector('.slideshowPhoto');
  
  // const bigImages = document.querySelectorAll(".big").getAttribute("href");
  const bigImages = ['photos/1.jpeg', 'photos/2.jpeg', 'photos/3.jpeg', 'photos/4.jpeg', 'photos/5.jpeg', 'photos/6.jpeg', 'photos/7.jpg', 'photos/8.jpeg', 'photos/9.jpeg', 'photos/10.jpeg', 'photos/11.jpeg', 'photos/12.jpg', 'photos/13.jpg', 'photos/14.jpg', 'photos/15.jpg', 'photos/16.jpg', 'photos/17.jpg', 'photos/18.jpg', 'photos/19.jpg', 'photos/20.jpg', 'photos/21.jpg', 'photos/22.jpg', 'photos/23.jpeg', 'photos/24.jpg', 'photos/25.jpg'];
  
  function changeElement() {
   activeElement++;
   if (activeElement == bigImages.length) {
    activeElement = 0;
   }
   bigImageSource.src = bigImages[activeElement];
  }

  setInterval(changeElement, timeChange);
 