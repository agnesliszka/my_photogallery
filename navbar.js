const menu = document.getElementById("navbar");
menu.innerHTML = `
<div class="menu_outside">
<div class="menu">
<span class="menu_inside"><a href="index.html"><i class="fas fa-home"></i><span class="site_title">HOME</span></a></span>
<span class="menu_inside"><a href="info.html"><i class="fas fa-info-circle"></i><span class="site_title">INFO</span></a></span>
<span class="menu_inside"><a href="slideshow.html"><i class="fas fa-video"></i><span class="site_title">SLIDESHOW</span></a></span>
<span class="menu_inside"><a href="favourites.html"><i class="fas fa-heart"></i><span class="site_title">FAVOURITES</span></a></span>
</div>
</div>
`;
