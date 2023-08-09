const createAbout = () => {
  const aboutContent = document.createElement("div");
  aboutContent.className = "about-page";

  const header = document.createElement("h1");
  header.textContent = "About Us";

  const aboutParagraph = document.createElement("p");
  aboutParagraph.className = "about-paragraph";
  aboutParagraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. 
    Neque gravida in fermentum et sollicitudin ac orci. Sodales ut etiam sit amet nisl purus in mollis. Nunc id cursus 
    metus aliquam eleifend mi in nulla. In egestas erat imperdiet sed euismod. Netus et malesuada fames ac. Ante in nibh 
    mauris cursus. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Nunc mi ipsum faucibus vitae. Sed id 
    semper risus in hendrerit gravida rutrum. Donec enim diam vulputate ut pharetra sit amet aliquam. Pharetra vel turpis 
    nunc eget lorem dolor sed viverra ipsum. Ultricies mi eget mauris pharetra. Viverra maecenas accumsan lacus vel facilisis 
    volutpat est. Felis donec et odio pellentesque diam volutpat commodo. Neque aliquam vestibulum morbi blandit. Integer 
    feugiat scelerisque varius morbi. Ultrices neque ornare aenean euismod.`;

  aboutContent.appendChild(header);
  aboutContent.appendChild(aboutParagraph);
  return aboutContent;
};

export default createAbout;
