<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./design/dark-banner.jpg">
  <source media="(prefers-color-scheme: light)" srcset="./design/light-banner.jpg">
  <img alt="It's done. Pricing component with toggle. Challenge by Frontend Mentor. Coded by Vanza Setia" src="./design/light-banner">
</picture>

# Pricing Component with Toggle

I did this challenge to practice applying progressive enhancement by:

- Making sure the site is still working with:
  - HTML
  - HTML and CSS
  - HTML and JavaScript
- Making sure the site should be working with HTML, CSS, and JavaScript

Also, I wanted to practice using React. So, I thought it would be better if I had done the challenge with the technologies that I usually first. Then, I will be able to focus on the React instead of thinking about everything from scratch.

## The challenge

My challenge is to build out this pricing component and get it looking as close to the design as possible.

My users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- View both prices without JavaScript
- **Bonus**: Complete the challenge with just HTML and CSS

## Explore this project

- [Pricing Component with Toggle | Frontend Mentor Challenge](https://sitepricingcomponent.netlify.app/)
- [HTML and CSS only Pricing Component with Toggle | Frontend Mentor Bonus Challenge](https://sitepricingcomponent.netlify.app/bonus)
- [Frontend Mentor solution page]()
- [Documentation](./docs/README.md)

## Screenshots

![Screenshot of my site on the desktop](./screenshots/desktop.jpg)

## Built with

- HTML
- [BEM (Block, Element, Modifier)](https://sparkbox.com/foundry/bem_by_example)
- [Sass](https://sass-lang.com/)
- JavaScript
- CSS Flexbox
- Progressive enhancement in mind
- Mobile-first workflow
- [scriptex/hover-media-query](https://github.com/scriptex/hover-media-query) - a progressively enhanced "hover" media query.

## What I learned

I learned quite a lot of things when building this project. I did not expect I would learn this much from a simple project.

## Progressively enhance the website

I tried to build the website progressively. It means the CSS and the JavaScript is only for enhancing the experience. Without those things, the site will still be able to function. In short, the site will still make sense with just HTML.

Here are the four conditions that I tried to achieve:

| No  | Is the HTML available? | Is the CSS available? | Is the JavaScript available? | Does the website can be understood? |
| --- | ---------------------- | --------------------- | ---------------------------- | ----------------------------------- |
| 1   | Yes                    | No                    | No                           | Yes                                 |
| 2   | Yes                    | Yes                   | No                           | Yes                                 |
| 3   | Yes                    | Yes                   | Yes                          | Yes                                 |
| 4   | Yes                    | No                    | Yes                          | Yes                                 |                             |

<!-- TODO: Check the tenses -->
For sure, the site will not work without the HTML. But, as long as the HTML available, I wanted the site still work and the content makes sense.

| Technologies              | The users will be able to                                                                |
|---------------------------|------------------------------------------------------------------------------------------|
| HTML                      | Understand the content                                                                   |
| HTML and CSS              | See good user interface and understand the content                                       |
| HTML, CSS, and JavaScript | See good user interface and get a toggle button to see the different types of the prices |
| HTML and JavaScript       | See radio buttons to toggle the view between the two different types of the prices       |

I used the "Web Developer" extension to disable or enable the JavaScript and CSS to see how the will look like when one of them is not available.

[Web Developer - Chrome Web Store](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)

## Toggle pricing

The toggle component was tricky to create. I created two versions of it. One when the toggle functionality should work with JavaScript. The other version is when the toggle functionality works without JavaScript—the bonus challenge.

### Toggle pricing with JavaScript

I got the inspiration for the markup and the some of the styling from the CodePen of the Sara Soueidan.

The Pen — [Accessible Option(/Toggle) Switch](https://codepen.io/SaraSoueidan/pen/jpBbrq/)

The article — [On Designing and Building Toggle Switches](https://www.sarasoueidan.com/blog/toggle-switch-design/)

I created a pen for my first experiment for creating the toggle component.

See the Pen — [Toggle Component](https://codepen.io/vanzasetia/pen/BaOwJjd)

Then, I started creating the toggle component for this challenge.

I use radio buttons for the toggle component.

Now, I can not remember the whole process of how I created that for this challenge. But, most of them are copy-pasting from the Pen except for the sizes and other specific styling. I needed to adjust it to make it looks closer to the original design.

The caveat from this is that the toggle might not—fully—work as expected. As a user I am expecting that I can click anywhere between the toggle component to toggle the price. But, now it only works if I:

- Click the labels
- Click where the circle does not belong to
- Using arrow keys—up and bottom. Left and right

### Toggle pricing without JavaScript

<!-- TODO: the styling is also tricky. Tell the process of how I get the markup -->

I used my implementation of the toggle component to create the toggle component without JavaScript. But, for this situation I made it with checkbox input.

Also, the HTML markup is much simpler than the toggle component with JavaScript. But, the accessibility of it is questionable.

First, it is a checkbox input. Users that use screen readers may get confused with the checkbox.

Second, the label of the input is "annually". Users can get confused for toggling the checkbox because it does not clear what does it does.

### The difference between them

## Useful resources

## About me

At Frontend Mentor, I have completed over 30 projects and written over 1500 code reviews. I am also one of the top 10 developers on the All Time Wall of Fame.

## Acknowledgements

## License

[MIT](./LICENSE)
