# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Desktop:

![Desktop initial state](/design/solution-screenshots/desktop-initial-state.png)

Mobile: 

![Mobile initial state](/design/solution-screenshots/mobile-initial-state.png)

### Links

- [Solution URL](https://github.com/ianwilk20/temp)
- [Live Site URL](https://temp.netlify.app/design/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [Tailwind](https://tailwindcss.com/docs) - For styles

### What I learned

I learned about event bubbling and delegation: 

- Originally I created the following event listener so that whenever an event was propogated to the ```<li>``` or came from the ```<li>```, it would fire:

  ```js
  document.querySelectorAll('li').forEach(function (item) {
      item.addEventListener('click', function (event) {
          toggleNotification(event.currentTarget)
      })
  })
  ```

- Instead of adding an event listener on every single list item, we can use event delegation. Since I learned that events bubble up, we can add an event listener on a parent element. In this case, I added an event listener to the ```<ul></ul>``` and each time some child of it was clicked it would propogate up to the ```<ul>``` and be caught by event listener. Specifically, I also wanted that anywhere the user clicked in the list item, the ```<p>``` tags, ```<img>``` tags, whatever child element, that it would toggle the notification. The way I did this was iterate up from the element that was clicked on until it found a parent that was of tag type ```<li>```. Here is the final code:

  ```js
  const notificationList =
      document.getElementById('notification-list')

  notificationList.addEventListener('click', function (e) {
      let targetElem = event.target
      while (targetElem && targetElem.tagName !== 'LI') {
          targetElem = targetElem.parentElement
      }
      if (targetElem) {
          toggleNotification(targetElem)
      }
  })
  ```

In my reading, I found that only the most trivial of scripts are put into HTML; more complex scripts need their own files. So, I put the JS code into a separate file, index.js, and attatched the script to the HTML using the script tag's src attribute. Additionally, I learned that the benefit of putting your JS in a seperate file is that the browser will download the JS and cache it. As a result, other pages of your site can use the same script living in the cache rather than downloading it. In essence, the script is only downloaded once.

### Continued development

As I mentioned in my previous challenge, I will continue to learn Tailwind as I'm finding it handy. I'd also be interested in adding TypeScript into my next challenge because I've heard it's important to learn and type safety can help minimize bugs in applications.

### Useful resources

- [Script tags and loading js](https://javascript.info/hello-world) - This is an amazing website that I've been using to learn JavaScript.

## Author

- GitHub - [ianwilk20](https://github.com/ianwilk20)
