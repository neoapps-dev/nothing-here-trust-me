# Showing a Window

This guide shows you how to make and show a window in **MrServer** using the `createWindow` function. This function is already part of **MrServer**'s official client, so you don’t need to add anything extra. It helps you add windows that you can move, resize, and interact with, making your app easier to use and organize.

## How It Works

The `createWindow` function is simple and takes up to four things:

```javascript
createWindow(title, content, width = 400, height = 300);
```

## Parameters

- `title` *(string)*: The name of the window. It shows up at the top of the window so you know what it is.
- `content` *(string)*: The stuff inside the window, like text, pictures, buttons, or anything made with HTML.
- `width` *(number)* *(optional)*: How wide the window is in pixels. It’s `400` by default, but you can change it.
- `height` *(number)* *(optional)*: How tall the window is in pixels. The default is `300`, but you can adjust it.

## Example

Here’s how to use the `createWindow` function to make a window:

```javascript
createWindow('My App', '<p>Welcome to my app!</p><button>Click Me!</button>', 500, 400);
```

In this example, a window called **My App** appears with a welcome message and a button. You can add more HTML and/or CSS to make it more fun and interactive.

This function makes it super easy to create different windows with unique content and sizes. Whether you want simple pop-ups, forms, or info displays, `createWindow` helps you do it fast and easy.

## Another Example

Here's a simple app with CSS:

```javascript
createWindow('My App', `
<style>
.my-app {
font-family: Arial, sans-serif;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
}
</style>
<div class="my-app">
<p>Welcome to my app!</p>
<button style="background-color: #4CAF50; color: #fff; border: none; padding: 10px 20px; font-size: 16px; cursor: pointer;">Click Me!</button>
</div>`);
```
