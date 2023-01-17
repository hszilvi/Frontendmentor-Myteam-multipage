# Frontend Mentor - myteam website solution

This is a solution to the [myteam website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/myteam-multipage-website-mxlEauvW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

![](./images/Screenshot-desktop.png)
![](./images/Screenshot-mobile-contact.png)
![](./images/Screenshot-mobile.png)

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/myteam-multipage-website-uLTyXFq_Z_)
- Live Site URL: (https://jade-otter-3845fb.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:


```js
// manipulate card content on about site
cardOpenBtn.forEach((item) => {
    item.addEventListener('click', () => {
if (!item.classList.contains('active')) {
    item.previousElementSibling.style.display = 'block';
    item.previousElementSibling.previousElementSibling.style.display = 'none';
} else {
    item.previousElementSibling.style.display = 'none';
    item.previousElementSibling.previousElementSibling.style.display = 'block';  
}
        // turn the + button to x
        item.classList.toggle('active');
    });
});
```

### Continued development

I want to focusing learning more JS and structure html tags better. 


## Author

- Frontend Mentor - [@hszilvi](https://www.frontendmentor.io/profile/hszilvi)
